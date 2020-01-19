<template>
  <div class="meterial">
        <h1 style="color: #258; width: 100px;  margin: auto" >订单</h1>
       
         <div style="display: felx; margin-top:8%; margin-left:5%; width: 80%;">
            <div style="float:left">
                <router-link to="/menu" >
                    <el-row >
                        <el-button type="primary">返回 <i class="el-icon-back"></i></el-button>
                    </el-row>
                </router-link>
            </div>
        </div>
        
        <el-tabs type="border-card" class="menu_selet" @tab-click="show_list">
            <el-tab-pane v-for="(type, index) in types" :key="index" :label="type" >
                 <ul class="menu_list"> 
                    <li v-for="(list_value, list_key) in order" :key="list_key">
                        <div>{{list_value.name}}</div>
                        <div>
                            <el-button icon="el-icon-search" size="mini" circle @click="search(list_value.name)"></el-button>
                            <el-button type="danger" icon="el-icon-delete" size="mini" circle  @click="del_order(list_value)"></el-button>
                        </div>
                    </li>
                </ul> 
            </el-tab-pane>
        </el-tabs>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            order: [],
            currtype: '',
            types: []
        }
    },

    async created () {
        await this.get_types();
        this.show_list({label: this.types[0]});
        this.currType = this.types[0];
    },

    methods: {
        ...mapActions(['getOrder', 'delOrder', 'getTypes']),

        async show_list (tab) {
            let res = await this.getOrder({type: tab.label});
            res = res.data;
            if (res.code === 0) {
                this.order = res.data;
                this.currType = tab.label;   
            }
        },

        async get_types () {
            let res = await this.getTypes();
            res = res.data;
            if (res.code === 0) {
                this.types = res.data;
            }
        },

        async del_order ({_id, type}) {
            await this.delOrder({_id, type});
            this.show_list({label: type});
        },

        search (value) {
            window.open(`http://www.baidu.com/s?wd=${value}`);
        }
    },
    name: 'meterial',
    props: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../css/list.css";


.el-button--default {
    color: #fff;
    background: #40A0FF;
}

</style>
