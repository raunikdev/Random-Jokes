import { useState } from "react";

import './css/generateJokes.css'

function GenerateJokes(){const [setup,setSetup] = useState("");
    const [punchline,setPunchLine] = useState("");
    const [showPunchline,setShowPunchline] = useState(false);

    async function getSetupInfo(){
        try{
            const response = await fetch('https://official-joke-api.appspot.com/jokes/programming/random');
            const jokes = await response.json();
            const joke = jokes[0];
            console.log(joke);
            setPunchLine(joke.punchline);
            console.log(joke.setup);
            console.log(joke.punchline);
            setSetup(joke.setup)
            setShowPunchline(false)
        }
        catch(error){
            alert("Error is: "+error)
        }
    }
    // useEffect(()=>{
    //     getSetupInfo();
    // },[])
    function getPunchLine(){
        setShowPunchline(true)
    }

    return(
        <>
            <div className="box">
                {/* {setup}` */}
                <button className="joke-button" onClick={getSetupInfo}>Generate a Joke</button>
                <p>{setup}</p>
                <button className="joke-button" onClick={getPunchLine}>Get PunchLine</button>

                <p style={{opacity: showPunchline? 1:0}}>{punchline}</p>
                
            </div>
        </>
    )
}
export default GenerateJokes;