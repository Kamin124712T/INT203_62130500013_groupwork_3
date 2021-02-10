const app = {
    data() {
        return {
            gallerys:[{img:"images/Gallery1.jpg",address:"Kyoto,Japan",favorite:false},
                     {img:"images/Gallery2.jpg",address:"Tokyo,Japan",favorite:false},
                     {img:"images/Gallery3.jpg",address:"Wonderland,Kiki",favorite:false}]
        }
    },
    methods: {
        favoriteImg(index){
            this.gallerys[index].favorite = !this.gallerys[index].favorite
        },
    },
    computed:{
        countGallerys(){
            return this.gallerys.length
        },
        countfavorite(){
            return this.gallerys.filter(g => g.favorite).length
        }
    },
}

var mountedApp = Vue.createApp(app).mount('#app')