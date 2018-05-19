import React, { Component } from 'react'
import FaPencil from 'react-icons/lib/fa/pencil'
import Fatrash from 'react-icons/lib/fa/trash'
class Note extends Component{
    constructor (props){
        super(props)
        this.edit = this.edit.bind(this)
        this.remove = this.remove.bind(this)

    }
    edit(){
        alert('editing note')
    }
    remove()
    {
        alert('remove note')
    }
    render () {
        return(
            <div className="note">
                <p>learn</p>
                <span>
                    <button onClick={this.edit} id = "edit"><FaPencil />  </button>
                    <button onClick={this.remove} id ="remove"><Fatrash /> </button>
                </span>
            </div>
        )
    }
}


export default Note