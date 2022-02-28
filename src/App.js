import './tachyons.css'
import './index.css';

import NavigationController from './NavigationController/NavigationController';
import NavigationBar from './NavigationBar/NavigationBar';
import ContentView from './ContentView/ContentView';
import NavigationControllerMessage from './NavigationController/NavigationControllerMessage';

import { useRef, useState, useEffect } from 'react'

import * as Scroll from 'react-scroll';

function App(props) {

  const contentViewHeightRef = useRef(null)

  const [lastControllerClick, setLastControllerClick] = useState({Layer: '1', Level: 'none', Strand: 'none'})
  const [secondLastControllerClick, setSecondLastControllerClick] = useState({Layer: '1', Level: 'none', Strand: 'none'})
  const [detectClick, setDetectClick] = useState(false)  
  const [showDummyLayerWithNoHeight, setShowDummyLayerWithNoHeight] = useState(false)

  const windowDimensions = props.windowDimensions
  const windowHeight = windowDimensions.height
  const windowWidth = windowDimensions.width

  // Adjust these factors for sizing
  const NUMBER_OF_LAYERS = 4
  const NUMBER_OF_STRANDS = 3
  const NUMBER_OF_LEVELS = 12

  const L4_ELEMENT_WIDTH = 10
  const L4_ELEMENT_HEIGHT = 10

  const L4_ELEMENT_WIDTH_SPACING_FACTOR = windowDimensions.width/(100*NUMBER_OF_STRANDS+20)
  const L4_ELEMENT_HEIGHT_SPACING_FACTOR = windowDimensions.height/350

  const RIGHT_OFFSET_SCALE_FACTOR = 0.65

  const NAV_BAR_HEIGHT = '13vh'

  const L3_ELEMENT_WIDTH = L4_ELEMENT_WIDTH_SPACING_FACTOR*L4_ELEMENT_WIDTH
  const L3_ELEMENT_HEIGHT = L4_ELEMENT_HEIGHT_SPACING_FACTOR*L4_ELEMENT_HEIGHT
  
  const TOP_OFFSET_FACTOR = L3_ELEMENT_HEIGHT
  const RIGHT_OFFSET_FACTOR = L3_ELEMENT_WIDTH*RIGHT_OFFSET_SCALE_FACTOR

  const L2_LEVEL_WIDTH = NUMBER_OF_STRANDS*L3_ELEMENT_WIDTH
  const L2_LEVEL_HEIGHT = L3_ELEMENT_HEIGHT

  const L1_WIDTH = L2_LEVEL_WIDTH
  const L1_HEIGHT = NUMBER_OF_LEVELS*L2_LEVEL_HEIGHT

  const NAVIGATION_CONTROLLER_CONTAINER_WIDTH = L1_WIDTH*NUMBER_OF_LAYERS
  const NAVIGATION_CONTROLLER_CONTAINER_HEIGHT = 1.58*L1_HEIGHT
  const NAVIGATION_CONTROLLER_MARGIN_LEFT = L3_ELEMENT_WIDTH
  const NAVIGATION_CONTROLLER_MARGIN_RIGHT = L3_ELEMENT_WIDTH

  const CONTENT_VIEW_AND_CONTROL_CONTAINER_WIDTH = windowDimensions.width - NAVIGATION_CONTROLLER_CONTAINER_WIDTH
  // End Adjust these factors for sizing
  const [totalScrollHeight, setTotalScrollHeight] = useState(1000)
  const [hideShadowScroll, setHideShadowScroll] = useState(false)

  const [renderLayerNumber, setRenderLayerNumber] = useState(1)

  let initialStrandNumberArray = []
  for (let i=1; i<=NUMBER_OF_STRANDS; i++){
    initialStrandNumberArray.push(i)
  }

  const [renderStrandNumbers, setRenderStrandNumbers] = useState(initialStrandNumberArray)

  useEffect(()=>{
      let totalScrollHeightTemp = contentViewHeightRef.current.clientHeight
      //console.log(contentViewHeightRef.current.clientHeight)
      setTotalScrollHeight(totalScrollHeightTemp)
  }, [windowHeight, windowWidth])

  // handle resize window, variable contentview width pass props

  let scroll = Scroll.animateScroll;
  

  /* BEGIN HANDLE CLICK AND RENDER FUNCTION */
  // clean up this function to animate transitions
  function handleNavigationControllerClick(e){
      console.log(e.target.attributes.name.nodeValue)
      
      let nameValueArray = e.target.attributes.name.nodeValue.split('-')
      let secondLastControllerClickTemp = lastControllerClick
      let lastControllerClickTemp = {
          Layer: nameValueArray[1], 
          Level: nameValueArray[3], 
          Strand: nameValueArray[5]
      }

      setRenderLayerNumber(Number(lastControllerClickTemp.Layer))
      
      // setLastControllerClick(lastControllerClickTemp)
      // setSecondLastControllerClick(secondLastControllerClickTemp)

      let levelClickNumber = Number(lastControllerClickTemp.Level)
      console.log(lastControllerClickTemp)
      
      // let levelClickNumber = Number(e.target.attributes.name.nodeValue)
      console.log(levelClickNumber)
      
      
      
      //console.log(`Total scroll height: ${totalScrollHeightTemp}`)
      
      let totalScrollHeightTemp = contentViewHeightRef.current.clientHeight
      let scrollToValue = ((NUMBER_OF_LEVELS-levelClickNumber)/NUMBER_OF_LEVELS)*totalScrollHeightTemp
      scroll.scrollTo(scrollToValue)
      setTotalScrollHeight(totalScrollHeightTemp)

  }
  /* END HANDLE CLICK AND RENDER FUNCTION */

  const windowWidthThreshold = 1280
  let marginLeftValue
  windowWidth > windowWidthThreshold ? marginLeftValue = '40vw' : marginLeftValue = '0vw'
  //setTimeout(()=>{window.scrollTo(0,10000)},0)

  return (
    <div className='bg-moon-gray'>
      <NavigationBar NAV_BAR_HEIGHT={NAV_BAR_HEIGHT}/>
          <div 
            className='flex flex-column' 
            style={{zIndex:'20', position: 'fixed', width: '50vw', top: '12vh'}}>
              {windowWidth > windowWidthThreshold &&
                <div>
                  <NavigationController 
                    renderLayerNumber={renderLayerNumber}
                    handleNavigationControllerClick={handleNavigationControllerClick}
                    setShowDummyLayerWithNoHeight={setShowDummyLayerWithNoHeight}
                    setHideShadowScroll={setHideShadowScroll}
                    lastControllerClick={lastControllerClick}
                    secondLastControllerClick={secondLastControllerClick}
                    setLastControllerClick={setLastControllerClick}
                    setSecondLastControllerClick={setSecondLastControllerClick}
                    detectClick={detectClick}
                    setDetectClick={setDetectClick}
                    totalScrollHeight={totalScrollHeight}
                    windowHeight={windowDimensions.height}
                    windowWidth={windowDimensions.width}
                    NUMBER_OF_STRANDS={NUMBER_OF_STRANDS}
                    NUMBER_OF_LEVELS={NUMBER_OF_LEVELS}
                    L4_ELEMENT_WIDTH={L4_ELEMENT_WIDTH}
                    L4_ELEMENT_HEIGHT={L4_ELEMENT_HEIGHT}
                    L4_ELEMENT_WIDTH_SPACING_FACTOR={L4_ELEMENT_WIDTH_SPACING_FACTOR}
                    L4_ELEMENT_HEIGHT_SPACING_FACTOR={L4_ELEMENT_HEIGHT_SPACING_FACTOR}
                    RIGHT_OFFSET_SCALE_FACTOR={RIGHT_OFFSET_SCALE_FACTOR}
                    L3_ELEMENT_WIDTH={L3_ELEMENT_WIDTH}
                    L3_ELEMENT_HEIGHT={L3_ELEMENT_HEIGHT}
                    TOP_OFFSET_FACTOR={TOP_OFFSET_FACTOR}
                    RIGHT_OFFSET_FACTOR={RIGHT_OFFSET_FACTOR}
                    L2_LEVEL_WIDTH={L2_LEVEL_WIDTH}
                    L2_LEVEL_HEIGHT={L2_LEVEL_HEIGHT}
                    L1_WIDTH={L1_WIDTH}
                    L1_HEIGHT={L1_HEIGHT}
                    NUMBER_OF_LAYERS={NUMBER_OF_LAYERS}
                    NAVIGATION_CONTROLLER_CONTAINER_WIDTH={NAVIGATION_CONTROLLER_CONTAINER_WIDTH}
                    NAVIGATION_CONTROLLER_MARGIN_LEFT={NAVIGATION_CONTROLLER_MARGIN_LEFT}
                    NAVIGATION_CONTROLLER_MARGIN_RIGHT={NAVIGATION_CONTROLLER_MARGIN_RIGHT}
                    NAVIGATION_CONTROLLER_CONTAINER_HEIGHT={NAVIGATION_CONTROLLER_CONTAINER_HEIGHT}/>
                </div>}
          </div>
          <div className='' style={{marginLeft: marginLeftValue}}>
            <ContentView
              hideShadowScroll={hideShadowScroll}
              lastControllerClick={lastControllerClick}
              renderLayerNumber={renderLayerNumber}
              secondLastControllerClick={secondLastControllerClick}
              contentViewHeightRef={contentViewHeightRef}
              windowHeight={windowHeight}
              windowWidth={windowWidth}
              NAV_BAR_HEIGHT={NAV_BAR_HEIGHT}
              totalScrollHeight={totalScrollHeight}
              CONTENT_VIEW_AND_CONTROL_CONTAINER_WIDTH={CONTENT_VIEW_AND_CONTROL_CONTAINER_WIDTH}/>
          </div>
    </div>
  );
}

export default App