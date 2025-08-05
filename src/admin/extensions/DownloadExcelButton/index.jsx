import React from "react";
import { Button } from "@strapi/design-system/Button";
import Code from "@strapi/icons/User";
import { auth, useCMEditViewDataManager, useNotification } from "@strapi/helper-plugin";
import { useIntl } from "react-intl";
import axios from "axios";
const moment = require('moment-timezone');
//React function for the button which will be seen in the user table for sending token to company owner.
const DownloadExcelButton = () => {
    const { formatMessage } = useIntl();
    const { modifiedData, layout } = useCMEditViewDataManager();
    const toggleNotification = useNotification();
    const allowedTypes = ["course","category","user"];
    const token = auth.getToken();

    if (!allowedTypes.includes(layout.apiID)) {
        return <></>;
    }

    const sendToken = async () => {
        const headers = {
            Authorization: `Bearer ${auth.getToken()}`,
            Accept: "application/json",
            "Content-Type": "application/json",
        };
        let timezone = moment.tz.guess(); 
        const headerforCategory ={
            timezone:timezone,
            Authorization: `Bearer ${auth.getToken()}`,
            Accept: "application/json",
            "Content-Type": "application/json",
        };
        let response;
     if(layout.apiID=="course"){
        console.log("this is course");
        response = await axios.get(
            `/api/course/getExcelData/${modifiedData.id}`,
            { headers: headers ,responseType:'blob' }
        );
     }else if(layout.apiID=="category"){
      

        console.log("this is category");
        response = await axios.get(
            `/api/category/getExcelData/${modifiedData.id}`,
            { headers: headerforCategory ,responseType:'blob' }
        );
     }
     else    {
      
        response = await axios.get(
            `/api/users-permissions/exportUsers`,
             { headers:headers, responseType:'blob' }
        );
       
     }
    
 
        if(response.data){
            const href = URL.createObjectURL(response.data);

        //function for download file with xlsx extension from client side.here a link will be generated and clicked with the code.
        const link = document.createElement('a');
        link.href = href;
       
        if(layout.apiID=="course"){
            link.setAttribute('download', `${modifiedData.title}.xlsx`);
          
        }else if(layout.apiID=="category"){
            link.setAttribute('download', `${modifiedData.title}.xlsx`);
        }
        else{
            
            link.setAttribute('download', `usersheet.xlsx`);
        }
       //or any other extension
        document.body.appendChild(link);
        link.click()
        document.body.removeChild(link);
        URL.revokeObjectURL(href)
            console.log(response,"=======response========");
        
            toggleNotification({
                type: 'success',
                message: "Sheet Downloaded Successfully",
            });

        }else{
            toggleNotification({
                type: 'error',
                message: "Something went wrong",
            });
        }       
    };
    const content = {
        id: "components.ResetPasswordButton.button",
        defaultMessage: "Export Excel Sheet ",
    };
    // sendToken
    return (
        <Button variant="secondary" startIcon={<Code />} onClick={sendToken}>
            {formatMessage(content)}
        </Button>
    );
};

export default DownloadExcelButton;
