const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/todo',
        createProxyMiddleware({
            target: 'http://49.50.163.177:8000',
            changeOrigin: true,
        })
    );
};