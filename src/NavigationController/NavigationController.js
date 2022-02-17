import { useState } from 'react'
import LayerOneParentContainer from './LayerOneParentContainer'
import LayerTwoParentContainer from './LayerTwoParentContainer'
import LayerThreeParentContainer from './LayerThreeParentContainer'
import LayerFourParentContainer from './LayerFourParentContainer'


function NavigationController(props){

    // Adjust these factors for sizing
    const NUMBER_OF_STRANDS = 3
    const NUMBER_OF_LEVELS = 12
    const MAX_NUMBER_OF_L4_ELEMENTS = 2

    const L4_ELEMENT_WIDTH = 10
    const L4_ELEMENT_HEIGHT = 10
    const L4_ELEMENT_WIDTH_SPACING = 30
    const L4_ELEMENT_HEIGHT_SPACING = 6

    
    const L3_ELEMENT_WIDTH = MAX_NUMBER_OF_L4_ELEMENTS*L4_ELEMENT_WIDTH+L4_ELEMENT_WIDTH_SPACING
    const L3_ELEMENT_HEIGHT = MAX_NUMBER_OF_L4_ELEMENTS*L4_ELEMENT_HEIGHT+L4_ELEMENT_HEIGHT_SPACING
    
    const TOP_OFFSET_FACTOR = L3_ELEMENT_HEIGHT
    const RIGHT_OFFSET_FACTOR = L3_ELEMENT_WIDTH*1
    // End Adjust these factors for sizing

    const L2_LEVEL_WIDTH = NUMBER_OF_STRANDS*L3_ELEMENT_WIDTH
    const L2_LEVEL_HEIGHT = L3_ELEMENT_HEIGHT

    const L1_WIDTH = L2_LEVEL_WIDTH
    const L1_HEIGHT = NUMBER_OF_LEVELS*L2_LEVEL_HEIGHT

    let layerTwoLevels = []
    for (let i=0; i<NUMBER_OF_LEVELS; i++){
        let enableTopBorder = i === 0 ? false : true
        layerTwoLevels.push(
            <LayerTwoParentContainer 
                L2_LEVEL_WIDTH={L2_LEVEL_WIDTH} 
                L2_LEVEL_HEIGHT={L2_LEVEL_HEIGHT}
                enableTopBorder={enableTopBorder}>                  
            </LayerTwoParentContainer>
        )
    }

    let layerThreeLevels = []
    let layerThreeStrands = []
    for (let j=0; j<NUMBER_OF_LEVELS; j++){
        let enableTopBorder = j === 0 ? false : true
        for (let k=0; k<NUMBER_OF_STRANDS; k++){
            let enableTopBorderL3 = j === 0 ? true : false
            let enableBottomBorderL3 = j === NUMBER_OF_LEVELS - 1 ? true : false
            layerThreeStrands.push(
                <LayerThreeParentContainer 
                    L3_ELEMENT_WIDTH={L3_ELEMENT_WIDTH} 
                    L3_ELEMENT_HEIGHT={L3_ELEMENT_HEIGHT}
                    enableTopBorder={enableTopBorderL3}
                    enableBottomBorder={enableBottomBorderL3}>
                </LayerThreeParentContainer>)
        }
        layerThreeLevels.push(
            <LayerTwoParentContainer 
                L2_LEVEL_WIDTH={L2_LEVEL_WIDTH} 
                L2_LEVEL_HEIGHT={L2_LEVEL_HEIGHT}
                enableTopBorder={enableTopBorder}>  
                    <div className='flex justify-around' style={{'margin-right':'2.5px'}}>
                        {layerThreeStrands}
                    </div>
            </LayerTwoParentContainer>)
        layerThreeStrands = []
    }

    let layerFourLevels = []
    let layerFourStrands = []
    for (let m=0; m<NUMBER_OF_LEVELS; m++){
        let enableTopBorder = m === 0 ? false : true
        for (let n=0; n<NUMBER_OF_STRANDS; n++){
            let enableTopBorderL3 = m === 0 ? true : false
            let enableBottomBorderL3 = m === NUMBER_OF_LEVELS - 1 ? true : false
            layerFourStrands.push(
                <LayerThreeParentContainer 
                    L3_ELEMENT_WIDTH={L3_ELEMENT_WIDTH} 
                    L3_ELEMENT_HEIGHT={L3_ELEMENT_HEIGHT}
                    enableTopBorder={enableTopBorderL3}
                    enableBottomBorder={enableBottomBorderL3}>
                        <LayerFourParentContainer 
                            L3_ELEMENT_HEIGHT={L3_ELEMENT_HEIGHT}
                            L4_ELEMENT_WIDTH={L4_ELEMENT_WIDTH}
                            L4_ELEMENT_HEIGHT={L4_ELEMENT_HEIGHT}
                            enableMarginBottom={enableTopBorderL3 || enableBottomBorderL3}/>
                </LayerThreeParentContainer>)
        }
        layerFourLevels.push(
            <LayerTwoParentContainer 
                L2_LEVEL_WIDTH={L2_LEVEL_WIDTH} 
                L2_LEVEL_HEIGHT={L2_LEVEL_HEIGHT}
                enableTopBorder={enableTopBorder}>  
                    <div className='flex justify-around' style={{'margin-right':'2.5px'}}>
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
            <LayerOneParentContainer L1_WIDTH={L1_WIDTH} L1_HEIGHT={L1_HEIGHT} layerNumber={p}>
                {allLevelChildren[p]}
            </LayerOneParentContainer>
        </div>
        )
    }


    return (
        <div className='' style={{width: '400px', height: '400px'}}>
            <div className='flex flex-row'>
                {layerParents}
            </div>
        </div>
    )
}

export default NavigationController