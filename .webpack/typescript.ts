import { RuleSetRule } from 'webpack';

export const getRuleTypeScript = (): RuleSetRule => ({
  test: /\.(ts|tsx)$/,
  use: [
    'babel-loader',
    {
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
      },
    },
  ],
  exclude: /node_modules/,
});
