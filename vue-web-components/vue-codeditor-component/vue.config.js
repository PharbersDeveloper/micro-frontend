const path = require('path')

module.exports = {
    chainWebpack: (config) => {
        // config.output.filename("[name].[hash:8].js");
        // const types = ["vue-modules", "vue", "normal-modules", "normal"];
        // types.forEach((type) =>
        //     addStyleResource(config.module.rule("scss").oneOf(type))
        // );
        config.module
            .rule("thejs")
            .test(/\.js$/)
            .include.add(path.resolve("src"))
            .add(path.resolve("node_modules/element-ui/packages"))
            .end()
            .use("babel-loader")
            .loader("babel-loader")
            .end();
    },
    devServer: {
        disableHostCheck: true
    }
}


