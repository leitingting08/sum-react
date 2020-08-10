const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Biomart Pc',
    description: '基于 React 的业务组件库',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/Users/leitingting/works/components/biomart_pc/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Biomart Pc',
        description: '基于 React 的业务组件库',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/leitingting/works/components/biomart_pc',
          templates:
            '/Users/leitingting/works/components/biomart_pc/node_modules/docz-core/dist/templates',
          docz: '/Users/leitingting/works/components/biomart_pc/.docz',
          cache: '/Users/leitingting/works/components/biomart_pc/.docz/.cache',
          app: '/Users/leitingting/works/components/biomart_pc/.docz/app',
          appPackageJson:
            '/Users/leitingting/works/components/biomart_pc/package.json',
          appTsConfig:
            '/Users/leitingting/works/components/biomart_pc/tsconfig.json',
          gatsbyConfig:
            '/Users/leitingting/works/components/biomart_pc/gatsby-config.js',
          gatsbyBrowser:
            '/Users/leitingting/works/components/biomart_pc/gatsby-browser.js',
          gatsbyNode:
            '/Users/leitingting/works/components/biomart_pc/gatsby-node.js',
          gatsbySSR:
            '/Users/leitingting/works/components/biomart_pc/gatsby-ssr.js',
          importsJs:
            '/Users/leitingting/works/components/biomart_pc/.docz/app/imports.js',
          rootJs:
            '/Users/leitingting/works/components/biomart_pc/.docz/app/root.jsx',
          indexJs:
            '/Users/leitingting/works/components/biomart_pc/.docz/app/index.jsx',
          indexHtml:
            '/Users/leitingting/works/components/biomart_pc/.docz/app/index.html',
          db:
            '/Users/leitingting/works/components/biomart_pc/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
