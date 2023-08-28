<template>
    <HeaderR />
    <h1>Home page</h1>
</template>

<script>
import HeaderR from './HeaderPart.vue'
export default {
    name: 'HomePage',
    components:{
        HeaderR
    },
    mounted() {
        let user_check = localStorage.getItem('user-info')
        if (!user_check) {
            this.$router.push({
                name: 'SignUp'
            })
        }
    }

}

</script>