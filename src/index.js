import App from "./App"
import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react'

function WindowResize(props){
  const [windowDimensions, setWindowDimensions] = useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  })

  useEffect(() => {
    function handleResize() {
        setWindowDimensions({
            height: window.innerHeight,
            width: window.innerWidth
            })
        }
        window.addEventListener('resize', handleResize)
        return function () {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

  return (    
      <App windowDimensions={windowDimensions}/>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <div>
      <WindowResize />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);


