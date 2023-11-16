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
        for (let i=0; i <310; i++){
            array.push(randomIntFromInterval(5, 1000));
        }
        this.setState({array});
    }

    mergeSort(){

    }

    quickSort(){


    }

    heapSort(){


    }

    bubbleSort(){

        
    }
    render(){
        const {array} = this.state;


        return (
            <div>
                <div className='array-container'>
                    {array.map((value, idx) => (
                        <div
                            className='array-bar'
                            key={idx}
                            style={{ height: `${value / 1.8}px` }}
                        ></div>
                    ))}
                </div>
                <button onClick={() => this.resetArray()}>Generate a new array!</button>
                <button onClick={() => this.mergeSort()}>Merge Sort</button>
                <button onClick={() => this.quickSort()}>Quick Sort</button>
                <button onClick={() => this.heapSort()}>Heap Sort</button>
                <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
            </div>
        );
    }
}


function randomIntFromInterval (min, max) {
    return Math.floor(Math.random() * (max-min+1)+min);
}


// to run this, use npm start
// can't believe it took me like 10 minutes to figure this out