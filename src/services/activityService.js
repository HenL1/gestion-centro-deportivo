import { activities } from "../data/activities";

export const getActivies = () =>{
    return new Promise((resolve) =>{
        setTimeout(() => {
          resolve(activities);  
        },1000)
    }); 
};