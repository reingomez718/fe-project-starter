import path from 'path';
import { Configuration as WebpackConfiguration, HotModuleReplacementPlugin } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import { EEnv, getBaseConfig } from './webpack.base.config';

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const buildDir = path.join(__dirname, 'build');
const baseConfig = getBaseConfig(EEnv.DEV);

const config: Configuration = {
  ...baseConfig,
  mode: 'development',
  output: {
    publicPath: '',
    assetModuleFilename: 'assets/[hash][ext][query]',
  },
  plugins: baseConfig?.plugins?.concat([new HotModuleReplacementPlugin()]),
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: buildDir,
    },
    historyApiFallback: true,
    port: 4000,
    open: true,
    hot: true,
  },
};

export default config;
