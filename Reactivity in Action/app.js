const app = Vue.createApp({
	data() {
		return {
			title: 'Reactivity in Action',
            result: 'RESULT',
		};
	},
	methods: {
		outputGoal() {
		},
	},
});

app.mount('#app');