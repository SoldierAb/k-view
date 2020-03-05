const mdChainConfig = require("markdown-it-chain");
const container = require("./container");
const config = new mdChainConfig();

config.options.html(true).end()
    .plugin('containers').use(container).end()


//fence 解析覆盖
const fenceWrite = md => {
    const defaultRender = md.renderer.rules.fence;
    md.renderer.rules.fence = (tokens, idx, options, env, self) => {
        const token = tokens[idx];
        const prevToken = tokens[idx - 1];
        const isInDemoBox = prevToken && prevToken.nesting === 1 && prevToken.info.trim().match(/^kview\s*(.*)$/);
        if (token.info === 'html' && isInDemoBox) {
            return `<template slot="code-box"><pre class="hljs"><code class="pre-code html">${md.utils.escapeHtml(token.content)}</code></pre></template>`;
        }
        return defaultRender(tokens, idx, options, env, self);
    };
}

const md = config.toMd();
fenceWrite(md);

module.exports = md;