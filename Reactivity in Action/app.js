const app = Vue.createApp({
	data() {
		return {
			title: 'Reactivity in Action',
            // result: 'RESULT',
			number: 0,
		};
	},
	methods: {
		add(a) {
			this.number += a;
		},
	},
	computed:{
		result(){
			if (this.number>5) {
				return 'Greater than 5';
			}else{
				return 'Less than or equal to 5';
			}
		}
	}
});

app.mount('#app');