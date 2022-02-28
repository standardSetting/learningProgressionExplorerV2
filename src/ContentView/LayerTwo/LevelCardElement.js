function LevelCardElement(props){
    const title = props.title
    const paragraph = props.paragraph
    return (
        <>
            <div className='dark-purple mt2'>
                {title}
            </div>
            <div className='f5 dark-gray mt2'>
                {paragraph}
            </div>
        </>
    )
}

export default LevelCardElement