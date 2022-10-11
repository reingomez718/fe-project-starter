import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RuleSetRule } from 'webpack';
import { EEnv } from '../webpack.base.config';

export const getRuleSass = (env: EEnv): RuleSetRule => {
  const isDevMode = env === EEnv.DEV;

  return {
    test: /\.s[ac]ss$/,
    use: [
      // Creates `style` nodes from JS strings
      isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: 'css-loader',
        options: {
          sourceMap: isDevMode,
          // 0 => no loaders (default);
          // 1 => postcss-loader;
          // 2 => postcss-loader, sass-loader
          importLoaders: 2,
          modules: {
            localIdentName: '[local]___[hash:base64:5]',
            exportLocalsConvention: 'dashes',
          },
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: isDevMode,
        },
      },
    ],
    exclude: /node_modules/,
  };
};
