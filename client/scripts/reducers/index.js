import { combineReducers } from "redux";

import reminders from "./reminders";
import ui from "./ui/ui";

export default combineReducers({
	ui: ui,
	reminders: reminders
});
