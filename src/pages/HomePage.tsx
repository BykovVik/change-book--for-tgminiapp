import React, {useState} from "react";
import OrientationDetector from "../components/OrientationDtect";

const HomePage:React.FC = () => {
    const [orientation, setOrientation] = useState<'portrait' | 'landscape'>(
        window.innerWidth > window.innerHeight ? 'landscape' : 'portrait'
    );
    
    const handleOrientationChange = (newOrientation: 'portrait' | 'landscape') => {
        setOrientation(newOrientation);
    };
    return (
        <div>
            <OrientationDetector onOrientationChange={handleOrientationChange} />
            <h1>Current Orientation: {orientation}</h1>
        </div>
    )
}

export default HomePage