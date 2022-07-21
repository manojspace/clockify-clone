import React from 'react';

class SideNav extends React.Component {
	render() {
		return (
			<div className="sidenav">
				<div className="menu" style={{borderLeft: '0.2857rem solid #FF9800', background: '#E4EAEE'}}>TIME TRACKER</div>
				<div className="menu" style={{borderLeft: '0.2857rem solid red'}}>PROJECTS</div>
			</div>
		)
	}
}

export default SideNav;