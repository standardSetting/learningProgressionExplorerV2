import LayerOneText from '../Data/LayerOne.json'
import parse from 'html-react-parser';

function NavigationControllerMessage(props){

    const NAVIGATION_CONTROLLER_CONTAINER_WIDTH = props.NAVIGATION_CONTROLLER_CONTAINER_WIDTH
    const NAVIGATION_CONTROLLER_MARGIN_LEFT = props.NAVIGATION_CONTROLLER_MARGIN_LEFT
    const TOP_OFFSET_FACTOR = props.TOP_OFFSET_FACTOR
    const renderLayerNumber = props.renderLayerNumber

    return (
        <div className='bg-white shadow-4 br2 bw1 pa3 ba b--lpe-blue' style={{
            marginLeft: `${NAVIGATION_CONTROLLER_MARGIN_LEFT}px`, 
            width: `${0.9*NAVIGATION_CONTROLLER_CONTAINER_WIDTH}px`,
            marginTop: '15vh'}}>
            <div className='br2'>
                <div className='lpe-blue b bb b--black bw1 pb1'>
                    {LayerOneText[renderLayerNumber-1].LayerNutshellDescription}
                </div>
                <div className='f6 mt3'>
                    {parse(LayerOneText[renderLayerNumber-1].LayerElaboration)}
                </div>
            </div>
        </div>
    )
}

export default NavigationControllerMessage