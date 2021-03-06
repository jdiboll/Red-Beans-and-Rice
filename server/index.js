import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.dev';

const app = express();
app.use(webpackMiddleware(webpack(webpackConfig)));

app.use(express.static('server'));

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(3030, () => console.log('Server is running...'));