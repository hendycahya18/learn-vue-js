var vo = new Vue({
    el: '#app',
    data: {
        nama :'Hendy',
        umur : 0,
        done : false
    },
    computed: {
        biodata:{
            get: function(){
                return this.nama + " umurnya " + this.umur;
            },
            set: function(params){
                var cridential = params.split(' ')
                this.nama = cridential[0]
                this.umur = cridential[1]
            }
        }
    }
});