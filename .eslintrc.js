module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  // "off" -> 0 关闭规则
  // "warn" -> 1 开启警告规则
  // "error" -> 2 开启错误规则
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    indent: [
      'error',
      2,
      {
        SwitchCase: 1, // case 子句将相对于 switch 语句缩进 2 个空格。
      },
    ],
    'arrow-spacing': [2, { before: true, after: true }], // error; 箭头函数的箭头前后必须有空格
    'quotes': ['error', 'single', { allowTemplateLiterals: true }], // 使用单引号代替双引号 | 允许字符串使用``
    'quote-props': ['error', 'as-needed'], // 字面量属性不严格使用""号
    'no-var': 'error', // error; 要求使用 let 或 const 而不是 var
    'eol-last': ['off'], // 非空文件末尾至少存在一行空行（或缺少换行）off 不用
    'no-mixed-spaces-and-tabs': [2, false], // 禁止混用tab和空格
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/member-delimiter-style": "off",
    "vue/no-v-model-argument": "off",
  },
  "globals": {
    "ObjectType": "writable",
  }
}
