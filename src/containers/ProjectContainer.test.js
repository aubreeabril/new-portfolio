import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import ProjectsContainer from "./ProjectsContainer";

describe("Projects Container", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<ProjectsContainer />);
    expect(wrapper.find(".projects-container").length).toEqual(1);
  });

  it("contains three projects", () => {
    const wrapper = shallow(<ProjectsContainer />);
    expect(wrapper.find(".project").length).toEqual(3);
  });
});
