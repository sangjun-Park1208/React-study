import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdd } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setuserId] = useState('');

    const users = useSelector(selectAllUsers);

    const onTitleChanged = (e) => setTitle(e.target.value);
    const onContentChanged = (e) => setContent(e.target.value);
    const onUserIdChanged = (e) => setuserId(e.target.value);

    const dispatch = useDispatch();

    const onSavePostClicked = () => {
        if (title && content && userId) {
            dispatch(
                postAdd(title, content, userId)
            );
            setTitle('');
            setContent('');
            setuserId('');
        }
    };

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

    const usersOptions = users.map((user) => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ));

    

    return (
      <section>
        <h2>Add a New Post</h2>
        <form>
          <label htmlFor="postTitle">Post Title:</label>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={onTitleChanged}
          />
          <label htmlFor="postUserId">Id:</label>
          <select id="postUserId" value={userId} onChange={onUserIdChanged}>
            <option value=""></option>
            {usersOptions}
          </select>

          <label htmlFor="postContent">Content:</label>
          <textarea
            id="postContent"
            name="postContent"
            value={content}
            onChange={onContentChanged}
          />

          <button 
            type="button" 
            onClick={onSavePostClicked}
            disabled={!canSave}
            >
            Save Post
          </button>
        </form>
      </section>
    );
}

export default AddPostForm;