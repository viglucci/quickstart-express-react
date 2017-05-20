import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import moment from "moment";
import classnames from "classnames";

import { deleteReminder } from "../actions/reminders";

class ReminderListItem extends Component {

	componentWillMount() {

	}

	renderDeleteButton () {
		let classes = classnames(
			"ReminderListItem-deleteButton",
			"mui--pull-right",
			"mui--divider-left",
			"mui-btn", "mui-btn--flat", "mui-btn--danger"
		);
		let onClick = () => {
			this.props.deleteReminder(this.props.reminder);
		};
		return (
			<div className={classes} onClick={onClick}>
				Delete
			</div>
		)
	}

	render() {
		let index = this.props.index;
		let reminder = this.props.reminder;
		let classes = classnames(
			"ReminderList-item",
			"mui--clearfix",
			{
				"mui--divider-top": index
			}
		);
		return (
			<div className={classes}>
				<div className="mui--pull-right">
					{ this.renderDeleteButton() }
					<div className="ReminderListItem-when mui--pull-right">{moment(reminder.when).fromNow()}</div>
				</div>
				<div className="ReminderListItem-title">{reminder.title}</div>
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
