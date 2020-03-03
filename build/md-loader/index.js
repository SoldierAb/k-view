const { compileTemplate } = require('@vue/component-compiler-utils');
const compiler = require('vue-template-compiler');
const md = require("./md");

const separateTemplate = (str) => {
    res = str.match(/<(template)>([\s\S]+)<\/\1>/);
    return res && res[2] ? res[2].trim() : '';
}

const separateScript = (str) => {
    res = str.match(/<(script)>([\s\S]+)<\/\1>/);
    return res && res[2] ? res[2].trim() : '';
}

const separateStyle = (str) => {
    res = str.match(/<(style)>([\s\S]+)<\/\1>/);
    return res && res[2] ? res[2].trim() : '';
}

const pad = (source) => {
    return source
        .split(/\r?\n/)
        .map(line => `  ${line}`)
        .join('\n')
}

const inlineCompInstance = (template,script) => {
    // https://github.com/vuejs/vue-loader/blob/423b8341ab368c2117931e909e2da9af74503635/lib/loaders/templateLoader.js#L46
    const finalOptions = {
        source: `<div>${template}</div>`,
        filename: 'inline-component', 
        compiler
    };
    const compiled = compileTemplate(finalOptions);
    // tips
    if (compiled.tips && compiled.tips.length) {
        compiled.tips.forEach(tip => {
            console.warn(tip);
        });
    }
    // errors
    if (compiled.errors && compiled.errors.length) {
        console.error(
            `\n  Error compiling template:\n${pad(compiled.source)}\n` +
            compiled.errors.map(e => `  - ${e}`).join('\n') +
            '\n'
        );
    }
    let demoComponentContent = `
    ${compiled.code}
  `;
    // 这里采用了硬编码有待改进
    script = script.trim();
    if (script) {
        script = script.replace(/export\s+default/, 'const democomponentExport =');
    } else {
        script = 'const democomponentExport = {}';
    }
    demoComponentContent = `(function() {
    ${demoComponentContent}
    ${script}
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })()`;
    return demoComponentContent;
}

module.exports = function (source) {

    let output = [];
    let startIndex = 0;
    let compInstances = '';
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
        let demoComponentContent = inlineCompInstance(templateTpl, scriptTpl);
        const demoComponentName = `kview-demo-${id}`;
        output.push(`<template slot="instance"><${demoComponentName} /></template>`);
        
        compInstances += `${JSON.stringify(demoComponentName)}: ${demoComponentContent},`;
    
        // 重新计算下一次的位置
        id++;
        startIndex = compEndIndex + endTagLen;
        compStartIndex = content.indexOf(startTag, startIndex);
        compEndIndex = content.indexOf(endTag, compStartIndex + startTagLen);
    }

    let pageScript = '';
    if (compInstances) {
      pageScript = `<script>
        export default {
          name: 'component-doc',
          components: {
            ${compInstances}
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
    `;
}