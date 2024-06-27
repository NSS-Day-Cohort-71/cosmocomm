// render all components to the DOM

import { Form } from "./components/Form.js";
import { MessageDisplay } from "./components/MessageDisplay.js";

export const render = async () => {
  const containerElement = document.querySelector("#container");

  const messageDisplay = await MessageDisplay();

  containerElement.innerHTML = `
        ${await Form()}
        ${messageDisplay}
    `;
};

document.addEventListener("newTransmission", render);

render();
