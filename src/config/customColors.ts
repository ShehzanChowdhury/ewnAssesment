import type { CSSProperties } from "react";
import { ColorType } from "@/models/types";

const customColors: Record<ColorType, CSSProperties["color"]> = {
  white: "#fff",
  noriGreen: "#112617",
  offWhite: "#F2F6F9",
  dirtyGreen: "#69822F",
};

export default customColors;
