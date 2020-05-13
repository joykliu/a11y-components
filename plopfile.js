module.exports = (plop) => {
  plop.setHelper("upperCase", (txt) => txt.toUpperCase())

  plop.setGenerator("component", {
    description: "Create a reusable component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
      },
      {
        type: "list",
        name: "type",
        message: "What kind of component?",
        choices: ["Uncategorized", "Atoms", "Molecules", "Organisms"],
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/index.tsx",
        templateFile: "plop-templates/Component/index.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/index.stories.tsx",
        templateFile: "plop-templates/Component/index.stories.tsx.hbs",
        data: { folder: "components" },
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/index.module.css",
        templateFile: "plop-templates/Component/index.module.css.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/readme.md",
        templateFile: "plop-templates/Component/readme.md.hbs",
      },
    ],
  })

  plop.setGenerator("template", {
    description: "Create a template component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your page name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/templates/{{pascalCase name}}/index.tsx",
        templateFile: "plop-templates/Component/index.js.hbs",
      },
      {
        type: "add",
        path: "src/templates/{{pascalCase name}}/index.stories.tsx",
        templateFile: "plop-templates/Component/index.stories.js.hbs",
        data: { type: "Templates", folder: "templates" },
      },
      {
        type: "add",
        path: "src/templates/{{pascalCase name}}/index.module.css",
        templateFile: "plop-templates/Component/index.module.css.hbs",
      },
      {
        type: "add",
        path: "src/templates/{{pascalCase name}}/readme.md",
        templateFile: "plop-templates/Component/readme.md.hbs",
      },
    ],
  })
}
