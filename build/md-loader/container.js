const mdContainer = require('markdown-it-container');

module.exports = md => {
  md.use(mdContainer, 'kview', {
    validate(params) {
      return params.trim().match(/^kview\s*(.*)$/);
    },
    render(tokens, idx) {
      const m = tokens[idx].info.trim().match(/^kview\s*(.*)$/);
      if (tokens[idx].nesting === 1) {
        const description = m && m.length > 1 ? m[1] : '';
        const content = tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : '';
        return `<demo-box>
        ${description ? `<div>${md.render(description)}</div>` : ''}
        <!--kview-demo: ${content}:kview-demo-->
        `;
      }
      return '</demo-box>';
    }
  });

};
