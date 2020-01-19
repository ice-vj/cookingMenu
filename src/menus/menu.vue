<template>
  <div class="meterial">
        <h1 style="color: #258; width: 100px;  margin: auto" >菜单</h1>
        
        <div style="display: felx; margin-top:8%; margin-left:5%; width: 80%;">
            <div style="float:left">
                <router-link to="/" >
                    <el-row >
                        <el-button type="primary">返回 <i class="el-icon-back"></i></el-button>
                    </el-row>
                </router-link>
            </div>
            <div style="float:left; margin-left: 1%">
                <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
                    <el-button slot="append" icon="el-icon-search" @click="searchMenu"></el-button>
                </el-input>
            </div>
            <div style="float:right">
                <router-link to="/order" >
                    <el-row >
                        <el-button type="primary" >订单 <i class="el-icon-fork-spoon"></i></el-button>
                    </el-row>
                </router-link>
            </div>
        </div>

        <el-tabs type="border-card" class="menu_selet" @tab-click="show_list">
            <el-tab-pane v-for="(type, index) in types" :key="index" :label="type" >
                <ul class="menu_list"> 
                    <li v-for="(list_value, list_key) in menuList" :key="list_key">
                        <div>{{list_value.name}}</div>
                        <div>
                            <el-button icon="el-icon-search" size="mini" circle @click="search(list_value.name)"></el-button>
                            <el-button type="warning" icon="el-icon-star-off" size="mini"  circle  @click="add_order(list_value)"></el-button>
                            <el-button type="danger" icon="el-icon-delete" size="mini" circle @click="del_menu(list_value)"></el-button>
                        </div>
                    </li>
                    <!-- <li>
                        <el-button type="primary" plain @click="dialogFormVisible = true">+</el-button>

                    </li> -->
                </ul> 
            </el-tab-pane>
        </el-tabs>
        <el-dialog title="添加菜单" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="菜名:" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="类型:" :label-width="formLabelWidth">
                <el-select v-model="form.type" placeholder="请选择菜单类型">
                    <el-option v-for="(type, index) in types" :key="index" :label="type" :value="type"></el-option>
                </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="add_menu(form)">确 定</el-button>
            </div>
        </el-dialog>
  </div>
</template>

<script>

import { mapActions } from 'vuex';

export default {
    data() {
        return {
            query: {},
            types: [],
            menuList: [],
            
            input: '',

            currType: '',
            dialogFormVisible: false,
            form: {
                name: '',
                type: '',
            },
            formLabelWidth: '120px'
        }
    },

    async created () {
        await this.get_types();
        this.show_list({label: this.types[0]});
        this.currType = this.types[0];
    },

    methods: {
        ...mapActions(['getMenu', 'addMenu', 'editMenu', 'delMenu', 'addOrder', 'getTypes']),
        async get_types () {
            let res = await this.getTypes();
            res = res.data;
            if (res.code === 0) {
                this.types = res.data;
            }
        },

        async add_menu (form) {
            await this.addMenu(form);
            this.form = {
                name: '',
                type: '',
            };
            this.dialogFormVisible = false;
            this.show_list({label: this.currType});
        },

        edit_menu () {

        },

        async del_menu ({_id, type}) {
            await this.delMenu({_id, type});
            this.show_list({label: type});
        },

        async show_list (tab) {
            let res = await this.getMenu({type: tab.label});
            res = res.data;
            if (res.code === 0) {
                this.menuList = res.data;
                this.currType = tab.label;   
                if (this.input) {
                    let regex = new RegExp(this.input);
                    this.menuList = this.menuList.filter(e => regex.test(e.name));
                
                }
            }
        },

        async add_order ({_id, type}) {
            await this.addOrder({_id, type});
        },

        searchMenu () {
            if (!this.input) {
                this.show_list({label: this.currType});
            } else {
                let regex = new RegExp(this.input);
                this.menuList = this.menuList.filter(e => regex.test(e.name));
            }
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

.menu_selet {
    list-style: none;
    margin-left: 5%;
    margin-top: 12%;
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

.basket {
    font-size: 15px;
    color:#40A0FF;
}

a {
  font-size: 15px;
  text-decoration:none;
  color:#40A0FF;
}
</style>
