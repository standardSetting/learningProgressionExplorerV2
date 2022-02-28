import layerFourSampleImage from '../../Data/SampleLayerFour.png'
import NumericalScale from '../NumericalScale/NumericalScale'
import PageOutline from '../PageOutline'

function LayerFour(props){

    const totalScrollHeight = props.totalScrollHeight 
    const NAV_BAR_HEIGHT = props.NAV_BAR_HEIGHT
    const hideShadowScroll = props.hideShadowScroll

    return (
        <div className='flex flex-row'>
            <NumericalScale 
                hideShadowScroll={hideShadowScroll}
                NAV_BAR_HEIGHT={NAV_BAR_HEIGHT}
                numericalScaleHeight={totalScrollHeight}/>
            <PageOutline>
                <img src={layerFourSampleImage} width='600px' />
                <img src={layerFourSampleImage} width='600px' />
                <img src={layerFourSampleImage} width='600px' />
                <img src={layerFourSampleImage} width='600px' />
            </PageOutline>
        </div>
    )
}

export default LayerFour