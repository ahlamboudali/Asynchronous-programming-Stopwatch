import dom from "../dom.js";
import stopHandler from "../handlers/stopHandler.js";

const stopEvent = () => {
    dom.stop.addEventListener('click', stopHandler)
}

export default stopEvent;