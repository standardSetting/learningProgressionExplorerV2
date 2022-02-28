import LayerOne from "./LayerOne/LayerOne"
import LayerTwo from "./LayerTwo/LayerTwo" 
import LayerThree from "./LayerThree/LayerThree"
import LayerFour from "./LayerFour/LayerFour"

import { useEffect, useRef, useState } from 'react'

function RequisiteSpacing(props){
    const NAV_BAR_HEIGHT = props.NAV_BAR_HEIGHT

    return (
        <div style={{height: `${NAV_BAR_HEIGHT}`}}></div>
    )
}

function ContentView(props){
    const CONTENT_VIEW_AND_CONTROL_CONTAINER_WIDTH = props.CONTENT_VIEW_AND_CONTROL_CONTAINER_WIDTH
    const windowDimensions = props.windowDimensions
    const NAV_BAR_HEIGHT = props.NAV_BAR_HEIGHT
    const contentViewHeightRef = props.contentViewHeightRef
    const totalScrollHeight = props.totalScrollHeight
    const lastControllerClick = props.lastControllerClick
    const secondLastControllerClick = props.secondLastControllerClick
    const hideShadowScroll = props.hideShadowScroll
    const showDummyLayerWithNoHeight = props.showDummyLayerWithNoHeight
    const renderLayerNumber = props.renderLayerNumber
    
    // Add tool tips throughout

    //scroll.scrollTo(((12-1)-12)*(totalScrollHeight/12))

    return (
        <> 
            <RequisiteSpacing NAV_BAR_HEIGHT={NAV_BAR_HEIGHT}/>
            <div className='' ref={contentViewHeightRef}>
                {!showDummyLayerWithNoHeight &&
                    <div>
                        {renderLayerNumber === 1 &&
                            <LayerOne 
                                disableTickMarksAndArrowHead={true}/>}
                        {renderLayerNumber === 2 &&
                            <LayerTwo 
                                hideShadowScroll={hideShadowScroll}
                                NAV_BAR_HEIGHT={NAV_BAR_HEIGHT}
                                totalScrollHeight={totalScrollHeight}/>}
                        {renderLayerNumber === 3 &&
                            <LayerThree 
                                NAV_BAR_HEIGHT={NAV_BAR_HEIGHT}
                                totalScrollHeight={totalScrollHeight}/>}
                        {renderLayerNumber === 4 &&
                            <LayerFour 
                                NAV_BAR_HEIGHT={NAV_BAR_HEIGHT}
                                totalScrollHeight={totalScrollHeight}/>}
                    </div>}
            </div>
        </>
    )
}

export default ContentView