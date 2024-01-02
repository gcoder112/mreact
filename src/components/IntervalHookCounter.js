import React, { useState, useEffect } from 'react'

export default function IntervalHookCounter() {
    const [count, setCount] = useState(0)
    const someProp = 'someProp'

    const tick = () => {
        // setCount(count + 1)
        setCount(prevCount => prevCount + 1)
    }

    useEffect(() => {
        function doSomething() {
            console.log(someProp)
        }
        doSomething()
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    // }, [count])
    }, [someProp])

    return (
        <div>
            {count}
        </div>
    )
}
