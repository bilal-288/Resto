<template>
<img class="logo" src="../assets/resto.jpg" />
<h1>Sign Up</h1>

<div class="register">
    <input type="text" v-model="name" placeholder="Enter name" />
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button v-on:click="signUp">Sign Up</button>
</div>

<p>
<router-link to="login">Login</router-link>
</p>
</template>

<script>
import axios from "axios";
export default {
    name: 'SignUp',
    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        async signUp() {
            let result = await axios.post("http://localhost:3000/user", {
                email: this.email,
                name: this.name,
                password: this.password
            });

            console.warn(result);
            // this.$router.push is coming from axios
            if (result.status == 201) {
                localStorage.setItem("user-info", JSON.stringify(result.data));
                this.$router.push({name:'Home'})
            }

            
        }
    },
    mounted()
    {
        console.warn("mount")
        let user=localStorage.getItem('user-info')
        if(user)
        {
            this.$router.push({name:'Home'})
        }
    }

}
</script>

<style>

</style>
