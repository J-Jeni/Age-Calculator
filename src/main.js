import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import 'date-fns';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { useNavigate } from 'react-router-dom';
import dateFormat from 'dateformat';



function Main() {
    const [name, setName] = useState("")
    const [mobile, setMobile] = useState("")
    const [gender, setGender] = useState("")
    const [date, setDate] = useState(null)
    const navigate = useNavigate();
    const handleSubmit = () => {
        if (!name || !mobile || !gender || !date) {
            alert("!!! Please fill out the fields !!!!")
        }
        else {

            let split = date

            let value = date
            let currentyear = new Date().getFullYear()
            var date1 = dateFormat(new Date(), "dd/mm/yyyy")
            var date2 = dateFormat(value, "dd/mm/yyyy")
            var d1 = date1.split("/")
            var d2 = date2.split("/")
            var byear = parseInt(d2[2])

            var diff = Math.abs(new Date(d1[2], d1[1], d1[0]) - new Date(d2[2], d2[1], d2[0]))

            let years = getyearfun(d2, currentyear)
            let months = getmonthfun(years, d1, d2)
            let dayss = getdaysfun(d1, d2)
            let weekss = getweeksfun(d1, d2)
            let hourss = gethoursfun(d1, d2)
            let minutess = getminfun(d1, d2)
            let secondss = getsecfun(diff)
            let millisecondss = getmilsecfun(d1, d2)
            let daystonxtbday = getnxtbdaydays(d2)
            navigate('/message', { state: { Name: (name), Age: (years), Mobile_Number: (mobile), Gender: (gender), Date: (date2), Month: (months), Days: (dayss), Weeks: (weekss), Hours: (hourss), Minutes: (minutess), Seconds: (secondss), Milliseconds: (millisecondss), Daystonxtbday: (daystonxtbday) } });
        }
    }
    const getmonthfun = (years, d1, d2) => {
        var month = (years) * 12 + (d1[1] - d2[1])
        return month
    }
    const getyearfun = (d2, currentyear) => {
        var byear = parseInt(d2[2])
        var year = currentyear - byear
        return year
    }
    const getdaysfun = (d1, d2) => {
        var days = Math.round(new Date(d1[2], d1[1], d1[0]) - new Date(d2[2], d2[1], d2[0])) / (1000 * 60 * 60 * 24)
        return days
    }
    const getweeksfun = (d1, d2) => {
        var we = 1000 * 60 * 60 * 24 * 7
        var weeks = Math.abs(new Date(d1[2], d1[1], d1[0]) - new Date(d2[2], d2[1], d2[0]))
        var week = Math.round(weeks / we)
        return week
    }
    const gethoursfun = (d1, d2) => {
        var hours = Math.abs(new Date(d1[2], d1[1], d1[0]) - new Date(d2[2], d2[1], d2[0])) / 36e5
        return hours
    }
    const getminfun = (d1, d2) => {
        var diff = Math.abs(new Date(d1[2], d1[1], d1[0]) - new Date(d2[2], d2[1], d2[0]))
        var minutes = Math.floor(diff / 1000 / 60)
        return minutes
    }
    const getsecfun = (diff) => {
        var seconds = Math.abs(diff / 1000)
        return seconds
    }
    const getmilsecfun = (d1, d2) => {
        var milsec = parseInt(new Date(d1[2], d1[1], d1[0]) - new Date(d2[2], d2[1], d2[0]))
        return milsec
    }
    const getnxtbdaydays = (d2) => {
        var today = new Date()
        var y = today.getFullYear()
        var next = new Date(y, d2[1] - 1, d2[0])
        today.setHours(0, 0, 0, 0)
        if (today > next) {
            next.setFullYear(y + 1)
        }
        var day = Math.round((next - today) / 8.64e7)
        return day
    }
    const clean = () => {
        setName("")
        setMobile("")
        setGender("")
        setDate(null)
    }
    return (
        <div className="page" style={{ height: "100vh" }}>
            <div className="page">
                <div className="content" >
                    <center><div className="card" style={{marginTop:"60px",marginBottom:"20px", flexWrap: "wrap",justifyContent:"center", height:"100%",width:"100%" }} >
                        <form>
                            <Card style={{ backgroundColor: "lightgreen", borderRadius: "30px", background: "rgba(255,220,200,0.6)",width:"50%",marginTop:"5px" }} >
                                <CardContent>
                                    <div>
                                    <div className="content" style={{ justifyContent: "center",alignItems:"center", width: "600px", height: "600px",marginLeft:"10px",marginRight:"10px" }} >
                                        <Typography fontFamily="fantasy" fontStyle="italic" fontWeight="bold" fontSize="50px" textAlign="center" color="#52006A" marginBottom="30px"> Age Calculator</Typography>
                                        <TextField fontSize="40px" style={{ background: 'rgba(290,268,189,0.6)', flexDirection: "column", marginTop: "10px", marginBottom: "10px",width:"80%" }} value={name} onChange={e => { setName(e.target.value) }} label="Name" />
                                        <TextField type="tel" country="US" inputProps={{ maxLength: 10 }} style={{ background: 'rgba(290,268,189,0.6)', flexDirection: "column", marginTop: "10px", marginBottom: "10px",width:"80%" }} label="Mobile Number" value={mobile} onChange={(e) => {
                                            setMobile(e.target.value)
                                        }} />
                                        <FormControl style={{ background: 'rgba(290,268,189,0.6)', marginTop: "10px", marginBottom: "10px", width:"80%",justifyContent:"center" }}>
                                            <InputLabel>Gender</InputLabel>
                                            <Select
                                                value={gender}
                                                label="Gender"
                                                onChange={e => { setGender(e.target.value) }}
                                            >
                                                <MenuItem value={"Female"}>Female</MenuItem>
                                                <MenuItem value={"Male"}>Male</MenuItem>
                                                <MenuItem value={"Transgender"}>Transgender</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <FormControl style={{ background: 'rgba(290,268,189,0.6)', marginTop: "10px", marginBottom: "10px",width:"80%" }}>
                                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                <DatePicker
                                                    label="Date of Birth"
                                                    value={date}
                                                    inputFormat="dd/mm/yyyy"
                                                    onChange={(newValue) => {
                                                        setDate(newValue)
                                                    }}
                                                    renderInput={(params) => <TextField {...params}/>}
                                                />
                                            </LocalizationProvider>
                                        </FormControl>
                                        <div>
                                            <center> <Button variant="contained" style={{ fontSize: "20px", fontFamily: "cursive", fontStyle: "normal", flexDirection: "row", marginTop: "10px", marginLeft: "50px", marginRight: "50px", marginBottom: "10px" }} onClick={handleSubmit}>Submit</Button>
                                                <Button variant="contained" style={{ fontSize: "20px", fontFamily: "cursive", fontStyle: "normal", flexDirection: "row", marginTop: "10px", marginLeft: "50px", marginRight: "50px", marginBottom: "10px" }} onClick={clean}>Clear</Button>
                                            </center></div>
                                    </div>
                                    </div>
                                </CardContent>
                            </Card>

                        </form>

                    </div></center>
                </div>
            </div>

        </div>

    );
}
export default Main;