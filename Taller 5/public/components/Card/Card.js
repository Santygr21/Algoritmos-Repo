export var AttributeCard;
(function (AttributeCard) {
    AttributeCard["id"] = "id";
    AttributeCard["name"] = "name";
    AttributeCard["status"] = "status";
    AttributeCard["species"] = "species";
    AttributeCard["type"] = "type";
    AttributeCard["gender"] = "gender";
    AttributeCard["image"] = "image";
})(AttributeCard || (AttributeCard = {}));
class MyCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
            id: null,
            name: null,
            status: null,
            species: null,
            type: null,
            gender: null,
            image: null
        };
        return Object.keys(attrs);
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        switch (propName) {
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./components/Card/Card.css">
            <section class="container">
                <img src="${this.image}">
                <div class="info">    
                    <h2>${this.name}</h2>
                    <p class="statusInfo">${this.status} - ${this.species}</p>
                    <p class="tittles">Gender:</p>
                    <p class="genderInfo">${this.gender}</p>
                    <p class="tittles">Type:</p>
                    <p class="genderInfo">${this.type}</p>
                </div>
            </section>
            `;
        }
    }
}
customElements.define("my-card", MyCard);
export default MyCard;
