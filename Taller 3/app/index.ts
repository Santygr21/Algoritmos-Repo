import data from './data.js';

import MySuggest, {AttributeSuggest} from "./components/Suggest/Suggest.js";
import MyStory, {AttributeStory} from "./components/Stories/Stories.js";
import "./components/index.js";
import MyProfile, {Attribute} from "./components/Post/Post.js";


class AppContainer extends HTMLElement{
    profiles: MyProfile[] = [];
    suggest: MySuggest[] = [];
    stories: MyStory[] = [];

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        data.forEach((data)=>{
            const postCard = this.ownerDocument.createElement("my-post") as MyProfile;
            postCard.setAttribute(Attribute.pictureprofile, data.pictureprofile);
            postCard.setAttribute(Attribute.user, data.user);
            postCard.setAttribute(Attribute.ubi, data.ubi);
            postCard.setAttribute(Attribute.content, data.content);
            postCard.setAttribute(Attribute.likes, data.likes);
            postCard.setAttribute(Attribute.description, data.description);
            postCard.setAttribute(Attribute.coments, (data.coments));
            postCard.setAttribute(Attribute.date, data.date);
            this.profiles.push(postCard)
        });
        data.forEach((data)=>{
            const Story = this.ownerDocument.createElement("my-story") as MyStory;
            Story.setAttribute(AttributeStory.pictureprofile, data.pictureprofile);
            Story.setAttribute(AttributeStory.user, data.user);
            this.stories.push(Story)
        });
    }
    connectedCallback(){
        this.render();
    }

    render(){
        if (this.shadowRoot){
            this.shadowRoot.innerHTML = ``;

            this.profiles.forEach((profile) => {
                this.shadowRoot?.appendChild(profile); 
             });
             this.stories.forEach((stori) => {
                this.shadowRoot?.appendChild(stori); 
             });  
        }
    }
}

customElements.define("app-container", AppContainer);