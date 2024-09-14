import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import App from "./App";

// export const store = configureStore({
//     reducer: rootReducer,
// });

const root: ReactDOM.Root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(
    <React.StrictMode>
        {/*<BrowserRouter>*/}
            {/*<Provider store={store}>*/}
                <App />
        {/*    </Provider>*/}
        {/*</BrowserRouter>*/}
    </React.StrictMode>
)

// export default App;
