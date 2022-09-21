export var AttributeSuggest;
(function (AttributeSuggest) {
    AttributeSuggest["pictureprofile"] = "pictureprofile";
    AttributeSuggest["user"] = "user";
})(AttributeSuggest || (AttributeSuggest = {}));
class MySuggest extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ``;
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./components/Suggest/Suggest.css">
            <section class="suggestBoxContainer">
                <section class="suggestProfile">
                    <img src="https://assets-es.imgfoot.com/media/cache/1200x1200/cristiano-ronaldo-enerve.jpg">
                    <h3>Cristiano</h3>
                </section>
                <section class="suggestText">
                    <h2>Sugerencias para ti</h2>
                    <h3>Ver todo</h3>
                </section>
                <section class="suggestBox">
                    <img src="https://th.bing.com/th/id/R.28dbc1f8a58d34bb89378f1004df769c?rik=KrAeSOWp0Q8B6w&pid=ImgRaw&r=0">
                    <section><h1>Messi</h1>
                    <h2>seguir</h2></section>
                </section>
                <section class="suggestBox">
                    <img src="https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/minecraft-creeper-face.jpg">
                    <section><h1>Jhojocor</h1>
                    <h2>seguir</h2></section>
                </section>
                <section class="suggestBox">
                    <img src="https://i.blogs.es/d86db0/meme-fry-1/450_1000.jpg">
                    <section><h1>Santygr_21</h1>
                    <h2>seguir</h2></section>
                </section>
            </section>`;
        }
    }
}
customElements.define("my-suggest", MySuggest);
export default MySuggest;
