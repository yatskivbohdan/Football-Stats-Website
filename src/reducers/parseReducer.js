import { GET_STANDINGS, GET_SCORERS} from "../actions/types";

export default function parseReducer(state={teams: [], scorers:[]}, action) {
    switch (action.type) {
        case GET_STANDINGS:
            return {...state, teams: action.payload};
        case GET_SCORERS:
            return {...state, scorers: action.payload};
        default:
            return state;
    }
};
