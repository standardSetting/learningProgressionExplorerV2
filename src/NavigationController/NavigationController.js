import { useState } from 'react'
import LayerOneParentContainer from './LayerOneParentContainer'
import LayerTwoParentContainer from './LayerTwoParentContainer'
import LayerThreeParentContainer from './LayerThreeParentContainer'
import LayerFourParentContainer from './LayerFourParentContainer'


function NavigationController(props){

    // Adjust these factors for sizing
    const NUMBER_OF_STRANDS = 3
    const NUMBER_OF_LEVELS = 12
    const MAX_NUMBER_OF_L4_ELEMENTS = 1

    const L4_ELEMENT_WIDTH = 10
    const L4_ELEMENT_HEIGHT = 10
    const L4_ELEMENT_WIDTH_SPACING_FACTOR = 5.2
    const L4_ELEMENT_HEIGHT_SPACING_FACTOR = 3

    const RIGHT_OFFSET_SCALE_FACTOR = 0.65

    const L3_ELEMENT_WIDTH = L4_ELEMENT_WIDTH_SPACING_FACTOR*L4_ELEMENT_WIDTH
    const L3_ELEMENT_HEIGHT = L4_ELEMENT_HEIGHT_SPACING_FACTOR*L4_ELEMENT_HEIGHT
    
    const TOP_OFFSET_FACTOR = L3_ELEMENT_HEIGHT
    const RIGHT_OFFSET_FACTOR = L3_ELEMENT_WIDTH*RIGHT_OFFSET_SCALE_FACTOR
    // End Adjust these factors for sizing

    const L2_LEVEL_WIDTH = NUMBER_OF_STRANDS*L3_ELEMENT_WIDTH
    const L2_LEVEL_HEIGHT = L3_ELEMENT_HEIGHT

    const L1_WIDTH = L2_LEVEL_WIDTH
    const L1_HEIGHT = NUMBER_OF_LEVELS*L2_LEVEL_HEIGHT

    function handleNavigationControllerClick(e){
        console.log(e.target.attributes.name.nodeValue)
    }

    let layerTwoLevels = []
    for (let i=0; i<NUMBER_OF_LEVELS; i++){
        let enableTopBorder = i === 0 ? false : true
        layerTwoLevels.push(
            <LayerTwoParentContainer 
                L2_LEVEL_WIDTH={L2_LEVEL_WIDTH} 
                L2_LEVEL_HEIGHT={L2_LEVEL_HEIGHT}
                enableTopBorder={enableTopBorder}
                layerNumber={2}
                levelNumber={NUMBER_OF_LEVELS-i}
                handleNavigationControllerClick={handleNavigationControllerClick}>                  
            </LayerTwoParentContainer>
        )
    }

    let layerThreeLevels = []
    let layerThreeStrands = []
    let layerNumber = 3
    for (let j=0; j<NUMBER_OF_LEVELS; j++){
        let enableTopBorder = j === 0 ? false : true
        for (let k=0; k<NUMBER_OF_STRANDS; k++){
            let enableTopBorderL3 = j === 0 ? true : false
            let enableBottomBorderL3 = j === NUMBER_OF_LEVELS - 1 ? true : false
            layerThreeStrands.push(
                <LayerThreeParentContainer 
                    L3_ELEMENT_WIDTH={L3_ELEMENT_WIDTH} 
                    L3_ELEMENT_HEIGHT={L3_ELEMENT_HEIGHT}
                    layerNumber={layerNumber}
                    levelNumber={NUMBER_OF_LEVELS-j}
                    strandNumber={k+1}
                    enableTopBorder={enableTopBorderL3}
                    enableBottomBorder={enableBottomBorderL3}
                    handleNavigationControllerClick={handleNavigationControllerClick}>
                </LayerThreeParentContainer>)
        }
        layerThreeLevels.push(
            <LayerTwoParentContainer 
                L2_LEVEL_WIDTH={L2_LEVEL_WIDTH} 
                L2_LEVEL_HEIGHT={L2_LEVEL_HEIGHT}
                layerNumber={3}
                enableTopBorder={enableTopBorder}
                levelNumber={NUMBER_OF_LEVELS-j}
                handleNavigationControllerClick={handleNavigationControllerClick}>  
                    <div 
                        className='flex justify-around' style={{'margin-right':'2.5px'}}
                        name={`Layer${layerNumber}Level${NUMBER_OF_LEVELS-j}`}>
                        {layerThreeStrands}
                    </div>
            </LayerTwoParentContainer>)
        layerThreeStrands = []
    }

    let layerFourLevels = []
    let layerFourStrands = []
    layerNumber = 4
    for (let m=0; m<NUMBER_OF_LEVELS; m++){
        let enableTopBorder = m === 0 ? false : true
        for (let n=0; n<NUMBER_OF_STRANDS; n++){
            let enableTopBorderL3 = m === 0 ? true : false
            let enableBottomBorderL3 = m === NUMBER_OF_LEVELS - 1 ? true : false
            layerFourStrands.push(
                <LayerThreeParentContainer 
                    L3_ELEMENT_WIDTH={L3_ELEMENT_WIDTH} 
                    L3_ELEMENT_HEIGHT={L3_ELEMENT_HEIGHT}
                    layerNumber={layerNumber}
                    levelNumber={NUMBER_OF_LEVELS-m}
                    strandNumber={n+1}
                    enableTopBorder={enableTopBorderL3}
                    enableBottomBorder={enableBottomBorderL3}
                    handleNavigationControllerClick={handleNavigationControllerClick}>
                        <LayerFourParentContainer 
                            L3_ELEMENT_HEIGHT={L3_ELEMENT_HEIGHT}
                            L4_ELEMENT_WIDTH={L4_ELEMENT_WIDTH}
                            L4_ELEMENT_HEIGHT={L4_ELEMENT_HEIGHT}
                            layerNumber={layerNumber}
                            levelNumber={NUMBER_OF_LEVELS-m}
                            strandNumber={n+1}
                            handleNavigationControllerClick={handleNavigationControllerClick}
                            enableMarginBottom={enableTopBorderL3 || enableBottomBorderL3}/>
                </LayerThreeParentContainer>)
        }
        layerFourLevels.push(
            <LayerTwoParentContainer 
                L2_LEVEL_WIDTH={L2_LEVEL_WIDTH} 
                L2_LEVEL_HEIGHT={L2_LEVEL_HEIGHT}
                handleNavigationControllerClick={handleNavigationControllerClick}
                enableTopBorder={enableTopBorder}>  
                    <div 
                        className='flex justify-around' 
                        style={{'margin-right':'2.5px'}}
                        name={`Layer${layerNumber}Level${NUMBER_OF_LEVELS-m}`}>
                        {layerFourStrands}
                    </div>
            </LayerTwoParentContainer>)
        layerFourStrands = []
    }

    let allLevelChildren = [null, layerTwoLevels, layerThreeLevels, layerFourLevels]
    let layerParents = []

    for (let p=0; p<allLevelChildren.length; p++){
        layerParents.push(
            <div className='ma2' style={{position: 'relative', top: `${TOP_OFFSET_FACTOR*4-TOP_OFFSET_FACTOR*p}px`, right: `${RIGHT_OFFSET_FACTOR*p}px`, 'z-index':`${allLevelChildren.length-p}`}}>
            <LayerOneParentContainer 
                L1_WIDTH={L1_WIDTH} 
                L1_HEIGHT={L1_HEIGHT} 
                layerNumber={p+1}
                handleNavigationControllerClick={handleNavigationControllerClick}>
                {allLevelChildren[p]}
            </LayerOneParentContainer>
        </div>
        )
    }


    return (
        <div className='' style={{width: '600px', height: '480px'}}>
            <div className='flex flex-row'>
                {layerParents}
            </div>
        </div>
    )
}

export default NavigationController