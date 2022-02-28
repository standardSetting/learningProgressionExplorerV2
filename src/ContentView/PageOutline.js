function PageOutline(props){

    return (
        <div style={{width: '60vw'}}>
            <div className='flex justify-center'>
                <div className='mt5'>
                    <div className='bg-white ba b--lpe-blue br2 bw1 shadow-1' style={{width: '40vw'}}>
                        <div className='flex justify-center'>
                            <div className='bg-white' style={{width: '30vw'}}>
                                <div className='flex flex-column'>
                                    <div style={{marginTop: '8vh'}}>
                                        {props.children}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageOutline