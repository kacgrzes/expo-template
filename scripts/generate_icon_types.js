#!/usr/bin/env node

// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs')

const prefix = `export type IconNames =
  | `
const json = fs.readFileSync('./assets/icomoon/selection.json')

const types = JSON.parse(json)
  .icons.map((icon) => `'${icon.properties.name}'`)
  .join('\n  | ')
  .concat('\n')

const content = prefix + types

fs.writeFileSync('./src/types/icon.d.ts', content)
