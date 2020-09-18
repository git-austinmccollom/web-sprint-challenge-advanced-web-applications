import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { getColors as mockColors } from '../api/getColors';

jest.mock("../api/getColors");

const data = [
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff"
    },
    id: 1
  },
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc"
    },
    id: 2
  },
  {
    color: "aqua",
    code: {
      hex: "#00ffff"
    },
    id: 3
  },
  {
    color: "aquamarine",
    code: {
      hex: "#7fffd4"
    },
    id: 4
  },
  {
    color: "lilac",
    code: {
      hex: "#9a99dd"
    },
    id: 5
  },
  {
    color: "softpink",
    code: {
      hex: "#dd99ba"
    },
    id: 6
  },
  {
    color: "bisque",
    code: {
      hex: "#dd9a99"
    },
    id: 7
  },
  {
    color: "softyellow",
    code: {
      hex: "#dcdd99"
    },
    id: 8
  },
  {
    color: "blanchedalmond",
    code: {
      hex: "#ffebcd"
    },
    id: 9
  },
  {
    color: "blue",
    code: {
      hex: "#6093ca"
    },
    id: 10
  },
  {
    color: "blueviolet",
    code: {
      hex: "#8a2be2"
    },
    id: 11
  }
];

test("render episodes when page loads",  () => {
  render(<BubblePage />);
});

mockColors.mockResolvedValue(data);

test("Fetches data and renders the bubbles", async () => {
  const { rerender, findByText } = render(<BubblePage />);
  rerender(<BubblePage />);
  const bubbles = await screen.findByTestId('bubbles');
  await waitFor( () => expect(bubbles).toBeInTheDocument() );

  // const page = render(<BubblePage />)
  // const color = page.findByTestId('colors');
  // expect(color).toBeInTheDocument();
});
