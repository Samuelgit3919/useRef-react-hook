import React, { useRef, useState } from 'react'

function Main() {
    const [on, setOn] = useState(false)
    const renderCount = useRef(0)

    function forceRender(){
        setOn(preOn => !preOn)
    }

    React.useEffect(() => {
       renderCount.current = renderCount.current + 1
    })
  return (
    <div>
       <h3>understanding refs</h3>
        <button onClick={forceRender}>
            Force re-render w/ state change
        </button>
        <h2>Render count: {renderCount.current}</h2>
    </div>
  )
}

export default Main
