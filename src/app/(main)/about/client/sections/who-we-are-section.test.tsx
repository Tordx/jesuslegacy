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

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */

import { render, screen } from "@testing-library/react";
import WhoWeAreSection from "./who-we-are-section";

// Mock next/image
jest.mock("next/image", () => (props: any) => {
  return <img {...props} />;
});

// Mock framer-motion
jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...rest }: any) => <div {...rest}>{children}</div>,
  },
}));

const mockData = [
  {
    id: 0,
    title: "Our Mission",
    description: "To spread the Gospel and serve the community.",
    path: "/mission.jpg",
  },
  {
    id: 1,
    title: "Our Vision",
    description: "To build a Christ-centered generation.",
    path: "/vision.jpg",
  },
];

describe("WhoWeAreSection", () => {
  it("renders the section heading", () => {
    render(<WhoWeAreSection data={mockData} url="https://example.com" />);

    expect(
      screen.getByText(/who we are and what we do/i)
    ).toBeInTheDocument();
  });

  it("renders all section titles", () => {
    render(<WhoWeAreSection data={mockData} url="https://example.com" />);

    expect(screen.getByText("Our Mission")).toBeInTheDocument();
    expect(screen.getByText("Our Vision")).toBeInTheDocument();
  });

  it("renders all descriptions", () => {
    render(<WhoWeAreSection data={mockData} url="https://example.com" />);

    expect(
      screen.getByText("To spread the Gospel and serve the community.")
    ).toBeInTheDocument();

    expect(
      screen.getByText("To build a Christ-centered generation.")
    ).toBeInTheDocument();
  });

  it("renders images with correct src", () => {
    render(<WhoWeAreSection data={mockData} url="https://example.com" />);

    const images = screen.getAllByRole("img");

    expect(images[0]).toHaveAttribute(
      "src",
      "https://example.com/mission.jpg"
    );

    expect(images[1]).toHaveAttribute(
      "src",
      "https://example.com/vision.jpg"
    );
  });

  it("renders the correct number of sections", () => {
    render(<WhoWeAreSection data={mockData} url="https://example.com" />);

    const titles = screen.getAllByRole("heading", { level: 2 });

    expect(titles.length).toBe(2);
  });
});