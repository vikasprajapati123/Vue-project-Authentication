<template>
    <HeaderR />
    <h1>Hi, welcome to the Add Restaurent</h1>
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
                <button @click="addRestaurent" class="btn btn-primary">Add Restaurent</button>
            </div>
    </div>
</template>

<script>
import axios from 'axios';
import HeaderR from './HeaderPart.vue'
export default {
    name: 'Add_re',
    components:{
        HeaderR
    },
    data() { 
        return{
            name:'',
            restaurent: {
                name:'',
                contact:'',
                location: ''
            }
        }
       
    },
    mounted() {

       
    },
    methods:{
        async addRestaurent() {``
           let result=  await axios.post("http://localhost:3000/restaurent",{
                name:this.restaurent.name,
                contact:this.restaurent.contact,
                location:this.restaurent.location,

            });
            if (result.status == 201) {
                this.$router.push({
                    name: 'Home'
                })
            }
            
        }

    }

}

</script>