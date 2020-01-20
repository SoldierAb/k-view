const plugins = [
  [
    "kimport",
    {
      "libraryName": "element-ui",
      "camel2DashComponentName":true,
      "customName":(name)=>{
        return `element-ui/lib/${name}.js`
      },
      "customStyleName":(name)=>{
        return `element-ui/lib/theme-chalk/${name}.css`
      }
    }
  ]
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
