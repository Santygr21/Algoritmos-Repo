import { queryUser } from "../../services/db.js";
export class Login extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
        const form = this.shadowRoot.querySelector("app-form");
        form.addEventListener("form-fullfiled", (evt) => {
            const user = evt.detail.user;
            const password = evt.detail.password;
            queryUser({ user, password }).then(value => {
                if (value) {
                    const event = new CustomEvent("login-success", {
                        composed: true
                    });
                    console.log(this);
                    this.dispatchEvent(event);
                }
                else {
                    alert("no es la data correcta");
                }
            });
        });
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `<section>
        <h1>Este es el Login<h1>
        <app-form></app-form>
        </section>
        `;
    }
}
customElements.define("app-login", Login);
