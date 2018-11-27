import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import BookClubCard from "./BookClubCard";

describe("Book Club Card", () => {
  it("renders the book club card", () => {
    const wrapper = shallow(<BookClubCard />);
    expect(wrapper.find(".book-club").length).toEqual(1);
  });

  it("matches its snapshot", () => {
    const section = renderer.create(<BookClubCard />).toJSON();
    expect(section).toMatchSnapshot();
  });
});
