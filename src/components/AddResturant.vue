<template>
<headerCompt />
<h1>Hello User, Welcome on Add Restaurant Page</h1>
<form class="add">
    <input type="text" placeholder="Enter Name" v-model="resturant.name" name="name" />
    <input type="text" placeholder="Enter Address" v-model="resturant.address" name="address" />
    <input type="text" placeholder="Enter Contact" v-model="resturant.contact" name="contact" />
    <button type="button" v-on:click="addResturant">Add new restaurant</button>
</form>
</template>

<script>
import HeaderCompt from './HeaderCompt.vue'
import axios from 'axios'
export default {
    name: 'AddResturant',
    components: {
        HeaderCompt,
    },
    data() {
        return {
            resturant: {
                name: '',
                address: '',
                contact: '',
            }
        }

    },
    mounted() {
        console.warn("mount")
        let user = localStorage.getItem('user-info')
        if (!user) {
            this.$router.push({
                name: 'SignUp'
            })
        }
    },
    methods: {
       async addResturant()
        {
            const result= await axios.post("http://localhost:3000/restaurant/",{
                name:this.resturant.name,
                address:this.resturant.address,
                contact:this.resturant.contact
            });

            if(result.status==201)
            {
                this.$router.push({name:'Home'});
            }
        }
    },

}
</script>

<style>

</style>
