import React, {Component} from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddFrom from '../post-add-form/post-add-form';
import './app.css';

export default class App extends Component {

    state = {
        data: [
            {label: 'Going to lealrn react', important: false, like: false, id: 1},
            {label: 'Good day', important: false, like: false, id: 2},
            {label: 'I won eaaatt!!!', important: false, like: false, id: 3}
        ],
        maxId: 4
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            
            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArr = [...before, ...after];

            return {
                data: newArr
            }
        });
    }
    addItem = (body) => {
        const newItem = {
            label: body,
            important: false, 
            id: this.state.maxId + 1
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr,
                maxId: this.state.maxId + 1
            }
        })
    }

    onToggleImportant = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(el => el.id === id);

            const old = data[index];
            const newItem = {...old, important: !old.important};

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

            return {
                data: newArr
            }
        })
    }
    
    onToggleLike = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(el => el.id === id);

            const old = data[index];
            const newItem = {...old, like: !old.like};

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

            return {
                data: newArr
            }
        })
    }
    

    render() {
        const {data} = this.state;

        const liked = data.filter(item => item.like).length;
        const allPost = data.length;

        return (
            <div className="app">
                <AppHeader liked={liked} allPost={allPost}/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList posts={this.state.data} onDelete={this.deleteItem} onToggleImportant={this.onToggleImportant} onToggleLike={this.onToggleLike}/>
                <PostAddFrom onAdd={this.addItem}/>
            </div>
        )
    }
}