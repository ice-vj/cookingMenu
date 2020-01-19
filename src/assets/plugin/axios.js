import axios from 'axios';

// 适配vue-resource
const instance = axios.create();

function plugin(Vue) {
    if (plugin.installed) {
        return;
    }
    Vue.http = instance;
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin);
}

export default plugin;
