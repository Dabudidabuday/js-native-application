'use strict';

import { createElement, appendElement } from '../helpers/Creational'

class Navigation {
    constructor(htmlElement) {
        this._root = htmlElement;
        this.links = [
            {
                title: 'Home',
                href: '/'
            },
            {
                title: 'About',
                href: '/about'
            }, {
                title: 'Master',
                href: '/master'
            }
        ];
    }

    /**
     * @private
     * @method _renderLinks
     * @return {HTMLElement}
     * @param title
     * @param href
     */
    _createLink(title, href) {
        let link = createElement('a');

        link.classList.add('nav-item', 'nav-link');
        link.textContent = title;
        link.setAttribute('href', href);
    }

    /**
     *
     * @private
     * @param links
     * @return {HTMLElement}
     */
    _renderLinks(links) {
        return links.map(link => {
            this._createLink(link.title, link.href);

            appendElement(this._root, link);
        })
    }

    run() {
        this._renderLinks(this.links);
    }
}

export default Navigation