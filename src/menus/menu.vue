<template>
  <div class="meterial">
        <h1 style="color: #258; width: 100px;  margin: auto" >菜单</h1>
          <router-link to="/" >
            <el-page-header class="back" content="分类"></el-page-header>
        </router-link>
        <!-- <ul class="menu_selet">
            <li v-for="(value, key) in menu" :key="key" @click="show_list(key)">{{key}}</li>
        </ul>
        <ul class="menu_list"> 
            <li v-for="(value, key) in list" :key="key">{{value}}</li>
        </ul> -->

        <el-tabs type="border-card" class="menu_selet">
            <el-tab-pane v-for="(value, key) in menu" :key="key" :label="key" :tab-click="show_list(key)">
                 <ul class="menu_list"> 
                    <li v-for="(value, key) in list" :key="key">
                        <div>{{value}}</div>
                        <div>
                            <el-button icon="el-icon-search" size="mini" circle></el-button>
                            <el-button type="warning" icon="el-icon-star-off" size="mini"  circle></el-button>
                            <el-button type="danger" icon="el-icon-delete" size="mini" circle></el-button>
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
import menu from "../store/menuData";


export default {
    data() {
        return {
            menu: menu,
            list: menu.a
        }
    },
    methods: {
        show_list (key) {
            this.list = menu[key];
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
  font-size: 20px;
  text-decoration:none;
  color:#40A0FF;
}
</style>
