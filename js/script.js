/*
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/

const { createApp } = Vue;

createApp({
    data(){
        return{
            userName: "",
            greetingMessage: "",
            imageUrl: "https://www.donnad.it/sites/default/files/styles/r_visual_d/public/202116/sfondi-desktop-mare-gratis-3.jpg?itok=OfqcmtZy",
            imgAlt: "Foto tartaruga"
        }
    },
    methods: {
        greet: function(){
            this.greetingMessage = `Ciao ${this.userName}`;
        }
    }

}).mount("#app");
