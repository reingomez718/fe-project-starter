import { RuleSetRule } from 'webpack';

export const getRuleStatics = (): RuleSetRule => ({
  test: /\.(woff(2)?|ttf|eot|svg|png|jpg)(\?v=\d+\.\d+\.\d+)?$/,
  oneOf: [
    {
      type: 'asset/resource',
      generator: {
        filename: 'statics/[name][ext]',
      },
      issuer: {
        and: [/\.(sa|sc|c)ss$/],
      },
    },
  ],
});
