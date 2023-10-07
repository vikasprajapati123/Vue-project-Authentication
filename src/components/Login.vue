<template>
    <h1>Login</h1>
    <div class="row">
        <div class="col-4 m-auto">
            <div class="mb-3">
                <input type="text" class="form-control" v-model="email" placeholder="Enter Email">
            </div>
            <div class="mb-3">
                <input type="text" class="form-control" v-model="password" placeholder="Enter Password">
            </div>
            <div class="mb-3">
                <button class="btn btn-primary" @click="Login">Login </button>
            </div>
            <p>
                <router-link to="/SignUp">Sign Up</router-link>
            </p>

        </div>
    </div>
</template>

<script>
import axios from "axios"
export default {
    name: 'LoginPage',
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        async Login() {
            let result = await axios.get(`http://localhost:3000/user?email=${this.email}&password=${this.password}`
            )
            console.log("result----", result)
            if(result.status==200 &&  result.data.length>0){
                localStorage.setItem('user-info',JSON.stringify(result.data[0]))
                this.$router.push({
                    name:'Home'
                })
            }
        }
    },
    mounted() {
        let check_storage = localStorage.getItem('user-info')
        if (check_storage) {
            this.$router.push({
                name: 'Home'
            })
        }
    }
}
</script>