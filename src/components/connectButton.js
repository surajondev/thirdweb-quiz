import { useWeb3, useSwitchNetwork } from "@3rdweb/hooks"

const CustomConnect = ({handleConnect}) => {
  const { address, chainId, provider, connectWallet, disconnectWallet } = useWeb3();
  const { switchNetwork } = useSwitchNetwork();

  const connnectWallet = () =>{
      connectWallet("injected")
      switchNetwork(4)
      handleConnect(address, provider)
  }

  if(address){
      return <button className="connect">Wallet Connected</button>

  }else
  return (
      <button onClick={connnectWallet} className='connect'>Connect Wallet</button>
  )
}

export default CustomConnect