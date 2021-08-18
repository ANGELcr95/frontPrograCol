// import React, { useEffect, useState } from 'react';
import '../styles/Tetris.css'

const Tetris = ({name, postionsWinner}) => {
    // const[array, setArray] = useState([null])
    // const[tetris2, setTetris2] = useState([])

    // useEffect(()=> {
    //     setArray(postionsWinner)
    // },[postionsWinner])

    // const renderTetris = array.map((tetris, index) => {
    //     setTetris2(tetris)
        // tetris.map(position => {
        //     if(position){
        //         return <div style={{backgroundColor: 'blue'}}></div>
        //     } else {
        //         return <div style={{backgroundColor: 'grey'}}></div>
        //     }
        // })
    // } )

    return (
        <div className="Tetris">
            <h2 style={{color: 'white'}}>{name}</h2>
            <div className="Grid">
                {/* {renderTetris} */}
            </div>
        </div>
    );
};

export default Tetris;