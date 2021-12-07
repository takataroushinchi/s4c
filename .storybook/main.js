// const path = require('path')

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  webpackFinal: config => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      // src/components ディレクトリ以下の、 .vue ファイルと同じ階層に .stories.js ファイルを配置するため、相対パスで上記のように宣言
      // include: path.resolve(__dirname, '../')
    })
    return config
  },
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/vue3"
}