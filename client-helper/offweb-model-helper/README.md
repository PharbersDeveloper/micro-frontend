# Init Webpack

```shell script
npm install webpack webpack-cli --save-dev
```

# 创建目录结构

```shell script
 webpack
  |- package.json
+ |- index.html
+ |- /src
+   |- index.js
```

# 创建配置项

```shell script
  webpack
  |- package.json
+ |- webpack.config.js
  |- /dist
    |- index.html
  |- /src
    |- index.js

```

```shell script
npx webpack --config webpack.config.js
```
