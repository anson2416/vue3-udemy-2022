
const app = Vue.createApp(
    {
        data() {
            return({

            message:"hello vue3",
            count: 3,
            })
        }
    }
);

app.mount('#app')
