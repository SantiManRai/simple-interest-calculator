import  React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './App.css'



const App=()=> {
  const [p, setP] = useState(0);
  const [t, setT] = useState(0);
  const [r, setR] = useState(0);
  const [si, setSi] = useState(0);

  const calculateInterest=()=>
    {
      setSi((p * t * r)/100);
    }

  return (
    <div className='div'>
     
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           Simple Interest
          </Typography>
          
        </Toolbar>
      </AppBar>
      <br/> <br/>

      <TextField onChange={(event)=>setP(event.target.value)} id="filled-basic" label="Enter Principal" variant="filled" />
      <br/> <br/>
      <TextField onChange={(event)=>setT(event.target.value)} id="filled-basic" label="Enter Time" variant="filled" />
      <br/> <br/>
      <TextField onChange={(event)=>setR(event.target.value)} id="filled-basic" label="Enter Rate" variant="filled" />
      <br/> <br/>
      <Button onClick={()=>calculateInterest()} variant="contained" color="success">Calculate</Button>
      <br/> <br/>
      <Typography variant="h6" gutterBottom>
        Simple Interest is: {si}
      </Typography>
    
    </div>
  );
}

export default App;
