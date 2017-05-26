import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { loadReminders } from "../actions/reminders";
import ReminderListItem from "./ReminderListItem";

import FlatButton from 'material-ui/FlatButton';

class NewReminderForm extends Component {

	componentWillMount () {
	}

	render () {
		return (
			<div className="NewReminderForm">
				<form className="mui-form--inline">
					<legend>New Reminder</legend>
					<div className="mui-textfield mui-textfield--float-label">
						<input type="text"/>
						<label>Title</label>
					</div>
					<FlatButton label="Submit" primary={true} />
				</form>
			</div>
		);
	}
}

function mapStateToProps () {
	return { };
}

function mapDispatchToProps (dispatch) {
	return bindActionCreators({ loadReminders }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewReminderForm);
