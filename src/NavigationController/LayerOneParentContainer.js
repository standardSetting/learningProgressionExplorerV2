function LayerOneParentContainer(props){

    const L1_WIDTH = props.L1_WIDTH
    const L1_HEIGHT = props.L1_HEIGHT
    const layerNumber = props.layerNumber
    const handleNavigationControllerClick = props.handleNavigationControllerClick

    // const opacityMapping = ['o-40','o-40','o-40','o-100']
    // const opacityMapping = ['o-40','o-40','o-100','o-40']
    const opacityMapping = ['o-40','o-100','o-40','o-40']
    // const opacityMapping = ['o-100','o-40','o-40','o-40']

    return (
        <div className='bg-white'>
            <div 
                className={'ba shadow-3 b--dark-purple br2 bw1 pointer '+opacityMapping[layerNumber-1]} 
                style={{width:`${L1_WIDTH}px`, height:`${L1_HEIGHT}px`}}
                name={`Layer${layerNumber}`}
                onClick={handleNavigationControllerClick}>
                {props.children}
            </div>
        </div>
    )
}

export default LayerOneParentContainer