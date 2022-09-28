import '../app.js'
import data from './data.js'

console.log(data);
class Post extends HTMLElement{  
    constructor(){
        super()
        this.attachShadow({mode: 'open'})
        console.log(data.length);
    }
    connectedCallback(){
        this.render()
    }
    render(){
        const compts = data.map(({name}) => `<profile-card name=${name}></profile-card>`)
        this.shadowRoot.innerHTML = compts.join("")        
        this.shadowRoot.innerHTML = `<link rel="stylesheet" href="./src/components/post/style.css">
        <div class="container">
            <div class="infoContainer">
                <div class="userInfo">   
                    <img src="http://cdn.shopify.com/s/files/1/2445/4147/articles/curly_1200x1200.jpeg?v=1648055032" class="profileImg">            
                    <div class="username"><h2>${this.name}</h2>
                    <h3>Sponsored</h3></div>
                </div>
                    <div class="postOptions"><p>•••</p></div>
            </div>
        <div class="imgPost"><img src="http://cdn.shopify.com/s/files/1/2445/4147/articles/curly_1200x1200.jpeg?v=1648055032"></div>
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
        <h4 class="counter">20.451 views</h4>
        <div class="description">
            <h4 class="desUser">jonathandoe</h4>
            <h4 class="desMess">instagram template</h4>
            <h4 class="desHashtag">#vector</h4>
        </div>
        <h5>View all 245 comments</h5>
        <h6>2 DAYS AGO</h6>
        </div>`;
    }
}

customElements.define("app-container", Post)