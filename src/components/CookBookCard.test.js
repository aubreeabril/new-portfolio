import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import CookbookCard from "./CookBookCard";

describe("CookBook Card", () => {
  it("renders the cookbook card", () => {
    const wrapper = shallow(<CookBookCard />);
    expect(wrapper.find(".cook-book").length).toEqual(1);
  });

  it("matches its snapshot", () => {
    const section = renderer.create(<CookBookCard />).toJSON();
    expect(section).toMatchSnapshot();
  });
});
