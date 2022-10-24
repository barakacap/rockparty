import './index.scss';
import guitarImg from '../../assets/images/guitars.webp'
import Header from '../../components/header/Header'

import NewsArticle from './NewsArticle';
import marketWatch from '../../assets/images/design.svg'
import azcentral from '../../assets/images/azcentral.png'

import youtube from '../../assets/images/youtube.png'

function App(){



  return (
    <div className="news">
      <Header/>
      <div className='news-page-bg'>
        <img src={guitarImg}/>
      </div>

      <div className='news-title ffam-lato fs-l tc-white fw-black'>Rock Party in the News</div>

      <div className='news-article-wrapper'>
        <NewsArticle 
          title='Rock Party Labs Announces Rock Party Classic 3D NFT Collection'
          author='TechBullion'
          logo='https://techbullion.com/wp-content/uploads/2016/09/TechBullionLogo-3.png'
          link='https://techbullion.com/rock-party-labs-announces-rock-party-classic-3d-nft-collection'
        />
        <NewsArticle 
          title='Rock Party Labs Announces Rock Party Classic 3D NFT Collection'
          author='Crypto Romo'
          platform='youtube'
          logo={youtube}
          link='https://youtu.be/KnfAnZJQT9E'
        />
         <NewsArticle 
          title='Rock Party Labs Announces Rock Party Classic 3D NFT Collection'
          author='Crypto Romo'
          platform='youtube'
          logo={youtube}
          link='https://youtu.be/Ks5zVnHylFk'
        />
         <NewsArticle 
          title='Rock Party Labs Announces Rock Party Classic 3D NFT Collection'
          author='Monica Bellamore'
          platform='youtube'
          logo={youtube}
          link='https://youtu.be/Bq-JD4EN0zI'
        />
        <NewsArticle 
          title='Rock Party Labs Announces Rock Party Classic 3D NFT Collection'
          author='SCOOPNIX'
          logo='https://www.scoopnix.com/wp-content/uploads/2018/08/scoo-300x57.png'
          link='https://www.scoopnix.com/rock-party-labs-announces-rock-party-classic-3d-nft-collection/'
        />
        <NewsArticle 
          title='Rock Party Labs Announces Rock Party Classic 3D NFT Collection'
          author='DEFI EVERYDAY'
          logo='https://defieveryday.com/wp-content/uploads/2021/06/defieveryday_logo_new.png'
          link='https://defieveryday.com/rock-party-labs-announces-rock-party-classic-3d-nft-collection/'
        />
        <NewsArticle 
          title='Rock Party Labs Announces Rock Party Classic 3D NFT Collection'
          author='Asia Token Fund'
          logo='https://www.asiatokenfund.com/wp-content/uploads/2021/05/atf-pathlandscape.png'
          link='https://asiatokenfund.com/crypto-news/rock-party-labs-announces-rock-party-classic-3d-nft-collection/'
        />

        <NewsArticle 
          title='Rock Party Labs Announces Rock Party Classic 3D NFT Collection'
          author='Blocko News'
          logo='https://blockonews.com/wp-content/uploads/2018/10/logo-300x102.png'
          link='https://blockonews.com/rock-party-labs-announces-rock-party-classic-3d-nft-collection/'
        />

        <NewsArticle 
          title='Rock Party Labs Announces Rock Party Classic 3D NFT Collection'
          author='NFT NEWS INSIDER'
          logo='https://nftnewsinsider.com/wp-content/uploads/2021/06/nftnewsinsider_logo_new1.png'
          link='https://nftnewsinsider.com/rock-party-labs-announces-rock-party-classic-3d-nft-collection/'
        />      
        <NewsArticle 
          title='Rock Party Labs Announces Rock Party Classic 3D NFT Collection'
          author='CRYPTO GLOBE'
          logo='https://cryptoglobe.website/wp-content/uploads/2018/12/Untitled-1.png'
          link='https://cryptoglobe.website/2022/10/17/rock-party-labs-announces-rock-party-classic-3d-nft-collection/'
        />  
        <NewsArticle 
          title='Rock Party Labs Announces Rock Party Classic 3D NFT Collection'
          author='BULLISH NET'
          logo='https://www.bullishnet.com/wp-content/uploads/2019/01/bull-300x92.png'
          link='https://www.bullishnet.com/rock-party-labs-announces-rock-party-classic-3d-nft-collection/'
        />
        <NewsArticle 
          title='Rock Party Labs Announces Rock Party Classic 3D NFT Collection'
          author='FAST AVOW'
          logo='https://www.fastavow.com/wp-content/uploads/2019/01/FAST-1-1122x201.png'
          link='https://www.fastavow.com/rock-party-labs-announces-rock-party-classic-3d-nft-collection/'
        />
        <NewsArticle 
          title='Rock Party Labs Announces Rock Party Classic 3D NFT Collection'
          author='KRYPTOWINGS'
          logo='https://www.kryptowings.com/wp-content/uploads/2019/05/kryptowings-1-300x53.png'
          link='https://www.kryptowings.com/rock-party-labs-announces-rock-party-classic-3d-nft-collection/'
        />
        <NewsArticle 
          title='Rock Party Labs Announces Rock Party Classic 3D NFT Collection'
          author='FIRST CRYPTO NEWS'
          logo='https://www.firstcryptonews.com/wp-content/uploads/2020/12/FCN-New.png'
          link='https://www.firstcryptonews.com/rock-party-labs-announces-rock-party-classic-3d-nft-collection/'
        />
        <NewsArticle 
          title='Rock Party Labs Announces Rock Party Classic 3D NFT Collection'
          author='ROLE BITCOIN'
          logo='https://www.rolebitcoin.com/wp-content/uploads/2019/05/rolebitcoinlogo.png'
          link='https://www.rolebitcoin.com/rock-party-labs-announces-rock-party-classic-3d-nft-collection/'
        />
        <NewsArticle 
          title='Rock Party Labs Announces Rock Party Classic 3D NFT Collection'
          author='CRYPTO NEWS CHINA'
          logo='https://www.cryptonewschina.com/wp-content/uploads/2019/06/11.png'
          link='https://www.cryptonewschina.com/rock-party-labs-announces-rock-party-classic-3d-nft-collection/'
        />
        {/* <NewsArticle 
          title='Rock Party Labs Announces Rock Party Classic 3D NFT Collection'
          author='RUSSIA BLOCKCHAIN NEWS'
          logo='https://www.cryptonewschina.com/wp-content/uploads/2019/06/11.png'
          link='https://russiablockchainnews.com/rock-party-labs-announces-rock-party-classic-3d-nft-collection/'
        /> */}
        <NewsArticle 
          title='Rock Party Labs Announces Rock Party Classic 3D NFT Collection'
          author='nyuseukr'
          logo='https://www.nyuseukr.com/wp-content/uploads/2019/08/kr.png'
          link='https://www.nyuseukr.com/2022/10/17/rock-party-labs-announces-rock-party-classic-3d-nft-collection/'
        />
        <NewsArticle 
          title='Rock Party Labs Announces Rock Party Classic 3D NFT Collection'
          author='WORLD CRYPTO TIMES'
          logo='https://www.worldcryptotimes.com/wp-content/uploads/2019/12/qw.png'
          link='https://www.worldcryptotimes.com/2022/10/17/rock-party-labs-announces-rock-party-classic-3d-nft-collection/'
        />
        <NewsArticle 
          title='Rock Party Labs Announces Rock Party Classic 3D NFT Collection'
          author='jpcryptoupdates'
          logo='https://www.jpcryptoupdates.com/wp-content/uploads/2019/12/jp-01.png'
          link='https://www.jpcryptoupdates.com/rock-party-labs-announces-rock-party-classic-3d-nft-collection/'
        />
        <NewsArticle 
          title='Rock Party Labs Announces Rock Party Classic 3D NFT Collection'
          author='CRYPTO HOPES'
          logo='https://www.cryptohopes.com/wp-content/uploads/2019/12/crypto-hopes.png'
          link='https://www.cryptohopes.com/rock-party-labs-announces-rock-party-classic-3d-nft-collection/'
        />
        <NewsArticle 
          title='Rock Party Labs Announces Rock Party Classic 3D NFT Collection'
          author='BUZZ BLOCKCHAIN'
          logo='https://www.buzzblockchain.com/wp-content/uploads/2020/09/logo-2-01.png'
          link='https://www.buzzblockchain.com/2022/10/17/rock-party-labs-announces-rock-party-classic-3d-nft-collection/'
        />
        <NewsArticle 
          title='Rock Party Labs Announces Rock Party Classic 3D NFT Collection'
          author='THE FOUNDER DAILY'
          logo='https://www.thefounderdaily.com/wp-content/uploads/2020/10/header-logo.png'
          link='https://www.thefounderdaily.com/rock-party-labs-announces-rock-party-classic-3d-nft-collection/'
        />
        <NewsArticle 
          title='Rock Party Labs Announces Rock Party Classic 3D NFT Collection'
          author='BLOCKCHAIN NEWS PORTAL'
          logo='https://www.blockchainnewsportal.com/wp-content/uploads/2020/12/ex2-01.png'
          link='https://www.blockchainnewsportal.com/rock-party-labs-announces-rock-party-classic-3d-nft-collection/'
        />
        <NewsArticle 
          title='Rock Party Labs Announces Rock Party Classic 3D NFT Collection'
          author='CRYPTO TRENDINGS'
          logo='https://www.cryptotrendings.com/wp-content/uploads/2020/12/logo-1.png'
          link='https://www.cryptotrendings.com/rock-party-labs-announces-rock-party-classic-3d-nft-collection/'
        />
        <NewsArticle 
          title='Rock Party Labs Announces Rock Party Classic 3D NFT Collection'
          author='INFOEX'
          logo='https://infoex.finance/wp-content/uploads/2022/04/Infoex.finance_logo_dark.png'
          link='https://infoex.finance/rock-party-labs-announces-rock-party-classic-3d-nft-collection/'
        />
        <NewsArticle 
          title='Rock Party Labs Announces Rock Party Classic 3D NFT Collection'
          author='INFOEX'
          logo='https://techincats.com/wp-content/uploads/2021/06/techincats_logo_new.png'
          link='https://techincats.com/rock-party-labs-announces-rock-party-classic-3d-nft-collection/'
        />
        <NewsArticle 
          title='Rock Party Labs Announces Rock Party Classic 3D NFT Collection'
          author='INFOEX'
          logo={marketWatch}
          link='https://www.marketwatch.com/press-release/rock-party-labs-announces-rock-party-classic-3d-nft-collection-2022-10-20?mod=search_headline/'
        />
        <NewsArticle 
          title='Rock Party Labs Announces Rock Party Classic 3D NFT Collection'
          author='DIGITAL JOURNAL'
          logo='https://www.digitaljournal.com/wp-content/uploads/2021/01/Digital-Journal-Logosm.png'
          link='https://www.digitaljournal.com/pr/rock-party-labs-announces-rock-party-classic-3d-nft-collection/'
        />
        <NewsArticle 
          title='Rock Party Labs Announces Rock Party Classic 3D NFT Collection'
          author='AZCENTRAL'
          logo={azcentral}
          link='http://finance.azcentral.com/azcentral/article/getnews-2022-10-20-rock-party-labs-announces-rock-party-classic-3d-nft-collection/'
        />
      </div>
    </div>
  );
}

export default App;
