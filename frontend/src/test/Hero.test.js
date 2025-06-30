import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Hero from "../landing_page/home/Hero";

// test Suite

describe("Hero Component", () => {
  test("render hero image", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("HeroImg");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "media/homeHero.png");
  });

  test("render SignUp button", () => {
    render(<Hero />);
    const SignUpButton = screen.getByRole("button", { name: "/SignUp" });
    expect(SignUpButton).toBeInTheDocument();
    expect(SignUpButton).toHaveClass("btn-primary");
  });
});
