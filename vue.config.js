// 代理配置模块环境变量 local
const proxyTarget = function (target) {
    return {
        target: target || 'http://vj.aptx.com:8080',
        changeOrigin: true,
        onError: function (err) {
            console.log(err);
        },
        onProxyReq: function (proxyReq, req) {
            console.log('requesting ', req.url, '...');
        }
    };
};

module.exports = {
    devServer: {
       // host: 'vj.aptx.com',
        port: '8081',
        open: true,
        proxy: {
            ...[
                // CMP API
                '/cmp_api',
            ].reduce((a, b) => (a[b] = proxyTarget('http://vj.aptx.com:8080'), a), {}),
        }
    }
};