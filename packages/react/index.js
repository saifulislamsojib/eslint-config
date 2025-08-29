import { webConfigs } from '@stack-lint/base/web';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import preferFunctionComponent from 'eslint-plugin-react-prefer-function-component/config';

const ERROR = 'error';

export default Object.freeze([
  react.configs.flat.recommended,
  reactHooks.configs['recommended-latest'],
  preferFunctionComponent.configs.recommended,
  {
    ...webConfigs,
    settings: {
      react: { version: 'detect' },
    },
    plugins: {
      'jsx-a11y': jsxA11y,
    },
    rules: {
      ...webConfigs.rules,
      ...react.configs['jsx-runtime'].rules,
      ...jsxA11y.flatConfigs.recommended.rules,
      'jsx-a11y/alt-text': [ERROR, { img: ['Image'] }],
      'react-hooks/exhaustive-deps': ERROR,
      'react/prop-types': 'off',
      'react/checked-requires-onchange-or-readonly': ERROR,
      'react/destructuring-assignment': ERROR,
      'react/forward-ref-uses-ref': ERROR,
      'react/jsx-boolean-value': ERROR,
      'react/jsx-no-useless-fragment': ERROR,
      'react/jsx-props-no-spread-multi': ERROR,
      'react/jsx-no-constructed-context-values': ERROR,
      'react/no-invalid-html-attribute': ERROR,
      'react/no-this-in-sfc': ERROR,
      'react/no-namespace': ERROR,
      'react/jsx-fragments': [ERROR, 'syntax'],
      'react/no-object-type-as-default-prop': ERROR,
      'react/no-unstable-nested-components': ERROR,
      'react/style-prop-object': ERROR,
      'react/void-dom-elements-no-children': ERROR,
      'react/prefer-stateless-function': ERROR,
      'react/jsx-no-literals': ['off', { noStrings: true }],
      'react/jsx-filename-extension': [ERROR, { extensions: ['.jsx', '.tsx'] }],
      'react/hook-use-state': [ERROR, { allowDestructuredState: true }],
      'react/self-closing-comp': [ERROR, { component: true, html: true }],
      'react/function-component-definition': [
        ERROR,
        {
          namedComponents: ['function-declaration', 'arrow-function'],
          unnamedComponents: ['function-declaration', 'arrow-function'],
        },
      ],
      'react/jsx-pascal-case': [ERROR, { allowNamespace: true }],
      'react/jsx-no-script-url': [
        ERROR,
        [
          { name: 'Link', props: ['to', 'href'] },
          { name: 'NavLink', props: ['to', 'href'] },
        ],
      ],
      'react/jsx-no-bind': [
        ERROR,
        {
          ignoreRefs: true,
          allowArrowFunctions: true,
          allowFunctions: false,
          allowBind: false,
          ignoreDOMComponents: true,
        },
      ],
    },
  },
]);
