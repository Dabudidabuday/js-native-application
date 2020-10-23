import Navigation from '../components/Navigation';

class Header {
    constructor(htmlElement) {
        this._root = htmlElement;
        this._navigation = null;
        this._title = this._root.querySelector('.navbar-brand');
        this.data = {
            title: 'Header super bar'
        }
    }

    /**
     * @private
     * @method _setTitle
     * @param data
     * @return {Void}
     */
    _setTitle(data) {
        return this._title.textContent = data;
    }

    /**
     * @private
     * @method _setNavigation
     * @return {HTMLAllCollection}
     */
    _setNavigation() {
        let navigation = new Navigation();
        navigation.run('navbar-nav')
    }

    _init() {
        this._setTitle(this.data.title)
        this._setNavigation()
    }

    run() {
        this._init();
    }
}

export default Header;