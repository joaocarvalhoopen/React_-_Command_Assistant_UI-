import './BackLogs.css';

import CONTENT_TYPE from '../Utils.jsx'


const BackLogsEntry = ({logsData, index}) => {

    let elem = logsData[index];
    let classNameType = ""; 
    if (elem.type === 'left' ){
        classNameType = "backLogsEntryLeft";
    } else {
        classNameType = "backLogsEntryRight";
    }

    const typeOfMedia = () => {

        // Temporary workaround for CodeSandbox
        // Ref: https://github.com/codesandbox/codesandbox-client/issues/1504
        //
        // const env = process.env;
        // env.PUBLIC_URL = env.PUBLIC_URL || '';

              
        // var MY_PUBLIC_URL = 'http://localhost:3000';

        // console.log("MY_PUBLIC_URL: " + MY_PUBLIC_URL + "el.path: " + elem.path); 
        
        //console.log("antes");
        //console.log("process.env.PUBLIC_URL: " + env.MY_PUBLIC_URL + "el.path: " + el.path); 
        //console.log("process.env.PUBLIC_URL: " + process.env.PUBLIC_URL + "el.path: " + el.path); 
        //console.log("depois");
        
        switch (elem.content_type) {
            case CONTENT_TYPE.TEXT: 
                return ( <p>{elem.text}</p> );
            case CONTENT_TYPE.IMAGE:
               return ( <img src={process.env.PUBLIC_URL + elem.path} 
                             alt='' 
                             style={{height:'30%'}} 
                             />
                             );
          //      return ( <img src={MY_PUBLIC_URL + elem.path} alt='' /> );
            default:
                return ( <p>{elem.text}</p> );
        }
    };

    return ( 
        <div className={classNameType}>
            { typeOfMedia() }
        </div>
        );
}


export default BackLogsEntry;

{/*

        return ( 
            <div className={classNameType}>
                <p>{elem.text}</p>
            </div>
            );

*/}