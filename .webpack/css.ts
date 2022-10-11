import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RuleSetRule } from 'webpack';
import { EEnv } from '../webpack.base.config';

export const getRuleCss = (env: EEnv): RuleSetRule => ({
  test: /\.css$/,
  use: [env === EEnv.DEV ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
});
