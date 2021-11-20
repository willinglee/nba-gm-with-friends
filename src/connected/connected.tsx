import { useState } from "react";

import Button from "../button/button";
import Players from "../players/players";

export default function Connected() {
  const [players, setPlayers] = useState([]);

  const createGmAccount = () => {};

  return (
    <div>
      {players.length === 0 && (
        <Button fontSize="md" onClick={createGmAccount}>
          Create GM Account
        </Button>
      )}
      {players.length > 0 && <Players />}
    </div>
  );
}
