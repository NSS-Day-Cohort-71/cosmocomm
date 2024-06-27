// List all source planets in dropdown
// Need to fetch all planets

import { getAllPlanets } from "../managers/planetManager.js";
import { setRecipientId } from "./TransientState.js";

export const TargetPlanetSelector = async () => {
  const planets = await getAllPlanets();

  let planetHTML = `
        <label for="planet-target" name="planet-target">Recipient:</label>
        <select id="planet-target" name="planet-target">
            <option disabled selected>Choose planet</option>
    `;

  planetHTML += planets
    .map((planet) => {
      return `
            <option value=${planet.id}>${planet.name}</option>
        `;
    })
    .join("");

  planetHTML += `</select>`;

  return planetHTML;
};

const handleTargetPlanetChange = (e) => {
  if (e.target.name === "planet-target") {
    setRecipientId(parseInt(e.target.value));
  }
};

document.addEventListener("change", handleTargetPlanetChange);
