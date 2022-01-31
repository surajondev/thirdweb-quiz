import Header from './components/Header'
import Main from './components/Main';
import { useWeb3 } from "@3rdweb/hooks";
import React,{useState, useEffect} from 'react';
import { ThirdwebSDK } from "@3rdweb/sdk";
import Question from './components/Question';

function App() {

  const { address, chainId, provider } = useWeb3();
  const [module, setModule] = useState()

  useEffect(async() => {
    const tempProvider= provider.getSigner()
    const sdk = new ThirdwebSDK(tempProvider);
    const module = sdk.getBundleDropModule("0xa1bcD594EB36630142c28989C91Ba2bc3a4581cE");
    setModule(module)
    }, [provider])

    if(module){
      return(
        <div className="App">
        <Header />
        <Main />
        <Question address={address} module={module}/>
        <div>
        </div>
    </div>
      )
    }else{
      return(
        <div className="App">
        <Header />
        <Main />
        <div>
        </div>
    </div>)
    }
}

export default App;
