import React, { useRef } from "react";
import {CopyToClipboard} from "react-copy-to-clipboard/src";

import imgCopy from "../images/icon-copy.svg";

const MyPageCopy = ({ text }) => {

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems:'center',
        justifyContent: "space-between",
        backgroundColor: "black",
        borderRadius: "4px",
        padding: "2.4rem 2rem",
      }}
    >
        <p style={{ fontSize: "2.8rem", color: "white" }}>
                {text}
         </p>
        <CopyToClipboard text={text}>
            <img
                src={imgCopy}
                alt="복사"
                style={{
                width: "32px",
                height: "32px",
                cursor: "pointer",
                }}
            />
        </CopyToClipboard>
    </div>
  );
};

export default MyPageCopy;