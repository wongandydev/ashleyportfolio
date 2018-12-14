import React from 'react'
import { Link } from 'gatsby'

import './index.css'

import Layout from '../components/layout'
import ReasonToLiveImage from '../images/reasonstolive.jpg'
import DrawingPortfolio from '../images/hina.jpg'
import instagram from '../images/instagramlogo.svg'
import twitter from '../images/twitterlogo.svg'

const IndexPage = () => (
  <Layout>    
    <div id="content">
      <div id="reasonstolive">
        <a target='_blank' href='https://www.wattpad.com/story/1624528-reasons-to-live'><img src={ReasonToLiveImage} alt="Reason's To Live, Ashley's Book" /></a>
        <div> This is Ashley's first book. She started writing Reasons to Live __ years ago.</div>
      </div>
      <div id="drawing">
        <a target='_blank' href='https://www.instagram.com/pyonanimates/'><img src={DrawingPortfolio} alt="This is Ashley's Instagram, where she she shows her drawing" /></a> 
        <div> This is Ashley's portfolio. Here is one of her drawings, click on the image to go to her instagram and see more! </div>
      </div>
    </div>
    
    <footer>
      <h3> Links to Ashley's Social Media </h3>
      <a target='_blank' href='https://www.instagram.com/pyonanimates/'><img src={instagram} /></a>
      <a target='_blank' href='https://www.twitter.com/pyonanimates/'><img src={twitter} /></a>
    </footer>

    {/* <Link id='linktopage2' to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
