function LayerThreeParentContainer(props){
    
    var L3_ELEMENT_WIDTH = props.L3_ELEMENT_WIDTH - 10
    var L3_ELEMENT_HEIGHT = props.L3_ELEMENT_HEIGHT

    const enableTopBorder = props.enableTopBorder
    const enableBottomBorder = props.enableBottomBorder
    const handleNavigationControllerClick = props.handleNavigationControllerClick
    const layerNumber = props.layerNumber
    const levelNumber = props.levelNumber
    const strandNumber = props.strandNumber

    let ifBorderTopNeeded = ''
    let ifBorderBottomNeeded = ''
    let marginTop = 0

    if (enableTopBorder){
        ifBorderTopNeeded = 'bt '
        marginTop = 4
        L3_ELEMENT_HEIGHT = L3_ELEMENT_HEIGHT - 4
    }
     
    if (enableBottomBorder){
        ifBorderBottomNeeded = 'bb '
        L3_ELEMENT_HEIGHT = L3_ELEMENT_HEIGHT - 4
    }

    let borderWidth
    layerNumber === 3 ? borderWidth = ' bw2' : borderWidth = ' bw1'

    return (
        <div 
            className={'b--dark-purple bl br '+ifBorderTopNeeded+ifBorderBottomNeeded+borderWidth} 
            style={{width: `${L3_ELEMENT_WIDTH}px`, height: `${L3_ELEMENT_HEIGHT}px`, marginTop:`${marginTop}px`}}
            onClick={handleNavigationControllerClick}
            name={`Layer-${layerNumber}-Level-${levelNumber}-Strand-${strandNumber}`}>
                {props.children}
        </div>
    )
}

export default LayerThreeParentContainer