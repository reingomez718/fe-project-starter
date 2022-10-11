import { RuleSetRule } from 'webpack';

export const getRuleBabel = (): RuleSetRule => ({
  test: /\.(ts|js|tsx)x?$/i,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
      plugins: ['@babel/plugin-transform-runtime'],
    },
  },
});
