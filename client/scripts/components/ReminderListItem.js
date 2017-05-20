import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import moment from "moment";

import { deleteReminder } from "../actions/reminders";

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
					this.props.deleteReminder(reminder);
				}}>
				<div className="mui--pull-right">{moment(reminder.when).fromNow()}</div>
				<div>{reminder.title}</div>
			</div>
		);
	}
}

function mapStateToProps() {
	return { };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ deleteReminder }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ReminderListItem);
