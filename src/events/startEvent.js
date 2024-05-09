import dom from "../dom.js";
import startHandler from "../handlers/startHandler.js";

const startEvent = () => {
    dom.start.addEventListener('click', startHandler);
};

export default startEvent;
