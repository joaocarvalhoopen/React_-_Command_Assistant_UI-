import { useState, useEffect } from 'react'

import NavBar       from "./components/Navbar";
import BackLogs     from "./components/BackLogs";
import EnterCommand from "./components/EnterCommand";
import ButtonsList  from "./components/ButtonsList"

import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

import CONTENT_TYPE from './Utils.jsx'


const App = () => {

  const [currHistIndex, setCurrHistIndex] = useState(0);

  const [logsData, setLogsData] = useState(
    [
      {
        id: 0,
        text: 'Charlie',
        type: 'left',
        content_type: CONTENT_TYPE.TEXT,
        path: '',
      },
      {
        id: 1,
        text: 'Mac',
        type: 'right',
        content_type: CONTENT_TYPE.TEXT,
        path: '',
      },
      {
        id: 2,
        text: 'Dee',
        type: 'left',
        content_type: CONTENT_TYPE.TEXT,
        path: '',        
      },
      {
        id:3,
        text: 'Dennis',
        type: 'right',
        content_type: CONTENT_TYPE.TEXT,
        path: '',        
      },
      {
        id: 4,
        text: 'Charlie',
        type: 'left',
        content_type: CONTENT_TYPE.TEXT,
        path: '',        
      },
      {
        id: 5,
        text: 'Mac',
        type: 'right',
        content_type: CONTENT_TYPE.TEXT,
        path: '',        
      },
      {
        id: 6,
        text: 'Dee',
        type: 'left',
        content_type: CONTENT_TYPE.TEXT,
        path: '',        
      },
      {
        id:7,
        text: 'Dennis',
        type: 'right',
        content_type: CONTENT_TYPE.TEXT,
        path: '',        
      },
      {
        id: 8,
        text: 'Charlie',
        type: 'left',
        content_type: CONTENT_TYPE.TEXT,
        path: '',        
      },
      {
        id: 9,
        text: "Mac asda  as d as da sd a sd as dasdasd " 
                + " asdasdddddddddddddddddddddddddddddddddddddd"
                + " dddddddddddddddddddddddddddddddddddddddddd"
                + " dddddddddddddddddddddddddddddddddddddddddd"
                + " dddddddddddddddddddddddddddddddddddddddddd"
                + " dddddddddddddddddddddddddddddddddddddddddd"
                + " dddddddddddddddddddddddddddddddddddddddddd"
                + " dddddddddddddddddddddddddddddddddddddddddd"
                + " dddddddddddddddddddddddddddddddddddddddddd",
        type: 'right',
        content_type: CONTENT_TYPE.TEXT,
        path: '',        
      },
      {
        id: 10,
        text: 'Dee',
        type: 'left',
        content_type: CONTENT_TYPE.TEXT,        
        path: '',      
      },
      {
        id:11,
        text: 'Dennis',
        type: 'right',
        content_type: CONTENT_TYPE.TEXT,        
        path: '',
      },
      {
        id: 12,
        text: "Mac asda  as d as da sd a sd as dasdasd " 
                + " asdasdddddddddddddddddddddddddddddddddddddd"
                + " dddddddddddddddddddddddddddddddddddddddddd"
                + " dddddddddddddddddddddddddddddddddddddddddd"
                + " dddddddddddddddddddddddddddddddddddddddddd"
                + " dddddddddddddddddddddddddddddddddddddddddd",
        type: 'left',
        content_type: CONTENT_TYPE.TEXT,
        path: '',
      },
      // {
      //   id:13,
      //   text: 'Dennis',
      //   type: 'right',
      //   content_type: CONTENT_TYPE.IMAGE,
      //   path: '/img/mota_feliz.png',
      // }
  ]);
  
  const [buttonsList, setButtonsList] = useState(
    [
      {
        id: 0,
        command:             'button false 0 "label" "command"',
        automatic_execution: false, 
        label:               'Ch msg button',
        button_position:     0,
      },
      {
        id: 1,
        command:             'add_button false 0 "label" "command"',
        automatic_execution: false,
        label:               'Add button',
        button_position:     1,
      },
      {
        id: 2,
        command:             'remove_button 0',
        automatic_execution: false,
        label:               'Remove Button',
        button_position:     2,
      },
      {
        id: 3,
        command:             'remove_all_buttons',
        automatic_execution: true,
        label:               'Rm all buttons',
        button_position:     3,
      },
    ]); 


    //    button             row col "label" "msg"
    //    add_button         row col "label" "msg"
    //    remove_button      row col
    //    remove_all_buttons 
  


  const parserCommand = [
    {
      name: 'list',
      parameters_num: 0,
      parameters: '',
    },
    {
      name: 'download',
      parameters_num: 1,
      parameters: 'xyz',     // TODO: Change.
    },
    {
      name: 'upload',
      parameters_num: 0,
      parameters: '',     // TODO: Change.
    },
    {
      name: 'dir',
      parameters_num: 0,
      parameters: '',     // TODO: Change.
    },
    {
      name: 'image',
      parameters_num: 1,
      parameters: 'xyz',     // TODO: Change.
    },
    {
      name: 'push',
      parameters_num: 1,
      parameters: 'msg',     // TODO: Change.
    },
    {
      name: 'alarm',
      parameters_num: 1,
      parameters: 'mm',     // TODO: Change.
    },
    {
      name: 'play',
      parameters_num: 1,
      parameters: 'xyz',     // TODO: Change.
    },
    {
      name: 'button',
      parameters_num: 4,
      parameters: 'row col "label" "msg"',     // TODO: Change.
    },
    {
      name: 'add_button',
      parameters_num: 4,
      parameters: 'row col "label" "msg"',     // TODO: Change.
    },
    {
      name: 'remove_button',
      parameters_num: 2,
      parameters: 'row col',     // TODO: Change.
    },
    {
      name: 'remove_all_buttons',
      parameters_num: 0,
      parameters: '',     // TODO: Change.
    }
  ];

  const addCommandToLog = commandTextPar => {
    setLogsData([
      ...logsData,
      {
        id:   logsData.length,
        text: commandTextPar,
        type: 'right',
      }
    ]);
  };

  const addBadReturnCommandToLog = errorMsgTextPar => {
    setLogsData([
      ...logsData,
      {
        id:   logsData.length,
        text: errorMsgTextPar,
        type: 'left',
      }
    ]);
  };

  const addCommandToLogAndReturnMsg = (commandTextPar, errorMsgTextPar) => {
    setLogsData([
      ...logsData,
      {
        id:           logsData.length,
        text:         commandTextPar,
        type:         'right',
        content_type: CONTENT_TYPE.TEXT,
        path:         '',
      },
      {
        id:           logsData.length + 1,
        text:         errorMsgTextPar,
        type:         'left',
        content_type: CONTENT_TYPE.TEXT,
        path:         '',
      }
    ]);
  };

  const addCommandToLogAndReturnContent = (commandTextPar, returnMsgTextPar, returnContentType, returnPath ) => {
    setLogsData([
      ...logsData,
      {
        id:           logsData.length,
        text:         commandTextPar,
        type:         'right',
        content_type: CONTENT_TYPE.TEXT,
        path:         '',
      },
      {
        id:           logsData.length + 1,
        text:         returnMsgTextPar,
        type:         'left',
        content_type: returnContentType,
        path:         returnPath,
      }
    ]);
  };


  //    Commands:          Parameters:
  //
  //    list                <---- List commands.
  //    download           xyz
  //    upload
  //    dir
  //    image             xyz
  //    push               msg
  //    alarm              mm
  //    play               xyz
  //    button             pos "label" "command"
  //    add_button         pos "label" "command"
  //    remove_button      pos
  //    remove_all_buttons 

  const commandList = (commandTextPar, parameters) => {
    // List commands.

    // Command and parameters:
    // list
 
    const listText =  'Commands:     Parameters:\n' +
                      '\n' +
                      'list          <-- List commands.   \n' +
                      'download      xyz                  \n' +
                      'upload                             \n' +
                      'dir                                \n' +
                      'image         xyz                  \n' +
                      'push          msg                  \n' +
                      'alarm         mm                   \n' +
                      'play          xyz                  \n' +
                      'button        pos "label" "command"\n' +
                      'add_button    pos "label" "command"\n' +
                      'remove_button pos                  \n' +
                      'remove_all_buttons                 \n';

    var okMsg = commandTextPar + ': ' + parameters;  
    var returnMsg = listText;  

    // var returnMsg = `Ok command [${commandTextPar}].`  
    addCommandToLogAndReturnMsg(okMsg, returnMsg);
  }

  const commandDownload = (commandTextPar, parameters) => {
    // Command and parameters:
    // download xyz
    
    var okMsg = commandTextPar + ': ' + parameters;  
    //addCommandToLog(okMsg);

    var returnMsg = `Ok command [${commandTextPar}].`  
    addCommandToLogAndReturnMsg(okMsg, returnMsg);
  }

  const commandUplaod = (commandTextPar, parameters) => {
    // Command and parameters:
    // upload
    
    var okMsg = commandTextPar + ': ' + parameters;  
    //addCommandToLog(okMsg);

    var returnMsg = `Ok command [${commandTextPar}].`  
    addCommandToLogAndReturnMsg(okMsg, returnMsg);
  }

  const commandDir = (commandTextPar, parameters) => {
    // Command and parameters:
    // dir

    var okMsg = commandTextPar + ': ' + parameters;  
    //addCommandToLog(okMsg);

    var returnMsg = `Ok command [${commandTextPar}].`  
    addCommandToLogAndReturnMsg(okMsg, returnMsg);
  }

  const commandImage = (commandTextPar, parameters) => {
    // Command and parameters:
    // image xyz

    var returnPath = null;
    // var img = "./img/mota_feliz.png";
    // var returnPath = img;

    var error = false;

    var okMsg = commandTextPar + ': ' + parameters;  
    //addCommandToLog(okMsg);

    var returnMsg = `Ok command [${commandTextPar}].`  
  
    // Parses the label.
    var index_1 = parameters.indexOf('"');
  
    if (index_1 === -1) {
      error = true;
      returnMsg = `Error: command [${commandTextPar}], invalid path, path must be inside "/img/mota_feliz.png".`;
    } else {
      var index_2 = parameters.indexOf('"', index_1 + 1);
      if (index_2 === -1) {
        error = true;
        returnMsg = `Error: command [${commandTextPar}], invalid path, path must be inside "/img/mota_feliz.png".`;
      } else {
        returnPath = parameters.substring(index_1 + 1, index_2 );
      }
    }
  
    if (error) {
      addCommandToLogAndReturnMsg(okMsg, returnMsg);  
    } else {
      addCommandToLogAndReturnContent(okMsg, returnMsg, CONTENT_TYPE.IMAGE, returnPath);
    }  
  }

  const commandPush = (commandTextPar, parameters) => {
    // Command and parameters:
    // push msg
  
    var okMsg = commandTextPar + ': ' + parameters;  
    //addCommandToLog(okMsg);

    var returnMsg = `Ok command [${commandTextPar}].`  
    addCommandToLogAndReturnMsg(okMsg, returnMsg);
  }

  const commandAlarm = (commandTextPar, parameters) => {
    // Command and parameters:
    // alarm mm
    
    var okMsg = commandTextPar + ': ' + parameters;  
    //addCommandToLog(okMsg);

    var returnMsg = `Ok command [${commandTextPar}].`  
    addCommandToLogAndReturnMsg(okMsg, returnMsg);
  }

  const commandPlay = (commandTextPar, parameters) => {
    // Command and parameters:
    // play xyz

    var okMsg = commandTextPar + ': ' + parameters;  
    //addCommandToLog(okMsg);

    var returnMsg = `Ok command [${commandTextPar}].`  
    addCommandToLogAndReturnMsg(okMsg, returnMsg);
  }

  const commandButton = (commandTextPar, parameters) => {
    // Command and parameters:
    // button automatic pos "label" "command"
  
    var okMsg = commandTextPar + ': ' + parameters;  
    //addCommandToLog(okMsg);

    let buttonId  = null;
    let automatic = null;
    let label     = null;
    let command   = null;
 
    var returnMsg = null;
    var error     = false;
    var splited   = parameters.split(" ");
    console.log(splited);
    
    // Parses the automatic.
    var valueBool = splited[1].toLowerCase(); 
    if (valueBool === "true") {
      automatic = true;
    } else {
      if (valueBool === "false") {
        automatic = false;
      } else {
        error = true;
        returnMsg = `Error: command [${commandTextPar}], invalid automatic has to be "true" or "false" ${valueBool}.`;  
      }
    }

    // Parses the pos.
    var pos = parseInt(splited[2]); 
    if (!error){
      if ( isNaN(parseInt(pos)) || pos < 0 || pos > (buttonsList.length - 1)) {
        error = true;
        returnMsg = `Error: command [${commandTextPar}], invalid pos ${pos}.`;
      } else {
        buttonId = pos;
      }   
    } 

    var parametersLast = null;

    // Parses the label.
    var index_1 = parameters.indexOf('"');
    if (!error) {
      if (index_1 === -1) {
        error = true;
        returnMsg = `Error: command [${commandTextPar}], invalid label, label must be inside "label".`;
      } else {
        var index_2 = parameters.indexOf('"', index_1 + 1);
        if (index_2 === -1) {
          error = true;
          returnMsg = `Error: command [${commandTextPar}], invalid label, label must be inside "label".`;
        } else {
          label = parameters.substring(index_1 + 1, index_2 );
          parametersLast = parameters.substring(index_2 + 1);
        }
      }
    }
  
    // Parses the command.
    index_1 = parametersLast.indexOf('"');
    if (!error) {
      if (index_1 === -1) {
        error = true;
        returnMsg = `Error: command [${commandTextPar}], invalid command, label must be inside "command_A  xpto".`;
      } else {
        index_2 = parametersLast.indexOf('"', index_1 + 1);
        if (index_2 === -1) {
          error = true;
          returnMsg = `Error: command [${commandTextPar}], invalid command, label must be inside "command_A  xpto".`;
        } else {
          command = parametersLast.substring(index_1 + 1, index_2 );
          command = command.replaceAll("'", '"');
        }
      }
    }

    console.log("buttonId: " + buttonId + ", automatic: " + automatic + ", label: " + label + ", commandText: " + command); 

    if (!error) {
      // Changes the setting on the buttonsList.
      changeButtonsList(buttonId, automatic, label, command);
      returnMsg = `Ok command [${commandTextPar}].`;
    }
    
    addCommandToLogAndReturnMsg(okMsg, returnMsg);
  }

  const commandAdd_button = (commandTextPar, parameters) => {
    // Command and parameters:
    // add_button automatic pos "label" "comand"

    var okMsg = commandTextPar + ': ' + parameters;  
    //addCommandToLog(okMsg);

    let buttonIndex = null;
    let automatic   = null;
    let label       = null;
    let command     = null;
 
    var returnMsg = null;
    var error     = false;
    var splited   = parameters.split(" ");
    console.log(splited);

    // Parses the automatic.
    var valueBool = splited[1].toLowerCase(); 
    if (valueBool === "true") {
      automatic = true;
    } else {
      if (valueBool === "false") {
        automatic = false;
      } else {
        error = true;
        returnMsg = `Error: command [${commandTextPar}], invalid automatic has to be "true" or "false" ${valueBool}.`;  
      }
    }

    // Parses the pos.
    var pos = parseInt(splited[2]); 
    if (!error){
      if ( isNaN(parseInt(pos)) || pos < 0 || pos > buttonsList.length) {
        error = true;
        returnMsg = `Error: command [${commandTextPar}], invalid pos ${pos}.`;
      } else {
        buttonIndex = pos;
      }   
    } 

    var parametersLast = null;

    // Parses the label.
    var index_1 = parameters.indexOf('"');
    if (!error) {
      if (index_1 === -1) {
        error = true;
        returnMsg = `Error: command [${commandTextPar}], invalid label, label must be inside "label".`;
      } else {
        var index_2 = parameters.indexOf('"', index_1 + 1);
        if (index_2 === -1) {
          error = true;
          returnMsg = `Error: command [${commandTextPar}], invalid label, label must be inside "label".`;
        } else {
          label = parameters.substring(index_1 + 1, index_2 );
          parametersLast = parameters.substring(index_2 + 1);
        }
      }
    }
  
    // Parses the command.
    if (!error) {
      index_1 = parametersLast.indexOf('"');
      if (index_1 === -1) {
        error = true;
        returnMsg = `Error: command [${commandTextPar}], invalid command, label must be inside "command_A  xpto".`;
      } else {
        index_2 = parametersLast.indexOf('"', index_1 + 1);
        if (index_2 === -1) {
          error = true;
          returnMsg = `Error: command [${commandTextPar}], invalid command, label must be inside "command_A  xpto".`;
        } else {
          command = parametersLast.substring(index_1 + 1, index_2 );
          command = command.replaceAll("'", '"');
        }
      }
    }

    console.log("buttonId: " + buttonIndex + ", automatic: " + automatic + ", label: " + label + ", commandText: " + command); 

    if (!error) {
      // Added button at index, setting on the buttonsList.
      addAtButtonsList(buttonIndex, automatic, label, command);
      returnMsg = `Ok command [${commandTextPar}].`;
    }
    
    addCommandToLogAndReturnMsg(okMsg, returnMsg);

  }

  const commandRemove_button = (commandTextPar, parameters) => {
    // Command and parameters:
    // remove_button pos
  
    var okMsg = commandTextPar + ': ' + parameters;  
    //addCommandToLog(okMsg);
    
    let buttonId = null;

    // try to parse the pos.
    buttonId = parseInt(parameters, 10);
    console.log("buttonId: " + buttonId);

    var returnMsg = null;
    if (isNaN(parseInt(buttonId)) || buttonId < 0 || buttonId > (buttonsList.length - 1)) {
      returnMsg = `Error: command [${commandTextPar}], invalid pos ${buttonId}.`;    
    } else {
      removeElemButtonsList(buttonId);
      returnMsg = `Ok command [${commandTextPar}], removed button at pos ${buttonId}.`;    
    }
    addCommandToLogAndReturnMsg(okMsg, returnMsg);
  }

  const commandRemove_all_buttons = (commandTextPar, parameters) => {
    // Command and parameters:
    // remove_all_buttons 

    var okMsg = commandTextPar + ': ' + parameters;  
    //addCommandToLog(okMsg);

    var numButtons = buttonsList.length;
    // Remove all buttons, set an empty list.
    setButtonsList([]);

    var returnMsg = `Ok command [${commandTextPar}], removed ${numButtons} buttons.`  
    addCommandToLogAndReturnMsg(okMsg, returnMsg);
  }

  // Returns:
  //     True  - For valid command.
  //     False - For invalid command.
  const parseCommand = commandTextPar => {

    if (commandTextPar.length === 0 ){
      return false;
    }
    var firstWord = null;
    var parameters = null;
    var indexSpace = commandTextPar.indexOf(' ');
    if (indexSpace !== -1) {
      // Found the delimiter character space.
      firstWord = commandTextPar.substring(0, indexSpace);
      parameters = commandTextPar.substring(indexSpace);
    } else {
      firstWord = commandTextPar;
      parameters = '';
    }
    firstWord = firstWord.toLowerCase();
    
    switch (firstWord) {
      case 'list':
        console.log('Command => list [ ' + parameters + ' ].');
        commandList(firstWord, parameters);
        break;
      case 'download':
        console.log('Command => download [ ' + parameters + ' ].');
        commandDownload(firstWord, parameters);
        break;
      case 'upload':
        console.log('Command => upload [ ' + parameters + ' ].');
        commandUplaod(firstWord, parameters);
        break;
      case 'dir':
        console.log('Command => dir [ ' + parameters + ' ].');
        commandDir(firstWord, parameters);
        break;
      case 'image':
        console.log('Command => imagem [ ' + parameters + ' ].');
        commandImage(firstWord, parameters);
        break;
      case 'push':
        console.log('Command => push [ ' + parameters + ' ].');
        commandPush(firstWord, parameters);
        break;
      case 'alarm':
        console.log('Command => alarm [ ' + parameters + ' ].');
        commandAlarm(firstWord, parameters);
        break;
      case 'play':
        console.log('Command => play [ ' + parameters + ' ].');
        commandPlay(firstWord, parameters);
        break;
      case 'button':
        console.log('Command => button [ ' + parameters + ' ].');
        commandButton(firstWord, parameters);
        break;
      case 'add_button':
        console.log('Command => add_button [ ' + parameters + ' ].');
        commandAdd_button(firstWord, parameters);
        break;
      case 'remove_button':
        console.log('Command => remove_button [ ' + parameters + ' ].');
        commandRemove_button(firstWord, parameters);
        break;
      case 'remove_all_buttons':
        console.log('Command => remove_all_buttons [ ' + parameters + ' ].');
        commandRemove_all_buttons(firstWord, parameters);
        break;
    
      default:
        var errorMsg = `Invalid command [${commandTextPar}].`
        console.log(errorMsg);
        // Add the command to the backLog.
        // addCommandToLog(commandTextPar);
        
        // Add error to the command to the backLog.
        // addBadReturnCommandToLog(errorMsg);
        
        addCommandToLogAndReturnMsg(commandTextPar, errorMsg);
        return false;
    }

    return true;
  };

  const [commandText, setCommandText] = useState("");

  const [commandHist, setCommandHist] = useState( [] );
  
  // const [commandHist, setCommandHist] = useState(
  //   [ 
  //     {
  //       id:      0,
  //       command: "primeiro",
  //     },
  //     {
  //       id:      1,
  //       command: "segundo",
  //     },
  //     {
  //       id:      2,
  //       command: "terceiro",
  //     }
  //   ]
  // );
     
  const addCommandToHist = commandTextPar => {
    setCommandHist([
      ...commandHist,
      {
        id: commandHist.length,
        command: commandTextPar
      }
    ]);
  };

  const addAtButtonsList = (buttonIndex, automatic, label, commandText) => {
    var buttonsVec = [...buttonsList];
    var newItem = {
      id:                  0,
      command:             commandText,
      automatic_execution: automatic, 
      label:               label,
      button_position:     0,
    };
    buttonsVec = insertAtInArray(buttonsVec, buttonIndex, newItem);
    
    // Re-numerates the ID's. 
    buttonsVec = buttonsVec.map((item, index, buttonAr) => {
      return ({
        id:                   index,
        command:              item.command,
        automatic_execution:  item.automatic_execution, 
        label:                item.label,
        button_position:      0,
      });
    });
    
    // Updates the buttons and they will be redrawn.
    setButtonsList(buttonsVec);
  };

  const changeButtonsList = (buttonId, automatic, label, commandText) => {
    var buttonsVec = [...buttonsList];
    buttonsVec = buttonsVec.map((item, index) => {
      if (item.id === buttonId) {
        return ({
          id:                   item.id,
          command:              commandText,
          automatic_execution:  automatic, 
          label:                label,
          button_position:      0,
        })
      } else {
        return item;
      }
    });
    console.log("buttonsVec: ")
    console.log(buttonsVec);
    // Updates the buttons and they will be redrawn.
    setButtonsList(buttonsVec);
  };

  const removeElemButtonsList = buttonId => {
    var buttonsVec = [...buttonsList];
    buttonsVec = buttonsVec.filter((item, index) => {
      if (item.id === buttonId) {
        return false;
      } else {
        return true;
      }
    });
    // Re-numerates the ID's. 
    buttonsVec = buttonsVec.map((item, index, buttonAr) => {
      return ({
        id:                   index,
        command:              item.command,
        automatic_execution:  item.automatic_execution, 
        label:                item.label,
        button_position:      0,
      });
    });
    console.log("buttonsVec: ")
    console.log(buttonsVec);
    // Updates the buttons and they will be redrawn.
    setButtonsList(buttonsVec);
  };

  const handleTopCommand = commandTextPar => {
    if (commandTextPar.length === 0){
      return;
    }
    // Parse do command.
    
    // Fill the command history.
    
    // Execute the command.
    
    setCommandText(commandTextPar);
    console.log("Added Command to commandHist: + " + commandTextPar);
    var commandListLen = commandHist.length + 1;

    console.log("commandListLen" + commandListLen);
    
    addCommandToHist(commandTextPar);
    // setCurrHistIndex(commandListLen);

    //addCommandToLog(commandTextPar);

    // Parse do command.
    parseCommand(commandTextPar);
    
    // Clears the command.
    setCommandText('');
    
    //alert(`Command from the top ${commandText}`);
  };

  let handleButtons = buttId => {
    // alert("One button pressed: " + buttId);
    // event.preventDefault();

    var button = buttonsList[buttId];

    if (button.automatic_execution === true){
      // Execute the command.
      console.log('Button command: ' + button.command);
      handleTopCommand(button.command);
    } else {
      // Set the text in the command input.
      setCommandText(button.command);
    }

  };

  const insertAtInArray = (arr, index, newItem) => {
  
    return( [
      // part of the array before the specified index
      ...arr.slice(0, index),
      // inserted item
      newItem,
      // part of the array after the specified index
      ...arr.slice(index)
    ] );
  }

  useEffect( () => {
    setCurrHistIndex(commandHist.length);
  }, [commandHist]
  );

  return (
    <>
      <div className="fill-window">
        <NavBar />
        <div className="div-0">
          <div className="div-1">
            <BackLogs logsData={logsData} />
          </div>
          <div className="div-2">
            <EnterCommand
                commandText={commandText}
                setCommandText={setCommandText} 
                commandHist={commandHist} 
                onSubmitCommand={handleTopCommand}
                currHistIndex={currHistIndex}
                setCurrHistIndex={setCurrHistIndex} />
            <ButtonsList 
                buttonsCfgArr={buttonsList} 
                onButtonPress={handleButtons} />
          </div>
        </div>
      </div>
    </>
    );

}

  
export default App;

