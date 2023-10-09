import React from "react"; //, { useState} , useEffect
//import { Component } from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
//import dummyData from "./data";
//import Productdescriptionpage from "./productdescriptionpage";
import "./hp.css";
//import { useRef } from "react";
import { NavLink } from "react-router-dom"; //Outlet, Link,
//import { useParams } from "react-router";
//import React, { useState, useEffect } from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
//import dummyData from "./data";
//import Productdescriptionpage from "./productdescriptionpage";
//import "./hp.css";
//import Category from "./category";

/*        myLists.map((myList) => <li>{myList}</li>);
        return(<div><h2>React Map</h2> <ul>{listItems}</ul></div>);*/
const Hp = (props) => {
    var title = [], //newArray = [], category = [], len = 0, len1, count = 0, count1 = 0, previ, last, myStyle
        image = [];
    var checkedState = [];
    var i = 0; //, j = -1
    //const [data, setData] = useState([]);
    //const [cate, updateCate] = useState("none");
    //const [checkedState, setCheckedState] = useState(newArray.fill(false));
    checkedState[i] = true;
    image.length = 0;
    title.length = 0;
    return (
        <div className="listing">
            <ul
                className="listings-list"
                id="lists"
            > {console.log("data =" + props.data)}
                {props.data.map((list, index) => {
                    return (
                        <li key={list.title}>
                            {console.log("li start1")}
                            <div className="listings-list-item">
                                {console.log("div1")}
                                {console.log("hp: " + list.category)}
                                <NavLink
                                    to={`/sagar/category/${list.category}/product/${list.id}`}
                                >
                                    {console.log("navlink1")}
                                    <label> {list.title} </label>
                                </NavLink>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
export default Hp;
