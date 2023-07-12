import { Store, applyMiddleware, createStore } from "redux";
import reducer from "./reducers/reducer";
import thunk from "redux-thunk";

export const store: Store<BookState, BookAction> & {
  dispatch: DispatchType;
} = createStore(reducer, applyMiddleware(thunk));
