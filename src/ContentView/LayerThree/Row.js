function Row(props){
    const text = props.text
    const index = props.index

    return (
        <>
            {text !== '' &&
                <div className=''>
                    <div className='f5' style={{marginTop: '2vh', marginBottom:'1vh'}}>
                            {text}
                    </div>
                </div>}
        </>
    )
}

export default Row