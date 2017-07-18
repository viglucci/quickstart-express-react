import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { deepOrange500 } from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
	palette: {
		accent1Color: deepOrange500,
	}
});

export default props => (
  <MuiThemeProvider muiTheme={muiTheme}>
	<div className="mui-container">
		{props.children}
	</div>
  </MuiThemeProvider>
);
