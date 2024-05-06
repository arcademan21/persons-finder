'use client'
import { useState, useEffect } from "react"
import './css/loader.css'
import Image from 'next/image'

const Loader = () => {
    
    const [loading, setLoading] = useState( true )
    
    useEffect(() => {
        
        setTimeout(() => {
            const loader = document.querySelector('.loader')
            if ( loader ) {
                loader.classList.add('loader--fade')
                loader.classList.add('d-none')
            }
            //setLoading( false )
        }, 1000 )

    }, [])
    
    return (
        <div className="loader">
            <div className="loader__logo text-center">
                <Image src="/images/logo_find-persons.png" alt="Logo" width={100} height={100} 
                    layout="responsive"
                />
            </div>
        </div>
        // <>
        //     { loading ? 
        //         <div className="loader">
        //             <div className="loader__logo text-center">
        //                 <Image src="/images/logo_find-persons.png" alt="Logo" width={100} height={100} 
        //                     layout="responsive"
        //                 />
        //             </div>
        //         </div>
        //     : null }
        // </>
    )
    
}

export default Loader