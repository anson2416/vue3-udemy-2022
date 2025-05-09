const app = Vue.createApp({
	data() {
		return {
			output: '',
			confirmedOutput: '',
			name:'',
			fullname : '',
			previousFullname :'',
		};
	},
	watch: {
		// output(value) {
		// 	if (value === '') {
		// 		this.confirmedOutput = '';
		// 	}
		// },
		name(value, preValue) {
			if (value === '') {
				this.fullname = '';
			} else {
				this.fullname = value + ' Smith';
				this.previousFullname = preValue;
			}
		},
	},
	methods: {
		showAlert() {
			alert('This is an alert!');
		},
		updateOutput(event) {
			console.log("updateOutput method called");
			this.output = event.target.value;
		},
		confirmOutput(event) {
			console.log("confirmOutput method called");
			this.confirmedOutput = this.output + event.target.value;
		},
	},
	computed:{
		// fullname() {
		// 	console.log('Computing fullname...');
		// 	if (this.name === '') {
		// 		return '';
		// 	}
		// 	return this.name + ' ' + 'Smith';
		// }

	},
});

app.mount('#assignment');