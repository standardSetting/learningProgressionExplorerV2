import NumericalScale from '../NumericalScale/NumericalScale'
import PageOutline from '../PageOutline'
import Rows from './Rows'

function LayerThree(props){
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
                    <Rows />
                </PageOutline>
            </div>
    )
}

export default LayerThree