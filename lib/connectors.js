import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'

const POLLING_INTERVAL = 12000;
const RPC_URLS = {
  1: 'https://mainnet.infura.io/v3/6fb67a20984946468fbfa067ca210bb6',
  3: 'https://ropsten.infura.io/v3/6fb67a20984946468fbfa067ca210bb6',
}
export const walletconnect = new WalletConnectConnector({
  rpc: { 1: RPC_URLS[1], 4: RPC_URLS[4] },
  qrcode: true,
  pollingInterval: POLLING_INTERVAL,
})

export const walletlink = new WalletLinkConnector({
  url: RPC_URLS[1],
  appName: 'Coinbase',
  supportedChainIds: [1, 3, 4, 5, 42, 10, 137, 69, 420, 80001],
})