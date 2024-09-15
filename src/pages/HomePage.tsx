import React, {useState} from "react";
import OrientationDetector from "../components/OrientationDtect";
import klipartz from '../media/klipartz.png'
import coin_o from '../media/coin_o.png'

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
                        <div className="coinBox">
                            <img src={coin_o} alt="pic"></img>
                        </div>
                    </div>
                    <div>
                        <h3 className="title">Приложение работает</h3>
                        <img className="App-logo" src={klipartz} alt="pic"/>
                    </div>
                </div>
            }
        </>
    )
}

export default HomePage