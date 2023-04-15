import  { AttributeFigure } from "../Figure/figure";
import { AttributeButton } from "../Button/button";


export enum AttributeCard {
    "animal" = "animal",
    "career" = "career",
    "celebrity" = "celebrity",
    "dev" = "dev",
    "explicit" = "explicit",
    "fashion" = "fashion",
    "btn_text" = "btn_text",


}

export default class Card extends HTMLElement{

    animal?: string;
    career ?:string;
    celebrity?: string;
    dev?: string;
    explicit?:string;
    fashion?: string;
    food?:string;
    btn_text?:string;

   
    static get observedAttributes(){
        const attrs : Record <AttributeCard, null> = {

            animal: null,
            career :null,
            celebrity: null,
            dev: null,
            explicit:null,
            fashion: null,
            btn_text:null,
           
        }
        return Object.keys(attrs)
    }
    attributeChangedCallback(
        propName:AttributeCard,
        _:unknown,
        newValue: string,
    ){switch (propName){
        default:
        this[propName] = newValue;
        break;
     }
    }

    constructor(){
        super();
        this.attachShadow({mode:'open'})
    }

    connectedCallback(){
        this.render()
    }
    render(){
        if(this.shadowRoot)
        this.shadowRoot.innerHTML = ``

        const container = this.ownerDocument.createElement("section");
        const figure = this.ownerDocument.createElement("app-figure");
        figure.setAttribute(AttributeFigure.animal, this.animal);
        const button = this.ownerDocument.createElement("app-button");
        button.setAttribute(AttributeButton.btn_text, this.btn_text)

        container.appendChild(figure)
        container.appendChild(figure)
        this.shadowRoot?.appendChild(container)


    }

    

   

}

customElements.define("app-card", Card);




