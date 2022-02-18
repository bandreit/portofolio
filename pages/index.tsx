import Link from 'next/link'
import { NextPage } from "next";
import { Page } from 'components/layout'

const IndexPage: NextPage = () => (
  <Page title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Page>
)

export default IndexPage
