import { createSelector } from 'reselect';
// import memoize from 'lodash';

const usersSelector = (state) => state.usersReducer.users;
const postsSelector = (state) => state.usersReducer.posts;

export const getUsersSelector = createSelector([usersSelector], (users) => {
    console.log("Users");
    return users;
});
export const getTopThreeUsers = createSelector([usersSelector],(users) => {
     return users.slice(0,3);
});

export const getPostsSelector = createSelector([postsSelector],(getPosts) => {
    console.log("Posts")
    return getPosts;
});