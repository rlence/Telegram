const statusMessages = {
    '200': 'Done',
    '201':'Create',
    '400':'Invalid format',
    '500':'Internar server'
}

exports.success = (req, res, messages, status)=>{
    //..
    let statusCode = status
    let statusMessage = messages;
    if(!status){
        statusCode = 200
    }

    if(!messages){
        statusMessage = statusMessages[status]
    }

    res.status(statusCode).send({'body':statusMessage})
}

exports.error = ( req, res, body, status, details ) =>{
    //..
    console.error('[response error]: ' + details)
    res.status(status || 500).send(body);
}