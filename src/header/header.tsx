import { useContext } from "react";

import { styled } from "../stitches.config";
import { ColorModeContext } from "../color-mode-provider";
import Text from "../text/text";
import Button from "../button/button";
import Spacer from "../spacer/spacer";

const Wrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  paddingTop: 64,
});

export default function Header() {
  const context = useContext(ColorModeContext);

  return (
    <Wrapper>
      <Text as="h1">NBA GM With Friends ✌️</Text>
      <Spacer axis="horizontal" css={{ minWidth: "16px", width: "16px" }} />
      <Button onClick={context?.cycleToggleMode}>
        Mode: {context?.colorMode}
      </Button>
    </Wrapper>
  );
}
