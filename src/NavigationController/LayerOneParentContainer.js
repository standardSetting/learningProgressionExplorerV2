function LayerOneParentContainer(props){

    const L1_WIDTH = props.L1_WIDTH
    const L1_HEIGHT = props.L1_HEIGHT
    const layerNumber = props.layerNumber
    const layerLabel = props.layerLabel
    const renderLayerNumber = props.renderLayerNumber
    const handleNavigationControllerClick = props.handleNavigationControllerClick

    const SELECTED_OPACITY = 'o-100'
    const UNSELECTED_OPACITY = 'o-50'
    const opacityMappingArray = [
        [SELECTED_OPACITY,UNSELECTED_OPACITY,UNSELECTED_OPACITY,UNSELECTED_OPACITY],
        [UNSELECTED_OPACITY,SELECTED_OPACITY,UNSELECTED_OPACITY,UNSELECTED_OPACITY],
        [UNSELECTED_OPACITY,UNSELECTED_OPACITY,SELECTED_OPACITY,UNSELECTED_OPACITY],
        [UNSELECTED_OPACITY,UNSELECTED_OPACITY,UNSELECTED_OPACITY,SELECTED_OPACITY]
    ]

    console.log(layerNumber)

    const opacityMapping = opacityMappingArray[renderLayerNumber-1]

    let isSelected = layerNumber === renderLayerNumber

    let borderWidth
    layerNumber === 1 || layerNumber === 2 ? borderWidth = ' bw2' : borderWidth = ' bw1'

    return (
        <div className='bg-white'>
            <div 
                className={'ba shadow-3 b--dark-purple br2 pointer '+opacityMapping[layerNumber-1]+borderWidth} 
                style={{width:`${L1_WIDTH}px`, height:`${L1_HEIGHT}px`}}
                name={`Layer-${layerNumber}-Level-none-Strand-none`}
                onClick={handleNavigationControllerClick}>
                {props.children}
            </div>
            <div className='flex justify-between bg-moon-gray'>
                    <div>

                    </div>
                    {
                        /* <Link to="myLocation" spy={true} smooth={true}>
                            <div className='w2 h2 ba'></div>
                        </Link> */
                    }
                <div>
                    {!isSelected &&
                    <div className='pl1 pr1 pb1 bg-white mr2 mt1 br bw1 ba b--lpe-blue br2'>
                            <div className={'lpe-blue f6 mt1 pointer bg-white'}>
                                {layerLabel}
                            </div>
                    </div>}
                    {isSelected &&
                    <div className='pl1 pr1 pb1 bg-lpe-blue mr2 mt1 br bw1 ba b--lpe-blue br2'>
                            <div className={'white b f6 mt1 pointer bg-lpe-blue'}>
                                {layerLabel}
                            </div>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default LayerOneParentContainer