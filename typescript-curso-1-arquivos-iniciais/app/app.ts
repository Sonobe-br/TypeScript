import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController();
const form = document.querySelector('.form');

if(form) {
    
    form.addEventListener('submit', event => {
        
        event.preventDefault();
        controller.adiciona();
        
    });

} else {

    throw Error ('The application could not be initialized. Check the existence of the form')

}



