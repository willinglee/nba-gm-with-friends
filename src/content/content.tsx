import { styled } from "../stitches.config";
import Button from "../button/button";
import Spacer from "../spacer/spacer";

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: "64px",
});

export default function Content() {
  return (
    <Wrapper>
      <Button fontSize="md">Login</Button>
    </Wrapper>
  );
}
