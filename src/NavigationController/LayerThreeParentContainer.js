function LayerThreeParentContainer(props){
    
    var L3_ELEMENT_WIDTH = props.L3_ELEMENT_WIDTH - 10
    var L3_ELEMENT_HEIGHT = props.L3_ELEMENT_HEIGHT

    const enableTopBorder = props.enableTopBorder
    const enableBottomBorder = props.enableBottomBorder

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

    return (
        <div 
            className={'b--dark-purple bl br bw2 '+ifBorderTopNeeded+ifBorderBottomNeeded} 
            style={{width: `${L3_ELEMENT_WIDTH}px`, height: `${L3_ELEMENT_HEIGHT}px`, 'margin-top':`${marginTop}px`}}>
                {props.children}
        </div>
    )
}

export default LayerThreeParentContainer