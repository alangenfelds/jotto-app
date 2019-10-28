import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import { findByTestAttr } from "../../test/testUtils";
import Congrats from "./Congrats";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}) => {
  return shallow(<Congrats {...props} />); // same as <Congrats success={true} />
};

test("renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});

test("renders no text when `success` prop is false", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.text()).toBe("")
});

test("renders non-empty congrats message when `success` prop is true", () => {
    const wrapper = setup({ success: true });
    const component = findByTestAttr(wrapper, "component-congrats");
    // expect(component.text()).toBe("Congrats")
    expect(component.text().length).not.toBe(0)
});
