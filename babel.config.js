const plugins = [
  [
    "component",
    {
      "libraryName": "element-ui",
      "styleLibraryName": "theme-chalk"
    }
  ],
  "@babel/plugin-syntax-dynamic-import"
];

if (process.env.NODE_ENV === 'production') plugins.push("babel-plugin-transform-remove-console");

module.exports = {
  presets: [
    ["@babel/preset-env", {
      "loose": true,
      "modules": false,
      "useBuiltIns": "usage",
      "corejs":2,
      "targets": {
        "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
      }
    }]
  ],
  env: {
    test: {
      presets: [
        ["@babel/preset-env", { "targets": { "node": "current" } }]
      ]
    }
  },
  plugins
}
