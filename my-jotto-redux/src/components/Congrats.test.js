import React from "react";
import  { shallow } from "enzyme";

import { findByTestAttr, checkProps } from "../../test/testUtils";
import Congrats from "./Congrats";

// Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultProps = { success: false };

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }; // 'props' will override 'defaultProps' if supplied
  return shallow(<Congrats {...setupProps} />); // same as <Congrats success={true} />
};

test("renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});

test("renders no text when `success` prop is false", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.text()).toBe("");
});

test("renders non-empty congrats message when `success` prop is true", () => {
  const wrapper = setup({ success: true });
  const component = findByTestAttr(wrapper, "component-congrats");
  // expect(component.text()).toBe("Congrats")
  expect(component.text().length).not.toBe(0);
});

test("does not throw warnings with expected props", () => {
  const expectedProps = { success: false };
  // const propError = checkPropTypes(Congrats.propTypes, expectedProps, 'prop', Congrats.name);
  // expect(propError).toBeUndefined();
  checkProps(Congrats, expectedProps);
});
