class Profile extends HTMLElement{
    static get observedAttributes(){
    return ['name']
    }
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }
    attributeChangedCallback(propName, oldValue, newValue){
        this[propName] = newValue;
        this.render()
    }
    connectedCallback(){
        this.render();
    }
    render(){
        this.shadowRoot.innerHTML =`
        <section>
            <h1>${this.name}</h1>
        </section>`;
        console.log(this.name);
    }
}

customElements.define('profile-card', Profile)