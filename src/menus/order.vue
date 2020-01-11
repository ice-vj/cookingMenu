<template>
  <div class="meterial">
        <h1 style="color: #258; width: 100px;  margin: auto" >订单</h1>
       
        <router-link to="/menu" >
            <el-page-header class="back"></el-page-header>
        </router-link>
        <router-link to="/order" >
            <span class="basket"></span>
        </router-link>
        
        <!-- <ul class="menu_selet">
            <li v-for="(value, key) in menu" :key="key" @click="show_list(key)">{{key}}</li>
        </ul>
        <ul class="menu_list"> 
            <li v-for="(value, key) in list" :key="key">{{value}}</li>
        </ul> -->
 
        <el-tabs type="border-card" class="menu_selet">
            <el-tab-pane v-for="(menu_value, menu_key) in order" :key="menu_key" :label="menu_key" :tab-click="show_list(menu_key)">
                 <ul class="menu_list"> 
                    <li v-for="(list_value, list_key) in list" :key="list_key">
                        <div>{{list_value}}</div>
                        <div>
                            <el-button icon="el-icon-search" size="mini" circle></el-button>
                            <!-- <el-button type="warning" icon="el-icon-star-off" size="mini"  circle></el-button> -->
                            <el-button type="danger" icon="el-icon-delete" size="mini" circle @click="del_order(menu_key, list_value)"></el-button>
                        </div>
                    </li>
                    <li>
                         <el-button type="primary" plain>+</el-button>
                    </li>
                </ul> 
            </el-tab-pane>
        </el-tabs>
  </div>
</template>

<script>
import order from "../store/order";


export default {
    data() {
        return {
            order: order,
            list: order.a
        }
    },
    methods: {
        show_list (key) {
            this.list = order[key];
        },
        del_order (key, value) {
            
            if (this.order[key].includes(value)) {
                this.order[key] = this.order[key].filter(e => {
                    return e !== value;
                })
            }
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

.menu_selet {
    list-style: none;
    margin-left: 5%;
    margin-top: 1%;
    overflow: hidden;
}

.menu_selet > li {
    height: auto;
    width: 100px;
    border: 1px solid gray;
    color: red;
    text-align: center;
    float: left;
}

.menu_list {
    list-style: none; 
    display: flex;
    flex-wrap: wrap; 
}

.menu_list > li {
    height: auto;
    width: 300px;
    display: flex;
    justify-content:space-between;
    margin-top: 20px;
    margin-right: 75px; 
    color: #40A0FF;
    align-items: center;
}

.el-button--default {
    color: #fff;
    background: #40A0FF;
}

.el-button--primary {
    width: 150px;
}
.el-tabs {
    width: 80%;
}

a {
  font-size: 15px;
  text-decoration:none;
  color:#40A0FF;
}
</style>
