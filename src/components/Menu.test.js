import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Menu from "./Menu";

describe("Menu", () => {
  it("renders the menu", () => {
    const wrapper = shallow(<Menu />);
    expect(wrapper.find(".menu").length).toEqual(1);
  });
  it("matches its snapshot", () => {
    const section = renderer.create(<Menu />).toJSON();
    expect(section).toMatchSnapshot();
  });
});
