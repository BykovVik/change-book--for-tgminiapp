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
import OrientationDetector from "../components/OrientationDtect";

const GamePage: React.FC = () => {
    const dispatch: AppDispatch = useDispatch()
    const currentStrip = useSelector((state: RootState) => state.strips.currentStrip);
    const navigate = useNavigate();

    const [coins, setCoins] = useState<string[]>([coin_p, coin_p, coin_p])
    const [lines, setLines] = useState<string[]>(Array(6).fill(empty_line));
    const [result, setResult] = useState<string>("")

    const [orientation, setOrientation] = useState<'portrait' | 'landscape'>(
        window.innerWidth > window.innerHeight ? 'landscape' : 'portrait'
    );
    
    const handleOrientationChange = (newOrientation: 'portrait' | 'landscape') => {
        setOrientation(newOrientation);
    };

    const randomizeCoins = () => {
        const coinImages = [coin_o, coin_p];
        const newCoins = Array(3).fill(null).map(() => coinImages[Math.floor(Math.random() * coinImages.length)]);
        setCoins(newCoins);

        const countCoinO = newCoins.filter(coin => coin === coin_o).length;

        let newLineImage = empty_line;
        
        if (countCoinO > 1) {
            newLineImage = one_line;
            setResult(result + "one_line, ")
        } else if (countCoinO <= 1) {
            setResult(result + "two_line, ")
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

    const handleResult = () => {
        navigate("/result", { state: { resultString: result.slice(0, -2) }})
        dispatch(resetStrip());
    }

    return (
        <>
        <OrientationDetector onOrientationChange={handleOrientationChange} />
            {orientation === 'landscape'&&
                <div className="landscapeDisplay">
                    <h3>Приложение работает исключительно в портретном режиме</h3>
                </div>
            }
        {orientation === 'portrait'&&
        <div className="portraitDisplay">
            <div className="gameBox">
                <div className="topLine">
                    <img onClick={handleReset} className="shakeAnimation" src={fingerprint} alt="pic" />
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
                    {currentStrip <= 5&&
                    <button onClick={handleClick} className="smallTextSize">
                        Бросить монеты
                    </button>
                    }
                    {currentStrip === 6&&
                    <button onClick={handleResult} className="smallTextSize">
                        Узнать результат
                    </button>
                    }
                </div>
            </div>
        </div>
        }
        </>
    )
}
export default GamePage
