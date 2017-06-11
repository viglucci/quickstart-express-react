import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { postReminder } from "../actions/reminders";
import ReminderListItem from "./ReminderListItem";

import ContentAddIcon from "material-ui/svg-icons/content/add";
import FloatingActionButton from "material-ui/FloatingActionButton";
import FlatButton from "material-ui/FlatButton";
import Dialog from "material-ui/Dialog";
import DatePicker from "material-ui/DatePicker";
import TextField from "material-ui/TextField";
import TimePicker from "material-ui/TimePicker";

class NewReminderForm extends Component {

	state = {
		open: false,
		nameInputValue: "",
		dateInputValue: null,
		timeInputValue: null
	};

	handleOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	handleSubmit = () => {
		this.props.postReminder({
			name: this.nameInputValue,
			date: this.dateInputValue,
			time: this.timeInputValue
		});
	};

	handleNameInputChange = (event, value) => {
		this.setState({ nameInputValue: value });
	};

	handleDateInputChange = (event, value) => {
		this.setState({ dateInputValue: value });
	};

	handleTimeInputChange = (event, value) => {
		this.setState({ timeInputValue: value });
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
					onTouchTap={this.handleOpen}
					className="NewReminderForm-openButton">
					<ContentAddIcon className="NewReminderForm-openButton-icon" />
				</FloatingActionButton>
				<Dialog
					title="New Reminder"
					actions={actions}
					modal={true}
					open={this.state.open}
					onRequestClose={this.handleClose}
					className="NewReminderForm-dialog">
					<div className="mui-row">
						<div className="mui-col-md-12">
							<TextField hintText="Name" value={this.state.nameInputValue} onChange={this.handleNameInputChange} />
						</div>
					</div>
					<div className="mui-row">
						<div className="mui-col-md-6">
							<DatePicker hintText="Date" value={this.state.dateInputValue} onChange={this.handleDateInputChange} />
						</div>
						<div className="mui-col-md-6">
							<TimePicker hintText="Time" value={this.state.timeInputValue} onChange={this.handleTimeInputChange} />
						</div>
					</div>
				</Dialog>
			</div>
		);
	}
}

function mapStateToProps () {
	return { };
}

function mapDispatchToProps (dispatch) {
	return bindActionCreators({ postReminder }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewReminderForm);
