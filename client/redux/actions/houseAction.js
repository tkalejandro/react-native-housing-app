export const FETCH_HOUSES = "FETCH_HOUSES"
export const CREATE_HOUSES = "CREATE_HOUSES"


export const fetchHouses = () => {
    return async dispatch => {

        const result = await fetch('http://192.168.178.38:3000/api/houses')
        const resultData = await result.json()

        //console.log(resultData)        
        dispatch({
            type: FETCH_HOUSES,
            payload: resultData
        })
    }
}

export const createHome = ({title, image, homeType, price, yearBuilt, address, description}) => {
    return async dispatch => {
        const settings = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                image,
                homeType,
                price,
                yearBuilt,
                address,
                description
            }) 
        }
        const response = await fetch("http://192.168.178.38:3000/api/houses", settings)

        const responseData = await response.json()

        dispatch({
            type: CREATE_HOUSES,
            payload: responseData
        })
    }
}