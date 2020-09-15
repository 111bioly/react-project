import {connect} from 'react-redux';
import List from './List';
//export const getColumnsForList = ({columns}, listId) => columns.filter(column => column.listId == listId);
import {getColumnsForList, createActionAddColumn} from '../../redux/columnsRedux';


const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  const filteredList = state.lists.filter(list => list.id == id);
  const listParams = filteredList[0] || {};
  return {
    ...listParams,
    columns: getColumnsForList(state, props.id),
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddColumn({
    listId: props.match.params.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);