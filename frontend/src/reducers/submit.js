const initialState = {
  problem_code: null,
  pending: null,
  error: null,
  message: null,
  output: null,
  inqueue: null,
};

export default function submitReducer(state = initialState, action) {
  switch (action.type) {
    case "SUBMIT_REQUEST":
      return {
        ...state,
        pending: true,
      };
    case "SUBMIT_SUCCESS":
      return {
        ...state,
        inqueue: true,
      };
    case "SUBMIT_ERROR":
      return {
        ...state,
        error: action.error,
        pending: false,
        inqueue: false,
      };
    case "SUBMIT_RESPONSE":
      return {
        ...state,
        message: action.message,
        output: action.output,
        inqueue: false,
        pending: false,
      };
    default:
      return state;
  }
}
