
const updateTime = (data) => {
    data.milliseconds += 10;
    if(data.milliseconds === 1000){
        data.milliseconds = 0;
        data.seconds++;
    } 
    
    if(data.seconds === 60){
        data.seconds = 0;
        data.minutes++;
    } 
    
    if(data.minutes === 60){
        data.minutes = 0;
    
    }   
        
   return data;

    
};

export default updateTime;
