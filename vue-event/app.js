const app = Vue.createApp({
	data() {
		return {
			result: 0,
		};
	},
	methods: {
		addOne(){
			this.result += 1;
		},
		deductOne(){
			this.result -= 1;
		},
	},
});

app.mount('#app');
