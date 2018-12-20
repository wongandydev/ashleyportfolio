import React from 'react'
import { Link } from 'gatsby'

import './index.css'

import Layout from '../components/layout'
import ReasonToLiveImage from '../images/reasonstolive.jpg'
import writingtomyCEOImage from '../images/writingtomyceo.jpg'
import ninthperiodImage from '../images/ninthperiodisoursecret.jpg'
import DrawingPortfolio from '../images/hina.jpg'
import instagram from '../images/instagramlogo.svg'
import twitter from '../images/twitterlogo.svg'
import ArtworkDisplay from './artworkDisplay'


const IndexPage = () => (
  <Layout>    
    <div id="books">
      <h2> Books </h2>
      <ArtworkDisplay id={"book"} 
                      link={'https://www.wattpad.com/story/1624528-reasons-to-live'} 
                      src={ReasonToLiveImage} 
                      alt={"Reason's To Live, Ashley's Book"} 
                      description={"\"One day you'll leave me. You don't want a girl with a rape story,\" I said as I desperately try to stop my sobs and hiccups. \"You deserve someone who is prettier and more stable then me.\" \"Mon ange ,\" he whispered."} /> 

      <ArtworkDisplay id={"book"} 
                      link={"https://www.wattpad.com/story/3623423-writing-for-mr-ceo"}
                      src={writingtomyCEOImage}
                      alt={"Writing to My CEO. another one of Ashley's books"}
                      description={"\"I don't understand what your damn problem is,\" I growled in annoyance once we were away from everyone. He was always like this. One minute he was sweet and playful and the next thing I knew, he's serious..."}/>

      <ArtworkDisplay id={"book"}
                      link={"https://www.wattpad.com/story/2002825-ninth-period-is-our-secret-on-hold"}
                      src={ninthperiodImage}
                      alt={"Ninth Period is Our Secret, another one of Ashley's books"}
                      description={"\"You do realize we can both get into a lot of trouble if we're caught right?\" He whispered in my ear as he continued to play with my hair. \"Well,\" I began, taking a pause as I took a bite out oof the apple on his desk..."}/>
      <br></br>
      <a href="https://www.wattpad.com/user/HisBeautifulMess" target="_blank"> Click here to see all of Ashley's writing. </a>
      
    </div>
    <div id="artwork">
      <h2> Artwork </h2>
      <h4> Here are some of Ashley's artwork. </h4>
      <ArtworkDisplay id={"drawing"} 
                        link={'https://www.instagram.com/pyonanimates/'}
                        src={DrawingPortfolio}
                        alt={"This is Ashley's Instagram, where she she shows her drawing"}
                        description={"This an example of Ashley's artwork, click it to see more of her work!"}/>
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
