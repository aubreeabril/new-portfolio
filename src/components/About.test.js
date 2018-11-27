import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import About from "./About";

describe("About", () => {
  it("renders the About section", () => {
    const wrapper = shallow(<About />);
    expect(wrapper.find(".About").length).toEqual(1);
  });
  it("matches its snapshot", () => {
    const section = renderer.create(<About />).toJSON();
    expect(section).toMatchSnapshot();
  });
});
