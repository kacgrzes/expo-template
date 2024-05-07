// plopfile.ts
import { NodePlopAPI } from "plop";

export default function (plop: NodePlopAPI) {
  // plop generator code
  plop.setWelcomeMessage("Welcome to the plop generator");
  plop.setGenerator("component", {
    description: "all the files related to React UI components",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "component name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "components/{{name}}/index.ts",
        template: 'export * from "./{{pascalCase name}}";',
        skipIfExists: true,
      },
      {
        type: "add",
        path: "components/{{name}}/{{name}}.tsx",
        templateFile: "templates/Component.tsx.hbs",
        skipIfExists: true,
      },
      {
        type: "add",
        path: "components/{{name}}/{{name}}.stories.tsx",
        templateFile: "templates/Component.stories.tsx.hbs",
        skipIfExists: true,
      },
      {
        type: "append",
        unique: true,
        path: "components/index.ts",
        template: 'export * from "./{{name}}";\n',
      },
    ],
  });
}
