/* eslint-disable prettier/prettier */
//import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
//import React, {Component} from 'react';
import { Route, Routes } from "react-router-dom";
import React from "react";
//import CartPage from './pages/cart';
//import ProductPage from './pages/product';
//import LoginPage from './pages/login';
//import HomePage from './pages/home';
//import Header from './Components/header';
//import './App.css';
//import Slider from './slider.js';
//import Header from "./header.js";
//import Hp from './hp.js';
//import Footer from "./footer.js";
//import "./hp.css";
//import Filter2 from "./filter2.js";
//import { useState, useEffect } from "react"; //, useRef, useMemo
import { useState, useEffect } from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import { dummyData } from "./pages/data";
//import Productdescriptionpage from "./productdescriptionpage";
//import Directproductdescriptionpage from "./directproductdescriptionpage";
//import "./hp.css";
//import {onCateChange} from "./hp";
//import Category from "./category";
//import Homepage from "./homepage";
//import { useParams } from "react-router";
import { useParams } from "react-router-dom";
//import {Helmet} from "react-helmet";
import { useAuth0 } from "@auth0/auth0-react";
//import React from "react";
//import { Route, Routes } from "react-router-dom";
import { PageLoader } from "./components/page-loader";
import { AuthenticationGuard } from "./components/authentication-guard";
import { AdminPage } from "./pages/admin-page";
import { CallbackPage } from "./pages/callback-page";
import { HomePage } from "./pages/home-page";
import { Home } from "./pages/home";
import { NotFoundPage } from "./pages/not-found-page";
import { ProfilePage } from "./pages/profile-page";
import { ProtectedPage } from "./pages/protected-page";
import { PublicPage } from "./pages/public-page";
import Hp from "./pages/hp";

export const App = () => {
  const { isLoading } = useAuth0();
  /*var title = [], newArray = [], category = [], image = [], len = 0, len1, count = 0, count1 = 0, previ, last, 
  last1, myStyle, checkedState = [], cat1 = "men's clothing", cat2 = "jewellery", cat3 = "electronics", i = 0, j = -1;*/
  const [data, setData] = useState([]); //const [cate, updateCate] = useState("none");
  /* const [times, setTimes] = useState(0); const useMemoRef = useRef(0); console.log("useMemoRef ="+useMemoRef);
     const incrementUseMemoRef = () => useMemoRef.current++;
     const memoizedValue = useMemo(() => incrementUseMemoRef(), [times]); console.log("memoizedValue ="+memoizedValue);*/
  //const [checkedState, setCheckedState] = useState(newArray.fill(false)); //checkedState[i] = true;
  const { id } = useParams();
  /*let { id } = useParams();*/ console.log("id-->" + id); //setData(dummyData);
  useEffect(() => {
    /* setLoading(true); */
    const timer = setTimeout(() => {
      setData({ dummyData }); console.log("data=" + data);
      /*console.log("videos="+videos);console.log("set");setLoading(false);*/
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="page-layout">
        <PageLoader />
      </div>
    );
  }

  return (
    <Routes>{console.log("data=" + data)}
      <Route path="/" element={<HomePage />} />
      <Route path="/sagar" element={<Home data={data} component={Hp} />} />
      {/*<Home data={data} /> */}
      <Route
        path="/profile"
        element={<AuthenticationGuard component={ProfilePage} />}
      />
      <Route path="/public" element={<PublicPage />} />
      <Route
        path="/protected"
        element={<AuthenticationGuard component={ProtectedPage} />}
      />
      <Route
        path="/admin"
        element={<AuthenticationGuard component={AdminPage} />}
      />
      <Route path="/callback" element={<CallbackPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
