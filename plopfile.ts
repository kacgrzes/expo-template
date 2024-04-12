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
        path: "components/{{name}}.tsx",
        templateFile: "templates/Component.ts.hbs",
      },
    ],
  });
}
