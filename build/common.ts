import * as path from 'path';
import * as webpack from 'webpack';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

const env = {
  NODE_ENV: process.env.NODE_ENV
};

export const entry = {
  nerv: [
    path.resolve(__dirname, '../src')
  ]
};

export const output = {
  path: path.resolve(__dirname, '../dist'),
  publicPath: '/',
  filename: '[hash]/[name].js'
};

export const rules = [
  {
    test: /\.(png|ttf|jpg|gif|woff|woff2|eot)$/,
    use: {
      loader: 'url-loader',
      options: { limit: 10000 }
    }
  },
  {
    test: /\.svg$/,
    use: ['react-hot-loader', 'svg-react-loader']
  }
];

export const loaders = {
  stylus: {
    loader: 'stylus-loader',
    options: {
      import: [
        path.resolve(__dirname, '../src/vars.styl')
      ]
    }
  }
};

export const plugins = [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'assets/index.html'
  }),
  new webpack.ProvidePlugin({
    React: 'react'
  }),
  new webpack.DefinePlugin({
    'process.env': Object.keys(env).reduce((hash, key) => {
      hash[key] = JSON.stringify(env[key]);
      return hash;
    }, {})
  })
];

export const resolve = {
  alias: {
    react: path.resolve(__dirname, '../node_modules/react')
  },
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
  modules: [
    'node_modules',
    '.' // Supports paths beginning with src/ to match tsconfig path resolution
  ]
};
