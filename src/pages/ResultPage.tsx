import React, {useState} from "react";
import OrientationDetector from "../components/OrientationDtect";
import fingerprint from '../media/Fingerprint.png'
import { useNavigate } from "react-router-dom";

const ResultPage:React.FC = () => {
    const navigate = useNavigate()

    const [orientation, setOrientation] = useState<'portrait' | 'landscape'>(
        window.innerWidth > window.innerHeight ? 'landscape' : 'portrait'
    );
    
    const handleOrientationChange = (newOrientation: 'portrait' | 'landscape') => {
        setOrientation(newOrientation);
    };
    
    const handleReset = () => {
        navigate("/")
    };
    return (
        <>
            <OrientationDetector onOrientationChange={handleOrientationChange} />
            {orientation === 'landscape'&&
                <div className="landscapeDisplay">
                    <h1>Приложение работает исключительно в портретном режиме</h1>
                </div>
            }
            {orientation === 'portrait'&&
                <div className="portraitDisplay">
                    <div className="topLine"/>
                    <div onClick={handleReset} className="fingerPrint">
                        <img className="shakeAnimation" src={fingerprint} alt="pic" />
                    </div>
                    
                </div>
            }
        </>
    )
}

export default ResultPage