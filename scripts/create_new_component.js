/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const prompt = require('prompt-sync')()
const selectPrompt = require('select-prompt')

const { execPromise, logger } = require('./utils')

const paths = {
  template: './scripts/templates/component_template.tsx',
  componentsIndex: './src/components/index.ts',
}

const createComponentFile = (name, type) => {
  const newCommonComponentPath = `./src/components/${name}.tsx`
  const newAtomicComponentPath = `./src/components/${type}s/${name}.tsx`
  const componentFromFile = fs.readFileSync(paths.template, 'utf8')
  const componentContent = componentFromFile.replaceAll('_NAME_', name)

  if (type === 'common') {
    fs.writeFileSync(newCommonComponentPath, componentContent)
    return
  }
  fs.writeFileSync(newAtomicComponentPath, componentContent)
}

const addToIndex = (name, type) => {
  const atomicComponentIndexPath = `./src/components/${type}s/index.ts`
  const newExport = `export * from './${name}'
`
  if (type === 'common') {
    const contents = fs.readFileSync(paths.componentsIndex, 'utf8')
    fs.writeFileSync(paths.componentsIndex, contents + newExport)

    return
  }

  const contents = fs.readFileSync(atomicComponentIndexPath, 'utf8')
  fs.writeFileSync(atomicComponentIndexPath, contents + newExport)
}

const generateComponent = async (name, type) => {
  // Generate Component file
  logger.info('Generating component files')
  createComponentFile(name, type)

  // Add Component to index
  addToIndex(name, type)

  // Make sure everything went well
  logger.info('Checking code - lint and typescript')
  await execPromise('yarn eslint src --fix && yarn tsc')

  // Finish
  logger.success(`Component ${name} created successfully`)
}

const generateNewComponent = async () => {
  const componentTypes = [
    { title: 'Atom', value: 'atom' },
    { title: 'Molecule', value: 'molecule' },
    { title: 'Organism', value: 'organism' },
    { title: 'Common', value: 'common' },
  ]

  selectPrompt('Select type for new component', componentTypes, {
    cursor: 0,
  }).on('submit', async (type) => {
    const name = prompt('What is component name? ')
    if (!name) {
      return logger.error('No component name passed')
    }
    // 1. New component -> component_name + component_type (atom | molecule | organism | common)
    await generateComponent(name, type)
  })
}

generateNewComponent()
