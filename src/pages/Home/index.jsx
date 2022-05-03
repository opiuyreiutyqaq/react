import React, { Component } from 'react'
import img from "./music.jpeg"
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { DataGrid } from '@mui/x-data-grid';
import { height, width } from '@mui/system';

const columns = [
    { field: 'id', headerName: 'ID', width: 70, headerAlign: 'center' },
    { field: 'firstName', headerName: 'First name', width: 130, headerAlign: 'center'  },
    { 
        field: 'lastName', 
        headerName: 'Last name', 
        width: 130,
        headerAlign: 'center'
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      headerAlign: 'center',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      headerAlign: 'center',
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  ];

export default function MediaControlCard() {
    const theme = useTheme();
  
    return (
        <div>
            <div style={{ display:'flex', justifyContent:"center", alignContent:'center', flexDirection:"column", height:"20vh", width:"100%", marginTop: "5vh", marginBottom: "5vh"}}>
                <h3 style={{ display:'flex', justifyContent:"center", alignContent:'center'}}>Mobile App Design Lab3: UI/UX</h3>
                <div style={{ display:'flex', justifyContent:"center", alignContent:'center', marginTop: "2vh", width: "100%"}}>
                    <p>
                        P1. Add Navbar with “Home”, “About us” and “Register” routes.<br/>
                        P2. Link routes. <br/>
                        P3. Add card with image and description.<br/>
                        P4. Add 4x4 full table with sorting and selecting options.
                    </p>
                </div>
            </div>
            <div style={{ display:'flex', justifyContent:"center", alignContent:'center', height:"40vh", width:"100%", marginBottom: "8vh"}}>
                <div style={{ display:'flex', justifyContent:"center", alignContent:'center', height:"40vh", width:"40%"}}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    />
                </div>
            </div>
            
            <Card sx={{ display: 'flex', justifyContent:'center'}} >
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            MYTH & ROID - Forever Lost
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            MYTH & ROID
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            (This is description of Card)<br/>來自深淵電影版的 ED
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        <IconButton aria-label="previous">
                        {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                        </IconButton>
                        <IconButton aria-label="play/pause">
                        <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                        </IconButton>
                        <IconButton aria-label="next">
                        {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                        </IconButton>
                    </Box>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: "40vh" }}
                    image={img}
                    alt="MYTH & ROID - Forever Lost img"
                />
            </Card>
            <footer style={{ display:'flex', justifyContent:"center", alignContent:'center', height:"3vh", width:"100%", backgroundColor: "#000000", color:"#FFFFFF", marginTop:"2vh"}}>
                <p>Copyright &copy;2022 Chilin Chiou. All Rights Reserverd</p>
            </footer>
        </div>
    );
  }