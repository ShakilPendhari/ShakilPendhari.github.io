import { useState } from 'react'

const useToggleHook = () => {
    const [ toggle, setToggle ] = useState(false)
     const changeToggle = ()=>{
        setToggle(!toggle);
     }
     return [toggle, changeToggle]
}

export default useToggleHook