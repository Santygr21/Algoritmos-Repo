var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import "./components/index.js";
import { AttributeCard } from "./components/Card/Card.js";
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.cards = [];
        this.attachShadow({ mode: 'open' });
        function ObtenerApi() {
            return __awaiter(this, void 0, void 0, function* () {
                const url = 'https://rickandmortyapi.com/api/character';
                let response = yield fetch(url);
                let character = yield response.json();
                character.results.forEach((e) => {
                    console.log(e.name);
                    APICard.setAttribute(AttributeCard.name, e.name);
                    APICard.setAttribute(AttributeCard.status, e.status);
                    APICard.setAttribute(AttributeCard.gender, e.gender);
                    APICard.setAttribute(AttributeCard.species, e.species);
                    APICard.setAttribute(AttributeCard.type, e.type);
                    APICard.setAttribute(AttributeCard.image, e.image);
                });
            });
        }
        ObtenerApi();
        const APICard = this.ownerDocument.createElement("my-card");
        this.cards.push(APICard);
    }
    connectedCallback() {
        this.render();
    }
    render() {
        var _a;
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ``;
            for (let i = 0; i < this.cards.length; i++) {
                const element = this.cards[i];
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(element);
            }
        }
    }
}
customElements.define("app-container", AppContainer);
function ObtenerApi() {
    throw new Error("Function not implemented.");
}
