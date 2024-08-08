import React, { useState } from 'react'
import "./CreateNewauctionObject.css"
// thimgs i needd in this 
// 1-  Title, Overview, startingBid, bidIncrement, startingDate, endingDate
// 2- Image

export default function CreateNewauctionObject() {
    const [Title,setTitle] = useState('')
    const [Overview,setOverview] = useState('')
    const [startingBid,setstartingBid] = useState('')
    const [bidIncrement,setbidIncrement] = useState('')
    const [startingDate,setstartingDate] = useState('')
    const [endingDate,setendingDate] = useState('')
    
    
    const createaNewAuctionObject = async() => {
        const token = localStorage.getItem('Accesstoken')

        if(!token){
            throw new Error("Token dosent Received")
        }

        const response = await fetch('http://localhost:4000/auction/newitem',{
            method : 'POST',
            headers : {
                'Authorization' : "Bearer token"
            },
            body : JSON.stringify({
                Title : Title,
                Overview : Overview,
                startingBid : startingBid,
                bidIncrement : bidIncrement,
                startingDate : startingBid,
                endingDate : endingDate
            })
        })

        if(!response.ok){
            throw new Error("error Ouccred while Creating a new Auction")
        }

        console.log("Auction Object Created Successfully")
    }

  return (
    <div className='wrapped'>
     <div className='wrapping'>
        <div className='new-auction-ele'>
            <p className='new-auction-para'>Create a new Auction Item ...</p>
                <form className='new-auction-form-ele' method='POST' action='submit' onClick={createaNewAuctionObject}>
                    <div className='new-auction-form-div-ele'>
                        <div className='text-part'>

                            <div className='text-div'>
                                <label>Name</label>
                                <input type='text' placeholder='name of Product' className='inputfield' value={Title} onChange={(e) => setTitle(e.target.value)} />
                            </div>

                            <div className='text-div'>
                                <p>Name</p>
                                <textarea type='text' placeholder='littleBit About the product' maxLength={8} rows={4} className='inputfield' value={Overview} onChange={(e) => setOverview(e.target.value)}  />
                            </div>

                            <div className='bid-number'>
                                <div className='text-div'>
                                    <label>StartingBid</label>
                                    <input type='number' placeholder='StartingBid' className='inputfield' value={startingBid} onChange={(e) => setstartingBid(e.target.value)} />
                                </div>

                                <div className='text-div'>
                                    <label>bidIncrement</label>
                                    <input type='number' placeholder='StartingBid' className='inputfield' value={bidIncrement} onChange={(e) => setbidIncrement(e.target.value)} />
                                </div>
                            </div>


                            <div className='bid-Date'>
                                <div className='text-div'>
                                    <label>Starting Date</label>
                                    <input type='Date' placeholder='StartingBid' className='inputfield-date' value={startingDate} onChange={(e) => setstartingDate(e.target.value)} />
                                </div>

                                <div className='text-div'>
                                    <label>Ending Date</label>
                                    <input type='Date' placeholder='StartingBid' className='inputfield-date' value={endingDate} onChange={(e) => setendingDate(e.target.value)} />
                                </div>
                            </div>

                            <div className='img-div'>
                                    <label>Image of Product</label>
                                    <input type='file' placeholder='StartingBid' className='inputfield' />
                           </div>

                        </div>

                    </div>
                    <button className='btn new-auction-btn' id='btn1' onClick={createaNewAuctionObject}>Submit</button>
                    
                </form>
        </div>
     </div>
    </div>
  )
}
