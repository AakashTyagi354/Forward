
import React, { useEffect, useState, CSSProperties } from 'react'

import FadeLoader from "react-spinners/FadeLoader";
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from "recharts"
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
function PerCruid() {







    // loading
    const [weekData, setweekData] = useState({})
    const [monthData, setmonthData] = useState({})
    const [data, setData] = useState(5)
    const [week, setWeek] = useState("");
    const [month, setMonth] = useState("");
    const [sixmonth, setSixMonth] = useState("");
    const [year, setYear] = useState("");
    const [time, setTime] = useState("week")
    // check box use state
    const [myData, setMyData] = useState({});

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
                "model": ["LSTM", "ConvNet", "T2V", "T2Vtransfomer", "basic_transfomer"]
            })

        };
        let result = await fetch('http://localhost:5000/forcast-conventional-gasoline', requestOptions)
        let finalresult = await result.json()
        console.log(finalresult)
        return finalresult

    }


    useEffect(() => {
        let result = fetchData().then(res => {
            setMyData(res.results);

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
        }, 5000)

    }, [time])
    console.log(Object.keys(myData).length);

    return (
        <>

            {loading ? <FadeLoader loading={loading} cssOverride={override} size={150} /> : <div className="model">

                <div className="modelTop">
                    <div className="sumFor">
                        <NavLink to="/inputcruid" className="links">
                            <div className="sumary">Sumary</div>
                        </NavLink>
                        <NavLink to="/cruidoiltwo" className="links">
                            <div className="forcasting">Forcasting</div>
                        </NavLink>

                        <NavLink to="/percruid" className="links">
                            <div className="forcasting">Performance</div>
                        </NavLink>
                    </div>
                    <div className="modelBtn">

                        <button onClick={handleClickWeek} id='A' style={{
                            backgroundColor: isActiveWeek ? '#13232e' : '',
                            color: isActiveWeek ? 'white' : '',
                        }}>week</button>
                        <button onClick={handleClickMonth} id='B' style={{
                            backgroundColor: isActiveMonth ? '#13232e' : '',
                            color: isActiveMonth ? 'white' : '',
                        }}>Month</button>
                        <button onClick={handleClicksixMonth} id='C'
                            style={{
                                backgroundColor: isActiveSixMonth ? '#13232e' : '',
                                color: isActiveSixMonth ? 'white' : '',
                            }}>six month</button>
                        <button onClick={handleClickYear} id='D' style={{
                            backgroundColor: isActiveYear ? '#13232e' : '',
                            color: isActiveYear ? 'white' : '',
                        }}>Year</button>
                      
                    </div>
                </div>
                <div className="modelBottom">
                    <div className="modelChart">



                        <LineChart width={1200} height={380} data={myData}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="Date" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey={lstm} stroke="#99B898" strokeWidth={2} dot={false} />

                            <Line type="monotone" dataKey={covnet} stroke="#E84A5F" strokeWidth={2} dot={false} />
                            <Line type="monotone" dataKey={ttv} stroke="#FECEA8" strokeWidth={2} dot={false} />
                            <Line type="monotone" dataKey={tttv} stroke="#FF847C" strokeWidth={2} dot={false} />
                            <Line type="monotone" dataKey={arlstm} stroke="#2A3638" strokeWidth={2} dot={false} />
                        </LineChart>
                    </div>
                    <div className="iomoduleCheckbox">
                        <div className="boxcheck">

                            <input id='cOne' type="checkbox" onClick={lstmChange} autoComplete='off' /> <p>LSTM</p>
                        </div>
                        <div className="boxcheck" >

                            <input id='cTwo' type="checkbox" onClick={ttvChange} /> <p>TTV</p>
                        </div>
                        <div className="boxcheck">

                            <input id='cThree' type="checkbox" onClick={tttvChange} /> <p>TTTV</p>
                        </div>
                        <div className="boxcheck">

                            <input id='cFour' type="checkbox" onClick={covnetChange} /> <p>COVNET</p>
                        </div>
                        <div className="boxcheck">

                            <input id='cFive' type="checkbox" onClick={arlstmChange} /> <p>ARLSTM</p>
                        </div>




                        {/* <button className="checkBtn" onChange={finalModel} >Submit</button> */}
                    </div>

                </div>
            </div>}

        </>





    );
}

export default PerCruid;

