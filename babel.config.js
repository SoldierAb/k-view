const plugins = [
  [
    "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
  ],
];

if (process.env.NODE_ENV === 'production') plugins.push("babel-plugin-transform-remove-console");

module.exports = {
  presets: [
    ["es2015", {
      "modules": false
    }]
  ],
  plugins
}
