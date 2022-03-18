/*
 * @Author: your name
 * @Date: 2022-03-08 18:40:52
 * @LastEditTime: 2022-03-18 10:42:24
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-vue-app/.eslintrc.js
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'airbnb-base',
    'plugin:vue/vue3-recommended',
    'prettier',
    'plugin:prettier/recommended' // 合并eslint-plugin-prettier和eslint-config-prettier 配置
  ],
  globals: {
    onActivated: 'readonly',
    onBeforeMount: 'readonly',
    onBeforeUnmount: 'readonly',
    onBeforeUpdate: 'readonly',
    onDeactivated: 'readonly',
    onErrorCaptured: 'readonly',
    onMounted: 'readonly',
    onServerPrefetch: 'readonly',
    onUnmounted: 'readonly',
    onUpdated: 'readonly',
    // reactivity
    computed: 'readonly',
    customRef: 'readonly',
    isReadonly: 'readonly',
    isRef: 'readonly',
    markRaw: 'readonly',
    reactive: 'readonly',
    readonly: 'readonly',
    ref: 'readonly',
    shallowReactive: 'readonly',
    shallowReadonly: 'readonly',
    shallowRef: 'readonly',
    toRaw: 'readonly',
    toRef: 'readonly',
    toRefs: 'readonly',
    triggerRef: 'readonly',
    unref: 'readonly',
    watch: 'readonly',
    watchEffect: 'readonly',
    // component
    defineComponent: 'readonly',
    defineAsyncComponent: 'readonly',
    getCurrentInstance: 'readonly',
    h: 'readonly',
    inject: 'readonly',
    nextTick: 'readonly',
    provide: 'readonly',
    useCssModule: 'readonly',
    // other
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
    // vue-router
    useRoute: 'readonly',
    useRouter: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2021
  },
  plugins: ['vue'],
  rules: {
    'prettier/prettier': 'error',
    'vue/require-default-prop': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': [0, { 'packageDir ': './src/' }],
    'max-len': [
      'error',
      {
        code: 160,
        ignorePattern: 'class="([\\s\\S]*?)"|d="([\\s\\S]*?)"', // ignore classes or svg draw attributes
        ignoreUrls: true
      }
    ]
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', 'svg'],
        moduleDirectory: ['node_modules', 'src/']
      },
      alias: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', 'svg'],
        map: [['@', './src']]
      }
    }
  }
}
