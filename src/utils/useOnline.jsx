
import { useState,useEffect } from "react";

const useOnline = () =>{
    const [isOnline, setIsOnline] = useState(true);

    useEffect(()=>{

        const handleOnline = () => {
            setIsOnline(true);
        };
        const handleOffline = () => {
            setIsOnline(false);
        };
        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        //Cleaning of eventlistners
        return () => {
            window.removeEventListener("online",handleOnline);
            window.removeEventListener("offline", handleOffline);//I think it offiline ,.. check it
        };
    }, []);
    //[] empty dependancy array shows it will render only ones initally and if state changes then it will change
    //This shows at one time only its created and at same place rerendering will happen
    return isOnline;
    //It will return ans in boolean format
}

export default useOnline;