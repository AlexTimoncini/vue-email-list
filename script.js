const { createApp } = Vue

createApp({
    data() {
        return {
            emailList: [],
            emailVisible: 10,
        }
    },
    methods: {
        getRandomEmailFromApi(){
            for(let i = 0; i < this.emailVisible; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response)=>{                
                    this.emailList.push(response.data.response);
                });
            }
        }
    },
    created(){
        this.getRandomEmailFromApi()
    }
}).mount('#app')