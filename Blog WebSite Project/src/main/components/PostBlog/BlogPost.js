import React from 'react';
import classes from './BlogPost.module.css';

const BlogPost = ({ blog, onEdit, onDelete }) => {
    return (
        <div className={classes.blogPost}>
            <h2>{blog.title}</h2>
            <img src={blog.imageUrl} alt={blog.title} className={classes.image} />
            <p>{blog.description}</p>
            <div className={classes.buttons}>
                <button onClick={onEdit}>Edit Blog</button>
                <button onClick={onDelete}>Delete Blog</button>
            </div>
        </div>
    );
};

export default BlogPost;
