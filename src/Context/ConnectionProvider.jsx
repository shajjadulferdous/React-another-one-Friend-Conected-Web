import React, { useState } from 'react';
import { ConnectionConext } from './ConnectionContext';

const ConnectionProvider = ({children}) => {
    const [timeline , setTimeline] = useState([]);
    const handleCommunication = (type , name)=>{
          const value = {
               type ,
               name,
               date:new Date(),
               icon:`/${type}.png`
          }
          setTimeline([...timeline , value]);
    }

    const data = {
          timeline,
          handleCommunication,
    }
    
    return (
        <ConnectionConext.Provider value ={data}>{children}</ConnectionConext.Provider>
    );
};

export default ConnectionProvider;