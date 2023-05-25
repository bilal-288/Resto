<template>
<headerCompt />
<h1>Hello {{name}}, Welcome on Home Page</h1>
<h1>Hello {{name}}, Welcome on Home Page</h1>
<table border="1">
    <tr>
        <td>Id</td>
        <td>Name</td>
        <td>Contact</td>
        <td>Address</td>
        <td>Action</td>
    </tr>
    <tr v-for="item in  resturants" :key="item.id">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.address}}</td>
        <td>{{item.contact}}</td>
        <td>
            <router-link :to="'/update/'+item.id">Update</router-link>
        </td>
        <button v-on:click="deleteresto(item.id)">Delete</button>
    </tr>
</table>
</template>

<script>
import HeaderCompt from './HeaderCompt.vue'
import axios from 'axios'
export default {
    name: "HomeCompt",
    data() {
        return {
            name: '',
            resturants: []
        }

    },
    components: {
        HeaderCompt,
    },
    methods: {
        async deleteresto(id) {
            let result = await axios.delete("http://localhost:3000/restaurant/" + id);
            if (result.status == 200) {
                 this.loadRestData();
            }
        },
        async loadRestData() {
            console.warn("mount")
            let user = localStorage.getItem('user-info');
            this.name = JSON.parse(user).name;
            if (!user) {
                this.$router.push({
                    name: 'SignUp'
                })
            }
            let result = await axios.get("http://localhost:3000/restaurant");
            console.warn(result);
            this.resturants = result.data;
        }
    },
    mounted() {
        this.loadRestData();
    }

}
</script>

<style>
td {
    width: 160px;
    height: 40px;

}
</style>
