import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { EEnv, getBaseConfig } from './webpack.base.config';

const buildDir = path.join(__dirname, 'build');
const baseConfig = getBaseConfig(EEnv.PRD);

const config: webpack.Configuration = {
  ...baseConfig,
  mode: 'production',
  output: {
    path: buildDir,
    filename: '[name].[contenthash].bundle.js',
    publicPath: '',
    clean: true,
  },
  plugins: baseConfig?.plugins?.concat([
    new MiniCssExtractPlugin({
      linkType: 'text/css',
      filename: '[name].[contenthash].bundle.css',
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: 'report/bundle-size-report.html',
      openAnalyzer: true,
    }),
  ]),
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        reactReduxVendor: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-redux|react-router-dom|redux|redux-devtools-extension|redux)[\\/]/,
          name: 'react-redux-vendor',
        },
        vendor: {
          test: /[\\/]node_modules[\\/](!react)(!react-dom)(!react-redux)(!react-router-dom)(!redux)(!redux-devtools-extension)(!redux)[\\/]/,
          name: 'vendor',
        },
        /* If splitting for each packages
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            return `npm.${packageName.replace('@', '')}`;
          },
        },
        */
      },
    },
  },
};

export default config;
