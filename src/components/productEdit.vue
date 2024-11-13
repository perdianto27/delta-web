<template>
    <div id="setting">
          <div class="row">
            <div class="col-6">
              <h2>Edit Product</h2><hr>
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
                <button class="btn btn-primary btn-sm" v-on:click.prevent="editNasabah">Submit</button>                
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
        id: '',
        name:'',
        price:'',
        description:''   
      }
    };
  },
  methods: {
    loadNasabah : function(id) {
       axios
        .get("http://localhost:9000/products/"+id, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => {
          console.log(response.data.data);
          this.income = response.data.data;
        })
        .catch(error => console.log(error));

    },
     editNasabah : function(id) {
      self = this;
      const payload = {
        name: this.income.name,
        price: this.income.price,
        description: this.income.description
      }
      axios
        .put("http://localhost:9000/products/" + this.$route.params.id, qs.stringify(payload), {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(function (response) {
          console.log("data update", response.data.data);
          alert("Data has been updated");
          self.$router.push({ name: 'productView' });
        })
        .catch(error => console.log(error));
    }
  },
  mounted() {
    const {id} = this.$route.params;
    this.loadNasabah(id);
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