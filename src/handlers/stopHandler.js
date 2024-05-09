import data from "../data.js";


const stopHandler = () => {
  if(data.intervalId) {
    clearInterval(data.intervalId);
  } 
};

export default stopHandler;