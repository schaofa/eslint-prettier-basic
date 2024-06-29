# vue2-template-rules

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### eslint + prettier 基础版配置

```
package.json文件中配置如下依赖：
  "devDependencies": {
    "eslint": "^7.32.0",
    "eslint-plugin-prettier": "^3.3.1",
    "eslint-plugin-vue": "^9.26.0",
    "@vue/cli-plugin-eslint": "~5.0.0",
    "@vue/eslint-config-prettier": "^6.0.0",
    "babel-eslint": "^10.1.0"
  },

.eslintrc.js文件配置如下：
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    "plugin:vue/recommended", // 使用Vue官方推荐的ESLint配置
    "eslint:recommended", // 使用ESLint推荐的默认规则
    "plugin:vue/essential",
    "@vue/prettier" // 使用Vue和Prettier兼容的配置
  ],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    // 其他规则配置
    // 多词组件名称规则 warn  error  off
    "vue/multi-word-component-names": "error",

    // 在生产环境中对 console 和 debugger 语句发出警告，而在开发环境中则不对其进行限制
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  }
}

.prettierrc.js文件配置如下：
module.exports = {
  // 缩进字节数
  tabWidth: 2,

  // 行结尾是否使用分号
  semi: false,

  // 使用单引号
  singleQuo: false,

  // 多行使用拖尾逗号（默认none）
  trailingComma: "none",

  // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
  bracketSpacing: true,

  // 只有一个参数的箭头函数的参数是否带圆括号（默认avoid:添加括号）
  // arrowParens: "avoid",

  // 行尾换行符
  endOfLine: "auto"

  // jsxSingleQuote: false, // jsx 不使用单引号，而使用双引号
}

```
