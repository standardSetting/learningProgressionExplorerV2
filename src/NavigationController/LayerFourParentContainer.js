import LayerFourResource from "./LayerFourResource"

function LayerFourParentContainer(props){

    const MAX_NUMBER_OF_L4_ELEMENTS = props.MAX_NUMBER_OF_L4_ELEMENTS
    const L3_ELEMENT_HEIGHT = props.L3_ELEMENT_HEIGHT
    const L4_ELEMENT_WIDTH = props.L4_ELEMENT_WIDTH
    const L4_ELEMENT_HEIGHT = props.L4_ELEMENT_HEIGHT
    const enableMarginBottom = props.enableMarginBottom
    
    let marginBottom
    enableMarginBottom ? marginBottom = 4 : marginBottom = 0

    return (
        <div className='flex justify-center'>
            <div style={{width: `${L4_ELEMENT_WIDTH}px`}}>
                <div style={{display: 'flex', 'flex-direction':'column','justify-content':'space-around', height:`${L3_ELEMENT_HEIGHT}px`}}>
                    <LayerFourResource L4_ELEMENT_WIDTH={L4_ELEMENT_WIDTH} L4_ELEMENT_HEIGHT={L4_ELEMENT_HEIGHT} marginBottom={marginBottom}/>
                    {/* <LayerFourResource L4_ELEMENT_WIDTH={L4_ELEMENT_WIDTH} L4_ELEMENT_HEIGHT={L4_ELEMENT_HEIGHT}/> */}
                </div>
            </div>
        </div>
    )
}

export default LayerFourParentContainer