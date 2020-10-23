import Header from "./js/sections/Header";

class App {
    constructor() {

    }

    _renderSections() {
        let header = new Header();

        header.run();
    }


    run() {

    }
}

window.onload = () => {
    let app = new App();

    app.run();
}