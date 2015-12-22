import React, { Component, PropTypes } from "react";
import { Link, IndexLink } from "react-router";
import classnames from 'classnames';

class ProgressBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			onProgress:false
		}
	}

	render() {
		var comp = this;
		return (
			<div className={this.props.className}>
				<div className={classnames(['progress-bar',{'active':comp.state.onProgress}])}>
					<div className="white-cover"></div>
				</div>
			</div>
		);
	}
}


export default ProgressBar;