const mdContainer = require('markdown-it-container');

module.exports = md => {
  md.use(mdContainer, 'kview', {
    validate(params) {
      return params.trim().match(/^kview\s*(.*)$/);
    },
    render(tokens, idx) {
      if (tokens[idx].nesting === 1) {
        const content = tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : '';
        return `<demo-box>
        <!--kview-demo:${content}:kview-demo-->
        `;
      }
      return '</demo-box>';
    }
  });

};
