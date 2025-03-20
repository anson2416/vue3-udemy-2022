const app = Vue.createApp({
	data() {
		return {
			yourAge: 'YOUR AGE',
			yourAge5: " in 5 years is ",
			favNum: 'Favorite Number: RANDOM NUMBER BETWEEN 0 AND 1',
			yourAgeNow : 15,
			imageUrl: "images/black-cat.jpeg",
			name: "Magic"
		};
	},
	methods: {
		outputYourAge5() {
			return this.yourAge + this.yourAge5
		},
		outputAge5YearsLater() {
			return this.yourAge + this.yourAge5 + (this.yourAgeNow + 5)
		},
		outputGoal() {
		},
		outputRandomNum(){
			return Math.random()
		}
	},
});

app.mount('#user-goal');
