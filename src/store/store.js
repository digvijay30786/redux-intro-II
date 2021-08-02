import { createStore } from "redux";
import { ReducerFunction } from "./reducer.js";
export const Store = createStore(ReducerFunction);
