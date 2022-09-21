import data from './data.js';
import { AttributeStory } from "./components/Stories/Stories.js";
import "./components/index.js";
import { Attribute } from "./components/Post/Post.js";
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.profiles = [];
        this.suggest = [];
        this.stories = [];
        this.attachShadow({ mode: 'open' });
        data.forEach((data) => {
            const postCard = this.ownerDocument.createElement("my-post");
            postCard.setAttribute(Attribute.pictureprofile, data.pictureprofile);
            postCard.setAttribute(Attribute.user, data.user);
            postCard.setAttribute(Attribute.ubi, data.ubi);
            postCard.setAttribute(Attribute.content, data.content);
            postCard.setAttribute(Attribute.likes, data.likes);
            postCard.setAttribute(Attribute.description, data.description);
            postCard.setAttribute(Attribute.coments, (data.coments));
            postCard.setAttribute(Attribute.date, data.date);
            this.profiles.push(postCard);
        });
        data.forEach((data) => {
            const Story = this.ownerDocument.createElement("my-story");
            Story.setAttribute(AttributeStory.pictureprofile, data.pictureprofile);
            Story.setAttribute(AttributeStory.user, data.user);
            this.stories.push(Story);
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ``;
            this.profiles.forEach((profile) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(profile);
            });
            this.stories.forEach((stori) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(stori);
            });
        }
    }
}
customElements.define("app-container", AppContainer);
