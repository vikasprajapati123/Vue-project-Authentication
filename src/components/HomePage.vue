<template>
    <HeaderR />
    <h1>Hii {{name }}, welcome to the Home page</h1>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Contact</th>
      <th scope="col">Location</th>
      <th scope="col">Action</th>

      <!-- <th scope="col">Action</th> -->
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in restaurent" :key=item.id>
      <th scope="row">{{ item.id }}</th>
      <td>{{item.name }}</td>
      <td>{{item.contact }}</td>
      <td>{{item.location }}</td>
      <td><router-link :to="'/update/'+item.id">update</router-link></td>
      <td><button @click="deleteRestaurent(item.id)">Delete</button></td>


    </tr>
  </tbody>
</table>
</template>

<script>
import HeaderR from './HeaderPart.vue'
import axios from 'axios'
export default {
    name: 'HomePage',
    components:{
        HeaderR
    },
    data() {
        return{
           name: '',
           restaurent: [],
        }
    },
     mounted() {
       this.loadData()
    },
    methods:{
        async deleteRestaurent(id){
            // alert(id)
            let result=await axios.delete("http://localhost:3000/restaurent/"+id)
            console.log(result)
            if(result.status==200){
                this.loadData();
            }
           

        },
        async loadData() {
            let user_check = localStorage.getItem('user-info')
            console.log("user_check", JSON.parse(user_check).name);
            this.name=JSON.parse(user_check).name;
            if (!user_check) {
                this.$router.push({
                    name: 'SignUp'
                })
            }

            let result=await axios.get("http://localhost:3000/restaurent")
            console.log("Restaurent", result.data)
            this.restaurent=result.data
        }
    }

}

</script>