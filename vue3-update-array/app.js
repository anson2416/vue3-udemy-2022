const app = Vue.createApp({
	data() {
		return {
			message: 'Reactivity in Action',
			fruits: ['apple', 'banana', 'orange'],
			newFruit: '',
			numbers:[1,2,3,45,6,7,8,9,10],
		};
	},
	methods: {
		addFruit() {
			if (this.newFruit.trim()) {
			  this.fruits.push(this.newFruit.trim());
			  this.newFruit = ''; // 清空输入框
			}
		  },
		removeFruit(index){
			this.fruits.splice(index, 1);
		}
	},
	computed:{
	},
	watch:{
		
	}
});

app.mount('#app');