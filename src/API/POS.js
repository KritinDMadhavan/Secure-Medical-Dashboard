import { POSClient, use } from "@maticnetwork/maticjs"
import { Web3ClientPlugin } from '@maticnetwork/maticjs-ethers'
import { providers, Wallet } from "ethers";


// install web3 plugin
use(Web3ClientPlugin);

const parentProvider = new providers.JsonRpcProvider(rpc.parent);
const childProvider = new providers.JsonRpcProvider(rpc.child);

const posClient = new POSClient();
await posClient.init({
    network: 'testnet',
    version: 'mumbai',
    parent: {
        provider: new Wallet('e1da68c2c546c28b75f190970c09eefc86409987d1db7c53008b5af63d662a15', parentProvider),
        defaultConfig: {
            from: fromAddress
        }
    },
    child: {
        provider: new Wallet('e1da68c2c546c28b75f190970c09eefc86409987d1db7c53008b5af63d662a15', childProvider),
        defaultConfig: {
            from: fromAddress
        }
    }
});

const root = '0xba9cB4cd83330f82F3d2eaf2fc730ebA3ad3654B';

class POS {

    async approve() {
        const erc20RootToken = posClient.erc20(root, true);
        const approveResult = await erc20Token.approve(0.001);
        const txHash = await approveResult.getTransactionHash();
        const txReceipt = await approveResult.getReceipt();
    }

    async deposit(user) {
        const erc20RootToken = posClient.erc20(root, true);
        const result = await erc20Token.deposit(0.001, user);
        const txHash = await result.getTransactionHash();
        const txReceipt = await result.getReceipt();
    }
}

