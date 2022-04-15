const express = require('express');
const router = express.Router();

// Import this to use the interface library
const Create = require('./interfaces/strike');

router.post('/',(req,res,next) => {
    const strikeObj = new Create('getting_started','');

    let apiRes = req.body
    let cardResp = apiRes["user_session_variables"]["cardResp"][0]
    let name = apiRes["user_session_variables"]["name"]
    let locationLat = apiRes["user_session_variables"]["location"]["latitude"]
    let locationLon = apiRes["user_session_variables"]["location"]["longitude"]
    let favNumber = apiRes["user_session_variables"]["favNumber"]
    let dob = apiRes["user_session_variables"]["dob"][0]

    //Question Card interface
    quesObj = strikeObj.Question('val1');
    quesObj.QuestionText().SetTextToQuestion("hello "+name+" Thanks for giving us your location which is longitude "+ locationLat + " and longititude "+locationLon+". And your favourite number is "+favNumber+" and you were born on "+ dob)

    res.status(200).json(strikeObj.Data());
});

module.exports = router;