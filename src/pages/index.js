import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import ReasonToLiveImage from '../images/reasonstolive.jpg'

const IndexPage = () => (
  <Layout>
    <h1>This will be Ashley's Site</h1>
    
    <img src={ReasonToLiveImage} alt="a book" />

    <div> Ashley is a creatitve writer and artist.</div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
