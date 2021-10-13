/* eslint-disable no-alert */
/* eslint-disable no-console */
import React, { useState } from "react";

const Name = () => {
    const [value, setValue] = useState("");

    const setInitAndAlert = () => {
        setValue("");
        alert("this sheeit is too long");
    };

    const handleMaxLenError = (val) => (val.length > 5 ? setInitAndAlert() : setValue(val));

    return (
        <div>
            <input type="text" maxLength="10" onChange={(e) => handleMaxLenError(e.target.value)} />
            <p>{value}</p>
        </div>
    );
};

export default Name;
