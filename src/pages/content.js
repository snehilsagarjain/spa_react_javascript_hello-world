import React from "react";
import Category from "./category";
import Filter2 from "./filter2";
import Hp from "./hp";
import { Route, Routes } from "react-router-dom";
import "./hp.css";
export default function Content(props) {
    return (
        <div className="content">
            <Filter2 data={props.data} /> {/* times = {times}  */}
            {/*<div className="listing">{console.log("listing")}*/}
            {/*<ul className="listings-list" id="lists">*/}
            <props.component />
            {/*<Routes>
                        <Route path="/sagar" element={<Hp data={props.data} />}>
                        </Route>
                        <Route
                            path="/sagar/category/none"
                            element={<Hp data={props.data} />}
                        >
                        </Route>
                        <Route
                            path="/sagar/category/:id"
                            element={<Category data={props.data} />}
                        >
                            {" "}
                        </Route>
                        {/*  memoizedValue = {memoizedValue} */
      /*}
                {/*<Route path = "/category/none/Productdescriptionpage" 
                    element = {<Productdescriptionpage/>}> </Route>
                <Route path = "/category/men's clothing/Productdescriptionpage" 
                    element = {<Productdescriptionpage/>}></Route>
                <Route path = "/category/jewellery/Productdescriptionpage" 
                    element = {<Productdescriptionpage/>}></Route>
                <Route path = "/category/electronics/Productdescriptionpage" 
                    element = {<Productdescriptionpage/>}></Route>
                <Route path = "/category/women's clothing/Productdescriptionpage" 
                    element = {<Productdescriptionpage/>}></Route>*//*}
                    </Routes>*/}
            {/*</ul>*/}
            {/*</div>*/}
        </div >
    );
}