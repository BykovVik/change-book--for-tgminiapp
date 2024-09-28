import React, {useState} from "react";
import OrientationDetector from "../components/OrientationDtect";
import klipartz from '../media/klipartz.png'
import coin_o from '../media/coin_o.png'
import coin_p from '../media/coin_p.png'
import { Link } from "react-router-dom";

const HomePage:React.FC = () => {
    const [orientation, setOrientation] = useState<'portrait' | 'landscape'>(
        window.innerWidth > window.innerHeight ? 'landscape' : 'portrait'
    );
    
    const handleOrientationChange = (newOrientation: 'portrait' | 'landscape') => {
        setOrientation(newOrientation);
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
                    <div className="greenSide">
                        <div className="coinBoxTop">
                            <img src={coin_o} alt="pic"></img>
                        </div>
                    </div>
                    <div className="logoBox">
                        <img className="appLogo" src={klipartz} alt="pic"/>
                    </div>
                    <div className="buttonBox">
                        <h3 className="title mainTextSize">kHurA</h3>
                        <h3 className="title mainTextSize">nepeMeH</h3>
                        <Link to="/game" className="button smallTextSize">Начать гадание</Link>
                        <Link to="/description" className="button smallTextSize">Ознакомиться с инструкцией</Link>
                    </div>
                    <div className="coinBoxBottom">
                        <img src={coin_p} alt="pic"></img>
                    </div>
                </div>
            }
        </>
    )
}

export default HomePage