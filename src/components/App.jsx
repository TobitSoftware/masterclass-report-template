import { hot } from 'react-hot-loader/root';
import React, { PureComponent } from 'react';

class App extends PureComponent {
    render() {
        return (
            <>
                <h1>Report Anwendung</h1>
            </>
        );
    }
}

export default App;
export const HotApp = hot(App);
