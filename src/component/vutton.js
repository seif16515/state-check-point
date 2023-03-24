import React from 'react';
import Profile from './profile';
import { useState } from 'react';
import Button from '@mui/material/Button';
const MyFunctionComponent = () => {
    const [button, setButton] = useState(false);
    const [isShown, setIsShown] = useState(false);
    return (
      <div>
        <Button  variant="contained" size="large"  onClick={()=> setButton(!button)} onHov style={{backgroundColor: ' black', }} 
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
         >click here</Button>
        <div style={{paddingLeft:'15%'}}>
        {button ? <Profile></Profile> : null}
        {isShown && (
        <div style={{paddingRight:'30px'}}>
          I'll appear when you hover over the button.
        </div>
      )}
        </div>
      </div>
    );
   };
export default MyFunctionComponent