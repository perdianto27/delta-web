<template>
    <div id="setting">
       <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-3">Selamat Datang {{name}}</h1>
          <p class="lead">Aplikasi Delta Vue, This App Made by Vue Js Framework And Express Rest API </p>
        </div>
      </div>
    </div>
</template>
 
<script>
export default {
data() {
  return{
    name: localStorage.getItem('username'),
  }
}
}
</script>
 
<style scoped>
#setting {
  margin-top: 50px;
  margin-left: 43px;
}
</style> 