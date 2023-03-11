import{createStore,applyMiddleware} from "redux";
import counterReducer from "./counter/counterReducer";
import dynamicCounterReducer from "./dynamicCounter/dynamicCounterReducer";
import rootReducer from "./rootReducer";
import myLogger from "./middleWare/myLogger";
import logger from "redux-logger";
import{composeWithDevTools} from "redux-devtools-extension"

//create our first middleware


const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(logger,myLogger))
    );

export default store;