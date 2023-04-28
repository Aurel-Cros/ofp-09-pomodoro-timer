/*
Options format :
{
    content: "Text content of the element",
    attributes: [
        class: "text",
        id: "presentation",
        ...
    ]
}

Use :
const newDiv = create('div', { 
    attributes: { 
        class:"myClass", 
        contentEditable:"false"
    },
    content: "This is a div"
})
*/
class MakeElement {
    create(tagName, options = {}) {
        this.options = options;
        this.element = document.createElement(tagName);
        this.addContent();
        this.addAttributes();

        return this.element;
    }
    addContent() {
        this.element.textContent = this.options.content;
    }
    addAttributes() {
        const attrs = this.options.attributes;
        for (const attr in attrs) {
            this.element.setAttribute(attr, attrs[attr]);
        }
    }
}
export { MakeElement };