import React from 'react';
import './post-add-from.css';

const PostAddFrom = ({onAdd}) => {

    return (
        <div className="bottom-panel d-flex">
            <input
                type="text"
                placeholder="О чем вы думаете сейчас"
                className="form-control new-post-label"
            />
            <button
                onClick={() => onAdd('Hello')}
                type="submit"
                className="btn btn-outline-secondary"
            >Добавить</button>
        </div>
    )
}

export default PostAddFrom;