import { useReducer, Dispatch, SetStateAction, useState } from "react";

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
    case "progress":
      return { ...state, draftState: "progress" };
    case "complete":
      return { ...state, draftState: "complete" };
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
      <Button onClick={start}>Start Draft</Button>
    </>
  );
}

interface ProgressDraftProps {
  finish: () => void;
  setDraftedPlayers: Dispatch<SetStateAction<any[]>>;
  draftedPlayers: any[];
}
function ProgressDraft({ finish, draftedPlayers }: ProgressDraftProps) {
  const [player, setPlayer] = useState();

  const isDone = draftedPlayers.length === 5;

  return (
    <>
      <Text as="h1">Pick a player</Text>
      {isDone && (
        <>
          <Spacer axis="vertical" css={{ minHeight: "24px", height: "24px" }} />
          <Button onClick={finish}>Finish</Button>
        </>
      )}
    </>
  );
}

function CompleteDraft() {
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
  const [draftedPlayers, setDraftedPlayers] = useState(players);
  const [state, dispatch] = useReducer(draftReducer, { draftState: "start" });

  const startDraft = () => dispatch({ draftState: "progress" });
  const finishDraft = () => dispatch({ draftState: "complete" });

  return (
    <Wrapper>
      {state.draftState === "start" && <StartDraft start={startDraft} />}
      {state.draftState === "progress" && (
        <ProgressDraft
          finish={finishDraft}
          setDraftedPlayers={setDraftedPlayers}
          draftedPlayers={draftedPlayers}
        />
      )}
      {state.draftState === "complete" && <CompleteDraft />}
    </Wrapper>
  );
}
