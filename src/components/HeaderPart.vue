<template>
<nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
  <!-- <a class="navbar-brand" href="#">Navbar</a> -->
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="nav">
  <ul class="navbar-nav custom_header">
    <li class="nav-item">
      <router-link to="/" class="custom-link">Home</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/Add_re" class="custom-link">Add Restaurant</router-link>
    </li>
   
    <li class="nav-item logout">
      <a class="nav-link" href="#" @click="LogOut">Logout</a>
    </li>
  </ul>
</div>
</nav>
</template>

<script>
export default {
    name:'HeaderR',
    methods :{
        LogOut() {
            localStorage.clear()
            this.$router.push({
                name:'SignUp'
            })
        }
    }
}
</script>
<style>
a.nav-link {
    padding: 21px;
    font-size: 24px;
    color: blue;
}
.custom-link {
  /* Your custom styling here */
  color: #007bff; /* Change the link color */
  font-weight: bold; /* Make the text bold */
  text-decoration: none; /* Remove underlines */
  margin-right: 20px;
   /* Adjust spacing between links */
   padding-top: 20px;
}
ul.navbar-nav.custom_header {
    padding: 18px;
    padding-top: 18px;
}
li.nav-item.logout {
    margin-bottom: unset;
    margin: -top;
    margin-top: -29px;
}
</style>