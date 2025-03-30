const app = Vue.createApp({
	data() {
		return {
			result: 0,
			name: 'John',
			productList:[
				{title: 'A Book', quantity: 1, price: 9.99},
				{title: 'A Carpet', quantity: 2, price: 99.99},
				{title: 'A Pen', quantity: 3, price: 2.99},
				{title: 'A Phone', quantity: 4, price: 999.99},
			]
		};
	},
	methods: {
		setName(event, lastName){
			// event is prvided by browser by default
			this.name = event.target.value + ' ' + lastName;
		},
		addOne(){
			this.result += 1;
		},
		deductOne(){
			this.result--;
		},
		add(num){
			this.result += num;
		}
	},
});

app.mount('#app');
