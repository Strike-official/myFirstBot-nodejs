const express = require('express');
const router = express.Router();

// Import this to use the interface library
const Create = require('./interfaces/strike');

const baseAPI = "http://5c96-2405-201-a407-908e-111-dbb5-3e1c-804e.ngrok.io/my-first-app/"
router.post('/',(req,res,next) => {

    const strikeObj = new Create('getting_started', baseAPI+'respondBack');

    //Question Card interface
    questionCardObj = strikeObj.Question('cardResp');
    questionCardObj.QuestionCard().SetHeaderToQuestion(1,strikeObj.HALF_WIDTH).
        AddTextRowToQuestion(strikeObj.H3,"Click on the below bot","blue",true);

    // Answer Card Interface    
    answerCardObj = questionCardObj.Answer(true);
    answerCardObj.AnswerCardArray(strikeObj.VERTICAL_ORIENTATION);
    answerCardObj.AnswerCard().SetHeaderToAnswer(2,strikeObj.HALF_WIDTH).
        AddGraphicRowToAnswer(strikeObj.PICTURE_ROW,["https://img.freepik.com/free-vector/chat-bot-concept-illustration_114360-5522.jpg"],[]).
        AddTextRowToAnswer(strikeObj.H3,"This is a Bot Demonstration","#008fcc",false);

    // Question Text interface   
    questionTextObj = strikeObj.Question('name');
    questionTextObj.QuestionText().
        SetTextToQuestion("What is your name?");

    // answer Text-Input interface    
    questionTextObj.TextInput();

    // Question Text interface   
    questionLocationObj = strikeObj.Question('location');
    questionLocationObj.QuestionText().
        SetTextToQuestion("Some question text for Location-Input interface");

    // Answer Location interface
    questionLocationObj.LocationInput('Select location');
    
    // Question Text interface   
    questionNumberObj = strikeObj.Question('favNumber');
    questionNumberObj.QuestionText().
        SetTextToQuestion("Whats your favourite number?");
    
    // Answer number interface
    questionNumberObj.NumberInput('Select Number');
    
    // Question Text interface   
    questionDateObj = strikeObj.Question('dob');
    questionDateObj.QuestionText().
        SetTextToQuestion("What is your date of bith");        

    // Answer Date interface
    questionDateObj.DateInput('Select Date');

    res.status(200).json(strikeObj.Data());
});

module.exports = router;