function LayerFourResource(props){

    const L4_ELEMENT_WIDTH = props.L4_ELEMENT_WIDTH
    const L4_ELEMENT_HEIGHT = props.L4_ELEMENT_HEIGHT
    const marginBottom = props.marginBottom
    const layerNumber = props.layerNumber
    const levelNumber = props.levelNumber
    const strandNumber = props.strandNumber

    return (
        <div 
            className='ba b--dark-purple bw1 bg-aubergine' 
            style={{width: `${L4_ELEMENT_WIDTH}px`, height: `${L4_ELEMENT_HEIGHT}px`, borderRadius:'50%', marginBottom:`${marginBottom}px`}}
            name={`Layer-${layerNumber}-Level-${levelNumber}-Strand-${strandNumber}`}>
            
        </div>
    )
}

export default LayerFourResource