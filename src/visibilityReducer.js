const visibility = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_INCOMPLETED: "SHOW_INCOMPLETED"
};
const VisibilityReducer = (state = {}, action) => {
  switch (action.type) {
    case visibility.SHOW_ALL:
      return { ...state, filter: visibility.SHOW_ALL };
    case visibility.SHOW_COMPLETED:
      return { ...state, filter: visibility.SHOW_COMPLETED };

    case visibility.SHOW_INCOMPLETED:
      return { ...state, filter: visibility.SHOW_INCOMPLETED };
    default:
      return { ...state, filter: visibility.SHOW_ALL };
  }
};
export default VisibilityReducer;
