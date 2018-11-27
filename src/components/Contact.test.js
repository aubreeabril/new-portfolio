import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Contact from "./Contact";

describe("Contact", () => {
  it("renders the Contact section", () => {
    const wrapper = shallow(<Contact />);
    expect(wrapper.find(".contact-text").length).toEqual(1);
  });

  it("matches its snapshot", () => {
    const section = renderer.create(<Contact />).toJSON();
    expect(section).toMatchSnapshot();
  });
});
