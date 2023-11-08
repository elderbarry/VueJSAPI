
Vue.createApp({
    data() {
        return {
            name: "Header Title",
            links: ['Home', 'About', 'Contact' ],
        };
    }
}).mount("#header");

Vue.createApp({
    data() {
        return {
            products: [],
            selected_product_id: null
        };
    },
    computed: {
        selected_product(){
            return this.products.find(product=> {return product.id == this.selected_product_id});
        }
    },
    methods: {
        setSelectedProduct(id) {
            console.log(id);
            this.selected_product_id = id;
        }
    },
    mounted() {
        fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=10')
            .then(res=>res.json())
            .then(json=>this.products=json);
    }
    
}).mount("#wrapper");