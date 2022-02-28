function TickMark(props){
    const isMajor = props.isMajor
    const width = props.width
    const height = props.height

    let borderWidth = isMajor ? 'bw2' : 'bw1'
    let extraWidth = isMajor ? 3 : 0

    return (
        <div className={`bb bw1 b--dark-purple ${borderWidth}`} style={{width:`${width}px`,height:`${height}px`}}></div>
    )
}

export default TickMark