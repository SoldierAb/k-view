import zhCN from '../locale/lang/zh-CN'

export default {
    inject: {
        kviewConfig: {
            default() {
                return {
                    locale: zhCN,
                };
            },
        },
    },
}