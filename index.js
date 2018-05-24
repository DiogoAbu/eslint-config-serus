module.exports = {
  env: {
    browser: true,
    es6    : true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:security/recommended',
  ],
  globals: {
    __DEV__     : true,
    module      : true,
    require     : true,
    setImmediate: true,
  },
  parser       : 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'react',
    'import',
    'sort-imports-es6-autofix',
    'security',
  ],
  rules: {
    'array-bracket-newline': [
      2,
      'consistent',
    ],
    'array-bracket-spacing': [
      2,
      'always',
    ],
    'arrow-body-style': [
      2,
      'as-needed',
    ],
    'arrow-parens': [
      2,
      'as-needed',
    ],
    'arrow-spacing': [
      2,
      {
        after : true,
        before: true,
      },
    ],
    'block-scoped-var': 2,
    'brace-style'     : [
      2,
      'stroustrup',
      {
        allowSingleLine: true,
      },
    ],
    camelcase: [
      2,
      {
        properties: 'always',
      },
    ],
    'comma-dangle': [
      2,
      'always-multiline',
    ],
    'comma-spacing': [
      2,
      {
        after : true,
        before: false,
      },
    ],
    'comma-style': [
      2,
      'last',
    ],
    'consistent-return': 2,
    curly              : [
      2,
      'all',
    ],
    'dot-location': [
      2,
      'property',
    ],
    'dot-notation': [
      2,
      {
        allowKeywords: false,
      },
    ],
    eqeqeq: [
      2,
      'smart',
    ],
    'func-call-spacing': [
      2,
      'never',
    ],
    'function-paren-newline': [
      2,
      'never',
    ],
    'guard-for-in'            : 2,
    'implicit-arrow-linebreak': [
      2,
      'beside',
    ],
    'import/order': [
      2,
      {
        groups: [
          'builtin',
          'external',
          'parent',
          'sibling',
          'index',
        ],
      },
    ],
    indent: [
      2,
      2,
      {
        ArrayExpression: 1,
        CallExpression : {
          arguments: 1,
        },
        flatTernaryExpressions: true,
        ImportDeclaration     : 1,
        MemberExpression      : 1,
        ObjectExpression      : 1,
        outerIIFEBody         : 0,
        SwitchCase            : 1,
      },
    ],
    'jsx-quotes': [
      2,
      'prefer-single',
    ],
    'key-spacing': [
      2,
      {
        multiLine: {
          afterColon : true,
          align      : 'colon',
          beforeColon: false,
        },
        singleLine: {
          afterColon : true,
          beforeColon: false,
        },
      },
    ],
    'keyword-spacing': [
      2,
      {
        after : true,
        before: true,
      },
    ],
    'newline-per-chained-call': [
      2,
      {
        ignoreChainWithDepth: 2,
      },
    ],
    'no-await-in-loop'    : 2,
    'no-console'          : 0,
    'no-duplicate-imports': 2,
    'no-else-return'      : [
      2,
      {
        allowElseIf: false,
      },
    ],
    'no-empty-function': 2,
    'no-empty-pattern' : 2,
    'no-extra-bind'    : 2,
    'no-extra-parens'  : [
      2,
      'all',
      {
        ignoreJSX: 'all',
      },
    ],
    'no-invalid-this': 0,
    'no-multi-spaces': [
      2,
      {
        exceptions: {
          Property          : true,
          VariableDeclarator: true,
        },
      },
    ],
    'no-multiple-empty-lines': [
      2,
      {
        max   : 1,
        maxBOF: 1,
        maxEOF: 1,
      },
    ],
    'no-prototype-builtins'      : 2,
    'no-restricted-syntax'       : 2,
    'no-return-await'            : 2,
    'no-self-compare'            : 2,
    'no-tabs'                    : 2,
    'no-template-curly-in-string': 2,
    'no-underscore-dangle'       : [
      2,
      {
        allowAfterThis: true,
      },
    ],
    'no-unneeded-ternary'          : 2,
    'no-useless-constructor'       : 2,
    'no-useless-return'            : 2,
    'no-var'                       : 2,
    'no-whitespace-before-property': 2,
    'object-curly-spacing'         : [
      2,
      'always',
    ],
    'object-shorthand': [
      2,
      'always',
    ],
    'one-var': [
      2,
      'never',
    ],
    'prefer-const': [
      2,
      {
        destructuring         : 'all',
        ignoreReadBeforeAssign: false,
      },
    ],
    'prefer-promise-reject-errors': [
      2,
      {
        allowEmptyReject: true,
      },
    ],
    'prefer-spread'  : 2,
    'prefer-template': 2,
    'quote-props'    : [
      2,
      'as-needed',
    ],
    quotes: [
      2,
      'single',
    ],
    'react/boolean-prop-naming': [
      2,
      {
        rule: '^(can|has|is|no)[A-Z]([A-Za-z0-9]?)+',
      },
    ],
    'react/jsx-closing-bracket-location': [
      2,
      'line-aligned',
    ],
    'react/jsx-equals-spacing': [
      2,
      'never',
    ],
    'react/jsx-first-prop-new-line': 2,
    'react/jsx-handler-names'      : [
      2,
      {
        eventHandlerPrefix    : '_handle',
        eventHandlerPropPrefix: '_on',
      },
    ],
    'react/jsx-indent': [
      2,
      2,
    ],
    'react/jsx-indent-props': [
      2,
      2,
    ],
    'react/jsx-max-props-per-line': [
      2,
      {
        maximum: 1,
        when   : 'always',
      },
    ],
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-pascal-case'       : 2,
    'react/jsx-sort-props'        : [
      2,
      {
        callbacksLast       : true,
        ignoreCase          : true,
        noSortAlphabetically: false,
        reservedFirst       : true,
        shorthandFirst      : true,
        shorthandLast       : false,
      },
    ],
    'react/jsx-tag-spacing': [
      2,
      {
        afterOpening     : 'never',
        beforeSelfClosing: 'always',
        closingSlash     : 'never',
      },
    ],
    'react/jsx-uses-vars'      : 2,
    'react/jsx-wrap-multilines': [
      2,
      {
        arrow      : true,
        assignment : true,
        declaration: true,
        return     : true,
      },
    ],
    'react/no-direct-mutation-state': 2,
    'react/no-string-refs'          : 2,
    'react/no-typos'                : 2,
    'react/no-unescaped-entities'   : 2,
    'react/prefer-es6-class'        : [
      2,
      'always',
    ],
    'react/prop-types'           : 0,
    'react/require-optimization' : 2,
    'react/require-render-return': 2,
    'react/sort-comp'            : [
      2,
      {
        groups: {
          binds: [
            '/^_.+$/',
            '/^_init.+$/',
            '/^_on.+$/',
            '/^_handle.+$/',
          ],
          rendering: [
            '/^(_|)render.+$/',
            'render',
          ],
        },
        order: [
          'type-annotations',
          'static-methods',
          'lifecycle',
          'binds',
          'everything-else',
          'rendering',
        ],
      },
    ],
    'react/sort-prop-types': 0,
    'require-await'        : 2,
    'require-jsdoc'        : [
      2,
      {
        require: {
          ArrowFunctionExpression: false,
          ClassDeclaration       : false,
          FunctionDeclaration    : true,
          MethodDefinition       : false,
        },
      },
    ],
    'rest-spread-spacing': [
      2,
      'never',
    ],
    semi: [
      2,
      'never',
    ],
    'sort-imports-es6-autofix/sort-imports-es6': [
      2,
      {
        ignoreCase           : false,
        ignoreMemberSort     : false,
        memberSyntaxSortOrder: [
          'single',
          'multiple',
          'all',
          'none',
        ],
      },
    ],
    'sort-keys': [
      2,
      'asc',
      {
        caseSensitive: false,
        natural      : true,
      },
    ],
    'sort-vars': [
      2,
      {
        ignoreCase: true,
      },
    ],
    'space-before-function-paren': [
      2,
      {
        anonymous : 'never',
        asyncArrow: 'always',
        named     : 'never',
      },
    ],
    'space-in-parens': [
      2,
      'never',
    ],
    strict: [
      2,
      'safe',
    ],
    'switch-colon-spacing'  : 2,
    'template-curly-spacing': [
      2,
      'never',
    ],
    'valid-jsdoc': [
      2,
      {
        matchDescription        : '.+',
        requireParamDescription : true,
        requireReturn           : true,
        requireReturnDescription: false,
        requireReturnType       : true,
      },
    ],
    'vars-on-top'       : 2,
    'yield-star-spacing': [
      'error',
      'after',
    ],
    yoda: [
      2,
      'never',
    ],
  },
}