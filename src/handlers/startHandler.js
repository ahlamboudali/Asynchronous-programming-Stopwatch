import data from "../data.js";
import dom from "../dom.js";
import updateTimeDom from "../components/updateTimeDom.js";
import updateTime from "../utils/updateTime.js";

const startHandler = () => {
   if(data.intervalId){
    clearInterval(data.intervalId);
   }

   data.intervalId = setInterval(() => {
    const newData = updateTime(data);
   updateTimeDom(dom.time, newData);
   }, 10);
};

export default startHandler;
