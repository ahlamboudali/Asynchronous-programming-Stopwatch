import dom from "../dom.js";
import resetHandler from "../handlers/resetHandler.js";

const resetEvent = () => {
    dom.reset.addEventListener('click', resetHandler);
}

export default resetEvent;