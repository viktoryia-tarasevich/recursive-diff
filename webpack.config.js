const path = require('path');

module.exports = {
  entry: './src/recursive-diff.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'recursive-diff.min.js',
    library: 'recursiveDiff',
    libraryTarget: 'umd',
    globalObject: '(typeof self !== \'undefined\' ? self : this)',
  },
};
