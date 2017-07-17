/*parte 1*/

class Button{
  constructor(element, text, icon){
    this.element = document.querySelector(element);
    this.icon = icon;
    this.text = text;
    this.render();
  }

  render(){
    this.element.innerHTML = `
      <span class="glyphicon glyphicon-${this.icon}"></span>
      ${this.text}
    `;
  }
  set label(newText) {
    if (typeof newText === "string") {
      this.text =`${newText}`;
    } else {
      console.log(`${newText} no es un nombre válido`);
    }
  }
  }


/*parte2*/
class RedButton extends Button{
  constructor(element, text, icon, color){
    super(element,text,icon);
    this.color = color;
    this.render();
  }

  render(){
    super.render();
    this.element.style.color = `${this.color}`;
  }
}

const button = new Button('.hello-button', 'Planta un pino', 'tree-conifer');
const button2 = new RedButton('.bye-button', 'Y bebe vino', 'glass', 'red');
button2.label = "pepe";
button.render();
button2.render();
