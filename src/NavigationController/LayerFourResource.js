function LayerFourResource(props){

    const L4_ELEMENT_WIDTH = props.L4_ELEMENT_WIDTH
    const L4_ELEMENT_HEIGHT = props.L4_ELEMENT_HEIGHT
    const marginBottom = props.marginBottom

    return (
        <div className='ba b--dark-purple bw1 bg-aubergine' style={{width: `${L4_ELEMENT_WIDTH}px`, height: `${L4_ELEMENT_HEIGHT}px`, 'border-radius':'50%', 'margin-bottom':`${marginBottom}px`}}>

        </div>
    )
}

export default LayerFourResource