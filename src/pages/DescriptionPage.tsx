import React, {useState} from "react";
import OrientationDetector from "../components/OrientationDtect";
import fingerprint from '../media/Fingerprint.png'
import { useNavigate } from "react-router-dom";

const DescriptionPage:React.FC = () => {
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
                            <p>При помощи данного приложения вы можете гадать по Книге Перемен самостоятельно, бросив виртуальные монеты. В Китае способ броска монет с древности является самым распространенным. Для того чтобы начать гадание, нажмите кнопку "Начать гадание". Сосредоточьтесь на своем вопросе, затем нажимайте кнопку "Бросить монеты". Если выпадет больше черных (две или три), приложение нарисует непрерывную линию (янь); если больше белых – прерванную посередине линию (инь). Монеты следует бросить 6 раз, при этом каждая новая линия отрисовывается над предыдущей. В результате гадания у вас получится гексаграмма – 6 черт. У каждой из гексаграмм свое значение, которое вы можете узнать, нажав кнопку "Узнать результат".</p>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default DescriptionPage