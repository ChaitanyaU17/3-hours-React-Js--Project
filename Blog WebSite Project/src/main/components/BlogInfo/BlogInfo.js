import React, { useState } from 'react';
import classes from './BlogInfo.module.css';

const BlogInfo = ({ onClose, onSubmit }) => {
    const [imageUrl, setImageUrl] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const postBlogHandler = () => {
        // Handle posting the blog
        const blogData = { imageUrl, title, description };
        onSubmit(blogData);
        onClose();
    };

    return (
        <div className={classes.blogInfo}>
            <div className={classes.section}>
                <div className={classes.section}>
                    <label>Image Url:</label>
                    <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
                </div>
                <div className={classes.section}>
                    <label>Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className={classes.section}>
                    <label>Blog Description</label>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
            </div>
            <div className={classes.buttons}>
                <button onClick={postBlogHandler}>Post Blog</button>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default BlogInfo;
