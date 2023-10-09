import React from "react"; //, { useState, useEffect }
//import { Component } from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
//import dummyData from "./data";
//import Productdescriptionpage from "./productdescriptionpage";
import "./hp.css";
//import { useRef } from "react";
import { NavLink } from "react-router-dom"; //Outlet, Link,
import { useParams } from "react-router";
{
    /*myLists.map((myList) => <li>{myList}</li>);return(<div><h2>React Map</h2> <ul>{listItems}</ul></div>);*/
}
const Category = (props) => {
    //{data}, newcate
    var title = [],
        image = [],
        len = 0,
        count = 0,
        count1 = 0,
        last,
        last1,
        len1,
        myStyle;
    //newArray = [], category = [],  previ, ;
    var pa = "./Productdescriptionpage";
    var checkedState = [];
    //var i = 0, j = -1;

    image.length = 0;
    title.length = 0;
    //console.log("{id} ="+{id}); //categorynewcate: props.newcate
    //const newvar = {id}; //props.newcate
    //console.log("id ="+{id}); //newvar: newvar
    //const renderCount = useRef(0);
    let { id } = useParams();
    console.log("idnew-->" + id);
    return (
        <>
            {props.data.map((list, index) => {
                console.log("id=" + id);
                //console.log("arg="+props.newcate);
                //if (newcate === "none"){
                //console.log("list.category ="+list.category);
                if (list.category === id) {
                    count = 0;
                    count1 = 0;
                    console.log("count count1");
                    console.log("ccccccccc");
                    if (image.length === 0) {
                        console.log("imglen0");
                        image.push(list.image);
                        len = image.length - 1;
                        last = image[len];
                        console.log("last=" + last);
                    } else {
                        for (let x of image) {
                            if (x === list.image) {
                                console.log("1) return null");
                                return null;
                            } else {
                                count = count + 1;
                                console.log("count =" + count);
                            }
                        }
                        if (count === image.length) {
                            image.push(list.image);
                            len = image.length - 1;
                            last = image[len];
                            console.log("1)last=" + last);
                        }
                    }

                    if (title.length === 0) {
                        title.push(list.title);
                        len1 = title.length - 1;
                        last1 = title[len];
                        console.log("last1=" + last1);
                    } else {
                        for (let x of title) {
                            if (x === list.title) {
                                console.log("2) return null");
                                return null;
                            } else {
                                count1 = count1 + 1;
                                console.log("count1 =" + count1);
                            }
                        }
                        if (count === title.length) {
                            title.push(list.title);
                            len1 = title.length - 1;
                            last1 = title[len];
                            console.log("1)last1=" + last1);
                        }
                        myStyle = { backgroundimage: "url(last)" };
                    }
                    {
                        //checked = { checkedState[index] }
                        //onChange = { () => handleOnChange(index) }
                        //return '<li> <div> <button> buy now </button> </div> </li>';
                    }
                    {
                        /*
                                    var ee = document.querySelector('#lists');         //e.firstElementChild can be used.
                    var child = ee.lastElementChild; while (child) { ee.removeChild(child); child = ee.lastElementChild; }*/
                    }
                    return (
                        <li key={list.title}>
                            {" "}
                            {console.log("li start")}
                            <div className="listings-list-item">
                                <NavLink
                                    to={`/sagar/category/${list.category}/product/${list.id}`}
                                >
                                    <label> {last1} </label>{" "}
                                </NavLink>
                                {
                                    /*<div style = { myStyle } > {console.log("style")}
                  {/*<input type = "radio" className = "form-check-input" id = { `custom-checkbox-${index}` } name = "title" value = { last1 }/>
                      {/*backgroundimage = "url({last})" /> */
                                    /*}                                    </div > 
                  {/*<div className = "buy" > <Link to ={pa}> <button >{"BUY"}</button> </Link> {/*onClick={handleClick2} </a>*/
                                    /*}
                                                      {/*{ <div > //{/*list.id */
                                    //}
                                    /*  <button key = { index } value = {last1} onClick = { () => { alert("Hello");
                      data.map((list) => { if (list.category === title[index]) { var id = list.id; //var title = list.title;
                      var price = list.price; var description = list.description; var category = list.category;
                      var image = list.image; var rating = list.rating; } else { return null; }
                      return ( <Productdescriptionpage id = { id } title = { list.title } price = { price } 
                                  description = { description } category = { category } image = { image } rating = { rating } /> );
                          /*  <Productdescriptionpage ii = { id } title = { title } price = { price } description = { description } 
                                                      category = { category[index] } image = { image } rating = { rating } /> */
                                    /*})
                                                                          //productdescriptionpage(element) 
                          } }> { "Buy Now" } < /button> <br/ > </div> } */
                                    /* } </div> {console.log("buy")}*/
                                }
                            </div>
                        </li>
                    );
                    {
                        /* <img src = { last } alt = "images" width = "60px" height = "60px" / > </div>*/
                    }
                }
                //else{ console.log("categoryifelse"); }
            })}
        </>
    );
};
export default Category;
{
    /* htmlFor = { `custom-checkbox-${index}` }  */
}
{
    /*<li key = { index } > {console.log("li start")} */
}
{
    /**/
}
//map: returns set twice
//cat select effect -- advance
//cat select print -- id, etc.. --- examine.

{
    /*console.log("{newcate123} ="+props.newcate)}        {console.log("arg123="+ props.newcate)
          <p> This is {props.memoizedValue} </p> */
}
//props.newcate
{
    //console.log("map");
    /* setCount(0); */
    //console.log("list = " + JSON.stringify(list));
    //console.log("category.length = " + category.length);
    //console.log("id = " + list.id);
}
