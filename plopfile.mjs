export default function (plop) {
  plop.setGenerator("Component", {
    description: "Create a new component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What will be the Component's name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{name}}/{{name}}.tsx",
        templateFile: "templates/component/base/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{name}}/{{name}}.stories.tsx",
        templateFile: "templates/component/base/Component.stories.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{name}}/{{name}}.test.tsx",
        templateFile: "templates/component/base/Component.test.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{name}}/index.ts",
        templateFile: "templates/component/base/index.ts.hbs",
      },
    ],
  });
}
