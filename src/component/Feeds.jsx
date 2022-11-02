import React from 'react'
import style from './Feed.module.scss'
const Feeds = () => {
  let data= [
    {price:900,img:"p1.jpg",name:"Men's T-shirt (Free Shipping)",city:"Lucknow gomti nagar"},
    {price:1000,img:"p2.jpg",name:"Shoes (Free Shipping)",city:"Lucknow gomti nagar"},
    {price:1220,img:"p3.jpg",name:"Men's T-shirt (Free Shipping)",city:"Lucknow gomti nagar"},
    {price:3920,img:"p4.jpg",name:"Shoes (Free Shipping)",city:"Lucknow gomti nagar"},
    {price:411,img:"p5.jpg",name:"Earphone (Free Shipping)",city:"Lucknow gomti nagar"},
    {price:880,img:"p6.jpg",name:"Men's T-shirt (Free Shipping)",city:"Lucknow gomti nagar"},
    {price:699,img:"p7.jpg",name:"Shirt (Free Shipping)",city:"Lucknow gomti nagar"},
    {price:1000,img:"p8.jpg",name:"T-shirt (Free Shipping)",city:"Lucknow gomti nagar"},
    {price:749,img:"p2.jpg",name:"Shoes",city:"Lucknow gomti nagar"}
  ]
  return (
  <div className="dbg full p3">
    <div className="row flexAIC flexSB ">
      <h3 style={{fontSize:"20px"}}>Today's picks</h3>
      <span className='fclr'><i class="fa-solid fa-location-dot"></i><a href=""> Lucknow . 60 Km</a></span>

    </div>
    <div className={"full row wrap flexSB "}>
     {
     data.map(x=>{
        return <div className={` w30 col ${style.card}`}><img className="brd line full" src={x.img} alt="" />
        <h3 className='m2' style={{marginBottom:"0px"}}>&#8377;{" "+x.price}</h3>
        <p className='m1'>{x.name}</p>
        <span className='m1' style={{color:"gray",fontSize:"14px"}}>{x.city}</span>
        </div>
      })
     }
    </div>
  </div>
  )
}

export default Feeds