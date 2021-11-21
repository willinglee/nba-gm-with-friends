import { styled, keyframes } from "../stitches.config";

const spin = keyframes({
  to: {
    transform: "rotate(360deg)",
  },
});

const Spinner = styled("div", {
  display: "inline-block",
  border: "3px solid $primary",
  borderRadius: "50%",
  borderTopColor: "$loContrast",
  width: "40px",
  height: "40px",
  animation: `${spin} 1s linear infinite`,
});

export default Spinner;
