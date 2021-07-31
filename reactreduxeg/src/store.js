import { createStore } from "redux";
import routeReducers from "./reducers/index";

const store = createStore(
    routeReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;