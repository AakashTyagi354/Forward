import React, { useState } from 'react'

import { data_all_cruid } from './InputDataCruid';
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from "recharts"
import { NavLink } from 'react-router-dom';



let week = data_all_cruid.slice(6294, 6301);
let month = data_all_cruid.slice(6271, 6301);
let sixMonth = data_all_cruid.slice(6121, 6301);
let year = data_all_cruid.slice(6030, 6301);
let fiveYear = data_all_cruid.slice(6000, 6301);




function InputCruid() {
    // for time frame btns
    const [isActiveWeek, setIsActiveWeek] = useState(false);
    const [isActiveMonth, setIsActiveMonth] = useState(false);
    const [isActiveSixMonth, setIsActiveSixMonth] = useState(false);
    const [isActiveYear, setIsActiveYear] = useState(false);
    const [isActiveFiveYear, setIsActiveFiveYear] = useState(false);
    const [isActiveAll, setIsActiveAll] = useState(false);

    const [data, setData] = useState({});

    function handleClickWeek() {
        setData(week);

        setIsActiveWeek(current => !current);
        if (!isActiveWeek) {
            setIsActiveYear(false)
            setIsActiveMonth(false)
            setIsActiveSixMonth(false)
            setIsActiveFiveYear(false)
            setIsActiveAll(false)
        }


    }
    function handleClickMonth() {
        setData(month);

        setIsActiveMonth(current => !current);
        if (!isActiveMonth) {
            setIsActiveYear(false)
            setIsActiveWeek(false)
            setIsActiveSixMonth(false)
            setIsActiveFiveYear(false)
            setIsActiveAll(false)
        }

        console.log(data)
    }
    function handleClicksixMonth() {
        setData(sixMonth);
        setIsActiveSixMonth(current => !current);
        if (!isActiveSixMonth) {
            setIsActiveMonth(false)
            setIsActiveWeek(false)
            setIsActiveYear(false)
            setIsActiveFiveYear(false)
            setIsActiveAll(false)
        }
    }
    function handleClickYear() {
        setData(year);
        setIsActiveYear(current => !current);
        if (!isActiveYear) {
            setIsActiveMonth(false)
            setIsActiveWeek(false)
            setIsActiveSixMonth(false)
            setIsActiveFiveYear(false)
            setIsActiveAll(false)
        }
    }
    function handleClickFiveYear() {
        setData(fiveYear)
        setIsActiveFiveYear(current => !current);
        if (!isActiveFiveYear) {
            setIsActiveMonth(false)
            setIsActiveWeek(false)
            setIsActiveSixMonth(false)
            setIsActiveYear(false)
            setIsActiveAll(false)

        }
    }
    function handleClickAll() {
        setData(data_all_cruid)
        setIsActiveAll(current => !current);
        if (!isActiveAll) {
            setIsActiveMonth(false)
            setIsActiveWeek(false)
            setIsActiveSixMonth(false)
            setIsActiveYear(false)
            setIsActiveFiveYear(false)
        }
    }
    return (
        <div>
            <div className="inputTop">
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
                    <NavLink to="/crudematrix" className="links">
                        <div className="forcasting">Matrix</div>
                    </NavLink>
                </div>
                <div className="inputBtn">

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
                    <button id='E' onClick={handleClickFiveYear} style={{
                        backgroundColor: isActiveFiveYear ? '#13232e' : '',
                        color: isActiveFiveYear ? 'white' : '',
                    }}>Five Year</button>
                    <button id='F' onClick={handleClickAll} style={{
                        backgroundColor: isActiveAll ? '#13232e' : '',
                        color: isActiveAll ? 'white' : '',
                    }}>All</button>
                </div>
            </div>
            <div className="inputBottom">
            <div className="backfont">
                        CRUDE OIL
                    </div>
                <LineChart width={1250} height={380} data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="view" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="name2" stroke="red" dot={false} />

                    {/* <Line type="monotone" dataKey={covnet} stroke="blue" />
                        <Line type="monotone" dataKey={ttv} stroke="black" />
                        <Line type="monotone" dataKey={tttv} stroke="#13232e" />
                        <Line type="monotone" dataKey={arlstm} stroke="gray" /> */}
                </LineChart>
            </div>
        </div>

    )
}

export default InputCruid