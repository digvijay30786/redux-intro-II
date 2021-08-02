import {
  ADD,
  SUB,
  DIVIDE,
  MULTIPLY,
  ADD_COUNT,
  REMOVE_COUNT,
  RESET
} from "./actionType.js";

export const addCount = (count) => {
  return { type: ADD_COUNT, payload: count };
};

export const removeCount = (count) => {
  return { type: REMOVE_COUNT, payload: count };
};

export const reset = () => {
  return { type: RESET };
};

export const add = (count) => {
  return { type: ADD, payload: count };
};

export const sub = (count) => {
  return { type: SUB, payload: count };
};

export const Multiply = (count) => {
  return { type: MULTIPLY, payload: count };
};

export const divide = (count) => {
  return { type: DIVIDE, payload: count };
};
