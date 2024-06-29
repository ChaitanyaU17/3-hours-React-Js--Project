import React, { useState } from 'react';
import classes from './Blog.module.css';
import BlogInfo from '../BlogInfo/BlogInfo';
import Modal from '../Modal/Modal';
import BlogPost from '../PostBlog/BlogPost';

const Blog = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [blogs, setBlogs] = useState([]);
    const [editBlog, setEditBlog] = useState(null);

    const openModalHandler = () => {
        setIsModalOpen(true);
    };

    const closeModalHandler = () => {
        setIsModalOpen(false);
        setEditBlog(null);
    };

    const submitBlogHandler = (blog) => {
        if (editBlog) {
            setBlogs((prevBlogs) => 
                prevBlogs.map((b) => (b === editBlog ? blog : b))
            );
            setEditBlog(null);
        } else {
            setBlogs((prevBlogs) => [...prevBlogs, blog]);
        }
    };

    const editBlogHandler = (blog) => {
        setEditBlog(blog);
        setIsModalOpen(true);
    };

    const deleteBlogHandler = (blog) => {
        setBlogs((prevBlogs) => prevBlogs.filter((b) => b !== blog));
    };

    return (
        <>
            <div className={classes.header}>
                <h1>Blog Website</h1>
                <button onClick={openModalHandler}>Add New Blog</button>
                <p>_____________________________________________________________________________________________</p>
            </div>
            {isModalOpen && (
                <Modal onClose={closeModalHandler}>
                    <BlogInfo
                        onClose={closeModalHandler}
                        onSubmit={submitBlogHandler}
                        blog={editBlog}
                    />
                </Modal>
            )}
            {blogs.map((blog, index) => (
                <BlogPost
                    key={index}
                    blog={blog}
                    onEdit={() => editBlogHandler(blog)}
                    onDelete={() => deleteBlogHandler(blog)}
                />
            ))}
        </>
    );
};

export default Blog;
