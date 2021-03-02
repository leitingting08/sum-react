module.exports = (plop) => {
  plop.setGenerator('component', {
    description: '生成组件',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: '请输入组件名？',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'components/{{name}}/index.less',
        templateFile: 'templates/style.hbs',
      },
      {
        type: 'add',
        path: 'components/{{name}}/index.md',
        templateFile: 'templates/readme.hbs',
      },
      {
        type: 'add',
        path: 'components/{{name}}/index.tsx',
        templateFile: 'templates/index.hbs',
      },
      {
        type: 'append',
        path: 'components/index.js',
        pattern: /(\/\/ -- APPEND ITEMS HERE --)/gi,
        template: "export { default as {{name}} } from './{{name}}' ",
      },
    ],
  });
};
