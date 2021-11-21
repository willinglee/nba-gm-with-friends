import { Connection, clusterApiUrl } from "@solana/web3.js";
import { Provider } from "@project-serum/anchor";

export const getProvider = () => {
  const network = clusterApiUrl("devnet");
  const preflightCommitment = "processed";
  const connection = new Connection(network, preflightCommitment);
  const provider = new Provider(connection, window.solana, {
    preflightCommitment,
  });

  return provider;
};
