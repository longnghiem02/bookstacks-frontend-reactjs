import { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Buffer } from 'buffer';

import { TITLE, LANGUAGES } from '../../../utils';
import * as actions from '../../../store/actions';
import * as services from '../../../services/appService';
import images from '../../../assets/images';
import SubHeader from '../../../layouts/components/SubHeader/SubHeader';
import UpdateAccountInfoModal from './UpdateAccountInfoModal';
import './AccountInfo.scss';

class AccountInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			previewImgURL: '',
		};
	}

	componentDidMount() {
		const { accountInfo } = this.props;
		if (accountInfo !== null && !accountInfo.roleData) {
			this.props.fetchAccountInfo(this.props.accountInfo.id);
		}
		let imageBase64 = '';
		if (accountInfo.avatar) {
			imageBase64 = new Buffer(accountInfo.avatar, 'base64').toString('binary');
		}
		this.setState({
			previewImgURL: imageBase64,
		});
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.accountInfo !== this.props.accountInfo) {
			const { accountInfo } = this.props;
			let imageBase64 = '';
			if (accountInfo.avatar) {
				imageBase64 = new Buffer(accountInfo.avatar, 'base64').toString('binary');
			}
			this.setState({
				previewImgURL: imageBase64,
			});
		}
	}

	handleOpenUpdateAccountInfoModal = () => {
		this.props.handleOpenUpdateAccountInfoModal();
	};

	handleChangeAccountPassword = () => {};

	render() {
		const { previewImgURL } = this.state;
		const { language, accountInfo } = this.props;
		return (
			<>
				<SubHeader title={TITLE.ACCOUNT_INFO} />
				<div className="content-body">
					{(() => {
						if (accountInfo !== null && accountInfo.roleData) {
							return (
								<div className="account-info-container">
									<div className="account-info">
										<div className="left-content">
											<div className="preview-avatar">
												<img src={previewImgURL !== '' ? previewImgURL : images.noUserAvatar} alt="" />
											</div>
										</div>
										<div className="right-content">
											<div className="info-wrapper">
												<div className="info-content">
													<span className="title">
														<FormattedMessage id="label.email" />:
													</span>
													<div className="info">{accountInfo.email}</div>
												</div>
												<div className="info-content">
													<span className="title">
														<FormattedMessage id="label.username" />:
													</span>
													<div className="info">{accountInfo.username}</div>
												</div>
												<div className="info-content">
													<span className="title">
														<FormattedMessage id="label.role" />:
													</span>
													<div className="info">
														{language === LANGUAGES.VI ? accountInfo.roleData.valueVi : accountInfo.roleData.valueEn}
													</div>
												</div>
											</div>
											<div className="options">
												<div className="option-btn" onClick={() => this.handleOpenUpdateAccountInfoModal()}>
													<span>Update Info</span>
												</div>
												<div className="option-btn" onClick={() => this.handleChangeAccountPassword()}>
													<span>Change password</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							);
						}
					})()}
				</div>
				<UpdateAccountInfoModal />
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		language: state.app.language,
		accountInfo: state.user.accountInfo,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleOpenUpdateAccountInfoModal: () => dispatch(actions.handleOpenUpdateAccountInfoModal()),
		fetchAccountInfo: (userId) => dispatch(actions.fetchAccountInfo(userId)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountInfo);