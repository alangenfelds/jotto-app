import checkPropTypes from "check-prop-types";
import { createStore, applyMiddleware } from "redux";

import rootReducer from "../src/reducers";
import { middlewares } from '../src/configureStore';


export const findByTestAttr = (wrapper, attrVal) => {
  return wrapper.find(`[data-test="${attrVal}"]`);
};

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps, // related props
    "prop",
    component.name
  );

  expect(propError).toBeUndefined();
};

export const storeFactory = initialState => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares);
  return createStoreWithMiddleware(rootReducer, initialState);
  // return createStore(rootReducer, initialState);
};
