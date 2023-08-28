<template>
    <h1>Sign Up</h1>
    <div class="row">
        <div class="col-6 m-auto">
            <div class="mb-3">
                <input class="form-control" v-model="name" type="text" placeholder="Enter Name">
            </div>
            <div class="mb-3">
                <input class="form-control" v-model="email" type="text" placeholder="Enter Email">
            </div>
            <div class="mb-3">
                <input class="form-control" v-model="password" type="text" placeholder="Enter Password">
            </div>
        </div>
        <div class="mb-3">
            <button @click="signUP" class="btn btn-primary">Submit</button>

        </div>
        <p>
            <router-link to="/login">Go To Login</router-link>
        </p>


    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'SignUp',
    data() {
        return {
            name: "",
            email: "",
            password: "",
            resData: null
        }
    },
    methods: {
        async signUP() {
            let result = await axios.post('http://localhost:3000/user', {
                'name': this.name,
                'email': this.email,
                'password': this.password
            }); // Replace with your API URL

            console.log("Result", result)
            if (result.status == 201) {
                localStorage.setItem('user-info', JSON.stringify(result.data))
                this.$router.push({
                    name: 'Home'
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