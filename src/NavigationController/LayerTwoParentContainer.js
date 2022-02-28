function LayerTwoParentContainer(props){

    const L2_LEVEL_WIDTH = props.L2_LEVEL_WIDTH - 1
    const L2_LEVEL_HEIGHT = props.L2_LEVEL_HEIGHT - 0.3
    const layerNumber = props.layerNumber
    const levelNumber = props.levelNumber
    const enableTopBorder = props.enableTopBorder
    const handleNavigationControllerClick = props.handleNavigationControllerClick

    let ifBorderTopNeeded
    enableTopBorder ? ifBorderTopNeeded = 'bt ' : ifBorderTopNeeded = ''

    let borderWidth
    layerNumber === 2 ? borderWidth = ' bw2' : borderWidth = ' bw1'

    return (
            <div 
                className={'b--dark-purple bw1 '+ifBorderTopNeeded+borderWidth} 
                style={{width:`${L2_LEVEL_WIDTH-3}px`, height:`${L2_LEVEL_HEIGHT}px`}}
                // name={`Layer${layerNumber}Level${levelNumber}`}
                name={`Layer-${layerNumber}-Level-${levelNumber}-Strand-none`}
                onClick={handleNavigationControllerClick}>
                {props.children}
            </div>
    )
}

export default LayerTwoParentContainer