<template>
<headerCompt />
<h1>Hello User, Welcome on Update Restaurant Page</h1>
<form class="add">
    <input type="text" placeholder="Enter Name" v-model="resturant.name" name="name" />
    <input type="text" placeholder="Enter Address" v-model="resturant.address" name="address" />
    <input type="text" placeholder="Enter Contact" v-model="resturant.contact" name="contact" />
    <button type="button" v-on:click="updateResturant">Update restaurant</button>
</form>
</template>

<script>
import HeaderCompt from './HeaderCompt.vue'
import axios from 'axios'
export default {
    name:'UpdateResturant',
    components:{
        HeaderCompt,
    },data() {
        return {
            resturant: {
                name: '',
                address: '',
                contact: '',
            }
        }

    },
    methods:{
        async updateResturant()
        {
            const result= await axios.put("http://localhost:3000/restaurant/"+this.$route.params.id,{
                name:this.resturant.name,
                address:this.resturant.address,
                contact:this.resturant.contact
            });

            if(result.status==200)
            {
                this.$router.push({name:'Home'});
            }
        }
    },
   async mounted() {
        console.warn("mount")
        let user = localStorage.getItem('user-info')
        if (!user) {
            this.$router.push({
                name: 'SignUp'
            })
        }

        const  result= await axios.get("http://localhost:3000/restaurant/"+this.$route.params.id);
        console.warn(result);
        this.resturant=result.data
            }

}
</script>

<style>

</style>
