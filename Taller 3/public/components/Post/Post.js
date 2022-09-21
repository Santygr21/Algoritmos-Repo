export var Attribute;
(function (Attribute) {
    Attribute["pictureprofile"] = "pictureprofile";
    Attribute["user"] = "user";
    Attribute["ubi"] = "ubi";
    Attribute["content"] = "content";
    Attribute["likes"] = "likes";
    Attribute["description"] = "description";
    Attribute["coments"] = "coments";
    Attribute["date"] = "date";
})(Attribute || (Attribute = {}));
class MyProfile extends HTMLElement {
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
            <link rel="stylesheet" href="./components/Post/Post.css">
        <div class="container">
            <div class="infoContainer">
                <div class="userInfo">   
                    <img src="${this.pictureprofile}" class="profileImg">            
                    <div class="username"><h2>${this.user}</h2></div>
                </div>
                    <div class="postOptions"><p>•••</p></div>
            </div>
        <div class="imgPost"><img src="${this.pictureprofile}"></div>
        <div class="icons">
        <div class="IgIcons">
            <img src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png">
            <img src="https://cdn-icons-png.flaticon.com/512/8316/8316048.png">
            <img src="https://cdn-icons-png.flaticon.com/512/2550/2550207.png">
        </div>
        <div class="carousel">
            <div class="grayCircle"></div>
            <div class="grayCircle"></div>
            <div class="blueCircle"></div>
            <div class="grayCircle"></div>
            <div class="grayCircle"></div>
        </div>
        <div class="saveIcon">
            <img src="https://cdn-icons-png.flaticon.com/512/5894/5894523.png">
        </div></div>
        <h4 class="counter">${this.likes} likes</h4>
        <div class="description">
            <h4 class="desUser">${this.user}</h4>
            <h4 class="desMess">${this.description}</h4>
            <h4 class="desHashtag">#vector</h4>
        </div>
        <h5>View all ${this.coments} comments</h5>
        <h6>${this.date}</h6>
        </div>`;
        }
    }
}
customElements.define("my-post", MyProfile);
export default MyProfile;
