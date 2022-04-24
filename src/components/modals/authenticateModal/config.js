import Metamask from "../../../../public/media/walletIcons/metamask.svg";
import WalletConnect from "../../../../public/media/walletIcons/wallet-connect.svg";
import MathWallet from "../../../../public/media/walletIcons/MathWallet.svg";
import TokenPocket from "../../../../public/media/walletIcons/TokenPocket.svg";
import SafePal from "../../../../public/media/walletIcons/SafePal.svg";
import TrustWallet from "../../../../public/media/walletIcons/trustWallet.svg";
import Coin98 from "../../../../public/media/walletIcons/coin98.svg";

export const connectors = [
  {
    title: "Metamask",
    icon: Metamask,
    connectorId: "injected",
    priority: 1,
  },
  {
    title: "WalletConnect",
    icon: WalletConnect,
    connectorId: "walletconnect",
    priority: 2,
  },
  {
    title: "Trust Wallet",
    icon: TrustWallet,
    connectorId: "injected",
    priority: 3,
  },
  {
    title: "MathWallet",
    icon: MathWallet,
    connectorId: "injected",
    priority: 999,
  },
  {
    title: "TokenPocket",
    icon: TokenPocket,
    connectorId: "injected",
    priority: 999,
  },
  {
    title: "SafePal",
    icon: SafePal,
    connectorId: "injected",
    priority: 999,
  },
  {
    title: "Coin98",
    icon: Coin98,
    connectorId: "injected",
    priority: 999,
  },
];
