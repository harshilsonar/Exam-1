import { LOADING, LOGIN, LOGOUT } from "./actionTypes";

const initalstate ={
  isLoading: false,
  isError: false,
  isAuth: false,
  token: "",
}
const reducer = (state = initalstate, action) =>
    {
        switch (action.type) {
            case LOGIN:
                return {...state, isAuth: true, token: action.payload};
                case LOGOUT:
                    return {...state, isAuth: false, token: ""};
                    case LOADING:
                        return {...state, isLoading: true}; 
                        default:
                            return state;
        }
        }
                    