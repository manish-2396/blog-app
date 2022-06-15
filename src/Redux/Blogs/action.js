import * as types from './actionTypes';
import Axios  from 'axios';

const fetchBlogRequest = (payload) => {
    return {
        type: types.fetch_blog_request,
        payload,
    };
};

const fetchBlogSuccess = (payload) => {
    return {
        type: types.fetch_blog_success,
        payload,
    };
};

const fetchBlogFailure = (payload) => {
    return {
        type: types.fetch_blog_failuer,
        payload,
    };
};

const fetchBlogPost = (payload) => (dispatch) => {
    dispatch(fetchBlogRequest());
    Axios.get("/blogs")
        .then((r) => dispatch(fetchBlogSuccess(r.data)))
        .catch((e) => dispatch(fetchBlogFailure(e.data)))

};


const fetchSingleBlogRequest = (payload) => {
    return {
        type: types.fetch_single_blog_request,
        payload,
    };
};

const fetchSingleBlogSuccess = (payload) => {
    return {
        type: types.fetch_single_blog_success,
        payload,
    };
};

const fetchSingleBlogFailure = (payload) => {
    return {
        type: types.fetch_single_blog_failuer,
        payload,
    };
};

const fetchSingleBlogPost = (payload) => (dispatch) =>{
    dispatch(fetchSingleBlogRequest());

    Axios.get(`/blogs/${payload}`)
    .then((r) => dispatch(fetchSingleBlogSuccess(r.data)))
    .catch((e) => dispatch(fetchSingleBlogFailure(e.data)));

}




const createBlogPostRequest = (payload) => {
    return {
        type: types.create_blog_post_request,
        payload,
    };
};

const createBlogPostSuccess = (payload) => {
    return {
        type: types.create_blog_post_success,
        payload,
    };
};


const createBlogPostFailiuer = (payload) => {
    return {
        type: types.create_blog_post_failuer,
        payload,
    };
};


const createBlogPost= (payload) => (dispatch)=>{
    dispatch(createBlogPostRequest());
    Axios.post("/blogs", payload)
    .then((r) => createBlogPostSuccess(r.data))
    .catch((e) => createBlogPostFailiuer(e.data))
};



const updateBlogPostRequest = (payload) => {
    return {
        type: types.update_blog_post_request,
        payload,
    };
};

const updateBlogPostSuccess = (payload) => {
    return {
        type: types.update_blog_post_success,
        payload,
    };
};


const updateBlogPostFailiuer = (payload) => {
    return {
        type: types.update_blog_post_failuer,
        payload,
    };
};

const updateBlogPost = (payload) => (dispatch)=>{
    dispatch(updateBlogPostRequest);
    Axios.patch(`/blogs/${payload.id}`,payload)
    .then((r) =>dispatch(updateBlogPostSuccess(r.data)))
    .catch((e) =>dispatch(updateBlogPostFailiuer(e.data)))
}

export { fetchBlogPost  , fetchSingleBlogPost , createBlogPost , updateBlogPost};