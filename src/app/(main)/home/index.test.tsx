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
import HomeClient from "./client";
import { useRouter } from "next/navigation";

jest.mock("next/navigation");

const mockedUseRouter = useRouter as jest.MockedFunction<typeof useRouter>;

mockedUseRouter.mockReturnValue({
  push: jest.fn(),
  replace: jest.fn(),
  refresh: jest.fn(),
} as any);
jest.mock("./client/sections/hero-section", () => ({
  __esModule: true,
  default: () => <div data-testid="hero-section" />,
}));

jest.mock("./client/sections/church-summary-section", () => ({
  __esModule: true,
  default: () => <div data-testid="church-summary-section" />,
}));

jest.mock("./client/sections/gallery-section", () => ({
  __esModule: true,
  default: ({ images }: any) => (
    <div data-testid="gallery-section">{images.length}</div>
  ),
}));

jest.mock("./client/sections/banner-section", () => ({
  __esModule: true,
  default: () => <div data-testid="banner-section" />,
}));

jest.mock("@/components/containers/base-container", () => ({
  __esModule: true,
  default: ({ children }: any) => (
    <div data-testid="base-container">{children}</div>
  ),
}));

jest.mock("@/components/containers/image-container", () => ({
  __esModule: true,
  default: ({ children }: any) => (
    <div data-testid="image-container">{children}</div>
  ),
}));

describe("HomeClient Component", () => {
  const mockData = [
    {
      id: "",
      path: "",
      created_by: "",
      created_at: "",
    },
    {
      id: "",
      path: "",
      created_by: "",
      created_at: "",
    },
    {
      id: "",
      path: "",
      created_by: "",
      created_at: "",
    },
  ];

  it("renders all main sections", () => {
    render(<HomeClient data={mockData} />);

    expect(screen.getByTestId("base-container")).toBeInTheDocument();
    expect(screen.getByTestId("image-container")).toBeInTheDocument();
    expect(screen.getByTestId("hero-section")).toBeInTheDocument();
    expect(screen.getByTestId("church-summary-section")).toBeInTheDocument();
    expect(screen.getByTestId("gallery-section")).toHaveTextContent("3");
    expect(screen.getByTestId("banner-section")).toBeInTheDocument();
  });
});
