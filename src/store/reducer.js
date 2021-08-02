import {
  ADD,
  SUB,
  DIVIDE,
  MULTIPLY,
  ADD_COUNT,
  REMOVE_COUNT,
  RESET
} from "./actionType.js";
const insial = {
  count: 0
};
export const ReducerFunction = (state = insial, { type, payload }) => {
  switch (type) {
    case ADD_COUNT:
      return { ...state, count: state.count + payload };
    case REMOVE_COUNT:
      return { ...state, count: state.count - payload };
    case ADD:
      return { ...state, count: state.count + Number(payload) };
    case SUB:
      return { ...state, count: state.count - Number(payload) };
    case MULTIPLY:
      return { ...state, count: state.count * Number(payload) };
    case DIVIDE:
      return { ...state, count: (state.count / Number(payload)).toFixed(2) };
    case RESET:
      return { ...state, count: 0 };
    default:
      return state;
  }
};
