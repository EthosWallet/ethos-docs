import PlausibleProvider from 'next-plausible'

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
  )
}
