import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import HomeContainer from "./HomeContainer";
import About from "../components/About";
import Contact from "../components/Contact";
import ProjectsContainer from "./ProjectsContainer";

describe("Home Container", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<HomeContainer />);
    expect(wrapper.find(".home-container").length).toEqual(1);
  });

  it("renders the about, contact and project sections", () => {
    const wrapper = shallow(<HomeContainer />);
    expect(wrapper.find(About).length).toEqual(1);
    expect(wrapper.find(Contact).length).toEqual(1);
    expect(wrapper.find(ProjectsContainer).length).toEqual(1);
  });
});
