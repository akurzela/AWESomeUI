import brain from './image-1601032321sjM.png';
import './App.css';
import { useState } from 'react';
import '@aws-amplify/ui-react/styles.css';
import {View} from '@aws-amplify/ui-react';

function App() {
  const [fact, setFact] = useState('');
  
  let getFact = function() {
   fetch("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en"
    ).then((response) => response.json()
    ).then((response) => { setFact(response.text)  })
};

  
  return (
    
    <div className="Main">
    <img className ="Image" src={brain} alt="brain image" onClick={getFact}></img>
    {fact ?
   <View
      backgroundColor="white"
      borderRadius="large"
      fontSize="xxl"
      textAlign="center"
    >{fact}</View>
: "Click on the brain to get some random fact"}
    </div>
  );
}

export default App;
