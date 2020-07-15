const isProduction = process.env.NODE_ENV === "production";
const plugins = [
  [
    "kimport",
    {
      libraryName: "vizier-ui",
      camel2DashComponentName: true,
    },
    "vizier-ui",
  ],
  ["import", {
    libraryName: "ant-design-vue",
    libraryDirectory: "es",
    style: "css",
  }],
  [
    "component",
    {
      "libraryName": "element-ui",
      "styleLibraryName": "theme-chalk",
    },
  ],
  "@babel/plugin-syntax-dynamic-import",
];

if (isProduction) plugins.push("babel-plugin-transform-remove-console");

module.exports = {
  presets: [
    "@vue/babel-preset-jsx",
    ["@babel/preset-env", {
      "loose": true,
      "modules": false,
      "useBuiltIns": isProduction ? false : "usage",
      "spec": true,
      "corejs": 3,
      "targets": {
        "browsers": ["> 1%", "last 2 versions", "not ie <= 8"],
      },
    }],
  ],
  env: {
    test: {
      presets: [
        "@vue/babel-preset-jsx",
        ["@babel/preset-env", { "targets": { "node": "current" } }]
      ],
    },
  },
  plugins,
};
