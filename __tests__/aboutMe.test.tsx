import React from "react";
import 'jest';
import {describe, expect, test} from '@jest/globals';
import { render } from "@testing-library/react";
import AboutMe from "../src/components/aboutMe";

describe("AboutMe Component", function () {

    it("should have correct image SRC", function () {
        render(<AboutMe />);
        const testImage = document.querySelector("img") as HTMLImageElement;
        const expected = "https://1.gravatar.com/avatar/74ae5c84e2bfdccfbbe56ea0bd556af5?s=96&r=g"
        expect(testImage.src).toContain(expected)
    });

    it("should have correct image alt text", function () {
        render(<AboutMe />);
        const testImage = document.querySelector("img") as HTMLImageElement;
        const expected = "Peter Fisher Contract Web Developer"
        expect(testImage.alt).toContain(expected)
    });
});