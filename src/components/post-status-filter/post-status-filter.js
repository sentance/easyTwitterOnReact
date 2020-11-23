import React, { Component } from 'react';
import './post-status-filter.css'


export default class StatusFilter extends Component{
    constructor(props){
        super(props);
        this.buttons = [
            {name: 'all', label: 'All'},
            {name: 'like', label: 'Liked'},
        ]
    }
    render(){
        const buttons = this.buttons.map(({name, label})=>{
            const {filter, onFilterSelect} = this.props;
            const active = filter === name;
            const cls =  active ? 'btn-info' : 'btn-outline-secondary'
            return (
            <button 
            key={name} 
            type='button' 
            className={`btn ${cls}`}
            onClick={()=>onFilterSelect(name)}
            >{label}
            
            </button>
            )
        })
        return (
            <div className="btn-group">
                {buttons}
               
            </div>
        )
    }
}
{/* <Button variant="danger">Понравилось</Button> */}