const config = require('config');
const jwt = require('jsonwebtoken');


//purpose of function is to get token from header
//private routes.. add this middleware as second parameter in endpoint
function auth(req, res, next) {
    const token = req.header('x-auth-token');
    //check for token//
    if(!token) res.status(401).json({ msg: 'No token, authorization denied' });

    try {
         //Verify token//
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    //Add user from payload
    req.user = decoded;
    next();
    } catch(e) {
        res.status(400).json({ msg: 'Token is not valid' });
    }    
}

module.exports = auth