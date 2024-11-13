<template>
    <div id="setting">
          <div class="row">
            <div class="col-12">
              <h2>Input Product</h2><hr>
              <form>
                <div class="form-group">
                  <label for="name">Name</label>
                  <input type="text" class="form-control form-control-sm" placeholder="Name" v-model="income.name">
                  <label for="price">Price</label>
                  <input type="text" class="form-control form-control-sm" placeholder="Price" v-model="income.price">
                  <label for="description">Description</label>
                  <textarea 
                    class="form-control form-control-sm" 
                    placeholder="Description" 
                    v-model="income.description">
                  </textarea>
                </div>
                <button class="btn btn-primary btn-sm" v-on:click.prevent="createNasabah">Submit</button>                
              </form>
            </div>
          </div>
    </div>
</template>
 
<script>
import axios from "axios";
import qs from "qs";

export default {
  data() {
    return {
      income:{
        name:'',
        price:'',
        description:''   
      },
    };
  },
  methods: {
    createNasabah : function() {
      let self = this;
      axios
        .post("http://localhost:9000/products", qs.stringify(this.income),{
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(    
          function (response) {            
            alert("data has been inserted");
            self.$router.push({name: 'productView'});
          }    
        )
        .catch(error => console.log(error));
    }
  },
  computed: {
    
    }
  }

</script>
 
<style>
#setting {
  margin-top: 5px;
  margin-left: 43px;
}
</style>     