
import LayoutAdmin from '@/Layouts/LayoutAdmin'
import React from 'react'
import TablePemesanan from './TablePemesanan'
import PemesananUnit from '@/Pages/PemesananUnit'

const Index = ({title, auth, pemesananUnit}) => {
    if(!pemesananUnit){
        return null;
    }
    
  return (
    <LayoutAdmin title={title} auth={auth}>
            <div className="w-full pt-10 justify-center items-center">
                <h1 className="font-sans font-bold text-black text-2xl md:text-3xl">
                    {title}
                </h1>
                <div className=" mt-5">
                <TablePemesanan pemesananUnit={pemesananUnit} />
                </div>
            </div>
    </LayoutAdmin>
  )
}

export default Index
