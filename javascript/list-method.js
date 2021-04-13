var vo = {
    data() {
        return{
            members: [
                { nama: "Hendy Cahya", umur: 19},
                { nama: "Fathir Ihsan", umur: 9},
                { nama: "Denny Wahyu", umur: 16}
            ],
        }
    }
}

Vue.createApp(vo).mount('#app')