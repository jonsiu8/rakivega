import React from 'react'
import { config, useSpring } from 'react-spring'
import Layout from '../components/layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'

const Shows = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout>
      <SEO title="Shows | Raki" desc="Hi. I'm Raki! You can visit my website." />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <h1>Shows</h1>
        <p>
          You can visit my <a href="https://www.lekoarts.de/en">website</a> or my other{' '}
          <a href="https://gatsby-starter-portfolio.netlify.com">Gatsby projects</a>.
        </p>
      </AnimatedBox>
    </Layout>
  )
}

export default Shows
