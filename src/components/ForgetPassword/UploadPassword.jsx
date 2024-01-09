import React from 'react';

const UploadPassword = ({children}) => {
    return (
        <div className={`input_item_box`}>
            <p>Enter your Email address</p>
            <div className={"input-box"}>
                {children}
            </div>
        </div>
    );
};

export default UploadPassword;
