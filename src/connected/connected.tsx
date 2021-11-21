import { useEffect, useState } from "react";
import { SystemProgram } from "@solana/web3.js";

import { getProvider } from "../config/provider";
import { getBaseAccount, getProgram } from "../config/program";
import Button from "../button/button";
import Spinner from "../spinner/spinner";
import Players from "../players/players";

export default function Connected() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [account, setAccount] = useState({ hasAccount: false });

  const createGmAccount = async () => {
    try {
      setLoading(true);
      const program = getProgram();
      const baseAccount = getBaseAccount();
      const provider = getProvider();

      await program.rpc.initialize({
        accounts: {
          baseAccount: baseAccount.publicKey,
          user: provider.wallet.publicKey,
          systemProgram: SystemProgram.programId,
        },
        signers: [baseAccount],
      });

      console.log(
        "Created a new BaseAccount with address:",
        baseAccount.publicKey.toString()
      );
      setLoading(false);
    } catch (err) {
      console.log("Error in creating BaseAccount:", err);
      setLoading(false);
    }
  };

  const getPlayers = async () => {
    try {
      setLoading(true);
      const program = getProgram();
      const baseAccount = getBaseAccount();
      const account = await program.account.baseAccount.fetch(
        baseAccount.publicKey
      );
      setLoading(false);
      setAccount({ ...account, hasAccount: true });
    } catch (err) {
      console.log("Error in getPlayers:", err);
      setLoading(false);
      setAccount({ hasAccount: false });
    }
  };

  useEffect(() => {
    getPlayers();
  }, []);

  if (loading) return <Spinner />;

  return (
    <div>
      {!account.hasAccount && (
        <Button fontSize="md" onClick={createGmAccount}>
          Create GM Account
        </Button>
      )}
      {players.length > 0 && <Players />}
    </div>
  );
}
