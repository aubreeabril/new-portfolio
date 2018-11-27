import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import CookbookCard from "./CookBookCard";

describe("CookBook Card", () => {
  it("renders the cookbook card", () => {
    const wrapper = shallow(<CookbookCard />);
    expect(wrapper.find(".cook-book").length).toEqual(1);
  });

  it("matches its snapshot", () => {
    const section = renderer.create(<CookbookCard />).toJSON();
    expect(section).toMatchSnapshot();
  });
});
