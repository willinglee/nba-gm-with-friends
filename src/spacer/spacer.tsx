import { styled } from "../stitches.config";

const Spacer = styled("span", {
  display: "block",
  variants: {
    axis: {
      horizontal: {
        height: "1px",
        minHeight: "1px",
      },
      vertical: {
        width: "1px",
        minWidth: "1px",
      },
    },
  },
});

export default Spacer;
