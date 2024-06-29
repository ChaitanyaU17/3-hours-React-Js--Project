import React, { createContext, useState } from 'react';

const BlogContext = createContext({
    blogs: [],
    addBlog: (blog) => {},
    editBlog: (blog) => {},
    deleteBlog: (blog) => {},
    isModalOpen: false,
    openModal: () => {},
    closeModal: () => {},
    editBlogForUpdate: null,
    setEditBlogForUpdate: (blog) => {},
});

export default BlogContext;
