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

/* eslint-disable @typescript-eslint/no-explicit-any */

import { render, screen } from "@testing-library/react";
import AboutClient from ".";
import { AboutSectionData } from "../index.types";
// Mock all child components to avoid full DOM complexity
jest.mock("./sections/hero-section", () => ({
  __esModule: true,
  default: () => <div data-testid="hero-section" />,
}));

jest.mock("./sections/who-we-are-section", () => ({
  __esModule: true,
  default: ({ data }: any) => (
    <div data-testid="who-we-are-section">{data?.length ?? 0}</div>
  ),
}));

jest.mock("@/components/containers/base-container", () => ({
  __esModule: true,
  default: ({ children }: any) => (
    <div data-testid="base-container">{children}</div>
  ),
}));

describe("AboutClient Component", () => {
  const mockData: AboutSectionData[] = [
    {
      id: 0,
      title: "Mission",
      description: "Our mission is...",
      path: "",
    },
    { id: 0, title: "Vision", description: "Our vision is...", path: "" },
  ];

  it("renders all main sections", () => {
    render(<AboutClient status={true} data={mockData} />);

    expect(screen.getByTestId("base-container")).toBeInTheDocument();
    expect(screen.getByTestId("hero-section")).toBeInTheDocument();
    const whoWeAre = screen.getByTestId("who-we-are-section");
    expect(whoWeAre).toBeInTheDocument();
    expect(whoWeAre.textContent).toBe(String(mockData.length)); // check mock data length
  });
});