// const order = {
//     特色: [],
//     肉类: [],
//     蛋炒: [],
//     素菜: [],
//     凉菜: [],
//     汤粥: [],
//     主食: []
// };

// export default order;

import Vue from 'vue';

export default {
    actions: {
        getOrder (ctx, params) {
            return Vue.http.get('/cmp_api/order', {
                params
            });
        },

        delOrder (ctx, params) {
            return Vue.http.delete('/cmp_api/order/remove', {
                params
            });
        },
        
    }
};