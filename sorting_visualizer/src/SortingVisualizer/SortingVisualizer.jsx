import React from 'react';
import './SortingVisualizer.css';

export default class SortingVisualizer extends React.Component {
    constructor(props){
        super(props);

        this.state ={
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray(){
        const array = [];
        for (let i=0; i <100; i++){
            array.push(randomIntFromInterval(5, 1000));
        }
        this.setState({array});
    }
    render(){
        const {array} = this.state;


        return(
            <>
            {array.map((value, idx)=> (
            <div className='array-bar' key = {idx}>
                {value}
                </div>
                ))}
            </>    
            
        );
    }
}


function randomIntFromInterval (min, max) {
    return Math.floor(Math.random() * (max-min+1)+min);
}


// to run this, use npm start
// can't believe it took me like 10 minutes to figure this out