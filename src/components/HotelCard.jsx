import React from 'react'
import { GoHeart } from 'react-icons/go'
import { IoLocationOutline } from 'react-icons/io5'
import { BiBuildings } from 'react-icons/bi'
import { LiaBathSolid, LiaBedSolid } from 'react-icons/lia'
import {BsArrowsMove} from 'react-icons/bs'
import Button from './Button'
import { useNavigate, useParams } from 'react-router-dom'

const HotelCard = ({hotel}) => {
    const navigate = useNavigate();
    const {city} = useParams();

  return (
    <div className='bg-white flex flex-col items-center gap-8 rounded-2xl p-[6px] h-[600px] w-96 '>
        <div 
        id={hotel.id} 
        style={{
            backgroundImage : `url(${hotel?.image})`,
            backgroundRepeat : "no-repeat",
            backgroundSize : "cover",
            backgroundPosition : "center"
        }} 
        className='flex items-start justify-between h-1/2 bg-black w-full rounded-xl pt-4 px-4'>
            <p className='bg-white text-blue-800 font-medium text-sm py-[7px] px-4 rounded-full'>{
                hotel?.target?.forRent ? "For Rent" : "For Sale"
            }</p>
            <span className='p-2 bg-white rounded-full'><GoHeart /></span>
        </div>
        <div className='flex flex-col items-start w-full rounded-xl px-3 pb-1 gap-8'>
            <div className='flex items-center gap-2'>
                <span><IoLocationOutline color='orangered' /></span>
                <p className='text-xs font-light opacity-80 tracking-wide'>{hotel?.pincode}, {hotel?.landmark} </p>
            </div>
            <div>
            <h4 className='text-base font-semibold opacity-80 tracking-wide'>{hotel?.hotelName}</h4>
            <span className='text-xs font-light opacity-70'>{hotel?.address}</span>
            </div>
            <div id="specs" className='flex items-center w-full justify-around text-sm'>
                <span className='opacity-70'><BiBuildings /><p>{hotel?.details?.rooms} rooms</p></span>
                <span className='opacity-70'><LiaBedSolid /><p>{hotel?.details?.bed} bed</p></span>
                <span className='opacity-70'><LiaBathSolid /><p>{hotel?.details?.bath} bath</p></span>
                <span className='opacity-70'><BsArrowsMove /><p>{hotel?.details?.area} area</p></span>
            </div>
            <div className='flex items-center w-full justify-between'>
                <p className='text-sm font-light text-black'><span className='text-base font-bold text-blue-700'>{hotel?.price}</span>/month</p>
                <div onClick={()=>navigate(`/properties/${city}/${hotel?.id}`)}>
                <Button text="Read More"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HotelCard