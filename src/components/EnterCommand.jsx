import React, { useState, useEffect, useRef } from "react";

import './EnterCommand.css';

const EnterCommand = ({commandText,
                       setCommandText,
                       commandHist,
                       onSubmitCommand,
                       currHistIndex,
                       setCurrHistIndex}) => {

    // const [currHistIndex, setCurrHistIndex] = useState(-1);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Back tiks.
        // alert(`One command was sent ${commandText}`);
        onSubmitCommand(commandText);
        // setCurrHistIndex(commandHist.length);
      }

    const handleKeyDown = e => {
        if (currHistIndex===-1 || commandHist.length === 0) {
            return;
        }
        // Arrow up/down button should select next/previous list element
        if (   e.keyCode === 38 
            && currHistIndex > 0) {
            // UP arrow.
            var index = -1;
            // If current commandText !=== commandHist[currentPos] then
            // setText to the last history and redraw automatically.
            if (   currHistIndex === commandHist.length - 1
                && commandText !== commandHist[currHistIndex].command){
                index = commandHist.length - 1;
            } else {
                index = currHistIndex - 1;
            }   
            setCurrHistIndex(index); 
            setCommandText( commandHist[index].command );
        } else if (   e.keyCode === 40 
                   && currHistIndex < commandHist.length - 1) {
            // Down arrow.
            let index = currHistIndex + 1;
            setCurrHistIndex(index); 
            setCommandText( commandHist[index].command );
        }
      };

    // To ADD the auto focus on the inputText Box after clicking a button!
    // See:
    // How to set focus on an input field after rendering?
    // https://stackoverflow.com/questions/28889826/how-to-set-focus-on-an-input-field-after-rendering
    const textInput = useRef(null);  
    
    useEffect(() => {
        textInput.current.focus();
      }, [commandText]);

    return (
        <div >
            <form onSubmit={ e => handleSubmit(e)}>
                <input autoFocus  type="text" className="commandInput" 
                    ref={textInput}
                    value={commandText}
                    onChange={ 
                        e => {
                            setCommandText(e.target.value);
                            setCurrHistIndex(commandHist.length);
                        }
                    }
                    onKeyDown={ e => handleKeyDown(e) }
                />
                <input type="submit" className="btn btn-success commandSubmit"
                    value="Submit" />
            </form>
        </div>
        );
    }

export default EnterCommand;

                   