function LayerTwoParentContainer(props){

    const L2_LEVEL_WIDTH = props.L2_LEVEL_WIDTH - 1
    const L2_LEVEL_HEIGHT = props.L2_LEVEL_HEIGHT - 0.3
    const enableTopBorder = props.enableTopBorder

    let ifBorderTopNeeded
    enableTopBorder ? ifBorderTopNeeded = 'bt ' : ifBorderTopNeeded = ''

    return (
        <div className={'b--dark-purple bw1 '+ifBorderTopNeeded} style={{width:`${L2_LEVEL_WIDTH}px`, height:`${L2_LEVEL_HEIGHT}px`}}>
            {props.children}
        </div>
    )
}

export default LayerTwoParentContainer