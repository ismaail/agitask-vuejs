const path = require('path');

module.exports = {
	pages: {
		index: {
			entry: 'src/main.js',
			template: 'public/index.html',
			filename: 'index.html',
			title: 'AgiTasks',
		}
	},

	devServer: {
		clientLogLevel: 'warning',
		hot: true,
		host: 'www.agitasks.localhost',
		port: 8080,
		https: {
			key: './server.key',
			cert: './server.crt',
		},
		contentBase: 'dist',
		compress: true,
		open: false,
		overlay: { warnings: false, errors: true },
		publicPath: '/',
		quiet: true,
		watchOptions: {
			poll: false,
			ignored: /node_modules/
		}
	},

	chainWebpack: config => {
		config.resolve.alias.set('~', path.resolve(__dirname, './src'));

		config.resolve.extensions.add('.js', '.vue');
	},
};
