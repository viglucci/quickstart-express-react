import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import moment from "moment";
import classnames from "classnames";

import { deleteReminder } from "../actions/reminders";

import CircularProgress from 'material-ui/CircularProgress';

class ReminderListItem extends Component {

	constructor (props) {
		super(props);
		this.state = {
			updating: false
		};
	}

	componentWillMount() {

	}

	renderDeleteButton () {
		let onClick = () => {
			this.setState({ updating: true });
			setTimeout(() => {
				this.props.deleteReminder(this.props.reminder);
			}, 1000);
		};
		if (this.state.updating) {
			let style = { padding: 5, paddingRight: 34.5, paddingLeft: 34.5 };
			return (
				<div className="mui--pull-right mui--divider-left" style={ style }>
					<CircularProgress />
				</div>
			);
		} else {
			let classes = classnames(
				"ReminderListItem-deleteButton",
				"mui--pull-right",
				"mui--divider-left",
				"mui-btn", "mui-btn--flat", "mui-btn--danger"
			);
			return (
				<div className={classes} onClick={onClick}>
					Delete
				</div>
			);
		}
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
