export default async ( req, res ) => {

    const { method } = req
    const { query, lang } = req.body
    const apiKey = process.env.SERPSTAK_API_KEY
    const apiUrl = process.env.SERPSTAK_API_URL
    
    if ( method !== 'POST' ) 
        return res.status( 405 ).json({ message: 'Method Not Allowed' })
    
    if ( !query )
        return res.status( 400 ).json({ message: 'Query is required' })

    const config = {
        access_key: apiKey,
        type: 'web',
        google_domain: 'google.com',
        gl: lang,
        hl: lang,
        query: query
    }

    try{
        
        const request = await fetch( apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( config )
        })

        const response = await request.json()
        res.status( 200 ).json( response )

    } catch ( error ) {
            
        return res.status( 500 ).json({ 
            message: 'Internal Server Error ( SERPSTAK ) ', 
            error,
            config,
            apiKey,
            apiUrl,
            body: req.body 
        })

    }



}