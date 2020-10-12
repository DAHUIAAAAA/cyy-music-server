const Router = require('koa-router'),
    axios = require('axios'),
    router = new Router({
        prefix: '/api'
    });

router.get('/getCdInfo', async (ctx, next) => {
    const url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg';
    const res =
        await axios.get(url, {
            headers: {
                referer: 'https://c.y.qq.com/',
                host: 'c.y.qq.com'
            },
            params: ctx.query
        })
            .catch(e => {
                console.log(e);
            })

    ctx.body = res.data;
});

router.get('/getSongVkey', async (ctx, next) => {
    const url = 'https://u.y.qq.com/cgi-bin/musicu.fcg';

    const res =
        await axios
            .get(url, {
                headers: {
                    referer: 'https://u.y.qq.com/',
                    host: 'u.y.qq.com'
                },
                params: ctx.query
            })
            .catch(e => {
                console.log(e);
            });

    ctx.body = res.data;
});

router.get('/search', async (ctx, next) => {
    const url = 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp';

    const res =
        await axios
            .get(url, {
                headers: {
                    referer: 'https://c.y.qq.com/',
                    host: 'c.y.qq.com'
                },
                params: ctx.query
            })
            .catch(e => {
                console.log(e);
            });

    ctx.body = res.data;
});

// router.post('/uploadChunk', async (ctx, next) => { 
//     const 
// })

module.exports = router;