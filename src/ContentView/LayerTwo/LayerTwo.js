import LevelCard from './LevelCard'
import NumericalScale from '../NumericalScale/NumericalScale'
import PageOutline from '../PageOutline'

function LayerTwo(props){
    const totalScrollHeight = props.totalScrollHeight 
    const NAV_BAR_HEIGHT = props.NAV_BAR_HEIGHT
    const hideShadowScroll = props.hideShadowScroll

    var levelCards = []
    for (let i=12; i>0; i--){
        levelCards.push(<LevelCard levelCardIndex={i}/>)
    }

    return (
        <div>
            <div className='flex flex-row'>
                <NumericalScale 
                    hideShadowScroll={hideShadowScroll}
                    NAV_BAR_HEIGHT={NAV_BAR_HEIGHT}
                    numericalScaleHeight={totalScrollHeight}/>
                <PageOutline>
                    {levelCards}
                </PageOutline>
            </div>
        </div>
    )
}

export default LayerTwo