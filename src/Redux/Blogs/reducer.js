import * as types from './actionTypes';


const initialState = {
    blogs: [],
    loading: false,
    currentBlog: {},
    error: '',
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case types.fetch_blog_request:
            return {
                ...state,
                loading: true,
                error: '',
            }
        case types.fetch_blog_success:
            return {
                ...state,
                loading: false,
                blogs: payload,
                error: '',
            }
        case types.fetch_blog_failuer:
            return {
                ...state,
                loading: false,
                error: payload
            }

        case types.fetch_single_blog_request:
            return {
                ...state,
                loading: true,
                error: '',
            }
        case types.fetch_single_blog_success:
            return {
                ...state,
                loading: false,
                currentBlog: payload,
                error: '',
            }
        case types.fetch_single_blog_failuer:
            return {
                ...state,
                loading: false,
                error: payload
            }



        default:
            return state;
    }
}

export default reducer;