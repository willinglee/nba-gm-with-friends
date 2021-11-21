import { PublicKey } from "@solana/web3.js";
import { web3, Program } from "@project-serum/anchor";

import kp from "./keypair.json";
import { getProvider } from "./provider";
import { PROGRAM_ADDRESS, IDL } from "./idl";

export const getBaseAccount = () => {
  const arr = Object.values(kp._keypair.secretKey);
  const secret = new Uint8Array(arr);
  const baseAccount = web3.Keypair.fromSecretKey(secret);

  return baseAccount;
};

export const getProgram = () => {
  const programID = new PublicKey(PROGRAM_ADDRESS);
  const provider = getProvider();
  const program = new Program(IDL, programID, provider);
  return program;
};
