import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { loadReminders } from "../actions/reminders";
import ReminderListItem from "./ReminderListItem";
import NewReminderForm from "./NewReminderForm";

import ContentAddIcon from "material-ui/svg-icons/content/add";
import FloatingActionButton from "material-ui/FloatingActionButton";
import FlatButton from "material-ui/FlatButton";
import Dialog from "material-ui/Dialog";

class ReminderList extends Component {

	state = {
		open: true
	};

	componentWillMount () {
		this.props.loadReminders();
	}

	renderItems () {
		return this.props.reminders.map(
			(item, index) => <ReminderListItem key={ item.id } reminder={ item } index={ index } />
		);
	}

	handleOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	render () {
		let floatingButtonStyle = { position: "absolute", right: 40, bottom: 40 };

		const actions = [
			<FlatButton
				label="Cancel"
				primary={true}
				onTouchTap={this.handleClose}
			/>,
			<FlatButton
				label="Submit"
				primary={true}
				keyboardFocused={true}
				onTouchTap={this.handleClose}
			/>,
		];

		return (
			<div className="ReminderList mui-container">
				<FloatingActionButton
					mini={false}
					style={floatingButtonStyle}
					onTouchTap={this.handleOpen}>
					<ContentAddIcon />
				</FloatingActionButton>
				<Dialog
					title="New Reminder"
					actions={actions}
					modal={true}
					open={this.state.open}
					onRequestClose={this.handleClose}
				>
					The actions in this window were passed in as an array of React objects.
				</Dialog>
				<div className="ReminderList-newForm">
					{/* <NewReminderForm></NewReminderForm> */}
				</div>
				<div className="ReminderList-items mui--z1">
					{ this.renderItems() }
				</div>
			</div>
		);
	}
}

function mapStateToProps ({ reminders }) {
	return { reminders };
}

function mapDispatchToProps (dispatch) {
	return bindActionCreators({ loadReminders }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ReminderList);
