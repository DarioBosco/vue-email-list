Vue.config.devtools = true;

const app = new Vue({
	el: '#app',
	data: {
		emailsAmount: 10,
		emails: [],
	},
	mounted() {
		for (let i = 0; i < this.emailsAmount; i++) {
			axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
				this.emails.push(res.data.response);
			});
		}
	},
});
