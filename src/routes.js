import homeView from "./components/homeView.vue";
import productView from "./components/productView.vue";
import productCreate from "./components/productCreate.vue";
import productEdit from "./components/productEdit.vue";
import aboutView from "./components/aboutView.vue";
import login from "./components/login.vue";


export default [
    { path: '*', component:login },
    { path: '/product/view', component: productView, name: 'productView' },
    { path: '/product/create', component: productCreate, name: 'productCreate' },
    { path: '/product/approve/:id', component: productEdit, name: 'productEdit' },
    { path: '/home', component: homeView, name: 'homeView' },    
    { path: '/about', component: aboutView, name: 'aboutView' },
    { path: '/login', component: login, name: 'login' },    
    

]