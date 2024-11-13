<template>
    <div id="setting">
        <div class="row">
            <div class="col-10 text-left"> 
              <h3>Product</h3>       
                
            </div>
            <div class="col-2 text-right"> 
              <router-link class="btn btn-sm btn-info" :to="{name:'productCreate'}">
                  Add Product
              </router-link>                     
            </div>

        </div>
        <hr>
        
        <v-client-table :data="incomes" :columns="columns" :options="options">
            <div slot="action" slot-scope="props">
              <router-link
                class="btn btn-sm btn-success"
                :to="{ name: 'productEdit', params: { id: props.row.id } }"
              >
                Edit
              </router-link>
              <button v-on:click.prevent="deleteProduct(props.row.id)" type="button" class="btn btn-sm btn-danger">Delete</button>
            </div>
        </v-client-table>                     
    </div>
</template>
 
<script>
import axios from "axios";

export default {
  data() {
    return {
      incomes: [],
      columns: [
        "id",
        "name",
        "price",
        "description",
        "action"
      ],
      options: {
        perPage: 5,
        perPageValues: [5, 10, 15, 20, 25],
        sortable: ["name", "price"],
        filterable: ["name", "price"],
        columnsClasses: {
          action: 'column-action-width'
        }
      }
    };
  },
  methods: {
    loadincomes: function() {
      axios
        .get("http://localhost:9000/products", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => (this.incomes = response.data.data))
        .catch(error => console.log(error));
    },
    deleteProduct: function(id) {
      let self = this;
      axios
        .delete("http://localhost:9000/products/" + id, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(function(response) {
          alert("data has been deleted");
          self.loadincomes();
        })
        .catch(error => console.log(error));
    }
  },
  created() {
    this.loadincomes();
  }
};
</script>
 
<style>
#setting {
  margin-top: 5px;
  margin-left: 43px;
}

.VueTables__search-field label {
  justify-content: left;
}

td {
  text-align: left;
}

th {
  text-align: center;
}

.column-action-width th {
  width: 150px;
}

</style>     