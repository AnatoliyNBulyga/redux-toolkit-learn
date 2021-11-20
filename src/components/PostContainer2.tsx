import React, {useEffect, useState } from 'react';
import { postAPI } from '../services/PostServices';
import PostItem from './PostItem';
import {IPost} from "../models/IPost";

const PostContainer2 = () => {
    const [limit, setLimit] = useState(100);
    const {data: posts, error, isLoading} = postAPI.useFetchAllUsersQuery(limit);
    const [createPost, {}] = postAPI.useCreatePostMutation();
    const [updatePost, {}] = postAPI.useUpdatePostMutation();
    const [deletePost, {}] = postAPI.useDeletePostMutation();
    const handleRemove = (post: IPost) => {
        deletePost(post)
    }
    const handleUpdate = (post: IPost) => {
        updatePost(post)
    }
    useEffect(() => {
        // setTimeout(() => {
        //    setLimit(3)
        // }, 2000)
    }, [])
    const handleCreate = async () => {
        const title = prompt()
        await createPost({title, body: title} as IPost)
    }
    if (error) return <h1>Произошла ошибка</h1>
    if (isLoading) return <h1>Идет загрузка...</h1>
    return (
        <div className="post__list">
            <button onClick={handleCreate}>Add new post</button>
            {posts && posts.map( post => <PostItem remove={handleRemove} update={handleUpdate} key={post.id} post={post} />)}
        </div>
    );
};

export default PostContainer2;