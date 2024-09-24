import React, {useState} from "react";
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
    const currentStrip = useSelector((state: RootState) => state.strips.currentStrip);
    const navigate = useNavigate();

    const [coins, setCoins] = useState<string[]>([coin_p, coin_p, coin_p])
    const [lines, setLines] = useState<string[]>(Array(6).fill(empty_line));;

    const randomizeCoins = () => {
        const coinImages = [coin_o, coin_p];
        const newCoins = Array(3).fill(null).map(() => coinImages[Math.floor(Math.random() * coinImages.length)]);
        setCoins(newCoins);

        const countCoinO = newCoins.filter(coin => coin === coin_o).length;

        let newLineImage = empty_line;
        if (countCoinO > 1) {
            newLineImage = one_line;
        } else if (countCoinO <= 1) {
            newLineImage = two_line;
        }

        setLines(prevLines => {
            const updatedLines = [...prevLines];
            if (currentStrip < 6) {
                updatedLines[currentStrip] = newLineImage;
            }
            return updatedLines;
        });
    };

    const handleClick = () => {
        dispatch(updateStrip());
        randomizeCoins();
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
                    {lines.slice().reverse().map((line, index) => (
                        <img src={line} alt="pic" key={index} style={{ height: 'auto', width: '100%' }} />
                    ))}
                </div>
                <div className="coinBox">
                    {coins.map((coin, index) => (
                        <img src={coin} alt="pic" key={index} />
                    ))}
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
