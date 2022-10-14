import { NextPage } from 'next'
import { Page } from 'components/Layout'
import Hero from 'components/Hero'
import Technologies from 'components/TechnologiesSection'
import Projects from 'components/ProjectsSection'
import Contact from 'components/ContactSection'
import DuckWalk from 'components/DuckWalk'

const IndexPage: NextPage = () => (
  <Page>
    <Hero />
    <Technologies />
    <Projects />
    <DuckWalk />
    <Contact />
  </Page>
)

export default IndexPage
