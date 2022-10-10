export class Form extends HTMLElement{
    user = "";
    password = "";
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }
    connectedCallback(){
        this.render();

        const btn = this.shadowRoot?.querySelector("button");
        btn?.addEventListener("click", ()=>{
            const event: CustomEvent<{user: string, password: string}> = 
            new CustomEvent("form-full", {
                detail: {user: this.user, password: this.password},
                composed: true
            })
            this.dispatchEvent(event);
        });
        const userInput = this.shadowRoot?.querySelector('input[type="user"]');
        const passwordInput = this.shadowRoot?.querySelector('input[type="password"]');

        userInput?.addEventListener("change", (evt) =>{
            const value: string = (evt.target as HTMLInputElement).value || "";
            this.user = value; 
        });
        passwordInput?.addEventListener("change", (evt) =>{
            const value: string = (evt.target as HTMLInputElement).value || "";
            this.password = value;
        });
    }

    render(){
        if (!this.shadowRoot) return; 
            this.shadowRoot.innerHTML = `
            <section>
                <h2>Form</h2>
                <div>
                <label>User</label>
                <input type="user">
            </div>
            <div>
                <label>Contraseña</label>
                <input type="password">
            </div>
            <button type="submit">Enviar</button>
            </section>`; 
        }
    }


customElements.define("app-form", Form);