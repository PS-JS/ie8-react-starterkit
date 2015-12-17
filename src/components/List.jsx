import React, { Component, PropTypes } from "react";
import { Link } from "react-router";
import mainStore from '../store/main-store';

class List extends Component {
	constructor(props) {
		super(props);
		this.state = {posts:mainStore.read('posts')};
		this.updateList = this.updateList.bind(this);
	}

	componentWillMount(){
		mainStore.fetchPost();
		mainStore.change.on('posts',this.updateList)
	}

	updateList(newVal){
		this.setState({posts:newVal});
	}

	render() {
		return (
			<div>
				<h1>Post List</h1>
				<ul>
					{this.state.posts.map(function(item){
						console.log(item.id);
						return <li key={item.id}><Link to={`/content/${item.id}`}>{item.title}</Link></li>
					})}
				</ul>
			</div>
		);
	}
}


export default List;