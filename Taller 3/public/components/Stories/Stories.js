export var AttributeStory;
(function (AttributeStory) {
    AttributeStory["pictureprofile"] = "pictureprofile";
    AttributeStory["user"] = "user";
    AttributeStory["ubi"] = "ubi";
    AttributeStory["content"] = "content";
    AttributeStory["likes"] = "likes";
    AttributeStory["description"] = "description";
    AttributeStory["coments"] = "coments";
    AttributeStory["date"] = "date";
})(AttributeStory || (AttributeStory = {}));
class MyStory extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    static get observedAttributes() {
        const attrs = {
            pictureprofile: null,
            user: null,
            ubi: null,
            content: null,
            likes: null,
            description: null,
            coments: null,
            date: null
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
            <link rel="stylesheet" href="./components/Stories/Stories.css">
            <section class="Container">
                <section>
                    <img src="${this.pictureprofile}">
                    <p>${this.user}</p>
                </section>
            </section>`;
        }
    }
}
customElements.define("my-story", MyStory);
export default MyStory;
