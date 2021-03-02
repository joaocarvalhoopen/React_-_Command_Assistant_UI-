import React, { useEffect, useRef } from 'react'
import BackLogsEntry from "./BackLogsEntry";

import './BackLogs.css';

const BackLogs = ({logsData}) => {
    
        // How to scroll to bottom in react? Of a div.
        // https://stackoverflow.com/questions/37620694/how-to-scroll-to-bottom-in-react

        const messagesEndRef = useRef(null)

        const scrollToBottom = () => {
          messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      
        useEffect(() => {
          scrollToBottom()
        }, [logsData]);
          

        return ( 
            <div className="vertical-scrollable-b ">
                {  logsData.map(elem => {
                        return <BackLogsEntry 
                                    key={elem.id} 
                                    logsData={logsData} 
                                    index={elem.id}  />
                        })
                }
                {/* Div at the end to scroll to the end of the list
                    when starting */}
                <div ref={messagesEndRef} />
            </div>
            );

    }
 
export default BackLogs;
