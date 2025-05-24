
import { useEffect, useState } from "react";




export default function useLocalStorage(key,defaultValue){
    const [value,setValue]=useState(()=>{
        let curentVlue;

        try{
            curentVlue=JSON.parse(localStorage.getItem(key)||String(defaultValue))
        }catch(error){
            console.log(error)
            curentVlue=defaultValue
        }

        return curentVlue
    })
    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))
    },[key,value])

    return [value,setValue]
}

