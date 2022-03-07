import { CREATE_HOUSES, FETCH_HOUSES } from "../actions/houseAction"

const initialState = {
    houses: []
}

const houseReducer = (state = initialState, action) => {
        switch(action.type) {

            case FETCH_HOUSES:
                return {
                    ...state,
                    houses: action.payload
                }
            case CREATE_HOUSES:
                //? The payload comes with {data: {}, message: ""}
                return {
                    ...state,
                    houses: state.houses.concat(action.payload.data)
                }
        }
    return state
}

export default houseReducer