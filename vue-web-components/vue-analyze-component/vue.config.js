module.exports = {
    chainWebpack: config => {
        config.module
            .rule('vue')
            .use('vue-svg-inline-loader')
            .loader('vue-svg-inline-loader') // in your project
            .options({ /* ... */ })
        config.module
            .rule('md')
            .test(/\.md/)
            .use('text-loader')
            .loader('text-loader')
	  
    },
    devServer: {
        disableHostCheck: true
    }
}
