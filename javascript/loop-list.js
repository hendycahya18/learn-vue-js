const vo = {
    data() {
        return{
            members: [
                { nama: "Hendy Cahya", umur: 19},
                { nama: "Fathir Ihsan", umur: 9},
                { nama: "Denny Wahyu", umur: 16}
            ],
            personels: {
                nama: "Hendy Cahya", 
                umur: 19
            }
        }
    }
}

Vue.createApp(vo).mount('#app')