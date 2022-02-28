import LayerOneParentContainer from './LayerOneParentContainer'
import LayerTwoParentContainer from './LayerTwoParentContainer'
import LayerThreeParentContainer from './LayerThreeParentContainer'
import LayerFourParentContainer from './LayerFourParentContainer'

import NavigationControllerMessage from './NavigationControllerMessage'

import { useEffect, useRef, useState } from 'react'
import * as Scroll from 'react-scroll';

function NavigationController(props){
    let scroll = Scroll.animateScroll;

    const windowHeight = props.windowHeight
    const windowWidth = props.windowWidth
    const setHideShadowScroll = props.setHideShadowScroll
    const lastControllerClick = props.lastControllerClick
    const secondLastControllerClick = props.secondLastControllerClick
    const setLastControllerClick = props.setLastControllerClick
    const setSecondLastControllerClick = props.setSecondLastControllerClick
    const detectClick = props.detectClick
    const setDetectClick = props.setDetectClick
    const totalScrollHeight = props.totalScrollHeight
    const renderLayerNumber = props.renderLayerNumber
    const NUMBER_OF_STRANDS = props.NUMBER_OF_STRANDS
    const NUMBER_OF_LEVELS = props.NUMBER_OF_LEVELS
    const NUMBER_OF_LAYERS = props.NUMBER_OF_LAYERS
    const L4_ELEMENT_WIDTH = props.L4_ELEMENT_WIDTH
    const L4_ELEMENT_HEIGHT = props.L4_ELEMENT_HEIGHT
    const L3_ELEMENT_WIDTH = props.L3_ELEMENT_WIDTH
    const L3_ELEMENT_HEIGHT = props.L3_ELEMENT_HEIGHT    
    const TOP_OFFSET_FACTOR = props.TOP_OFFSET_FACTOR
    const RIGHT_OFFSET_FACTOR = props.RIGHT_OFFSET_FACTOR
    const L2_LEVEL_WIDTH = props.L2_LEVEL_WIDTH
    const L2_LEVEL_HEIGHT = props.L2_LEVEL_HEIGHT
    const L1_WIDTH = props.L1_WIDTH
    const L1_HEIGHT = props.L1_HEIGHT
    const NAVIGATION_CONTROLLER_CONTAINER_WIDTH=props.NAVIGATION_CONTROLLER_CONTAINER_WIDTH
    const NAVIGATION_CONTROLLER_MARGIN_LEFT = props.NAVIGATION_CONTROLLER_MARGIN_LEFT
    const NAVIGATION_CONTROLLER_MARGIN_RIGHT = props.NAVIGATION_CONTROLLER_MARGIN_RIGHT
    const NAVIGATION_CONTROLLER_CONTAINER_HEIGHT = props.NAVIGATION_CONTROLLER_CONTAINER_HEIGHT
    const handleNavigationControllerClick = props.handleNavigationControllerClick

    const setShowDummyLayerWithNoHeight = props.setShowDummyLayerWithNoHeight



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
                        className='flex justify-around' style={{marginRight:'2.5px'}}
                        name={`Layer-${layerNumber}-Level-${NUMBER_OF_LEVELS-j}-Strand-none`}>
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
                        style={{marginRight:'2.5px'}}
                        name={`Layer-${layerNumber}-Level-${NUMBER_OF_LEVELS-m}-Strand-none`}>
                        {layerFourStrands}
                    </div>
            </LayerTwoParentContainer>)
        layerFourStrands = []
    }

    let allLevelChildren = [null, layerTwoLevels, layerThreeLevels, layerFourLevels]
    let layerParents = []

    for (let p=0; p<allLevelChildren.length; p++){
        layerParents.push(
            <div 
                className='ma2' 
                style={{
                    position: 'relative', 
                    top: `${TOP_OFFSET_FACTOR*4-TOP_OFFSET_FACTOR*p}px`, 
                    right: `${RIGHT_OFFSET_FACTOR*p}px`, 
                    zIndex:`${allLevelChildren.length-p}`}}>
            <LayerOneParentContainer 
                L1_WIDTH={L1_WIDTH} 
                L1_HEIGHT={L1_HEIGHT} 
                layerNumber={p+1}
                layerLabel={`Layer ${p+1}`}
                renderLayerNumber={renderLayerNumber}
                handleNavigationControllerClick={handleNavigationControllerClick}>
                    {allLevelChildren[p]}
            </LayerOneParentContainer>
        </div>
        )
    }


    return (
        <>
            <div className='' style={{marginRight: `-${NAVIGATION_CONTROLLER_MARGIN_RIGHT}px` ,width: `${NAVIGATION_CONTROLLER_CONTAINER_WIDTH}`, height: `${NAVIGATION_CONTROLLER_CONTAINER_HEIGHT}px`}}>
                <div style={{marginLeft: `${NAVIGATION_CONTROLLER_MARGIN_LEFT}px`}}>
                    <div className='flex flex-row'>
                        {layerParents}
                    </div>
                    <div style={{marginTop:`${TOP_OFFSET_FACTOR*NUMBER_OF_LAYERS}px`}}>
                        <NavigationControllerMessage 
                            renderLayerNumber={renderLayerNumber}
                            NAVIGATION_CONTROLLER_CONTAINER_WIDTH={NAVIGATION_CONTROLLER_CONTAINER_WIDTH}
                            TOP_OFFSET_FACTOR={TOP_OFFSET_FACTOR}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavigationController