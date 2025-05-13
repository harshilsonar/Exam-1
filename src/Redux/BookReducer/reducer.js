import { FETCH_BOOKS_FAILURE, FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS } from "./actionTypes";

const initalstate ={
  isLoading: false,
  isError: false,
  books: [],
}
const reducer = (state = initalstate, action) =>
    {
        switch (action.type) {
            case FETCH_BOOKS_REQUEST:
                return {...state, isLoading: true, isError: false};
                case FETCH_BOOKS_SUCCESS:
                    return {...state, isLoading: false, books: action.payload};
                    case FETCH_BOOKS_FAILURE:
                        return {...state, isLoading: false, isError: true};
                        default:
                            return state;
        }
    }