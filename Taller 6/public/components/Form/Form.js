export class Form extends HTMLElement {
    constructor() {
        super();
        this.user = "";
        this.password = "";
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        var _a, _b, _c;
        this.render();
        const btn = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("button");
        btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
            const event = new CustomEvent("form-full", {
                detail: { user: this.user, password: this.password },
                composed: true
            });
            this.dispatchEvent(event);
        });
        const userInput = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('input[type="user"]');
        const passwordInput = (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector('input[type="password"]');
        userInput === null || userInput === void 0 ? void 0 : userInput.addEventListener("change", (evt) => {
            const value = evt.target.value || "";
            this.user = value;
        });
        passwordInput === null || passwordInput === void 0 ? void 0 : passwordInput.addEventListener("change", (evt) => {
            const value = evt.target.value || "";
            this.password = value;
        });
    }
    render() {
        if (!this.shadowRoot)
            return;
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
