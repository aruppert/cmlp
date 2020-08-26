import React from "react";
import { Global, css } from "@emotion/core";

function GlobalStyles() {
  return (
    <Global
      styles={(theme) => css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
        body {
          height: 100%;
          font-size: 18px;
          font-family: "Montserrat", sans-serif;
          margin: 0;
          color: ${theme.colors.pri};
        }
        html {
          height: 100%;
        }
        #root {
          height: 100%;
        }
      `}
    />
  );
}

export default GlobalStyles;
