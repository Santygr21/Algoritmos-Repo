export enum AttributeStory {
    "pictureprofile" = "pictureprofile",
    "user" = "user",
    "ubi" = "ubi",
    "content" = "content",
    "likes" = "likes",
    "description" = "description",
    "coments" = "coments",
    "date" = "date"
}

class MyStory extends HTMLElement {
    pictureprofile?: any;
    user?: string;
    ubi?: string;
    content?: any;
    likes?: number;
    description?: string;
    coments?: number;
    date?: string;

    static get observedAttributes(){
        const attrs: Record<AttributeStory,null> = {
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

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(
        propName: AttributeStory, 
        oldValue: string | undefined, 
        newValue: string | undefined){
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
            <link rel="stylesheet" href="./components/Stories/Stories.css">
            <section class="Container">
                <section>
                    <img src="${this.pictureprofile}">
                    <p>${this.user}</p>
                </section>
            </section>`
        }
    }
}

customElements.define("my-story", MyStory);
export default MyStory;