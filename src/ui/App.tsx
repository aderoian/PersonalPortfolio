import React from "react";

interface IState {

}

interface IProps {

}

class App extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                Welcome
            </div>
        );
    }
}

export default App