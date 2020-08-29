import {connect} from 'react-redux';
import List from './List';
//export const getColumnsForList = ({columns}, listId) => columns.filter(column => column.listId == listId);
import {getColumnsForList, createActionAddColumn} from '../../redux/columnsRedux';
const mapStateToProps = (state, props) => ({
  columns: getColumnsForList(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddColumn({
    listId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);