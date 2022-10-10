import { addUser } from "../../services/db.js";

export class Register extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
        const form = this.shadowRoot.querySelector("app-form");
        form.addEventListener("form-fullfiled", (evt: CustomEvent)=>{
            const user = evt.detail.user;
            const password = evt.detail.password;
            addUser({user,password});
        })
    }

    render(){
        if(!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `<section>
        <h1>Ete es el Registro<h1>
        <app-form></app-form>
        </section>
        `
    }
}

customElements.define("app-register", Register);