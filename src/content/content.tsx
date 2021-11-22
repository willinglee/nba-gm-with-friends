import { useEffect, useState } from "react";

import { styled } from "../stitches.config";
import Button from "../button/button";
import Connected from "../connected/connected";

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: "96px",
});

export default function Content() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isWalletConnected = async () => {
      try {
        setLoading(true);
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
        setLoading(false);
      } catch (err) {
        setLoading(false);
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
      {!walletAddress && !loading && (
        <Button fontSize="md" onClick={connectWallet}>
          Connect Wallet
        </Button>
      )}
      {walletAddress && <Connected />}
    </Wrapper>
  );
}
