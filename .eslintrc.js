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
