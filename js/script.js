/* 
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Utilizzare almeno una classe CSS in modo dinamico
Bonus:
1. Aggiungere alla pagina un’immagine, presa anch’essa da un data.
2. Cambiare dinamicamente l’immagine
3. Al click di un bottone nascondere l’immagine e mostrare un testo
Buon Vue! 
 */

const {createApp} = Vue;

createApp({
  data(){
    return{
      messaggio: 'Il mio primo titolo con Vue',
      messaggioSaluto: 'Ciao',
      classeTestoRosso: 'red',
      path: 'img/',
      imgName: 'cane.jpeg',
      isShowImg: true,
      userName: 'Riccardo',
      userLastName: 'Civardi',
      colorText: '',
      colorTextTitle: 'black',
      counter: 0,
      counter2: 0,
      mieClassi: 'text-primary fw-bold text-decoration-underline',
      randomNumber: '',
      text: 'testo trsto testo testo testo',
      textHtml: 'testo <strong>testo</strong> <i>testo</i>'
    }
  },

  methods:{

    createAltImg(){
      // ritorno l'alt dell'immagine nell'html
      return this.imgName.toLowerCase().split('.')[0];
    },

    changeImg(newImg){
      // cambia il data imgCane con la nuova immagine passata come parametro in html
      this.imgName = newImg;
    },

    showHide(){
      // cambia la booleana nel contrario di se stessa
      this.isShowImg = !this.isShowImg;
    },

    cambiaColore() {
      //cambia il nome della classe da nero a rosa e viceversa
      this.colorTextTitle === 'black' ? this.colorTextTitle = 'pink' : this.colorTextTitle = 'black';
    },

    increaseDecreaseCounter(bool){
      // incrementa o decrementa a seconda del bottone cliccato che passa il parametro
      bool ? this.counter2++ : this.counter2--;
    },

    getRandomNumber(min,max){
      return this.randomNumber = Math.floor(Math.random() * (max - min) +1) + min;
    },

    funzioneEstesa: function() {
      console.log('FUNZIONE ESTESA');
    },

    funzioneCompatta() {
      console.log('FUNZIONE COMPATTA')
    },

    arrowFunzione : () => {
      console.log('arrow')
    }


  }
}).mount('#app');