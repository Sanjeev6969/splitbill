import React, { Component } from 'react';

const MyContext=React.createContext();

class Myprovider extends Component{
    state = {
        stage:1,
    }
    render(){
        return(
            <MyContext.Provider value={{
                state:this.state
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
        
    }

}

export { MyContext, Myprovider }