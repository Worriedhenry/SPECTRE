import React,{useEffect,useState} from "react"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import SearchResult from "../Components/Search/SearchResult"
import Recommended from "../Components/Search/Recommended"
import { useSearchParams,useParams } from "react-router-dom"
import axios from "axios"
export default function Search() {
    const [Data,setData]=useState({})
    const {name}=useParams()
    useEffect(()=>{
        axios
          .get("https://mcs-backend-9d1v.onrender.com/search/"+name)
          .then(res =>{
            if(res.status==200){
                setData(res.data)
                console.log(res.data)
            }
          } )
          .catch(err => console.error(err));
    },[])
    

    return(
        <div>
            <Header/>
            <SearchResult Data={Data} />
            <Recommended Data={Data} />
            <Footer />
        </div>
    )
}