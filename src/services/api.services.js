const APIURL = process.env.REACT_APP_API_URL;

export const APISERVICE = {
    get: async () => {
        try{
            const response = await fetch(`${APIURL}cliente`)
            const data = await response.json()
            data.status = response.status; 
            return data;
        }catch(error){
            console.log(error)
        }
    }
}