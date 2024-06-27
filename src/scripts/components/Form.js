// Compile all form data inputs

import { MessageTextArea } from "./MessageTextArea.js";
import { SourcePlanetSelector } from "./SourcePlanetSelector.js";
import { Submit } from "./Submit.js";
import { TargetPlanetSelector } from "./TargetPlanetSelector.js";
import { TopicSelector } from "./TopicSelector.js";

export const Form = async () => {
  return `
        ${await SourcePlanetSelector()}
        ${await TargetPlanetSelector()}
        ${await TopicSelector()}
        ${MessageTextArea()}
        ${Submit()}
    `;
};
