function MenuItem(props){
    const menuItemText = props.menuItemText
    const onClickFunction = props.onClickFunction
    const symbol = props.symbol
    const symbolStyle = props.symbolStyle
    const testClassName = props.testClassName

  return (
    <div className={'pointer dim '+testClassName} onClick={onClickFunction}>
      <div className='ml2 mt3 mb3 dark-purple flex flex-row'>
          <div style={{width:'25px'}} className={symbolStyle}>
            <div className='flex justify-center'>
              {symbol}
            </div>
          </div>
          <div className='ml1'>{menuItemText}</div>
      </div>
    </div>
  )
}

export default MenuItem