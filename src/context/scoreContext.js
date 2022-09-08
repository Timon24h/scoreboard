import { useState, createContext } from "react";

export const ScoreContext = createContext()

const ScoreContextProvider =  ({children}) => {

    const [score, setScore] = useState(0)

    function  plusScore(){
        return setScore(score + 10)  
    }

    function  minusScore(){
        return setScore(score - 10)  
    }

    const exportData= {score, plusScore, minusScore}

    return (
        <ScoreContext.Provider value={ exportData } >
            {children}
        </ScoreContext.Provider>
    )
}

export default ScoreContextProvider
