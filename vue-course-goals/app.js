const app = Vue.createApp({
	data() {
		return {
			courseGoalsA: 'Finishe the course and learn Vue!',
			courseGoalsB: '<h4>Master Vue and build amazing apps!</h4>',
			vueLink: 'http://www.vuejs.org/',
		};
	},
	methods: {
		outputGoal() {
			const randomNumber = Math.random();
			// can't use variable courseGoalsA. need to add `this.`
			return randomNumber < 0.5 ? this.courseGoalsA : this.courseGoalsB;
		}
	},
});

app.mount('#user-goal');
