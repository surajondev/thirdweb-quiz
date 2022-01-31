import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Question= ({address, module}) => {
    const [data, setData] = useState(null)
    const [index, setIndex] = useState(null)
    const [value, setValue] = useState(1)
    const [answer, setAnswer] = useState()
    const [coin, setCoin] = useState()

    useEffect(async() =>{
        axios.get("https://opentdb.com/api.php?amount=50&difficulty=easy&type=multiple")
        .then(response => setData(response.data.results))
        setIndex(Math.floor(Math.random()*50))

        const tokenId = "0"
        const balance = await module.balanceOf(address, tokenId);
        setCoin(balance.toNumber());
    }, [value])

    const handleConnect = async() => {
        setAnswer("CORRECT ANSWER")
        const quantity = 1;
        const tokenId = "0"
        await module.claimTo(tokenId, quantity, address);
        setIndex(Math.floor(Math.random()*50))
        const balance = await module.balanceOf(address, tokenId);
        setCoin(balance.toNumber())
    }

    const handleWrong = () =>{
        setAnswer("Wrong Answer")
    }

    const handleReset = () =>{
        setIndex(Math.floor(Math.random()*50))
    }

    return (
        <div className='darkBg'>
            <div className='Main NFTList'>
                <div>
                    <h1 className='heading headingSmall'>DISCOVER Questions</h1>
                </div>
                        {
                            data &&
                            <div className='questions'>
                                <h1>{data[index].question}</h1>
                                <button className='connect' onClick={handleConnect}>{data[index].correct_answer}</button>
                                <button className='connect' onClick={handleWrong}>{data[index].incorrect_answers[0]}</button>
                                <button className='connect' onClick={handleWrong}>{data[index].incorrect_answers[1]}</button>
                                <button className='connect' onClick={handleWrong}>{data[index].incorrect_answers[2]}</button>
                                <h1>{answer}</h1>
                                <button onClick={handleReset}>Reset</button>
                                <h1>You have: <b>{coin}</b> coins.</h1>
                            </div>
                        }
            </div>
        </div>
        );
}

export default Question