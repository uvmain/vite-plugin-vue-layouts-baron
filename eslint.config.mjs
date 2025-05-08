import antfu from '@antfu/eslint-config'

export default antfu({}, {
  rules: {
    'no-console': 'off',
    'brace-style': ['error', 'stroustrup'],
    'curly': ['off'],
    'ts/no-empty-object-type': 'off',
  },
})
