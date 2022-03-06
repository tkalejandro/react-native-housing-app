import { FETCH_HOUSES } from "../actions/houseAction"

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
        }
    return state
}

export default houseReducer