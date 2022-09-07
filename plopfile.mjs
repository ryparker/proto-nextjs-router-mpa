/**
 * Plop is a tool for generating common files.
 * Templates are located at `<root>/templates`
 *
 * @see https://plopjs.com/documentation/
 */
export default function (plop) {
  /* Component */
  plop.setGenerator('component', {
    description: 'Create a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: "What will be the Component's name? i.g. LegislationCard",
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{name}}/{{name}}.tsx',
        templateFile: 'templates/component/base/Component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/{{name}}.stories.tsx',
        templateFile: 'templates/component/base/Component.stories.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/{{name}}.test.tsx',
        templateFile: 'templates/component/base/Component.test.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/index.ts',
        templateFile: 'templates/component/base/index.ts.hbs',
      },
    ],
  });

  /* GraphQL fragment */
  plop.setGenerator('graphql fragment', {
    description: 'Create a new Graphql fragment file',
    prompts: [
      {
        type: 'input',
        name: 'typename',
        message:
          'What typename is the Graphql fragment going to be of? i.g. elected_officials',
      },
      {
        type: 'input',
        name: 'name',
        message:
          "What will be the Graphql fragment's name? i.g. ElectedOfficialFields",
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/graphql/{{name}}.graphql',
        templateFile: 'templates/graphql/base/fragment.graphql.hbs',
      },
    ],
  });

  /* GraphQL query */
  plop.setGenerator('graphql query', {
    description: 'Create a new Graphql query file',
    prompts: [
      {
        type: 'input',
        name: 'typename',
        message:
          'What typename is the Graphql query going to be of? i.g. elected_officials',
      },
      {
        type: 'input',
        name: 'name',
        message:
          "What will be the Graphql query's name? i.g. GetElectedOfficialQuery",
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/graphql/{{name}}.graphql',
        templateFile: 'templates/graphql/base/query.graphql.hbs',
      },
    ],
  });

  /* Hook */
  plop.setGenerator('hook', {
    description: 'Create a new hook file',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: "What will be the hooks's name? i.g. useToggle",
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/hooks/{{name}}.tsx',
        templateFile: 'templates/hook/base/hook.tsx.hbs',
      },
    ],
  });
}
