import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import HabitTrackerCard from "./HabitTrackerCard";

describe("Habit Tracker Card", () => {
  it("renders the habit tracker card", () => {
    const wrapper = shallow(<HabitTrackerCard />);
    expect(wrapper.find(".habit-tracker").length).toEqual(1);
  });

  it("matches its snapshot", () => {
    const section = renderer.create(<HabitTrackerCard />).toJSON();
    expect(section).toMatchSnapshot();
  });
});
