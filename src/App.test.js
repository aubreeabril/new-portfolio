import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Menu from "./components/Menu";

describe("App", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".App").length).toEqual(1);
  });

  it("renders the menu", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Menu).length).toEqual(1);
  });
});
