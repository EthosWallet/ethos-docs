import PlausibleProvider, { usePlausible } from 'next-plausible';
import { useNetwork } from 'src/hooks';

/**
 * Currently using [plausible.io](https://plausible.io).
 *
 * ## Notes
 *
 * - [next-plausible](https://github.com/4lejandrito/next-plausible) npm package
 *    - [docs for additional provider props](https://github.com/4lejandrito/next-plausible#plausibleprovider-props)
 */
export function AnalyticsProvider({ children }) {
  return (
    <PlausibleProvider domain="docs.ethoswallet.xyz" trackOutboundLinks>
      {children}
    </PlausibleProvider>
  );
}

/**
 * These events need to be manually added to plausible.io as custom event goals
 * with the same name as show here.
 */
// type AnalyticsEvent = {
//   'user/click/mint-nft-ethos-squad': SharedEventData;
//   'user/click/send-coin': SharedEventData;
//   'user/click/transfer-nft': SharedEventData;
//   'network/send-coin-success': SharedEventData;
//   'network/send-coin-failure': SharedEventData;
// };

// export function useAnalyticsEvent() {
//   const plausible = usePlausible();
//   const { networkName } = useNetwork();

//   const event = {
//     user: {
//       click: {
//         mintNftEthosSquad() {
//           plausible('user/click/mint-nft-ethos-squad', {
//             props: { network: networkName },
//           });
//         },
//         sendCoin() {
//           plausible('user/click/send-coin', {
//             props: { network: networkName },
//           });
//         },
//         transferNft() {
//           plausible('user/click/transfer-nft', {
//             props: { network: networkName },
//           });
//         },
//       },
//     },
//     network: {
//       sendCoinSuccess() {
//         plausible('network/send-coin-success', {
//           props: { network: networkName },
//         });
//       },
//       sendCoinFailure() {
//         plausible('network/send-coin-failure', {
//           props: { network: networkName },
//         });
//       },
//     },
//   };

//   return { event };
// }
