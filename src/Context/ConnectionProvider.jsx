import React, { useState } from 'react';
import { ConnectionConext } from './ConnectionContext';

const ConnectionProvider = ({children}) => {
    const [timeline , setTimeline] = useState([]);
    const Data_analysis = [
        {name : 'text' , value: 0},
        {name : 'call' , value: 0},
        {name : 'video' , value: 0}
    ]
    const [analysis , setAnalysis] = useState(Data_analysis);
    const handleCommunication = (type , name)=>{
          const value = {
               type ,
               name,
               date:new Date(),
               icon:`/${type}.png`
          }
          const updateAnalysis = analysis.map(item =>{ 
             if(item.name == type){
                return {...item , value:item.value + 1};
             }
             return item;
          })
          setAnalysis(updateAnalysis);
          setTimeline([...timeline , value]);
    }

    const data = {
          timeline,
          handleCommunication,
          analysis
    }

    return (
        <ConnectionConext.Provider value ={data}>{children}</ConnectionConext.Provider>
    );
};

export default ConnectionProvider;