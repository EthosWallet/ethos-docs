import React, { useState } from 'react';
import Head from 'next/head'
import { slugifyWithCounter } from '@sindresorhus/slugify'

import { Layout } from '@/components/Layout'

import 'focus-visible'
import '@/styles/tailwind.css'
import { useCallback } from 'react';

function getNodeText(node) {
  let text = ''
  for (let child of node.children ?? []) {
    if (typeof child === 'string') {
      text += child
    }
    text += getNodeText(child)
  }
  return text
}

function collectHeadings(nodes, slugify = slugifyWithCounter()) {
  let sections = []

  for (let node of nodes) {
    if (node.name === 'h2' || node.name === 'h3') {
      let title = getNodeText(node)
      if (title) {
        let id = slugify(title)
        node.attributes.id = id
        if (node.name === 'h3') {
          if (!sections[sections.length - 1]) {
            throw new Error(
              'Cannot add `h3` to table of contents without a preceding `h2`'
            )
          }
          sections[sections.length - 1].children.push({
            ...node.attributes,
            title,
          })
        } else {
          sections.push({ ...node.attributes, title, children: [] })
        }
      }
    }

    sections.push(...collectHeadings(node.children ?? [], slugify))
  }

  return sections
}

export default function App({ Component, pageProps }) {
  let title = pageProps.markdoc?.frontmatter.title

  let pageTitle =
    pageProps.markdoc?.frontmatter.pageTitle ||
    `${pageProps.markdoc?.frontmatter.title} - Docs`

  let description = pageProps.markdoc?.frontmatter.description

  let tableOfContents = pageProps.markdoc?.content
    ? collectHeadings(pageProps.markdoc.content)
    : []

  const [hideEmail, setHideEmail] = useState(false);

  const handleClick = useCallback(() => {
    console.log('click');
    setHideEmail(!hideEmail)
  }, [hideEmail])

  const ethosConfiguration = {
    appId: 'ethos-docs',
    hideEmailOption: hideEmail
  }
  const onWalletConnected = (provider, signer) => {
    console.log('provider :>> ', provider);
    console.log('signer :>> ', signer);
    // your code, probably updating component state with the signer
  }

  return (
    // <EthosWrapper
    //   ethosConfiguration={{
    //     walletAppUrl: '',
    //     appId: 'ethos',
    //   }}
    //   dappName="Your dApp&apos;s Name"
    //   // dappIcon={<EthosLogo />}
    //   connectMessage={<div>Your connect message!</div>}
    // >
      <>
        <Head>
          <title>{pageTitle}</title>
          {description && <meta name="description" content={description} />}
        </Head>
        <Layout title={title} tableOfContents={tableOfContents} hideEmail={hideEmail} setHideEmail={setHideEmail}>
          <Component {...pageProps} />
        </Layout>
      </>

      // hideEmail: {hideEmail ? 'true' : 'false'}
      // <br />
      // <button onClick={handleClick}>
      //   toggle
      // </button>

    // {/* </EthosWrapper> */}

  )
}
