import "./components/index.js";
import MyCard, {AttributeCard} from "./components/Card/Card.js";

class AppContainer extends HTMLElement{
    cards: MyCard[] = [];

    constructor(){
        super();
        this.attachShadow({mode: 'open'});

        async function ObtenerApi(): Promise<void>{
            const url = 'https://rickandmortyapi.com/api/character';
            let response = await fetch(url);
            let character = await response.json();

            character.results.forEach((e: { id: number; name: string; status: string; species: any; type: any; gender: string; image: string;}) => {
                console.log(e.name)

                APICard.setAttribute(AttributeCard.name, e.name);
                APICard.setAttribute(AttributeCard.status, e.status);
                APICard.setAttribute(AttributeCard.gender, e.gender);
                APICard.setAttribute(AttributeCard.species, e.species);
                APICard.setAttribute(AttributeCard.type, e.type);
                APICard.setAttribute(AttributeCard.image, e.image);
            });
        }

        ObtenerApi();

        const APICard = this.ownerDocument.createElement("my-card") as MyCard;
        this.cards.push(APICard);

    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = ``;
            for (let i = 0; i < this.cards.length; i++) {
                const element = this.cards[i];
                this.shadowRoot?.appendChild(element);
            }
        }
    }
}

customElements.define("app-container", AppContainer);

function ObtenerApi() {
    throw new Error("Function not implemented.");
}
