const jwt = require('jsonwebtoken');
const cFig = require('config');
module.exports = function(req, res, next) {
    // Get tk from user
    const tk = req.header('x-auth-token');
    // BLOCK ANY POTENTIAL XSS-ATTACKS ---> 'production'
    // res.setHeader('X-XSS-Protection','1;mode=block');
    // check tk
    if (!tk) {
        return res.status(401).json({ msg: 'Who is this neophite?!...No token authorized -> access denied.' });
    }
    // verify tk
    try {
      const dCoded = jwt.verify(tk, cFig.get('ss'));
      req.user = dCoded.user;
      next();  
    } catch (err) {
        res.status(401).json({ msg: 'The token you provided is NOT valid.' });
    };
};