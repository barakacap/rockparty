import React from 'react'

function NewsArticle({platform,author,logo,link}) {
  const openLink=(link)=>{
    window.open(link)
  }
  return  (
    <div onClick={()=>{openLink(link)}} className='news-article'>
      {/* <p className='news-article-title ffam-lato fs-m tc-white fw-black'>{title}</p> */}
      <div className='news-article-logo-wrapper'>
        <img src={logo} className='news-article-logo'></img>
        {/* <p className='news-article-author ffam-lato fs-s tc-white fw-light'>{author}</p> */}
      
        {
          platform==='youtube'&&
          <span className='ffam-lato fs-xs tc-white fw-light news-author'>{author}</span>
        }
      </div>
      
    </div>
  )
}

export default NewsArticle