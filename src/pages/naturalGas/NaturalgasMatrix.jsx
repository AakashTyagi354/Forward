
import React, { useEffect, useState, CSSProperties } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import FadeLoader from "react-spinners/FadeLoader";
import { LineChart, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from "recharts"
import { NavLink } from 'react-router-dom';
import Loader from '../../components/Loader';


// export async function fetchData() {
//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//             "time_span": "year",
//             "model": ["LSTM", "ConvNet", "T2V", "T2Vtransfomer", "basic_transfomer"]
//         })

//     };
//     let result = await fetch('http://localhost:5000/forcast', requestOptions)
//     let finalresult = await result.json()
//     console.log(finalresult)
//     return finalresult

// }
const override = CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};
function NaturalgasMatrix() {

  
 




    const [active, setAvtive] = useState(false);

    // loading
    const [weekData, setweekData] = useState({})
    const [monthData, setmonthData] = useState({})
    const [data, setData] = useState(5)
    const [week, setWeek] = useState("");
    const [month, setMonth] = useState("");
    const [sixmonth, setSixMonth] = useState("");
    const [year, setYear] = useState("");
    const [time, setTime] = useState("week")
    const [matrix,setMatrix] = useState("mean_squared_error")
    // check box use state
    const [myData, setMyData] = useState([]);

    const [lstm, setLstm] = useState("");
    const [covnet, setCovnet] = useState("");
    const [arlstm, setArlstm] = useState("");
    const [ttv, setTtv] = useState("");
    const [tttv, settttv] = useState(false);

    const [model, setModel] = useState("")

    // setting color btn
    const [isActiveWeek, setIsActiveWeek] = useState(false);
    const [isActiveMonth, setIsActiveMonth] = useState(false);
    const [isActiveSixMonth, setIsActiveSixMonth] = useState(false);
    const [isActiveYear, setIsActiveYear] = useState(false);
    const [isActiveFiveYear, setIsActiveFiveYear] = useState(false);
    async function fetchData() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "time_span": time,
                "commodity":"natural gas",
                "metrics": matrix
            })

        };
        let result = await fetch('http://localhost:5000/performance-metric', requestOptions)
        let finalresult = await result.json()
        console.log(finalresult)
        return finalresult

    }


    useEffect(() => {
        let result = fetchData().then(res => {
            
          
            setMyData([res]);
           
            
            // let weekResult = res.results.slice(0, 7);

            // let monthResult = res.results.slice(0, 30);
            // let sixmonthResult = res.results.slice(0, 180);
            // let yearResult = res.results.slice(0, 360);


            // setweekData(weekResult)
            // setmonthData(monthResult);
            // setSixMonth(sixmonthResult)
            // setYear(yearResult);
            // console.log(weekResult)
            // console.log(monthResult)
            // console.log(sixmonthResult)
            // console.log(yearResult)



        });




        console.log("useEffect is running")
    }, [time]);

    function handleClickWeek() {

        setWeek("week");
        setTime("week")
        

        setIsActiveWeek(current => !current);
        setLstm("")
        setTtv("")
        settttv("")
        setCovnet("")
        setArlstm("")
        if (!isActiveWeek) {
            setIsActiveYear(false)
            setIsActiveMonth(false)
            setIsActiveSixMonth(false)
            setIsActiveFiveYear(false)
        }



    }
    function handleClickMonth() {
        setData(20);
        setMonth("month");
        setTime("month")
      


        setIsActiveMonth(current => !current);
        setLstm("")
        setTtv("")
        settttv("")
        setCovnet("")
        setArlstm("")
        if (!isActiveMonth) {
            setIsActiveYear(false)
            setIsActiveWeek(false)
            setIsActiveSixMonth(false)
            setIsActiveFiveYear(false)
        }

        console.log(data)
    }
    function handleClicksixMonth() {

        setData(sixmonth);
        setTime("quater");
      
        setLstm("")
        setTtv("")
        settttv("")
        setCovnet("")
        setArlstm("")
        setIsActiveSixMonth(current => !current);
        if (!isActiveSixMonth) {
            setIsActiveMonth(false)
            setIsActiveWeek(false)
            setIsActiveYear(false)
            setIsActiveFiveYear(false)
        }
    }
    function handleClickYear() {

        setData(200);
        setTime("year")
      


        setIsActiveYear(current => !current);
        setLstm("")
        setTtv("")
        settttv("")
        setCovnet("")
        setArlstm("")
        if (!isActiveYear) {
            setIsActiveMonth(false)
            setIsActiveWeek(false)
            setIsActiveSixMonth(false)
            setIsActiveFiveYear(false)
        }
    }
    function handleClickFiveYear() {
        setIsActiveFiveYear(current => !current);
        if (!isActiveFiveYear) {
            setIsActiveMonth(false)
            setIsActiveWeek(false)
            setIsActiveSixMonth(false)
            setIsActiveYear(false)
        }
    }

    // "LSTM", "ConvNet", "T2V", "T2Vtransfomer", "basic_transfomer"

    function lstmChange() {
        if (lstm == "LSTM") {
            setLstm("")
        } else {
            setLstm("LSTM")
        }

    }



    function ttvChange() {
        if (ttv == "T2V") {
            setTtv("")
        } else {
            setTtv("T2V")
        }


    }
    function tttvChange() {
        if (tttv == "T2Vtransfomer") {
            settttv("")
        } else {
            settttv("T2Vtransfomer")
        }



    }
    function covnetChange() {
        if (covnet == "ConvNet") {
            setCovnet("")
        } else {
            setCovnet("ConvNet")
        }

    }
    function arlstmChange() {
        if (arlstm == "basic_transfomer") {
            setArlstm("")
        } else {
            setArlstm("basic_transfomer")
        }

    }
    const [loading, setLoading] = useState(false);
    useEffect(() => {

        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)

    }, [time,matrix])
    console.log(Object.keys(myData).length);

    return (
        <>

            {loading ? <FadeLoader loading={loading} cssOverride={override} size={150} /> : <div className="model">

                <div className="modelTop">
                    <div className="sumFor">
                        <NavLink to="/inputcruid" className="links">
                            <div className="sumary">Summary</div>
                        </NavLink>
                        <NavLink to="/cruidoiltwo" className="links">
                            <div className="forcasting">Forcasting</div>
                        </NavLink>

                        <NavLink to="/percruid" className="links">
                            <div className="forcasting">Performance</div>
                        </NavLink>
                        <NavLink to="/naturalgasmatrix" className="links">
                            <div className="forcasting">Matrix</div>
                        </NavLink>
                    </div>
                    <div className="modelBtn">

                        <button onClick={handleClickWeek} id='A' style={{
                            backgroundColor: isActiveWeek ? '#13232e' : '',
                            color: isActiveWeek ? 'white' : '',
                        }}>Week</button>
                        <button onClick={handleClickMonth} id='B' style={{
                            backgroundColor: isActiveMonth ? '#13232e' : '',
                            color: isActiveMonth ? 'white' : '',
                        }}>Month</button>
                        <button onClick={handleClicksixMonth} id='C'
                            style={{
                                backgroundColor: isActiveSixMonth ? '#13232e' : '',
                                color: isActiveSixMonth ? 'white' : '',
                            }}>Quater</button>
                        <button onClick={handleClickYear} id='D' style={{
                            backgroundColor: isActiveYear ? '#13232e' : '',
                            color: isActiveYear ? 'white' : '',
                        }}>Year</button>

                    </div>
                </div>
                <div className="modelBottom">

                    <div className="modelChart" >



                        <BarChart width={1100} height={320} data={myData}>
                        <CartesianGrid strokeDasharray="3 3" />

                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="LSTM" fill="#99B898" />
                            <Bar dataKey="AR LSTM" fill="#2A3638" />
                            <Bar dataKey="ConvNet" fill="#E84A5F" />
                            <Bar dataKey="T2V" fill="#FECEA8" />
                            <Bar dataKey="T2Vtransfomer" fill="#FF847C" />
                            <Bar dataKey="basic_transfomer" fill="#82ca9d" />
                        </BarChart>
                    </div>
                    <div className="iomoduleCheckbox" onMouseLeave={e => setAvtive(false)}>
                        <div className="drop" onMouseEnter={e => setAvtive(!active)}>{matrix} <ArrowDropDownIcon/></div>
                        {active && (
                            <div className="on">
                                <div className="error" onClick={()=> setMatrix("mean_squared_error")}>mean_squared_error</div>
                                <div className="error" onClick={()=> setMatrix("mean_absolute_error")}>mean_absolute_error</div>
                                <div className="error" onClick={()=> setMatrix("r2_score")}>r2_score</div>
                                <div className="error" onClick={()=> setMatrix("mean_pinball_loss")}>mean_pinball_loss</div>
                                <div className="error" onClick={()=> setMatrix("explained_variance_score")}> explained_variance_score</div>
                            </div>
                        )}

                    </div>

                </div>
            </div>}

        </>





    );
}

export default NaturalgasMatrix;

