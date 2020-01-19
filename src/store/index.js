import Vue from 'vue';
import Vuex from 'vuex';

import menu from './menu/menu';
import order from './order/order';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        menu,
        order
    }
});
