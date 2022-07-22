import React from "react";
import { ChainId, DAppProvider } from "@usedapp/core";
import PropTypes from "prop-types";

const config = {
    readOnlyChainId: ChainId.Mainnet,
    readOnlyUrls: {
        [ChainId.Mainnet]:
            "https://mainnet.infura.io/v3/6fb67a20984946468fbfa067ca210bb6",
        [ChainId.Ropsten]:
            "https://ropsten.infura.io/v3/6fb67a20984946468fbfa067ca210bb6",
    },
    multicallVersion: 2,
};

const DappProvider = ({ children }) => (
    <DAppProvider config={config}>{children}</DAppProvider>
);

DappProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};

export default DappProvider;
