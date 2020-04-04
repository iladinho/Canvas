import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { CustomSignTool } from "./CustomSignTool"
import { GlobalStyle } from './components/Fonts'
import { CanvasProvider } from "./CustomSignTool/components/Canvas/components/CanvasInterface"

ReactDOM.render(
    <div>
      <GlobalStyle />
      <CanvasProvider>
        <CustomSignTool />
      </CanvasProvider>
    </div>,
  document.getElementById('root')
);

serviceWorker.unregister();
