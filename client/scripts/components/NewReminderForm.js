import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { postReminder } from "../actions/reminders";
import {
	openModal,
	closeModal,
	setNameInputValue,
	setDateInputValue,
	setTimeInputValue,
} from "../actions/newReminderForm";
import ReminderListItem from "./ReminderListItem";

import ContentAddIcon from "material-ui/svg-icons/content/add";
import FloatingActionButton from "material-ui/FloatingActionButton";
import FlatButton from "material-ui/FlatButton";
import Dialog from "material-ui/Dialog";
import DatePicker from "material-ui/DatePicker";
import TextField from "material-ui/TextField";
import TimePicker from "material-ui/TimePicker";

class NewReminderForm extends Component {

	handleOpen = () => {
		this.props.openModal();
	};

	handleClose = () => {
		this.props.closeModal();
	};

	handleSubmit = () => {
		var data = {
			title: this.props.nameInputValue,
			date: this.props.dateInputValue,
			time: this.props.timeInputValue
		};
		this.props.postReminder(data);
	};

	handleNameInputChange = (event, value) => {
		this.props.setNameInputValue(value);
	};

	handleDateInputChange = (event, value) => {
		this.props.setDateInputValue(value);
	};

	handleTimeInputChange = (event, value) => {
		this.props.setTimeInputValue(value);
	};

	render () {

		let floatingButtonStyle = { position: "absolute", right: 40, bottom: 40 };
		const cancelButton = <FlatButton label="Cancel" primary={true} onTouchTap={this.handleClose} />
		const submitButton = <FlatButton label="Submit" primary={true} onTouchTap={this.handleSubmit} />
		const actions = [cancelButton, submitButton];

		return (
			<div className="NewReminderForm">
				<FloatingActionButton
					mini={false}
					style={floatingButtonStyle}
					onTouchTap={this.props.openModal}
					className="NewReminderForm-openButton">
					<ContentAddIcon className="NewReminderForm-openButton-icon" />
				</FloatingActionButton>
				<Dialog
					title="New Reminder"
					actions={actions}
					modal={true}
					open={this.props.isOpen}
					onRequestClose={this.handleClose}
					className="NewReminderForm-dialog">
					<div className="mui-row">
						<div className="mui-col-md-12">
							<TextField hintText="Name" value={this.props.nameInputValue} onChange={this.handleNameInputChange} />
						</div>
					</div>
					<div className="mui-row">
						<div className="mui-col-md-6">
							<DatePicker hintText="Date" value={this.props.dateInputValue} onChange={this.handleDateInputChange} />
						</div>
						<div className="mui-col-md-6">
							<TimePicker hintText="Time" value={this.props.timeInputValue} onChange={this.handleTimeInputChange} />
						</div>
					</div>
				</Dialog>
			</div>
		);
	}
}

function mapStateToProps (state) {
	return { ...state.ui.newReminderForm };
}

function mapDispatchToProps (dispatch) {
	return bindActionCreators({
		openModal: openModal,
		closeModal: closeModal,
		postReminder: postReminder,
		setNameInputValue: setNameInputValue,
		setDateInputValue: setDateInputValue,
		setTimeInputValue: setTimeInputValue
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewReminderForm);
