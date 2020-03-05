const { compileTemplate } = require('@vue/component-compiler-utils');
const compiler = require('vue-template-compiler');

const pad = (source) => {
    return source
        .split(/\r?\n/)
        .map(line => `  ${line}`)
        .join('\n')
}

module.exports=(template, script, style) => {
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
    let { code } = compiled;

    script = script.trim();

    if (script) {
        script = script.replace(/export\s+default/, 'const kviewDemoComp =');
    } else {
        script = 'const kviewDemoComp = {}';
    }

    code = `(function() {
      ${code};
      ${script}
      return {
        render,
        staticRenderFns,
        ...kviewDemoComp
      }
    })()`;
    console.log('\n\n', code, '\n\n');
    return code;
}


