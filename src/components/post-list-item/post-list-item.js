import React, {Component} from 'react';
import './post-list-item.css';

export default class PostListItem extends Component {
    

    render() {
        const {label, onDelete, onToggleLike, onToggleImportant, like, important} = this.props;
        let classNames = 'app-list-item d-flex justify-content-between';
        if(important) {
            classNames += ' important'
        }
        if(like) {
            classNames += ' like'
        }

        return (
            <div className={classNames}>
                <span onClick={onToggleLike} className="app-list-item-label">
                    {label}
                </span>
                <div className="d-flex justify-content-center align-item-center">
                    <button onClick={onToggleImportant} className="btn-star btn-sm" type="button">
                        <i className="fa fa-star"></i>
                    </button>
                    <button onClick={onDelete} className="btn-trash btn-sm" type="button">
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
}