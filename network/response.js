exports.success = (req, res, messages, status)=>{
    //..
    res.status(status || 200).send(messages)
}

exports.error = ( req, res, body, status, details ) =>{
    //..
    console.error('[response error] ' + details)
    res.status(status || 500).send(body);
}