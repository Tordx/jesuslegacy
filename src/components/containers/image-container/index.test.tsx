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
import ImageContainer from ".";

describe("ImageContainer", () => {
  it("renders the container", () => {
    render(
      <ImageContainer backgroundImage="url('/test.jpg')">
        <div>Content</div>
      </ImageContainer>
    );

    expect(screen.getByTestId("image-container")).toBeInTheDocument();
  });

  it("renders children inside the container", () => {
    render(
      <ImageContainer backgroundImage="url('/test.jpg')">
        <p>Child Content</p>
      </ImageContainer>
    );

    expect(screen.getByText("Child Content")).toBeInTheDocument();
  });

  it("applies default cover and position styles", () => {
    render(
      <ImageContainer backgroundImage="url('/test.jpg')">
        <div>Content</div>
      </ImageContainer>
    );

    const container = screen.getByTestId("image-container");

    expect(container).toHaveStyle({
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    });
  });

  it("applies custom cover and position props", () => {
    render(
      <ImageContainer
        backgroundImage="url('/test.jpg')"
        cover="contain"
        position="top"
      >
        <div>Content</div>
      </ImageContainer>
    );

    const container = screen.getByTestId("image-container");

    expect(container).toHaveStyle({
      backgroundSize: "contain",
      backgroundPosition: "top",
    });
  });

  it("applies background image", () => {
    render(
      <ImageContainer backgroundImage="url('/bg.jpg')">
        <div>Content</div>
      </ImageContainer>
    );

    const container = screen.getByTestId("image-container");

    expect(container).toHaveStyle({
      backgroundImage: "url('/bg.jpg')",
    });
  });
});