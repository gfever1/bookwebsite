module.exports = {
    // cli3 代理是从指定的target后面开始匹配的，不是任意位置；配置pathRewrite可以做替换
    lintOnSave: false,

    devServer: {
        overlay:{
            warning: false,
            errors:false
        },

        proxy: {
            '/api': {
                target: 'http://bookwebsite.gz2vip.91tunnel.com/bookwebsite_war_exploded/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }

    }
}