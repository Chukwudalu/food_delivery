import { AccountBalanceWalletRounded, HomeRounded, SummarizeRounded, Chat, Favorite, Settings } from '@mui/icons-material';
import { useEffect } from 'react';
import './App.css';
import BannerName from './Components/BannerName';
import Header from './Components/Header';
import MenuContainer from './Components/MenuContainer'
// import bannerImg from './assets/deliveryman.jpg'

function App() {

  useEffect(() => {
    const menuLi = document.querySelectorAll('#menu li');
    function setMenuActive(){
      console.log(this)
      menuLi.forEach(n => n.classList.remove('active'));
      this.classList.add('active')
    }
    menuLi.forEach(n => n.addEventListener('click', setMenuActive))
  }, [])

  return (
    <div className="App">
      {/* Header Section */}
      <Header/>
      {/* Main Container */}
      <main>
        <div className="mainContainer">
          <div className='banner'>
            <BannerName name={"Jeremiah"} discount={20} link={"#"}/>
            {/* <img
              src={bannerImg}
              alt=''
              className='deliveryPic'
            /> */}
          </div>
        </div>
        <div className="rightMenu"></div>
      </main>
      {/* Bottom Menu*/}
      <div className="bottomMenu">
        <ul id="menu">
          {/* prettier-ignore */}
          <MenuContainer link={'#'} icon={<HomeRounded/>}/>
          {/* prettier-ignore */}
          <MenuContainer link={'#'} icon={<Chat/>}/>
          {/* prettier-ignore */}
          <MenuContainer link={'#'} icon={<AccountBalanceWalletRounded/>}/>
          {/* prettier-ignore */}
          <MenuContainer link={'#'} icon={<Favorite/>}/>
          {/* prettier-ignore */}
          <MenuContainer link={'#'} icon={<SummarizeRounded/>}/>
          {/* prettier-ignore */}
          <MenuContainer link={'#'} icon={<Settings/>}/>

          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
}

export default App;
