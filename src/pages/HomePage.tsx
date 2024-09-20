import React, {useState} from "react";
import OrientationDetector from "../components/OrientationDtect";
import klipartz from '../media/klipartz.png'
import coin_o from '../media/coin_o.png'
import coin_p from '../media/coin_p.png'

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
                    <h1>Приложение работает исключительно в портретном режиме</h1>
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
                        <h3 className="title">kHurA</h3>
                        <h3 className="title">nepeMeH</h3>
                        <a href="/game" className="button">Начать гадание</a>
                        <a href="/" className="button">Ознакомиться с инструкцией</a>
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