import { createSelector } from 'reselect';

const usersSelector = (state) => state.users;
const postsSelector = (state) => state.posts;

export const getUsersSelector = createSelector([usersSelector], (users) => { // Selector of users
    console.log("Users");
    return users;
});

export const getPostsSelector = createSelector([postsSelector],(getPosts) => { // Selector of posts
    console.log("Posts")
    return getPosts;
});