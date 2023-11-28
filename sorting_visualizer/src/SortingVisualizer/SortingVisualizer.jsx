import React from 'react';
import './SortingVisualizer.css';
import * as sortingAlgorithms from './sortingAlgorithms/sortingAlgorithms';

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
        const JavaScriptSortedArray = this.state.array.slice().sort((a,b) => a-b);
        const sortedArray = sortingAlgorithms.mergeSort(this.state.array);
        //console.log(sortedArray)

        console.log(arraysAreEqual(JavaScriptSortedArray, sortedArray));
    }

    quickSort(){


    }

    heapSort(){


    }

    bubbleSort(){

        
    }

    testSortingAlgorithms(){
        for(let i =0; i<100; i++){
            const array = []
            for (let i=0; i<randomIntFromInterval(1,1000); i++){
                array.push(randomIntFromInterval(-1000, 1000));
            }
         const JavaScriptSortedArray = array.slice().sort((a,b) => a -b);
         const mergeSortedArray = sortingAlgorithms.mergeSort(array.slice());
         console.log(arraysAreEqual(JavaScriptSortedArray, mergeSortedArray));
        }
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
                <button onClick={() => this.testSortingAlgorithms()}>test algos for devs</button>
            </div>
        );
    }
}


function randomIntFromInterval (min, max) {
    return Math.floor(Math.random() * (max-min+1)+min);
}

function arraysAreEqual(arrayOne, arrayTwo){
    if(arrayOne.length !== arrayTwo.length) return false;
    for(let i=0; i<arrayOne.length; i++){
        if (arrayOne[i] !== arrayTwo[i]) return false;
    }
    return true;
}
// to run this, use npm start
// can't believe it took me like 10 minutes to figure this out