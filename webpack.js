import path from 'path';

const prodConfig = {
  mode: 'production',
  entry: '/src/index.ts',
  target: ['web', 'es2021'],
  output: {
    filename: 'swc-flags-typo.js',
    path: path.resolve('./build'),
    clean: true,
    library: {
      type: 'module'
    }
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  optimization: {
    usedExports: true
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'swc-loader',
          options: {
            jsc: {
              target: 'es2021',
              parser: {
                syntax: 'typescript'
              },
              minify: {
                compress: {
                  comparisons: true,
                  computed_props: true,
                  conditionals: true,
                  dead_code: true,
                  directives: true,
                  ecma: 2020,
                  evaluate: true,
                  if_return: true,
                  join_vars: true,
                  module: true,
                  negate_iife: true,
                  sequences: true,
                  switches: true,
                  unused: true
                },
                mangle: {
                  keepClassnames: false,
                  keepFnames: false,
                  keepPrivateProps: false,
                  topLevel: false,
                  reserved: [],
                  properties: {
                    builtins: false,
                    debug: false,
                    keep_quoted: false,
                    regex: null,
                    reserved: [],
                    undeclared: false
                  }
                }
              }
            },
            module: {
              type: 'es6',
              strict: true,
              strictMode: true
            }
          }
        },
        exclude: /node_modules/
      }
    ]
  },
  experiments: {
    outputModule: true
  }
};

export default prodConfig;
