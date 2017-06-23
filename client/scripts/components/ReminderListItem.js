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
			this.props.deleteReminder(this.props.reminder);
		};
		let classes = classnames(
			"ReminderListItem-deleteButton",
			"mui--pull-right",
			"mui--divider-left",
			"mui-btn", "mui-btn--flat",
			{ "mui-btn--danger": !this.state.updating }
		);
		let disabled = this.state.updating;
		return (
			<button className={classes} onClick={onClick} disabled={disabled}>
				Delete
			</button>
		);
	}

	renderUpdateSpinner () {
		if (this.state.updating) {
			let style = {
				position: "absolute",
				right: "-35px",
				top: "15px"
			};
			return (
				<div style={ style }>
					<CircularProgress size={20} thickness={1} />
				</div>
			);
		}
	}

	render () {
		let index = this.props.index;
		let reminder = this.props.reminder;
		let classes = classnames(
			"ReminderList-item",
			"mui--clearfix",
			{
				"mui--divider-top": index
			}
		);
		let style = { position: "relative" }
		return (
			<div className={classes} style={style}>
				{ this.renderUpdateSpinner() }
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
