const polkadot = require("@polkadot/api");
const crustio = require("@crustio/type-definitions");
const keyringPair = require("@polkadot/keyring/pair");

const { waitReady } = require("@polkadot/wasm-crypto");
const { Keyring } = require("@polkadot/api");

const crustChainEndpoint = "wss://rpc.crust.network";
const Wsprovider = new polkadot.WsProvider(crustChainEndpoint);

async function placeStorageOrder() {
  await waitReady();
  const api = new polkadot.ApiPromise({
    provider: Wsprovider,
    typesBundle: crustio.typesBundleForPolkadot,
  });
  await api.isReady;
  const fileCid = "0x232bA664D4608b93F43e10B4F52Bb838961dbE82";
  const fileSize = 2 * 1024 * 1024 * 1024;
  const tips = 0;
  const memo = "";
  const tx = api.tx.market.placeStorageOrder(fileCid, fileSize, tips, memo);

  const keyring = new Keyring({ type: "sr25519" });
  console.log(keyring);
  const krp = keyring.addFromUri(
    "fly umbrella decline exhaust peace husband seminar item pigeon desk vote wave"
  );
  console.log(krp);

  await api.isReadyOrError;
  return new Promise((resolve, reject) => {
    tx.signAndSend(krp, ({ events = [], status }) => {
      console.log(`💸  Tx status: ${status.type}, nonce: ${tx.nonce}`);

      if (status.isInBlock) {
        events.forEach(({ event: { method, section } }) => {
          if (method === "ExtrinsicSuccess") {
            console.log(`✅  Place storage order success!`);
            resolve(true);
          }
        });
      } else {
      }
    }).catch((e) => {
      reject(e);
    });
  });
}

const res = placeStorageOrder();
