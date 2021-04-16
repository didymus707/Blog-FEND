import {
  SUCCESS,
  FAILURE,
  USER_INPUT,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  ADD_PROFILE,
  REMOVE_PROFILE,
  SET_DB_PROFILE,
  REMOVE_DB_PROFILE,
  FETCH_DB_POSTS,
  REMOVE_DB_POSTS,
  FETCH_POST_COMMENTS,
  REMOVE_POST_COMMENTS
} from './action_types';

export const success = () => {
  return {
    type: SUCCESS
  }
}

export const failure = () => {
  return {
    type: FAILURE
  }
}

export const user_input = () => {
  return {
    type: USER_INPUT
  }
}

export const login_success = () => {
  return {
    type: LOGIN_SUCCESS
  }
}

export const login_failure = () => {
  return {
    type: LOGIN_FAILURE
  }
}

export const add_profile = profile => {
  return {
    type: ADD_PROFILE,
    payload: profile
  }
}

export const remove_profile = () => {
  return {
    type: REMOVE_PROFILE
  }
}

export const set_db_profile = profile => {
  return {
    type: SET_DB_PROFILE,
    payload: profile
  }
}

export const remove_db_profile = () => {
  return {
    type: REMOVE_DB_PROFILE,
  }
}

export const fetch_db_posts = posts => {
  return {
    type: FETCH_DB_POSTS,
    payload: posts
  }
}

export const remove_db_posts = () => {
  return {
    type: REMOVE_DB_POSTS,
  }
}

export const fetch_post_commentts = comments => {
  return {
    type: FETCH_POST_COMMENTS,
    payload: comments
  }
}

export const remove_post_comments = () => {
  return {
    type: REMOVE_POST_COMMENTS
  }
}