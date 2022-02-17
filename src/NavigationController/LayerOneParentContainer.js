function LayerOneParentContainer(props){

    const L1_WIDTH = props.L1_WIDTH
    const L1_HEIGHT = props.L1_HEIGHT
    const layerNumber = props.layerNumber

    const opacityMapping = ['o-40','o-40','o-40','o-100']
    return (
        <div className='bg-white'>
            <div className={'ba shadow-3 b--dark-purple br2 bw1 '+opacityMapping[layerNumber]} style={{width:`${L1_WIDTH}px`, height:`${L1_HEIGHT}px`}}>
                {props.children}
            </div>
        </div>
    )
}

export default LayerOneParentContainer