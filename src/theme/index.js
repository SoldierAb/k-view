const path  = require('path');

const resources = [
    'common.scss',
    'default.scss'
]

export default resources.map(file=>path.resolve(__dirname,file));