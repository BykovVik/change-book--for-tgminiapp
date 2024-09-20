import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateStrip, resetStrip } from "../store/stripsSlises";
import { RootState, AppDispatch } from "../store";
import empty_line from '../media/empty_line.png'
import one_line from '../media/one_line.png'
import two_line from '../media/two_line.png'
import coin_o from '../media/coin_o.png'
import coin_p from '../media/coin_p.png'
import fingerprint from '../media/Fingerprint.png'
import { useNavigate } from "react-router-dom";

const GamePage: React.FC = () => {
    const dispatch: AppDispatch = useDispatch()
    const strips = useSelector((state: RootState) => state.strips.strips);
    const currentStrip = useSelector((state: RootState) => state.strips.currentStrip);
    const navigate = useNavigate();

    const handleClick = () => {
        dispatch(updateStrip());
    };
    
    const handleReset = () => { 
        dispatch(resetStrip());
        navigate("/")
    };

    return (
        <div className="portraitDisplay">
            <div className="gameBox">
                <div className="topLine"/>
                <div onClick={handleReset} className="fingerPrint">
                    <img src={fingerprint} alt="pic" />
                </div>
                <div className="stripBox">
                    {strips.slice().reverse().map((strip, index) => (
                        <img src={strip ? one_line : empty_line} key={index} style={{ height: 'auto', width: '100%' }}/>
                    ))}
                </div>
                <div className="coinBox">
                    <img src={coin_p} alt="pic" />
                    <img src={coin_p} alt="pic" />
                    <img src={coin_p} alt="pic" />
                </div>
                <div className="buttonBox">
                    <button onClick={handleClick} disabled={currentStrip >= 6}>
                        Бросить монеты
                    </button>
                </div>
            </div>
        </div>
    )
}
export default GamePage
