import React,{useState,useEffect} from "react";
import {message} from "antd";
import { Dropdown } from 'react-bootstrap';
import "./Dashboard.css";
import axios from "axios";
export default () => {
  const [company,setCompany] = useState("tatamotors");
  // const [screenShot, setScreenshot] = useState(undefined);
  // useEffect(()=>{
  //   axios.get(`http://localhost:3001/pages/image/${company}`, {
  //   headers: {
  //     'Content-Type': 'image/png',
  //     "Authorization":localStorage.getItem("token")
  //   }
  // })
  // .then(async (response) => {
  //   const imageBlob = await new Blob([response.data]);
  //   return imageBlob;
  // }).then((response) =>{
  //   const imageObjectURL = URL.createObjectURL(response);
  //   console.log(imageObjectURL);
  //   setScreenshot(imageObjectURL);
  // })
  // .catch(err =>{
  //   console.log("error:       "+err);
  //   message.error("Invalid request.");
  // })
  // },[company]);
  return(
   <> 
  <Dropdown>
  <Dropdown.Toggle id="dropdown-basic">
    Companies
  </Dropdown.Toggle>

  <Dropdown.Menu style={{ maxHeight: "228px" }}>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("adaniports");
    }}>Adani Ports</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("asianpaint");
    }}>Asian Paints</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("axisbank")
    }}>Axis Bank</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("bajaj_auto");
    }}>Bajaj Auto</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("bajajfinsv");
    }}>Bajaj Finance</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("bajfinance");
    }}>Bajaj Finance</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("bhartiairtel");
    }}>Bharti Airtel</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("bpcl");
    }}>BPCL</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("britannia");
    }}>Britannia</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("cipla");
    }}>Cipla</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("coalindia");
    }}>Coal India</Dropdown.Item>
    
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("drreddy");
    }}>Dr reddy</Dropdown.Item>
     <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("eichermot");
    }}>Eicher Motors</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("gail");
    }}>Gail</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("garsim");
    }}>Garsim</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("hcltech");
    }}>HCL tech</Dropdown.Item>
     <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("hdfc");
    }}>HDFC</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("hdfcbank");
    }}>HDFC Bank</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("heromotoco");
    }}>Hero Motors</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("hindalco");
    }}>Hindal company</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("hindunilvr");
    }}>Uniliver</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("icicibank");
    }}>ICICI Bank</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("indusindbk");
    }}>Indus Bank</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("infy");
    }}>Infy</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("IOC");
    }}>IOC</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("ITC");
    }}>ITC</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("JSWSTEEL");
    }}>JSW STEEL</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("kotakbank");
    }}>Kotak Bank</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("LT");
    }}>LT</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("maruti");
    }}>Maruti</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("MM");
    }}>MM</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("NESTLEIND");
    }}>Nestle</Dropdown.Item>
     <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("NTPC");
    }}>NTPC</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("ONGC");
    }}>ONGC</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("powergrid");
    }}>Power grid</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("reliance");
    }}>Reliance</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("sbin");
    }}>SBI</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("SHREECEM");
    }}>Shree cem</Dropdown.Item> 
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("sunpharma");
    }}>Sun Pharma</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("tatamotors");
    }}>Tata Motors</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("tatasteel");
    }}>TATA steel</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("TCS");
    }}>TCS</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("techm");
    }}>Tech mahindra</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("titan");
    }}>Titan</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("ultracemco");
    }}>Altra Cement</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("UPL");
    }}>UPL</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("vedl");
    }}>Ved limited</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("WIPRO");
    }}>WIPRO</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("zeel");
    }}>Zeel</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>
<div className="images">
    <h2 className="title">{company}</h2>
    <img src={"http://localhost:3001/"+company+'.png'} height={500} width={900} alt="showing screen capture" />
</div>
</>
)
};