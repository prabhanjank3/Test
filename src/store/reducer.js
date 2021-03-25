const initialStore = {
  testValue: "Test Value",
  isAuthenticated: false,
  current_usr_info: {
    firstname: "",
    lastname: "",
    id: "",
    email: ""
  }
};
const reducer = (state = initialStore, action) => {
  if (action.type === "test") {
    state = {
      ...state,
      testValue: action.payLoad.value
    };
  }
  if (action.type === "user_log_in") {
    state = {
      ...state,
      current_usr_info: action.payLoad,
      isAuthenticated: true
    };
  }
  //console.log(state);
  return state;
};
export default reducer;
