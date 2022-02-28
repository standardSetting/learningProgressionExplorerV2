function LayerOneLabel(props){

    const isSelected = props.isSelected
    const layerLabel = props.layerLabel

    return (
        <div className='flex justify-between bg-moon-gray'>
            <div></div>
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
    )
}

export default LayerOneLabel