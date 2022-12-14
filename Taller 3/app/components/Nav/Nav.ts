class MyNav extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./components/Nav/Nav.css">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&display=swap" rel="stylesheet">
            <section>
                <section class="Options">
                    <img class="Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png">

                    <div class="IconText">
                        <img src="https://cdn-icons-png.flaticon.com/512/1946/1946436.png">
                        <h3>Home</h3>
                    </div>
                    <div class="IconText">
                        <img src="https://cdn-icons-png.flaticon.com/512/54/54481.png">
                        <h3>Search</h3>
                    </div>
                    <div class="IconText">
                        <img src="https://cdn-icons-png.flaticon.com/512/2089/2089157.png">
                        <h3>Messages</h3>
                    </div>
                    <div class="IconText">
                        <img src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png">
                        <h3>Notifications</h3>
                    </div>
                    <div class="IconText">
                        <img src="https://cdn-icons-png.flaticon.com/512/5728/5728191.png">
                        <h3>New</h3>
                    </div>
                    <div class="IconText">
                        <img class="ProfilePic" src="https://i.ytimg.com/vi/KxYDR0tI12I/maxresdefault.jpg">
                        <h3>Profile</h3>
                    </div>
                </section>

                <section class="End">
                    <div class="IconText">
                        <img src="https://cdn-icons-png.flaticon.com/512/2976/2976215.png">
                        <h3>Settings</h3>
                    </div>
                </section>
            </section>`
        }
    }
}

customElements.define("my-nav", MyNav);
export default MyNav;