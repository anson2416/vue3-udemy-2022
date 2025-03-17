const app = Vue.createApp({
	data() {
		return {
			yourAge: 'YOUR AGE',
			yourAge5: " in 5 years",
			favNum: 'Favorite Number: RANDOM NUMBER BETWEEN 0 AND 1',
		};
	},
	methods: {
		outputYourAge5() {
			return this.yourAge + this.yourAge5
		},
		outputGoal() {
		}
	},
});

app.mount('#user-goal');
