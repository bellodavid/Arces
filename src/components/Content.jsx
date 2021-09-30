
import React, {useState} from 'react';



function Content() {

    const [isExpanded, setExpanded] = useState(true)
    const [deposit, setDeposit] = useState(false);
    const[withdraw, setWithdraw] = useState(false);

    function expand(){
        setExpanded(!isExpanded)
    }
    const expandDeposit = () =>{
        setDeposit(true)
        setWithdraw(false)
    }
    const expandWithdraw = () =>{
        setWithdraw(true)
        setDeposit(false)
    }
    
    const [coinDeposit, setCoinDeposit] = useState(" ");
    const [coinDepositETH, setCoinDepositETH] = useState(" ");
    const [coinDepositBSC, setCoinDepositBSC] = useState(" ");

    const [coinDepositW, setCoinDepositW] = useState(" ");
    const [coinDepositETHW, setCoinDepositETHW] = useState(" ");
    const [coinDepositBSCW, setCoinDepositBSCW] = useState(" ");
    return (
        <div>
            <header>
                <h1 className="">Arces</h1>
            </header>
            <div className="coinbuttons">
                <div>
                    <button onClick ={expand} className="coin">BTC</button>
                </div>
                <div>
                    <button onClick = {expand} className="coin">ETH</button>
                </div>
                <div>
                    <button onClick ={expand} className="coin">BSC</button>
                </div>
            </div>
            <section className="body__content">
            {!isExpanded &&
                <div className="card">
                     <div className="transaction__btns">
                       <button onClick = {expandDeposit} className="deposit">Deposit</button>
                       <button onClick={expandWithdraw} className="deposit">Withdraw</button>
                        </div> 
                        {deposit? <div className="sec__coin">
                    <button onClick={() => {
                        setCoinDeposit(!coinDeposit && "You have deposited in   ");
                    }}> {coinDeposit}BTC </button>
                    <button onClick={() => {
                        setCoinDepositETH(!coinDepositETH && "You have deposited in   ");
                    }}> {coinDepositETH}ETH </button>

                    <button onClick={() => {
                        setCoinDepositBSC(!coinDepositBSC && "You have deposited in   ");
                    }}> {coinDepositBSC} BSC </button>

                    </div>
                    : null}
                        {withdraw? <div style={{marginRight: "-45%"}} className="sec__coin">
                        <button onClick={() => {
                        setCoinDepositW(!coinDepositW && "You have withdrawn in   ");
                    }}> {coinDepositW}BTC </button>
                    <button onClick={() => {
                        setCoinDepositETHW(!coinDepositETHW && "You have withdrawn in   ");
                    }}> {coinDepositETHW}ETH </button>

                    <button onClick={() => {
                        setCoinDepositBSCW(!coinDepositBSCW && "You have withdrawn in   ");
                    }}> {coinDepositBSCW} BSC </button>

                    
                    </div> : null}
                    </div>
                }
                    
            </section>
        </div>
    )
}

export default Content
