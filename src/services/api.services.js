const APIURL = process.env.REACT_APP_API_URL;

export const APISERVICE = {
    get: async (pageNumber=1) => {
        try{
            const response = await fetch(`${APIURL}cliente/?page=${pageNumber}`)
            const data = await response.json()
            data.status = response.status; 
            return data;
        }catch(error){
            console.log(error)
        }
    },
    post: async ( body, params) => {
        try{
            const response = await fetch(`${APIURL}${params}`,{
                method:'POST',
                headers: {
                    'content-type':'application/json'
                },
                body: JSON.stringify(body)
            })
            const data = await response.json()
            data.status = response.status; 
            return data;
        }catch(error){
            console.log(error)
        }
    }
}