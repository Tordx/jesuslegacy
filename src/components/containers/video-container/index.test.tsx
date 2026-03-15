/*
 * Jesus Legacy Church Project
 * Copyright (c) 2026 Jesus Legacy Church.
 */

import { render, screen } from "@testing-library/react";
import VideoContainer from ".";

// Mock framer-motion
jest.mock("framer-motion", () => ({
  motion: {
    video: (props: any) => <video {...props} />,
  },
  useScroll: () => ({
    scrollYProgress: { onChange: jest.fn() },
  }),
  useTransform: () => 0,
}));

describe("VideoContainer", () => {
  it("renders the container", () => {
    render(
      <VideoContainer videoSrc="/video.mp4">
        <div>Test Content</div>
      </VideoContainer>
    );

    expect(screen.getByTestId("video-container")).toBeInTheDocument();
  });

  it("renders children content", () => {
    render(
      <VideoContainer videoSrc="/video.mp4">
        <div>Overlay Content</div>
      </VideoContainer>
    );

    expect(screen.getByText("Overlay Content")).toBeInTheDocument();
  });

  it("renders video with correct src", () => {
    render(
      <VideoContainer videoSrc="/background.mp4">
        <div>Content</div>
      </VideoContainer>
    );

    const video = document.querySelector("video");

    expect(video).toHaveAttribute("src", "/background.mp4");
  });

  it("uses default autoplay, loop, and muted props", () => {
    render(
      <VideoContainer videoSrc="/video.mp4">
        <div>Content</div>
      </VideoContainer>
    );

    const video = document.querySelector("video");

    expect(video).toHaveAttribute("autoplay");
    expect(video).toHaveAttribute("loop");
  });

  it("respects custom video props", () => {
    render(
      <VideoContainer
        videoSrc="/video.mp4"
        autoPlay={false}
        loop={false}
        muted={false}
      >
        <div>Content</div>
      </VideoContainer>
    );

    const video = document.querySelector("video");

    expect(video?.autoplay).toBe(false);
    expect(video?.loop).toBe(false);
    expect(video?.muted).toBe(false);
    expect(video?.style.objectFit).toBe('cover');
    expect(video?.style.objectPosition).toBe('center');

  });
  
});