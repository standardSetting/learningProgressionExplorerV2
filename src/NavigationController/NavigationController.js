import { useState } from 'react'

function LayerOneController(props){

    const L1_WIDTH = props.L1_WIDTH
    const L1_HEIGHT = props.L1_HEIGHT

    return (
        <div className='ba b--dark-purple bw1 br1 bg-white o-30' style={{width: `${L1_WIDTH}px`, height:`${L1_HEIGHT}px`}}>

        </div>
    )
}

function LayerTwoController(props){

    const L2_LEVEL_WIDTH = props.L2_LEVEL_WIDTH
    const L2_LEVEL_HEIGHT = props.L2_LEVEL_HEIGHT
    const NUMBER_OF_LEVELS = props.NUMBER_OF_LEVELS

    function logName(e){
        console.log(e.target.attributes.name.nodeValue)
    }

    let levelsArray = []
    for (let i=0; i<NUMBER_OF_LEVELS; i++){
        let ifBorderBottom = i===NUMBER_OF_LEVELS-1 ? 'bb' : ''
        levelsArray.push(
            <div 
                name={`Level${i}`} 
                onClick={logName} 
                className={"bg-white b--dark-blue bt bl br bw1 "+ifBorderBottom} 
                style={{width:`${L2_LEVEL_WIDTH}px`, height:`${L2_LEVEL_HEIGHT}px`}}>
            </div>)
    }

    return (
        <div className='o-30 pointer'>
            {levelsArray}
        </div>
    )
}

function LayerThreeController(props){

    const L3_ELEMENT_WIDTH = props.L3_ELEMENT_WIDTH
    const L3_ELEMENT_HEIGHT = props.L3_ELEMENT_HEIGHT
    
    const NUMBER_OF_LEVELS = props.NUMBER_OF_LEVELS
    const NUMBER_OF_STRANDS = props.NUMBER_OF_STRANDS

    let levelsAndElementsArray = []
    let elementsArray = []
    for (let i=0; i<NUMBER_OF_LEVELS; i++){
        let ifBorderBottom = i === NUMBER_OF_LEVELS - 1 ? "bb " : ""
        for (let j=0; j<NUMBER_OF_STRANDS; j++){
            let ifBorderLeft = j === 0 ? "bl " : ""
            elementsArray.push(<div className={"b--dark-green bw1 bt br bg-white "+ifBorderBottom+ifBorderLeft } style={{width:`${L3_ELEMENT_WIDTH}px`, height:`${L3_ELEMENT_HEIGHT}px`}}></div>)
        }
        levelsAndElementsArray.push(
            <div className='flex flex-row'>
                {elementsArray}
            </div>
        )
        elementsArray = []
    }

    return (
        <div>
            {levelsAndElementsArray}
        </div>
    )
}

function LayerFourController(props){

    const L3_ELEMENT_WIDTH = props.L3_ELEMENT_WIDTH
    const L3_ELEMENT_HEIGHT = props.L3_ELEMENT_HEIGHT
    
    const NUMBER_OF_LEVELS = props.NUMBER_OF_LEVELS
    const NUMBER_OF_STRANDS = props.NUMBER_OF_STRANDS

    let levelsAndElementsArray = []
    let elementsArray = []
    for (let i=0; i<NUMBER_OF_LEVELS; i++){
        for (let j=0; j<NUMBER_OF_STRANDS; j++){
            elementsArray.push(
                <div className="ba flex justify-center items-center b--gold" style={{width:`${L3_ELEMENT_WIDTH}px`, height:`${L3_ELEMENT_HEIGHT}px`}}>
                    <div className='ma1 ba' style={{'border-radius':'50%', width: '7px', height: '7px'}}></div>
                    <div className='ma1 ba' style={{'border-radius':'50%', width: '7px', height: '7px'}}></div>
                </div>)
        }
        levelsAndElementsArray.push(
            <div className='flex flex-row'>
                {elementsArray}
            </div>
        )
        elementsArray = []
    }

    return (
        <div>
            {levelsAndElementsArray}
        </div>
    )
}
function NavigationController(props){




    const L3_ELEMENT_WIDTH = 35
    const L3_ELEMENT_HEIGHT = 14
    
    const NUMBER_OF_STRANDS = 3
    const NUMBER_OF_LEVELS = 12

    const L2_LEVEL_WIDTH = NUMBER_OF_STRANDS*L3_ELEMENT_WIDTH
    const L2_LEVEL_HEIGHT = L3_ELEMENT_HEIGHT

    const L1_WIDTH = L2_LEVEL_WIDTH
    const L1_HEIGHT = NUMBER_OF_LEVELS*L2_LEVEL_HEIGHT

    const TOP_OFFSET_FACTOR = 40
    const RIGHT_OFFSET_FACTOR = 60

    // setTimeout(
    //     ()=>{
    //         setRightOffsetFactor(prevValue => prevValue - 1)
    //     },
    //     1000
    // )
    

    return (
        <div className='flex flex-row'>
            <div className='ma2' style={{'z-index':'4'}}>
                <LayerOneController 
                    L1_HEIGHT={L1_HEIGHT}
                    L1_WIDTH={L1_WIDTH}
                />
            </div>
            <div 
                className='ma2' 
                style={{
                    position: 'relative', 
                    top: `${TOP_OFFSET_FACTOR}px`, 
                    right: `${RIGHT_OFFSET_FACTOR}px`, 
                    'z-index':'3'}}>
                <LayerTwoController 
                    L2_LEVEL_WIDTH={L2_LEVEL_WIDTH}
                    L2_LEVEL_HEIGHT={L2_LEVEL_HEIGHT}
                    NUMBER_OF_LEVELS={NUMBER_OF_LEVELS}
                />
            </div>
            <div className='ma2' style={{position: 'relative', top: `${2*TOP_OFFSET_FACTOR}px`, right: `${2*RIGHT_OFFSET_FACTOR}px`, 'z-index':'2'}}>
                <LayerThreeController 
                    L2_LEVEL_WIDTH={L2_LEVEL_WIDTH}
                    L2_LEVEL_HEIGHT={L2_LEVEL_HEIGHT}
                    L3_ELEMENT_WIDTH={L3_ELEMENT_WIDTH}
                    L3_ELEMENT_HEIGHT={L3_ELEMENT_HEIGHT}
                    NUMBER_OF_STRANDS={NUMBER_OF_STRANDS}
                    NUMBER_OF_LEVELS={NUMBER_OF_LEVELS}
                />
            </div>
            <div className='ma2' style={{position: 'relative', top: `${3*TOP_OFFSET_FACTOR}px`, right: `${3*RIGHT_OFFSET_FACTOR}px`, 'z-index':'1'}}>
                <LayerFourController 
                    L2_LEVEL_WIDTH={L2_LEVEL_WIDTH}
                    L2_LEVEL_HEIGHT={L2_LEVEL_HEIGHT}
                    L3_ELEMENT_WIDTH={L3_ELEMENT_WIDTH}
                    L3_ELEMENT_HEIGHT={L3_ELEMENT_HEIGHT}
                    NUMBER_OF_STRANDS={NUMBER_OF_STRANDS}
                    NUMBER_OF_LEVELS={NUMBER_OF_LEVELS}
                />
            </div>
        </div>
    )
}

export default NavigationController