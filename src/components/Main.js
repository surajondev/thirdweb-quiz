import React from 'react';

import header from '../assets/header.png'

function Main({data}) {
    return (
        <div className='Main'>
            <div>
                <h1 className='heading'>Play Quiz and win NFT for correct answer </h1>
                <p className='headerPara'>Use the NFT point to unlock more features. Comming Soon.</p>
                <button className='upload'>Explore Now</button>
                <div className='stats'>
                    <div> 
                        <h1 className='heading' style={{marginTop:"1em"}} >10+</h1>
                        <p style={{color:"##565656"}}>Category</p>
                    </div>
                    <div> 
                        <h1 className='heading' style={{marginTop:"1em"}} >Unlimited</h1>
                        <p style={{color:"##565656"}}>Quiz</p>
                    </div>
                    <div> 
                        <h1 className='heading' style={{marginTop:"1em"}} >NFT</h1>
                        <p style={{color:"##565656"}}>Comming Soon</p>
                    </div>
                </div>
            </div>
            <div>
                <img className='headerImg'src={header} />
            </div>
        </div>
    );
}

export default Main;