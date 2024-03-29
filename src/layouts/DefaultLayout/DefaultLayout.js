import { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';
import Header from '../components/Header/Header';
import { PageControl } from '../components/Control';
import './DefaultLayout.scss';

class DefaultLayout extends Component {
	render() {
		const { children } = this.props;
		return (
			<div className="wrapper">
				<Header />
				<div className="body-container" onClick={() => this.props.handleCloseOptionsMenu()}>
					<div className="default-content-container">
						{children}
						<PageControl />
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleCloseOptionsMenu: () => dispatch(actions.handleCloseOptionsMenu()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout);
