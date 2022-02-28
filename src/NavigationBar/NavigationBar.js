import { useState } from 'react'

import logo from '../shared/logo.svg'
import MenuItem from './MenuItem'

function NavigationBar(props){

  const [showHideMenu, setShowHideMenu] = useState(false)
  const NAV_BAR_HEIGHT = props.NAV_BAR_HEIGHT

  function showMenu(e){
    e.preventDefault()
    setShowHideMenu(prevValue => !prevValue)
  }

  function hideMenu(e){
    e.preventDefault()
    setShowHideMenu(false)
  }

    return (
      <nav 
        onMouseLeave={hideMenu} 
        className="flex justify-between items-center h3 b--dark-purple bb bw5 bg-white" 
        style={{zIndex:'20', position: 'fixed', width: '100vw', minHeight: `${NAV_BAR_HEIGHT}`, top: '0'}}>
        <div className="ml4 flex items-end">
          <a href="https://www.acer.org/au" target="_blank" rel='noreferrer'>
              <img src={logo} className='mt2' alt='ACER logo'/>
          </a>
          <div className="f3 dark-purple ml3 mb1">Learning Progression Explorer</div>
        </div>
          <div className='mr2 mt2 bg-white show-menu' onClick={showMenu}>
                <div 
                  className='dark-purple mr2 pointer' 
                  style={{position: 'relative', display:'inline-block', fontSize:'40px', marginRight: '1vw'}}>&#9776;</div>
                {showHideMenu &&
                <div style={{position: 'absolute', right:'21px'}} className=''>
                  <div className='bg-white ba br1 bw1 b--dark-purple' style={{width: '230px'}}>
                    <MenuItem menuItemText='About' symbol='&#8505;' testClassName='create-a-new-session'/>
                    <MenuItem menuItemText='Reading' symbol='' symbolStyle='f6' testClassName='view-sessions'/>
                    <MenuItem menuItemText='Mathematics' symbol='' testClassName='update-sessions'/>
                    <MenuItem menuItemText='Sign Out' symbol='&#8594;' testClassName='sign-out'/>
                  </div>
                </div>}
            </div>
      </nav>
    )
  } 

  export default NavigationBar;