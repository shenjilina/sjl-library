/*
 * @LastEditors: shenjilin
 * @Description: ...
 * @Date: 2023-02-28 18:59:35
 * @LastEditTime: 2023-02-28 19:00:17
 * @Author: shenjilin
 */
module.exports = {
    root: true,
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'plugin:vue/vue3-essential',
      'standard'
    ],
    parserOptions: {
      ecmaVersion: 'latest',
      parser: '@typescript-eslint/parser',
      sourceType: 'module'
    },
    plugins: [
      'vue',
      '@typescript-eslint'
    ],
    rules: {
      'vue/multi-word-component-names': 'off'
    }
  }