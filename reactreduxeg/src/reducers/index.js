import changeTheNumber from "./upDown";
import { combineReducers } from "redux";

/***
 * to combine multiple reducer redux
 */
const routeReducers = combineReducers({
    changeTheNumber
   
})

export default routeReducers;