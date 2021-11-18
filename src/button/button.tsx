import { styled } from "../stitches.config";

const Button = styled("button", {
  border: "1px solid $hiContrast",
  backgroundColor: "$loContrast",
  color: "$hiContrast",
  padding: 8,
  borderRadius: 8,
  fontSize: "$small",

  "&:hover": {
    backgroundColor: "$hiContrast",
    color: "$loContrast",
  },

  variants: {
    fontSize: {
      sm: {
        fontSize: "$small",
      },
      md: {
        fontSize: "$medium",
      },
    },
  },
});

export default Button;
