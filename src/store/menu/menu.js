// const menu = {
//     特色: ['★红烧排骨', '★鱼香茄子', '★干煸豆角', '★青椒炒蛋', '★醋溜土豆丝'],
//     肉类: ['★红烧排骨', '红烧肉', '清炖排骨', '木须肉', '回锅肉'],
//     蛋炒: ['★青椒炒蛋', '西红柿炒蛋', '木耳炒蛋', '葱花炒蛋'],
//     素菜: ['油麦菜', '上海青', '菠菜', '生菜', '白菜豆腐', '酸辣白菜', '煎豆腐'],
//     凉菜: ['牛肉', '莲菜', '黄瓜'],
//     汤粥: ['小米粥', '绿豆粥', '八宝粥', '紫菜蛋花汤', '胡辣汤'],
//     主食: ['大米', '烩面', '馒头']
// };

// export default menu;

import Vue from 'vue';

export default {
    actions: {

        getTypes () {
            return Vue.http.get('/cmp_api/types');
        },

        getMenu (ctx, params) {
            return Vue.http.get('/cmp_api/menu', {
                params
            });
        },

        addMenu (ctx, body) {
            return Vue.http.post('/cmp_api/menu/create', body);
        },

        editMenu (ctx, params) {
            return Vue.http.put('/cmp_api/menu', {
                params
            });
        },

        delMenu (ctx, params) {
            return Vue.http.delete('/cmp_api/menu/remove', {
                params
            });
        },

        addOrder (ctx, body) {
            return Vue.http.post('/cmp_api/order/create', body);
        },
      
    }
};