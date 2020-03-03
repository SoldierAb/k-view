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
      "modules": false
    }]
  ],
  env: {
    test: {
      presets: [
        ["@babel/preset-env", { "targets": { "node": "current" }}]
      ]
    }
  },
  plugins
}
