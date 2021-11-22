import { useReducer, Dispatch, SetStateAction } from "react";

import { styled } from "../stitches.config";
import Text from "../text/text";
import Button from "../button/button";
import Spacer from "../spacer/spacer";

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

type DRAFT_STATE = "start" | "progress" | "complete";

interface State {
  draftState: DRAFT_STATE;
}

type Action =
  | { draftState: "start" }
  | { draftState: "progress" }
  | { draftState: "complete" };

function draftReducer(state: State, action: Action): State {
  switch (action.draftState) {
    case "start":
      return { ...state, draftState: "start" };
    default:
      return state;
  }
}

interface StartDraftProps {
  start: () => void;
}
function StartDraft({ start }: StartDraftProps) {
  return (
    <>
      <Text as="h1">Let's Draft Some Players</Text>
      <Spacer axis="vertical" css={{ minHeight: "24px", height: "24px" }} />
      <Button>Start Draft</Button>
    </>
  );
}

interface ProgressDraftProps {
  finish: () => void;
}
function ProgressDraft({ finish }: ProgressDraftProps) {
  return (
    <>
      <Text as="h1">Pick a player</Text>
    </>
  );
}

interface CompleteDraftProps {
  setPlayers: Dispatch<SetStateAction<never[]>>;
  players: any[];
}
function CompleteDraft({ setPlayers, players }: CompleteDraftProps) {
  return (
    <>
      <Text as="h1">Draft Completed!</Text>
    </>
  );
}

interface DraftProps {
  setPlayers: Dispatch<SetStateAction<never[]>>;
  players: any[];
}
export default function Draft({ setPlayers, players }: DraftProps) {
  const [state, dispatch] = useReducer(draftReducer, { draftState: "start" });

  const startDraft = () => dispatch({ draftState: "progress" });
  const finishDraft = () => dispatch({ draftState: "complete" });

  return (
    <Wrapper>
      {state.draftState === "start" && <StartDraft start={startDraft} />}
      {state.draftState === "progress" && (
        <ProgressDraft finish={finishDraft} />
      )}
      {state.draftState === "complete" && (
        <CompleteDraft setPlayers={setPlayers} players={players} />
      )}
    </Wrapper>
  );
}
