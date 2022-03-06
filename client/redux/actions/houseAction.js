export const FETCH_HOUSES = "FETCH_HOUSES"
export const CREATE_HOUSES = "CREATE_HOUSES"


export const fetchHouses = () => {
    return async dispatch => {

        const result = await fetch('http://localhost:3000/api/houses')
        const resultData = await result.json()

        //console.log(resultData)        
        dispatch({
            type: FETCH_HOUSES,
            payload: resultData
        })
    }
}