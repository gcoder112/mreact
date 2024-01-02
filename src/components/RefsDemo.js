import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()

        // approach 2 to create a ref
        this.cbRef = null
        this.setCbRef = (element) => {
            this.cbRef = element
        }
    }

	componentDidMount() {
		// console.log(this.inputRef)
        // this.inputRef.current.focus()

        // approach 2 to create a ref
        if (this.cbRef) {
            this.cbRef.focus()
        }
	}

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }

    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef} />
                <input type='text' ref={this.setCbRef} />
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo