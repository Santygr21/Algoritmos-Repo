export enum AttributeCard {
    "id" = "id",
    "name" = "name",
    "status" = "status",
    "species" = "species",
    "type" = "type",
    "gender" = "gender",
    "image" = "image"
}

class MyCard extends HTMLElement{
    Id?: number;
    name?: string;
    status?: string;
    species?: string;
    type?: string;
    gender?: string;
    image?: string;

    static get observedAttributes(){
        const attrs: Record<AttributeCard,null> = {
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

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(
        propName: AttributeCard, 
        oldValue: string | undefined, 
        newValue: any | undefined){
            switch (propName) {
                default:
                    this[propName] = newValue;
                    break;
                }
            this.render();
        }

    render(){
        if(this.shadowRoot){
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
            `
        }
    }

}

customElements.define("my-card", MyCard);
export default MyCard;