import TickMark from "./TickMark"
import ArrowUp from "./ArrowUp"

function NumericalScale(props){

    const NUMERICAL_SCALE_HEIGHT = props.numericalScaleHeight
    const TICK_MARK_WIDTH = 10
    const TICK_MARK_HEIGHT = 30
    const NAV_BAR_HEIGHT = props.NAV_BAR_HEIGHT
    const hideShadowScroll = props.hideShadowScroll

    const numberOfTickMarks = Math.round(NUMERICAL_SCALE_HEIGHT/TICK_MARK_HEIGHT)

    let tickMarks = []
    let isMajor
    console.log(numberOfTickMarks)
    for (let i=0; i<numberOfTickMarks; i++){
        // i % 10 === 0 ? isMajor = true : isMajor = false
        tickMarks.push(
            <TickMark 
                isMajor={true} 
                width={TICK_MARK_WIDTH} 
                height={TICK_MARK_HEIGHT}/>)
    }

    return (
        <div>
            <div className='bg-moon-gray' style={{position: 'fixed', height:'3.5vh', width:'2.8vw', zIndex:'10', top: NAV_BAR_HEIGHT}}></div>
            {hideShadowScroll &&
                <div className='top-fade' style={{position: 'fixed', height:'4vh', marginLeft:'1.2vw', width:'60vw', zIndex:'11', top: NAV_BAR_HEIGHT}}></div>}
            <ArrowUp NAV_BAR_HEIGHT={NAV_BAR_HEIGHT}/>
            <div className='flex flex-row' style={{marginLeft:'1.15vw'}}>
                <div className='ba bw2 b--dark-purple' style={{width:'.1vw'}}></div>
                <div className='flex flex-column'>
                    {tickMarks}
                </div>
            </div>
        </div>
            
    )
}

export default NumericalScale