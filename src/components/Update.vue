<template>
    <HeaderR />
    <h1>Hi, welcome to the update Page</h1>
    <div class="row" >
        
        <div class="col-4 m-auto">
            <div class="mb-3">
                <input class="form-control" type="text" placeholder="Enter Name"  v-model="restaurent.name">
            </div>
            <div class="mb-3">
                <input class="form-control"  type="text" placeholder="Enter Address" v-model="restaurent.contact">
            </div>
            <div class="mb-3">
                <input class="form-control"  type="text" placeholder="Enter Contact" v-model="restaurent.location">
            </div>
        </div>
        <div class="mb-3">
            <button @click="updateRestaurent" class="btn btn-primary">Update Restaurent</button>
        </div>
</div>
</template>

<script>
import axios from 'axios'
import HeaderR from './HeaderPart.vue'
export default {
    name: 'update_v',
    components:{
        HeaderR
    },
    data() { 
        return{
            name:'',
            restaurent:{
                name:'',
                location:'',
                contact:''
            }
        }
    },
   async mounted() {
       let result=await axios.get('http://localhost:3000/restaurent/'+this.$route.params.id)
    //    console.log(result)
       this.restaurent=result.data
    },
    methods: {
        async updateRestaurent() {
            let result2=await axios.put("http://localhost:3000/restaurent/"+this.$route.params.id,{
                name:this.restaurent.name,
                location:this.restaurent.location,
                contact:this.restaurent.contact,
            });
            console.log("update", result2);
            if(result2.status==200){
                this.$router.push({
                    name:'Home'
                })
            }
         }

    }
    


}

</script>