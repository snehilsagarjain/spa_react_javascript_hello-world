import React from "react"; //, { useState, useEffect }
import { Link, NavLink, useParams } from "react-router-dom"; //Outlet, 
//import { useState, useEffect, useRef, useMemo } from "react";
//import {Component} from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
//import dummyData from "./data";
//import Productdescriptionpage from "./productdescriptionpage";
import "./hp.css";
//import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
//import 'https://kit.fontawesome.com/a076d05399.js';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { useParams } from 'react-router-dom';

//import Category from "./category";
/*const linkStyle = {
    /*margin: "1rem",*/
/*textDecoration: "none",
color: 'blue',
width           : "207px"/*,
border          : "green 50px"*//*
};*/


function myFunction(x) {
    x.classList.toggle("change");
}
function openNav() {
    document.getElementById("mydropdown").style.width = "250px";
    document.getElementById("mydropdown").style.display = "block";
    document.getElementById("main").style.marginLeft = "250px";
}
function closeNav() {
    document.getElementById("mydropdown").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
function Filter2(props) {
    var category = [], count = 0, j = -1; var p = "/sagar";
    //i = 0, checkedState = [], 
    var len = 0, title = [], newArray = [], image = [], len1, count1 = 0, previ, last, last1;
    //myStyle, p = "/"; 
    //const [data, setData] = useState([]), [cate, setCate] = useState("none"), [times, setTimes] = useState(props.times), 
    //      [checkedState, setCheckedState] = useState(newArray.fill(false)), time = "none"; checkedState[i] = true;
    const { id } = useParams(); console.log("id =" + id); //const
    return (
        <div className="filter" > {/*navbar */}
            {/*<div className = "dropdown"> -- for complete button and menu */}
            <div className="dropdown">
                {/* container pe hover par openNav and hoverout toh closeNav(and if then 3 lines to x) */}
                <div className="container" id="main">
                    {/*<i class="fa fa-caret-down"></i> */}
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                <div className="dropdown-content" id="mydropdown">
                    <NavLink to={p} className="square border border-primary border-3">
                        {console.log("filter2: none")}
                        <button className="cl" ><div className="aligncat">{"NONE"}</div></button> </NavLink>
                    {
                        props.data.map((list) => { //, index
                            /* setCount(0); */ count = 0;
                            for (let x of category) { if (x === list.category) { return null; } else { count = count + 1; } }
                            if (count === category.length) {
                                category.push(list.category);
                                //                                i = i + 1;                 category.push(list.category); //checkedState.push("false");
                                len = category.length - 1; last = category[len]; console.log("last=" + last);         //previ = i; 
                            }
                            //var path = "http://localhost:3000/Category/"+list.category;
                            var lc = list.category; console.log("lc =" + lc);
                            var pa = "/sagar/category/" + lc; console.log("pa=" + pa);
                            return (
                                <li key={list.category}>
                                    <Link to={`/sagar/category/jewelery`} className="lk">
                                        <button className="cl"> {/*<i class='fas fa-tshirt' style='font-size:48px;color:red'></i>*/} {list.category + "1"} </button>
                                    </Link>

                                    <Link to={pa} className="lk">
                                        <button className="cl"> <i className="fa fa-diamond" aria-hidden="true"></i> {/*<FontAwesomeIcon icon="fa-solid fa-person-dress" />*/} {list.category}+"2" </button>
                                    </Link> {/* */}

                                    <NavLink to={pa} className="lk">
                                        <button className="cl"> <i className="fa fa-female" aria-hidden="true"></i> {list.category} </button>
                                    </NavLink>
                                </li>
                            );
                        })
                    }
                </div >
                {/*<div className = "price" > 
                    <ul> <li type = "radio"> Increasing </li> <li type = "radio"> Decreasing </li> </ul>
                </div > -- likewise, more categories could also be created.  */}
            </div>
        </div >
    );
}
export default Filter2;
