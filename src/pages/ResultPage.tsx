import React, {useState, useEffect} from "react";
import OrientationDetector from "../components/OrientationDtect";
import fingerprint from '../media/Fingerprint.png'
import { useNavigate, useLocation } from "react-router-dom";
import data from '../data/data.json'

const ResultPage:React.FC = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const resultString = location.state?.resultString as keyof typeof data | undefined;

    const [orientation, setOrientation] = useState<'portrait' | 'landscape'>(
        window.innerWidth > window.innerHeight ? 'landscape' : 'portrait'
    );
    
    const handleOrientationChange = (newOrientation: 'portrait' | 'landscape') => {
        setOrientation(newOrientation);
    };

    const handleReset = () => {
        navigate("/")
    };

    const handleSendResult = () => {
        if (window.Telegram?.WebApp) {
            if (resultString) {
                let res = data[resultString]
                window.Telegram.WebApp.sendData(res);
                window.Telegram.WebApp.close()
            }
        } else {
            console.log("Telegram Web App SDK не доступен");
            navigate("/")
        }
    };
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
                    <div className="topLine">
                        <img onClick={handleReset} className="shakeAnimation" src={fingerprint} alt="pic" />
                    </div>
                    <div className="resultBox">
                        <div className="result smallTextSize">
                            {resultString && data[resultString] ? (
                                <p>{data[resultString]}</p> 
                            ) : (
                                <p>Произошла ошибка, попробуйте выполнить продцедуру заново.</p> 
                            )}
                        </div>
                        <div className="sendResult">
                            <button onClick={handleSendResult} className="smallTextSize">Сохранить результат</button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default ResultPage