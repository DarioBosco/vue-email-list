/* 
Descrizione:
Attraverso l'apposita API di Boolean
(https://flynn.boolean.careers/exercises/api/random/mail)
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus:
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/

Vue.config.devtools = true;

const app = new Vue({
	el: '#app',
	data: {
		emailsAmount: 10,
		emails: [],
		bonusEmails: [],
	},
	mounted() {
		for (let i = 0; i < this.emailsAmount; i++) {
			axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
				this.emails.push(res.data.response);
			});
		}

		/* Bonus */
		/* Gli elementi appaiono tutti assieme in quanto assegno tmp a bonusEmails soltanto quando gli indirizzi email sono gia stati recuperati tutti dalla API di Boolean */
		let tmp = [];
		for (let i = 0; i < this.emailsAmount; i++) {
			axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
				tmp.push(res.data.response);
				tmp.length === this.emailsAmount ? (this.bonusEmails = tmp) : null;
			});
		}
	},
});
