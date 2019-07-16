import LoggerUtil from '../util/logger.util.js';
import html from './home.component.html';
import css from './home.component.css';

const $appName = 'home-app';
const $logger = LoggerUtil.logger($appName);
const $sheet = new CSSStyleSheet();

class HomeApp extends HTMLElement{
    
    static get observedAttributes(){
        return [];
    }

    constructor(){
        super();
    }

    connectedCallback() {
        $logger.info(`connected callback : ${$appName}`);
        this.renderTo();
    }

    disconnectedCallback(){

    }

    renderTo(){
        this.localDom = this.attachShadow({mode: 'open'});
        $sheet.replace(css);
        this.localDom.adoptedStyleSheets = [$sheet];
        this.localDom.innerHTML = this.renderTemplate();
        //Uncomment the below line if required to render from html 
        //this.renderTemplate();
    }
    
    renderHTMLTemplate(){
        this.localDom.appendChild(new DOMParser().parseFromString(html,'text/html').firstChild)
    }

    renderTemplate(){
        return `<div>${$appName}</div>`
    }

}

customElements.define($appName,HomeApp);