import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
// this imports the matchers from the jest-dom library
import * as matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);

afterEach(() => cleanup());
