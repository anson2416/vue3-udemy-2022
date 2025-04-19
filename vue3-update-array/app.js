const app = Vue.createApp({
	data() {
		return {
			message: 'Reactivity in Action',
			fruits: ['apple', 'banana', 'orange'],
			newFruit: '',
		};
	},
	methods: {
		addFruit(){
			if (this.newFruit === '') {
				alert('Please enter a fruit name');
				return;
			}	
			this.fruits.push(this.newFruit);
		}
	},
	computed:{
	},
	watch:{
		
	}
});

app.mount('#app');