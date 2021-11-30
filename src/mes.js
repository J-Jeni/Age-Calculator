
import { Toolbar, Typography } from "@mui/material";

import { useLocation } from "react-router";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { Grid } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import CakeTwoToneIcon from '@mui/icons-material/CakeTwoTone';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router";
import './mess.css';
import PersonIcon from '@mui/icons-material/Person';
import CardFooter from '@mui/material/Card';
import TimerIcon from '@mui/icons-material/Timer';
import { styled } from "@mui/system";
import Avatar from '@mui/material/Avatar';

function Mess() {

    const { state } = useLocation();
    const { Name, Age, Mobile_Number, Gender, Date, Month, Days, Hours, Weeks, Minutes, Seconds, Milliseconds, Daystonxtbday } = state;

    const navigate = useNavigate();

    var letter = Name.charAt(0)
    var a = Weeks
    var we = a.toLocaleString()
    console.log(we)
    var b = Month
    var mon = b.toLocaleString()

    var c = Days
    var da = c.toLocaleString()

    var d = Hours
    var hou = d.toLocaleString()

    var e = Minutes
    var min = e.toLocaleString()

    var f = Seconds
    var sec = f.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    var g = Milliseconds
    var mil = Number(g).toLocaleString()

    return (

        <Box sx={{ flexGrow: 1, height: "100vh" }}>
            <div className="hdng" style={{ display: "flex" }}>
                <AppBar position="absolute" style={{ background: "#f4649c" }}>
                    <Toolbar>
                        <Typography style={{ fontSize: "30px" }}> Details </Typography>
                    </Toolbar>

                </AppBar>
            </div>

            <br /><br />
            <br />
            <div className="whole" style={{ height: "100%" }}>
                <div className="whole">
                    <div className="main" >

                        <div className="card1" style={{ flexDirection: "column", flexWrap: "wrap",display:"block" }} >


                            <Card sx={{ borderRadius: "30px", marginLeft: "50px", marginTop: "50px", marginRight: "50px", marginBottom: "10px", height: "50vh" }} style={{ background: 'rgba(255,255,255,0.5)' }}>
                                <div> <center> <Avatar sx={{ marginTop: "20px", fontSize: "60px", width: "80px", height: "80px",marginBottom:"20px", bgcolor: "#52006A" }}>{letter}</Avatar>

                                    <Typography style={{ fontSize: "25px", color: "#52006A", fontWeight: "bold",marginBottom:"20px" }}>  Welcome {Name} </Typography></center></div>

                                <CardContent>

                                    <Grid container display="flex" marginBottom="10px" alignContent="space-between" rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                                        <Grid item xs={6} alignContent="stretch">
                                            <Card><center>
                                                <h3>{Age}</h3>
                                                <CardFooter style={{ fontSize: "18px", fontWeight: "bold", color: "white", backgroundColor: "#52006A" }}>Age</CardFooter>


                                            </center></Card>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Card><center>
                                                <h3>{Mobile_Number}</h3>
                                                <CardFooter style={{ fontSize: "18px", fontWeight: "bold", color: "white", backgroundColor: "#52006A" }}>Mobile Number</CardFooter>


                                            </center></Card>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Card><center>
                                                <h3>{Gender}</h3>
                                                <CardFooter style={{ fontSize: "18px", fontWeight: "bold", color: "white", backgroundColor: "#52006A" }}>Gender</CardFooter>

                                            </center></Card>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Card><center>
                                                <h3>{Date}</h3>
                                                <CardFooter style={{ fontSize: "18px", fontWeight: "bold", color: "white", backgroundColor: "#52006A" }}>Date</CardFooter>

                                            </center></Card>
                                        </Grid>

                                    </Grid>


                                </CardContent>
                            </Card>

                        </div>
                        <div className="card2" style={{ flexDirection: "column", flexWrap: "wrap",display:"block" }}  >
                            <Card sx={{ borderRadius: "30px", marginLeft: "50px", marginTop: "50px", marginRight: "50px", marginBottom: "10px", height: "50vh" }} style={{ background: 'rgba(255,255,255,0.5)' }}>
                                <CardContent>
                                    <center><CakeTwoToneIcon style={{ marginTop: "20px", alignItems: "center", justifyContent: "center", fontSize: "100px", color: "FF005C" }} />
                                    </center>
                                    <center> <h1 style={{ fontSize: "50px" }}>  </h1> <Typography sx={{ fontSize: "30px" }} color="#FF005C">
                                        There are only <b> {Daystonxtbday}</b> Days until <b>{Name}</b>'s <b>{Age + 1}</b>th Birthday!
                                    </Typography>

                                    </center>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="card3" style={{ flexDirection: "column",display:"block" }}  >
                            <Card sx={{ borderRadius: "30px", marginLeft: "50px", backgroundColor: "mintcream", marginTop: "50px", height: "50vh", marginRight: "50px", marginBottom: "50px" }} style={{ background: 'rgba(255,255,255,0.5)' }}>
                                <div> <center><TimerIcon style={{ marginTop: "10PX", color: "#CD113B", fontSize: "100px" }} />
                                    <Typography sx={{ fontWeight: "bold", fontSize: "20px" }} color="firebrick">
                                        You have been alive for!!!     </Typography>
                                </center></div>

                                <CardContent>

                                    <Grid container display="flex" rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
                                        <Grid item xs={4}>
                                            <Card><center><h3>{Age}</h3>
                                                <CardFooter style={{ fontSize: "18px", fontWeight: "bold", color: "white", backgroundColor: "#CD113B" }}>Age</CardFooter></center></Card>

                                        </Grid>
                                        <Grid item xs={4}>
                                            <Card sx={{ marginBottom: "10px" }} ><center><h3>{mon}</h3>
                                                <CardFooter style={{ fontSize: "18px", fontWeight: "bold", color: "white", backgroundColor: "#CD113B" }}>Month</CardFooter></center></Card>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Card sx={{ marginBottom: "10px" }}><center><h3>{we}</h3>
                                                <CardFooter style={{ fontSize: "18px", fontWeight: "bold", color: "white", backgroundColor: "#CD113B" }}>Weeks</CardFooter></center></Card>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Card sx={{ marginBottom: "10px" }}><center><h3>{da}</h3>
                                                <CardFooter style={{ fontSize: "18px", fontWeight: "bold", color: "white", backgroundColor: "#CD113B" }}>Days</CardFooter></center></Card>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Card sx={{ marginBottom: "10px" }}><center><h3>{hou}</h3>
                                                <CardFooter style={{ fontSize: "18px", fontWeight: "bold", color: "white", backgroundColor: "#CD113B" }}>Hours</CardFooter></center></Card>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Card sx={{ marginBottom: "10px" }}><center><h3>{min}</h3>
                                                <CardFooter style={{ fontSize: "18px", fontWeight: "bold", color: "white", backgroundColor: "#CD113B" }}>Minutes</CardFooter></center></Card>
                                        </Grid>
                                    </Grid>

                                </CardContent>
                            </Card>
                        </div>

                    </div>
                    <div>
                        <center><Button variant="contained" color="secondary" style={{ fontSize: "20px", justifyContent: "center", alignItems: "center" }} onClick={() => navigate(-1)} >BACK</Button></center>
                    <center><div className="cake" style={{ width:"40vh",height:"30vh",marginTop:"15px", backgroundColor:"red"}}></div></center>
                    </div>

                </div>
            </div>
        </Box>




    );
}

export default Mess;