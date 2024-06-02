
export function saveToLS(key,value){
    const jsonData = json.stringify(value);
    localStorage.setItem(key, jsonData);
}
export function loadFromLS(key){
    const json =localStorage.getItem(key);
    try{
        const data = JSON.parse (json);
        return data;
    }
    catch{
        return json;
    }
}

  
