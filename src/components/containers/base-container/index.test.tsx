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

import { render, screen } from "@testing-library/react";
import BaseContainer from ".";

describe("BaseContainer", () => {
  it("renders the container", () => {
    render(
      <BaseContainer>
        <div>Test Child</div>
      </BaseContainer>
    );

    const container = screen.getByTestId("base-container");
    expect(container).toBeInTheDocument();
  });

  it("renders children inside the container", () => {
    render(
      <BaseContainer>
        <p>Child Content</p>
      </BaseContainer>
    );

    expect(screen.getByText("Child Content")).toBeInTheDocument();
  });

  it("applies the correct className", () => {
    render(
      <BaseContainer>
        <div>Content</div>
      </BaseContainer>
    );

    const container = screen.getByTestId("base-container");

    expect(container).toHaveClass(
      "flex",
      "flex-col",
      "w-full",
      "overflow-y-scroll"
    );
  });
});