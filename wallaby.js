'use strict';

module.exports = function () {
  return {
    files: [
      {pattern: 'src/templates/**', instrument: false},
      // {pattern: 'test/**/*.spec.[j|t]s', ignore: true},
      // {pattern: 'test/**/*.spec.[j|t]sx', ignore: true},
      {pattern: 'test/**/*.e2e.[j|t]s', ignore: true},
      {pattern: 'app/**/*.spec.[j|t]s', ignore: true},
      {pattern: 'app/**/*.spec.[j|t]sx', ignore: true},
      {pattern: 'src/assets/**', instrument: false},
      {pattern: 'src/**', instrument: true},
      {pattern: 'target/**/*.json', instrument: false},
      {pattern: 'templates/**', instrument: false},
      {pattern: 'index.js', instrument: true},
      {pattern: 'package.json', instrument: false},
      {pattern: 'app/tsconfig.json', instrument: false},
      {pattern: 'pom.xml', instrument: false},
      'testkit/**/*.[j|t]s',
      'testkit/**/*.[j|t]s',
      'test/**/*.[j|t]s',
      'test/**/*.[j|t]sx',
      'src/**/*.scss'
    ],

    tests: [
      // {pattern: 'test/**/*.spec.[j|t]s'},
      // {pattern: 'test/**/*.spec.[j|t]sx'},
      {pattern: 'app/**/*.spec.[j|t]s'},
      {pattern: 'app/**/*.spec.[j|t]sx'},
    ],

    // compilers: {
    //   '**/*.js{,x}': wallaby.compilers.babel({
    //     babelrc: true,
    //     plugins: [
    //       require.resolve('babel-plugin-transform-es2015-modules-commonjs')
    //     ]
    //   })
    // },

    env: {
      type: 'node',
      runnner:'node'
    },
    debug: true,
    workers: {
      initial: 1,
      regular: 1,
      recycle: true
    },
    testFramework: 'jest',
    setup: () => {
      wallaby.testFramework.configure(require('./package.json').jest);
    }
  };
};