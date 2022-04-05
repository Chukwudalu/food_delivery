import { AccountBalanceWalletRounded, HomeRounded, SummarizeRounded, Chat, Favorite, Settings } from '@mui/icons-material';
import './App.css';
import Header from './Components/Header';
import MenuContainer from './Components/MenuContainer'

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <Header/>
      {/* Main Container */}
      <main>
        <div className="mainContainer"></div>
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

          <div className=".indicator"></div>
        </ul>
      </div>
    </div>
  );
}

export default App;
