/*
 * Jesus Legacy Church Project
 * Copyright (c) 2026 Jesus Legacy Church.
 *
 * This work is created for the ministry and mission of Jesus Legacy Church.
 * Redistribution, modification, or commercial use of any portion of this
 * project without written permission from Jesus Legacy Church leadership
 * is not permitted.
 *
 * All rights reserved.
 */

import { render, screen, fireEvent } from "@testing-library/react";
import HeroSection from "./hero-section";

describe("HeroSection", () => {
  beforeEach(() => {
    jest.spyOn(window, "scrollTo").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders the hero title", () => {
    render(<HeroSection />);

    expect(screen.getByText("Welcome to")).toBeInTheDocument();
    expect(screen.getByText("Jesus Legacy Church")).toBeInTheDocument();
  });

  it("renders the learn more button", () => {
    render(<HeroSection />);

    const button = screen.getByRole("button", {
      name: /learn more about us/i,
    });

    expect(button).toBeInTheDocument();
  });

  it("scrolls to the section when button is clicked", () => {
    const mockSection = document.createElement("div");
    mockSection.id = "what-we-do";

    mockSection.getBoundingClientRect = jest.fn(() => ({
      top: 100,
      left: 0,
      bottom: 0,
      right: 0,
      width: 0,
      height: 0,
      x: 0,
      y: 0,
      toJSON: () => {},
    }));

    document.body.appendChild(mockSection);

    render(<HeroSection />);

    const button = screen.getByRole("button", {
      name: /learn more about us/i,
    });

    fireEvent.click(button);

    expect(window.scrollTo).toHaveBeenCalled();
  });
});