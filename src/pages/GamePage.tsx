import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateStrip, resetStrip } from "../store/stripsSlises";
import { RootState, AppDispatch } from "../store";

const GamePage: React.FC = () => {
    const dispatch: AppDispatch = useDispatch()
    const strips = useSelector((state: RootState) => state.strips.strips);
    const currentStrip = useSelector((state: RootState) => state.strips.currentStrip);

    const handleClick = () => {
        dispatch(updateStrip());
      };
    
      const handleReset = () => {
        dispatch(resetStrip());
    };

    return (
        <div>
            {strips.map((strip, index) => (
                <div key={index} style={{ height: '50px', backgroundColor: strip ? 'blue' : 'grey' }}>
                Полоска {index + 1}
                </div>
            ))}
            <button onClick={handleClick} disabled={currentStrip >= 6}>
                Перерисовать полоску
            </button>
            <button onClick={handleReset}>Сбросить</button>
        </div>
    )
}
export default GamePage
