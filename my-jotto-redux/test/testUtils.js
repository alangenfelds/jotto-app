import checkPropTypes from "check-prop-types";

import rootReducer from "../src/reducers";
import { createStore } from "../../../../Users/Arturs.Langenfelds/AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux";

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
  return createStore(rootReducer, initialState);
};
