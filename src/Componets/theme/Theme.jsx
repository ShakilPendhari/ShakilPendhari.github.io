import { MoonIcon } from '@chakra-ui/icons';
import { Box, Tooltip, useColorMode } from '@chakra-ui/react';
import React from 'react';
import useToggleHook from '../../hooks/ToggleHook';
import { BsFillSunFill } from "react-icons/bs";
import { styleTheme } from '../RawMaterial';



const Theme = () => {
    const [theme, ChangeTheme ] =  useToggleHook();
    const { toggleColorMode } = useColorMode();
  return (
    <Box flex="0.3">
    {
         theme?<Box 
                   style={{...styleTheme, backgroundColor:"#234E52",
                   border:"1px dashed red"}} 
                   color="yellow"
                   h="2rem"
                   onClick={()=>{toggleColorMode(); ChangeTheme()}} >
             <Tooltip

                 //    label="change theme"

                    placement='top'
                   >
                   <Box mt="0.2rem">
                   <BsFillSunFill
                     />
                   </Box>
                
             </Tooltip>
         </Box>:
         <Box
             onClick={()=>{toggleColorMode(); ChangeTheme()}}  
             style={styleTheme} 
             color="white"
             border="1px dashed">
             <Tooltip
                 //    label="change theme"
                    placement='top'
                   >
                 <MoonIcon
                          mt="-0.3rem"
                          boxsize="1.05rem"
                          />
             </Tooltip>
         </Box>
     }
    </Box>
  )
}

export default Theme