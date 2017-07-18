import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { submitForm } from "../actions/newReminderForm";
import {
	openModal,
	closeModal,
	setTitleInputValue,
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
import ErrorIcon from "material-ui/svg-icons/alert/error";
import { red500 } from "material-ui/styles/colors";

class NewReminderForm extends Component {

	handleOpen () {
		this.props.openModal();
	};

	handleClose () {
		this.props.closeModal();
	};

	handleSubmit () {
		var data = {
			title: this.props.nameInputValue,
			date: this.props.dateInputValue,
			time: this.props.timeInputValue
		};
		this.props.submitForm(data);
	};

	handleTitleInputChange (event, value) {
		this.props.setTitleInputValue(value);
	};

	handleDateInputChange (event, value) {
		this.props.setDateInputValue(value);
	};

	handleTimeInputChange (event, value) {
		this.props.setTimeInputValue(value);
	};

	getErrorMsg (field) {
		return (this.props.errors && this.props.errors[field]) ? this.props.errors[field].msg : undefined;
	};

	render () {

		let floatingButtonStyle = { position: "absolute", right: 40, bottom: 40 };
		const cancelButton = <FlatButton label="Cancel" primary={true} onTouchTap={this.handleClose.bind(this)} />
		const submitButton = <FlatButton label="Submit" primary={true} onTouchTap={this.handleSubmit.bind(this)} />
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
							<TextField hintText="Title"
								errorText={this.getErrorMsg("title")}
								value={this.props.nameInputValue}
								onChange={this.handleTitleInputChange.bind(this)} />
						</div>
					</div>
					<div className="mui-row">
						<div className="mui-col-md-6">
							<DatePicker hintText="Date"
								errorText={this.getErrorMsg("date")}
								value={this.props.dateInputValue}
								onChange={this.handleDateInputChange.bind(this)} />
						</div>
						<div className="mui-col-md-6">
							<TimePicker hintText="Time"
								errorText={this.getErrorMsg("time")}
								value={this.props.timeInputValue}
								onChange={this.handleTimeInputChange.bind(this)} />
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
		submitForm: submitForm,
		setTitleInputValue: setTitleInputValue,
		setDateInputValue: setDateInputValue,
		setTimeInputValue: setTimeInputValue
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewReminderForm);
