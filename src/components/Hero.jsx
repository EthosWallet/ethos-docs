import { Button } from '@/components/Button';
import blurIndigoImage from '@/images/blur-indigo.png';
import { PuzzlePieceIcon } from '@heroicons/react/24/solid';
import { EthosConnectProvider } from 'ethos-connect';
import Image from 'next/future/image';
import TryItOut from './TryItOut';

const codeLanguage = 'javascript'
const code = `export default {
  strategy: 'predictive',
  engine: {
    cpus: 12,
    backups: ['./storage/cache.wtf'],
  },
}`

const tabs = [
  { name: 'cache-advance.config.js', isActive: true },
  { name: 'package.json', isActive: false },
]

function TrafficLightsIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 42 10" fill="none" {...props}>
      <circle cx="5" cy="5" r="4.5" />
      <circle cx="21" cy="5" r="4.5" />
      <circle cx="37" cy="5" r="4.5" />
    </svg>
  )
}

export function Hero() {
  const ethosConfiguration = {
    apiKey: process.env.NEXT_PUBLIC_ETHOS_API_KEY,
    preferredWallets: ['Ethos Wallet'],
    network: "https://fullnode.devnet.sui.io"
  };

  return (
    <EthosConnectProvider
      ethosConfiguration={ethosConfiguration}
      dappName="<your dApp&apos;s Name>"
      dappIcon={<div className='flex items-center place-content-center p-1 h-12 w-12 bg-gray-500 rounded-lg'><PuzzlePieceIcon className="h-full w-full text-white" /></div>}
      connectMessage={<div>Your connect message goes here!</div>}
    >
      <div className="overflow-hidden bg-slate-900 dark:-mb-32 dark:mt-[-4.5rem] dark:pb-32 dark:pt-[4.5rem] dark:lg:mt-[-4.75rem] dark:lg:pt-[4.75rem]">
        <div className="py-16 sm:px-2 lg:relative lg:py-20 lg:px-0">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 px-4 lg:max-w-8xl lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12">
            <div className="relative z-10 md:text-center lg:text-left">
              <Image
                className="absolute bottom-full right-full -mr-72 -mb-56 opacity-50"
                src={blurIndigoImage}
                alt=""
                width={530}
                height={530}
                unoptimized
                priority
              />
              <div className="relative">
                <p className="bg-gradient-to-r from-purple-200 via-violet-400 to-purple-200 bg-clip-text font-display text-4xl tracking-tight text-transparent">
                  EthosConnect and Ethos API
                </p>
                <p className="inline text-slate-400 text-5xl tracking-tight font-display">
                  Connect with every wallet on Sui
                </p>
                <p className="mt-3 text-2xl tracking-tight text-slate-400">
                  Email sign-in options with one line of code
                </p>
                <div className="mt-8 flex gap-4 md:justify-center lg:justify-start">
                  <Button href="/installation">Get started</Button>
                  <Button href="/example-react-app" variant="secondary">
                    See the example app
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative lg:static xl:pl-10">
              <div className="absolute inset-x-[-50vw] -top-32 -bottom-48 [mask-image:linear-gradient(transparent,white,white)] dark:[mask-image:linear-gradient(transparent,white,transparent)] lg:left-[calc(50%+14rem)] lg:right-0 lg:-top-32 lg:-bottom-32 lg:[mask-image:none] lg:dark:[mask-image:linear-gradient(white,white,transparent)]">
                {/* <HeroBackground className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 lg:translate-y-[-60%]" /> */}
              </div>
              <div className="relative">
                <Image
                  className="absolute -top-64 -right-64"
                  src={blurIndigoImage}
                  alt=""
                  width={530}
                  height={530}
                  unoptimized
                  priority
                />
                <Image
                  className="absolute -bottom-52 right-64"
                  src={blurIndigoImage}
                  alt=""
                  width={567}
                  height={567}
                  unoptimized
                  priority
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-violet-300 via-violet-300/70 to-purple-300 opacity-10 blur-lg" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-violet-300 via-violet-300/70 to-purple-300 opacity-10" />
                <div className="relative rounded-2xl bg-[#0A101F]/80 ring-1 ring-white/10 backdrop-blur">
                  <div className="absolute -top-px left-20 right-11 h-px bg-gradient-to-r from-violet-300/0 via-violet-300/70 to-violet-300/0" />
                  <div className="absolute -bottom-px left-11 right-20 h-px bg-gradient-to-r from-purple-400/0 via-purple-400 to-purple-400/0" />
                  <div className='px-4 py-4 h-72'>
                    <TryItOut />
                  </div>
                  {/* <div className="pl-4 pt-4">
                  <TrafficLightsIcon className="h-2.5 w-auto stroke-slate-500/30" />
                  <div className="mt-4 flex space-x-2 text-xs">
                    {tabs.map((tab) => (
                      <div
                        key={tab.name}
                        className={clsx(
                          'flex h-6 rounded-full',
                          tab.isActive
                            ? 'bg-gradient-to-r from-violet-400/30 via-violet-400 to-violet-400/30 p-px font-medium text-violet-300'
                            : 'text-slate-500'
                        )}
                      >
                        <div
                          className={clsx(
                            'flex items-center rounded-full px-2.5',
                            tab.isActive && 'bg-slate-800'
                          )}
                        >
                          {tab.name}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex items-start px-1 text-sm">
                    <div
                      aria-hidden="true"
                      className="select-none border-r border-slate-300/5 pr-4 font-mono text-slate-600"
                    >
                      {Array.from({
                        length: code.split('\n').length,
                      }).map((_, index) => (
                        <Fragment key={index}>
                          {(index + 1).toString().padStart(2, '0')}
                          <br />
                        </Fragment>
                      ))}
                    </div>
                    <Highlight
                      {...defaultProps}
                      code={code}
                      language={codeLanguage}
                      theme={undefined}
                    >
                      {({
                        className,
                        style,
                        tokens,
                        getLineProps,
                        getTokenProps,
                      }) => (
                        <pre
                          className={clsx(
                            className,
                            'flex overflow-x-auto pb-6'
                          )}
                          style={style}
                        >
                          <code className="px-4">
                            {tokens.map((line, lineIndex) => (
                              <div key={lineIndex} {...getLineProps({ line })}>
                                {line.map((token, tokenIndex) => (
                                  <span
                                    key={tokenIndex}
                                    {...getTokenProps({ token })}
                                  />
                                ))}
                              </div>
                            ))}
                          </code>
                        </pre>
                      )}
                    </Highlight>
                  </div>
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </EthosConnectProvider>
  )
}
