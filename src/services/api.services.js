const APIURL = process.env.REACT_APP_API_URL;

export const APISERVICE = {
    get: async (pageNumber=1,campo) => {
       
        try{
            const response = await fetch(`${APIURL+campo}/?page=${pageNumber}`)
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
    },
    delete: async(id,params) =>{
        try{
            const response = await fetch(`${APIURL}${params}${id}`,{
                method:'DELETE',
            })
            const data = await response.json()
            data.status=response.status
            return data
        }catch(error){
            console.log(error)
        }
    },
    update:async(body,params,id)=>{
        try{
            const response = await fetch(`${APIURL}${params}${id}`,{
                method:'PUT',
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