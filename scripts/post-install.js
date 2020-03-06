/* eslint-disable max-len */
const emoji = require('node-emoji');

const env = process.env;
const ADBLOCK = is(env.ADBLOCK);
const CI = is(env.CI);
const COLOR = is(env.npm_config_color);
const DISABLE_OPENCOLLECTIVE = is(env.DISABLE_OPENCOLLECTIVE);
const SILENT = !!~['silent', 'error', 'warn'].indexOf(env.npm_config_loglevel);

function is(it) {
  return !!it && it !== '0' && it !== 'false';
}

function log(it) {
  // eslint-disable-next-line no-console,no-control-regex
  console.log(COLOR ? it : it.replace(/\u001B\[\d+m/g, ''));
}

if (!ADBLOCK && !CI && !DISABLE_OPENCOLLECTIVE && !SILENT) {
  log(
    '\u001B[96mThank you for using K-VIEW (\u001B[94m https://github.com/SoldierAb/k-view\u001B[96m)!\u001B[0m\n',
  );
  log(
    '\u001B[96mFor china, 更多赞助方式(支付宝、微信)请查看如下链接: ' +
      emoji.get('pray') +
      '\u001B[0m',
  );
  log('\u001B[96m>\u001B[94m https://github.com/SoldierAb/Front-end-Engineering \u001B[0m\n');
}
