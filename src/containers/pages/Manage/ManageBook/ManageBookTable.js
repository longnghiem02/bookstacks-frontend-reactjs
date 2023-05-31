import { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FormattedMessage } from 'react-intl';
import * as actions from '../../../../store/actions';
import './ManageBook.scss';

class ManageBookTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	handleOpenModal = async (bookId) => {
		await this.props.fetchAllBookInfoById(bookId)
		this.props.handleOpenManageBookModal()
	}

	handleDeleteBook = async (bookId) => {
		await this.props.handleDeleteBook(bookId)
		this.props.fetchAllBook()
	}

	render() {
		const { bookList } = this.props;
		return (
			<div className="manage-book-table">
				<table>
					<thead>
						<tr>
							<th>
								<FormattedMessage id="manage-book.modal.book-name" />
							</th>
							<th>
								<FormattedMessage id="manage-book.options" />
							</th>
						</tr>
					</thead>
					<tbody>
						{bookList &&
							bookList.length > 0 &&
							bookList.map((item, index) => {
								return (
									<tr key={index}>
										<td className="book-name">{item.bookName}</td>
										<td className="options">
											<button className="btn-edit" onClick={() => this.handleOpenModal(item.id)}>
												<FontAwesomeIcon icon={faPencilAlt} className="edit-icon" />
											</button>
											<button className="btn-delete" onClick={() => this.handleDeleteBook(item.id)}>
												<FontAwesomeIcon icon={faTrash} className="delete-icon" />
											</button>
										</td>
									</tr>
								);
							})}
					</tbody>
				</table>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleOpenManageBookModal: () => dispatch(actions.handleOpenManageBookModal()),
		handleDeleteBook: (bookId) => dispatch(actions.handleDeleteBook(bookId)),
		fetchAllBook: () => dispatch(actions.fetchAllBook()),
		fetchAllBookInfoById: (bookId) => dispatch(actions.fetchAllBookInfoById(bookId))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageBookTable);