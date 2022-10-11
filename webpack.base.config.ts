import path from 'path';

import ESLintPlugin from 'eslint-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import { getRuleBabel } from './.webpack/babel';
import { getRuleCss } from './.webpack/css';
import { getExtensions } from './.webpack/extensions';
import { getRuleSass } from './.webpack/sass';
import { getRuleStatics } from './.webpack/statics';
import { getRuleTypeScript } from './.webpack/typescript';

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

export enum EEnv {
  DEV = 'dev',
  PRD = 'prd',
}

export const getBaseConfig = (env: EEnv): Configuration => ({
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
      getRuleBabel(),
      getRuleTypeScript(),
      getRuleSass(env),
      getRuleCss(env),
      getRuleStatics(),
    ],
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')],
    extensions: getExtensions(),
    plugins: [
      new TsconfigPathsPlugin({
        extensions: ['.ts', '.js', '.tsx'],
      }),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'template/index.html',
      title: 'Project Starter',
    }),
    new ForkTsCheckerWebpackPlugin({
      async: true,
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
    }),
  ],
});
