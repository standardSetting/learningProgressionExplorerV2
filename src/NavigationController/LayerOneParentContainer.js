import LayerOneLabel from "./LayerOneLabel"

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
            <LayerOneLabel 
                isSelected={isSelected}
                layerLabel={layerLabel}/>
        </div>
    )
}

export default LayerOneParentContainer