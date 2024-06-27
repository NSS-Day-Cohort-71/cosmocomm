// List all source planets in dropdown
// Need to fetch all planets

import { getAllPlanets } from "../managers/planetManager.js";
import { setSenderId } from "./TransientState.js";

export const SourcePlanetSelector = async () => {
  const planets = await getAllPlanets();

  let planetHTML = `
        <label for="planet-source" name="planet-source">Sender:</label>
        <select id="planet-source" name="planet-source">
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

const handleSourcePlanetChange = (e) => {
  if (e.target.name === "planet-source") {
    setSenderId(parseInt(e.target.value));
  }
};

document.addEventListener("change", handleSourcePlanetChange);
