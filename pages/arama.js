import { useState } from "react";
import Layout from "../components/layout";



const Arama = () => {
    const [searchInput,setSearchInput]=useState("");
    const clearInput=()=>{
        setSearchInput("");
    }
    return (
        <Layout>
            <div className="container my-5">
                <input className="search-input w-100" type="text" value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} placeholder="Ne aramıştın ?" autoFocus/>
                <span className="search-clear" onClick={clearInput} style={searchInput ==="" ? {display:"none" }:{display:"block"}}>x</span>
                <div className="search-tip-box">
                <p>En Çok Aranan Ürünler</p>
                    <a>Ayakkabı</a>
                    <a>Kravat</a>
                    <a>Smokin</a>
                    <a>Smokin</a>
                    <a>Ayakkabı</a>
                    <a>Takım Elbiseler</a>
                </div>
            </div>
        </Layout>
    )
}

export default Arama
