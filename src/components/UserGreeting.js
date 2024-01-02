import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        return this.state.isLoggedIn && <div>Welcome Alex</div>

        // return this.state.isLoggedIn ?
        //     <div>Welcome Alex</div> :
        //     <div>Welcome Guest</div>

        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Alex</div>
        // } else {
        //     message = <div>Wecome Guest</div>
        // }

        // return <div>{message}</div>

        // if (this.state.isLoggedIn) {
        //     return <div>Welcome Alex</div>
        // } else {
        //     return <div>Welcome Guest</div>
        // }

        // return (
        //     <div>
        //         <div>Welcome Guest</div>
        //         <div>Welcome Alex</div>
        //     </div>
        // )
    }
}

export default UserGreeting