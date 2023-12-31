import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../pages/news.css'

function News() {
  return (
      <div>
        <Header/>
        <div class="responsive-container-block bigContainer">
  <div class="responsive-container-block Container">
    <img class="mainImg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/eaboutus1.svg" />
    <div class="allText aboveText">
      <p class="text-blk headingText">
        News
      </p>
      <p class="text-blk subHeadingText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <p class="text-blk description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum pulvinar ullamcorper suspendisse ac eget. Pellentesque tempus leo in ullamcorper quis vestibulum ligula elementum ut.
      </p>
      <button class="explore">
        Explore
      </button>
    </div>
  </div>
</div>
    <Footer/>
    </div>
  )
}

export default News
