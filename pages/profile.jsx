import { useEffect, useState } from "react"

const Profile = () => {

    const [userData, setUserData] = useState( null )
    const [loading, setLoading] = useState( true )
    const path_endpoint = process.env.NEXT_PUBLIC_PATH_END_POINT

    const getUserData = async ( email ) => {

        try {
            
            const req = await fetch( path_endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "petition" : {
                        "name": "get_user_data",
                        "data": {
                            "get_user_data": {
                                "user_email": email
                            }
                        }
                    }
                })
            })

            const res = await req.json()
            if( res.status === 'error' ) return false
            
            return res

        }
        catch ( error ) {
            return false
        }
    }

    const downSuscription = async ( email ) => {

        if( confirm('¿Estas seguro de que deseas darte de baja?') === false ) return false

        try {

            const req = await fetch( path_endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "petition" : {
                        "name": "down_suscription",
                        "data": {
                            "down_suscription": {
                                "user_email": email
                            }
                        }
                    }
                })
            })

            const res = await req.json()
            if( res.status === 'error' ) return false
            return true

        }
        catch ( error ) {
            return false
        }

    }

    useEffect(() => {
        
        const user = JSON.parse(localStorage.getItem('user'))
        if( !user ) {
            window.location.replace('/')
        }

        getUserData( user.email ).then( res => { 
            if( !res ) {
                window.location.replace('/')
                return false
            }

            setUserData( res )
            setLoading( false )
        })

    }, [])

    if( loading ) return <div className="loading"><i className="fas fa-spinner fa-spin"></i></div>

    return (

        <div className="profile-container">
            <div className="container py-5 vh-100">
                <div className="row py-5">
                    
                    <div className="col-md-6">
                        
                        <h2>Mi cuenta</h2>
                        <div className="card profile-data mb-3 p-3">
                            <p className="mb-1">
                                <strong>Nombre:</strong> 
                                { userData ? userData.user_data.user_name : 
                                <i className="fas fa-spinner fa-spin"></i> }
                            </p>
                            <p className="mb-1">
                                <strong>Correo:</strong> 
                                { userData ? userData.user_data.user_email : 
                                <i className="fas fa-spinner fa-spin"></i> }
                            </p>
                        </div>

                        <h2>Suscription</h2>
                        <div className="card profile-data mb-3 p-3">
                            <p className="mb-1">
                                <strong>Estado de la suscripcion : </strong> 
                                { userData ? userData.suscription_data.status : 
                                <i className="fas fa-spinner fa-spin"></i> }
                            </p>
                            <p className="mb-1">
                                <strong>Fin de prueba : </strong> 
                                { userData ? userData.suscription_data.end_trial : 
                                <i className="fas fa-spinner fa-spin"></i> }
                            </p>

                            { 
                                
                                userData.suscription_data.status !== 'canceled' ?
                                <>
                                    <p>
                                        Recuerda que si no deseas continuar con la suscripcion, puedes darte de baja en cualquier momento.
                                        Si tienes alguna duda, puedes contactar con nosotros en { process.env.NEXT_PUBLIC_CONTACT_EMAIL }, envianos un correo y te responderemos lo antes posible.
                                    </p>
                                    <button className="btn btn-secondary"
                                        onClick={ async ()=>{
                                            const res = await downSuscription( userData.user_data.user_email )
                                            if( !res ) console.log('Error al darse de baja')
                                            else {
                                                console.log('Dado de baja correctamente')
                                                window.location.replace( '/' )
                                            }
                                        } }
                                    > Darse de baja </button>
                                </>
                                :
                                null

                            }

                        </div>

                    </div>

                </div>
            </div>
        </div>


    )




}

export default Profile