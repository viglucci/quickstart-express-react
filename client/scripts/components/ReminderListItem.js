import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import moment from "moment";

class ReminderListItem extends Component {

	componentWillMount() {

	}

	render() {
		let containerClassName = "reminder-list-item mui--clearfix";
		let index = this.props.index;
		let reminder = this.props.reminder;
		if (index) containerClassName += " mui--divider-top";
		return (
			<div
				className={containerClassName}
				onClick={() => {

				}}>
				<div className="mui--pull-right">{moment(reminder.when).fromNow()}</div>
				<div>{reminder.title}</div>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({  }, dispatch);
}

export default connect(mapDispatchToProps)(ReminderListItem);
