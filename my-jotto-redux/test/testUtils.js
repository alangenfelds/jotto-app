import checkPropTypes from "check-prop-types";

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
