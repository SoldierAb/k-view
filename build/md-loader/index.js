
const md = require("./md");
const getInlineCompInstance = require('./get-inline-comp');

const separateTemplate = (str) => {
  str=str.trim();
  if(!str) return str;
  res = str.match(/<(template)>([\s\S]+)<\/\1>/);
  return res && res[2] ? res[2].trim() : '';
}

const separateStyle = (str) => {
  res = str.match(/<(style)>([\s\S]+)<\/\1>/);
  return res && res[2] ? res[2].trim() : '';
}

const separateScript = (str) => {
  res = str.match(/<(script)>([\s\S]+)<\/\1>/);
  return res && res[2] ? res[2].trim() : '';
}


module.exports = function (source) {

  let output = [];
  let startIndex = 0;
  let compInstancesString = '';
  let compStylesString = '';
  
  let id = 0; // demo 的 id
  const content = md.render(source);
  const startTag = '<!--kview-demo:';
  const endTag = ':kview-demo-->';
  const startTagLen = startTag.length;
  const endTagLen = endTag.length;


  let compStartIndex = content.indexOf(startTag),
    compEndIndex = content.indexOf(endTag, compStartIndex + startTagLen);

  //md文件解析   
  while (compStartIndex !== -1 && compEndIndex !== -1) { //存在kview组件模板
    output.push(content.slice(startIndex, compStartIndex)); //组件前的字符串
    const compTpl = content.slice(compStartIndex + startTagLen, compEndIndex);
    const templateTpl = separateTemplate(compTpl);
    const scriptTpl = separateScript(compTpl);
    const styleTpl = separateStyle(compTpl);
    let code = getInlineCompInstance(templateTpl, scriptTpl,styleTpl);
    const demoComponentName = `kview-demo-${id}`;
    output.push(`<template slot="instance"><${demoComponentName} /></template>`);

    compInstancesString += `${JSON.stringify(demoComponentName)}: ${code},`;
    compStylesString+=styleTpl;
    // 重新计算下一次的位置
    id++;
    startIndex = compEndIndex + endTagLen;
    compStartIndex = content.indexOf(startTag, startIndex);
    compEndIndex = content.indexOf(endTag, compStartIndex + startTagLen);
  }

  let pageScript = '';
  if (compInstancesString) {
    pageScript = `<script>
        export default {
          name: 'component-kview',
          components: {
            ${compInstancesString}
          }
        }
      </script>`;
  } else if (content.indexOf('<script>') === 0) { // 硬编码，有待改善
    startIndex = content.indexOf('</script>') + '</script>'.length;
    pageScript = content.slice(0, startIndex);
  }

  output.push(content.slice(startIndex));
  return `
      <template>
        <div class="content">
          ${output.join('')}
        </div>
      </template>
      ${pageScript}
      <style>
        ${compStylesString}
      </style>
    `;
}