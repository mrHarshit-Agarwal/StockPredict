import React,{useState,useEffect} from "react";
import {message} from "antd";
import { Dropdown } from 'react-bootstrap';
import "./Dashboard.css";
import axios from "axios";
export default () => {
  const [company,setCompany] = useState("tatamotors");
  const [precompany,setPrecompany] = useState("tatamotors-pre");
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
      setPrecompany("adaniports-pre");
    }}>Adani Ports</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("asianpaint");
      setPrecompany("asianpaint-pre");
    }}>Asian Paints</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("axisbank");
      setPrecompany("axisbank-pre");
    }}>Axis Bank</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("bajaj_auto");
      setPrecompany("bajaj_auto-pre");
    }}>Bajaj Auto</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("bajajfinsv");
      setPrecompany("bajajfinsv-pre");
    }}>Bajaj Finance</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("bajfinance");
      setPrecompany("bajfinance-pre");
    }}>Bajaj Finance</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("bhartiairtel");
      setPrecompany("bhartiairtel-pre");
    }}>Bharti Airtel</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("bpcl");
      setPrecompany("bpcl-pre");
    }}>BPCL</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("britannia");
      setPrecompany("britannia-pre");
    }}>Britannia</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("cipla");
      setPrecompany("cipla-pre");
    }}>Cipla</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("coalindia");
      setPrecompany("coalindia-pre");
    }}>Coal India</Dropdown.Item>
    
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("drreddy");
      setPrecompany("drreddy-pre");
    }}>Dr reddy</Dropdown.Item>
     <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("eichermot");
      setPrecompany("eichermot-pre");
    }}>Eicher Motors</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("gail");
      setPrecompany("gail-pre");
    }}>Gail</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("garsim");
      setPrecompany("garsim-pre");
    }}>Garsim</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("hcltech");
      setPrecompany("hcltech-pre");
    }}>HCL tech</Dropdown.Item>
     <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("hdfc");
      setPrecompany("hdfc-pre");
    }}>HDFC</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("hdfcbank");
      setPrecompany("hdfcbank-pre");
    }}>HDFC Bank</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("heromotoco");
      setPrecompany("heromotoco-pre");
    }}>Hero Motors</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("hindalco");
      setPrecompany("hindalco-pre");
    }}>Hindal company</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("hindunilvr");
      setPrecompany("hindunilvr-pre");
    }}>Uniliver</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("icicibank");
      setPrecompany("icicibank-pre");
    }}>ICICI Bank</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("indusindbk");
      setPrecompany("indusindbk-pre");
    }}>Indus Bank</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("infy");
      setPrecompany("infy-pre");
    }}>Infy</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("IOC");
      setPrecompany("IOC-pre");
    }}>IOC</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("ITC");
      setPrecompany("ITC-pre");
    }}>ITC</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("JSWSTEEL");
      setPrecompany("JSWSTEEL-pre");
    }}>JSW STEEL</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("kotakbank");
      setPrecompany("kotakbank-pre");
    }}>Kotak Bank</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("LT");
      setPrecompany("LT-pre");
    }}>LT</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("maruti");
      setPrecompany("maruti-pre");
    }}>Maruti</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("MM");
      setPrecompany("MM-pre");
    }}>MM</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("NESTLEIND");
      setPrecompany("NESTLEIND-pre");
    }}>Nestle</Dropdown.Item>
     <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("NTPC");
      setPrecompany("NTPC-pre");
    }}>NTPC</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("ONGC");
      setPrecompany("ONGC-pre");
    }}>ONGC</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("powergrid");
      setPrecompany("powergrid-pre");
    }}>Power grid</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("reliance");
      setPrecompany("reliance-pre");

    }}>Reliance</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("sbin");
      setPrecompany("sbin-pre");
    }}>SBI</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("SHREECEM");
      setPrecompany("SHREECEM-pre");
    }}>Shree cem</Dropdown.Item> 
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("sunpharma");
      setPrecompany("sunpharma-pre");
    }}>Sun Pharma</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("tatamotors");
      setPrecompany("tatamotors-pre");
    }}>Tata Motors</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("tatasteel");
      setPrecompany("tatasteel-pre");
    }}>TATA steel</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("TCS");
      setPrecompany("TCS-pre");
    }}>TCS</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("techm");
      setPrecompany("techm-pre");
    }}>Tech mahindra</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("titan");
      setPrecompany("titan-pre");
    }}>Titan</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("ultracemco");
      setPrecompany("ultracemco-pre");
    }}>Altra Cement</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("UPL");
      setPrecompany("UPL-pre");
    }}>UPL</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("vedl");
      setPrecompany("vedl-pre");
    }}>Ved limited</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("WIPRO");
      setPrecompany("WIPRO-pre");
    }}>WIPRO</Dropdown.Item>
    <Dropdown.Item onClick={(e) => {
      e.preventDefault();
      setCompany("zeel");
      setPrecompany("zeel-pre");
    }}>Zeel</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>
<div className="images">
    <h2 className="title">{company}</h2>
    <img src={"http://localhost:3001/"+precompany+'.png'} height={500} width={900} alt="showing screen capture" />

    <p className="space"></p>
    <img src={"http://localhost:3001/"+company+'.png'} height={500} width={900} alt="showing screen capture" />
   </div>
</>
)
};