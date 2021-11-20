import { useEffect, useState } from "react";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import { Program, Provider, web3 } from "@project-serum/anchor";

import { styled } from "../stitches.config";
import Button from "../button/button";
import Connected from "../connected/connected";

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: "64px",
});

const { SystemProgram, Keypair } = web3;

export default function Content() {
  const [walletAddress, setWalletAddress] = useState(null);

  useEffect(() => {
    const isWalletConnected = async () => {
      try {
        const { solana } = window;

        if (solana?.isPhantom) {
          const response = await solana.connect({ onlyIfTrusted: true });
          console.log(
            "Connected with public key:",
            response.publicKey.toString()
          );
          setWalletAddress(response.publicKey.toString());
        } else {
          alert("Solana object not found! Get a Phantom Wallet 👻");
        }
      } catch (err) {
        console.error(err);
      }
    };

    isWalletConnected();
  }, []);

  const connectWallet = async () => {
    if (window?.solana) {
      const response = await window.solana.connect();
      console.log("Connected with public key", response.publicKey.toString());
      setWalletAddress(response.publicKey.toString());
    }
  };

  return (
    <Wrapper>
      {!walletAddress && (
        <Button fontSize="md" onClick={connectWallet}>
          Connect Wallet
        </Button>
      )}
      {walletAddress && <Connected />}
    </Wrapper>
  );
}
