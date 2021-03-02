import React, { useState, useEffect } from 'react';
import { uuid } from 'uuidv4';


const ButtonsList = ({buttonsCfgArr, onButtonPress}) => {


    var listOFButtons = buttonsCfgArr.map( (butt, index) => {
        return <button className="btn btn-primary mr-1" 
                        key={uuid()}
                        onClick={() => onButtonPress(butt.id)} 
                        >
                            {butt.label} 
                </button>    
        });


    {/*
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the buttons.
        listOFButtons = buttonsCfgArr.map( (butt, index) => {
            return <button className="btn btn-primary mr-1" 
                            key={uuid()}
                            onClick={() => onButtonPress(butt.id)} 
                            >
                                {butt.label} 
                    </button>    
            });

    }, [buttonsCfgArr] );

    */}

    return (
        <div >
            { listOFButtons === null ?  <p> Lista de botões! </p>  : listOFButtons }
        </div>
        );
    
    }
 
export default ButtonsList;




{/*

import React, { useState, useEffect } from 'react';
import { uuid } from 'uuidv4';


const ButtonsList = ({buttonsCfgArr, onButtonPress}) => {

    var listOFButtons = buttonsCfgArr.map( (butt, index) => {
        return <button className="btn btn-primary mr-1" 
                        key={uuid()}
                        onClick={() => onButtonPress(butt.id)} 
                        >
                            {butt.label} 
                </button>    
        });


    // var listOFButtons = null;     
 
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the buttons.
        listOFButtons = buttonsCfgArr.map( (butt, index) => {
            return <button className="btn btn-primary mr-1" 
                            key={uuid()}
                            onClick={() => onButtonPress(butt.id)} 
                            >
                                {butt.label} 
                    </button>    
            });

    }, [buttonsCfgArr] );

    return (
        <div >
            { listOFButtons === null ?  <p> Lista de botões! </p>  : listOFButtons }
        </div>
        );
    
    }
 
export default ButtonsList;



*/}