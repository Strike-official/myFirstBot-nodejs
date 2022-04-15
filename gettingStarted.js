const express = require('express');
const router = express.Router();

// Import this to use the interface library
const Create = require('./interfaces/strike');

router.post('/',(req,res,next) => {

    const strikeObj = new Create('abc','next-api-link');

    //Question Card interface
    questionCardObj = strikeObj.Question('val1');
    questionCardObj.QuestionCard().SetHeaderToQuestion(1,strikeObj.HALF_WIDTH).
        AddGraphicRowToQuestion(strikeObj.PICTURE_ROW,["pic_url"],[]).
        AddTextRowToQuestion(strikeObj.H3,"Some text here","blue",true);

    // Answer Card Interface    
    answerCardObj = questionCardObj.Answer(true);
    answerCardObj.AnswerCardArray(strikeObj.VERTICAL_ORIENTATION);
    answerCardObj.AnswerCard().SetHeaderToAnswer(1,strikeObj.HALF_WIDTH).
        AddGraphicRowToAnswer(strikeObj.PICTURE_ROW,["pic_url"],[]).
        AddTextRowToAnswer(strikeObj.H3,"Some text here","#008fcc",false);

    // Question Text interface   
    questionTextObj = strikeObj.Question('val2');
    questionTextObj.QuestionText().
        SetTextToQuestion("Some question text for text input interface");

    // answer Text-Input interface    
    questionTextObj.TextInput();

    // Question Text interface   
    questionLocationObj = strikeObj.Question('val3');
    questionLocationObj.QuestionText().
        SetTextToQuestion("Some question text for Location-Input interface");

    // Answer Location interface
    questionLocationObj.LocationInput('Select location');
    
    // Question Text interface   
    questionNumberObj = strikeObj.Question('val4');
    questionNumberObj.QuestionText().
        SetTextToQuestion("Some question text for Number-Input interface");
    
    // Answer number interface
    questionNumberObj.NumberInput('Select Number');
    
    // Question Text interface   
    questionDateObj = strikeObj.Question('val5');
    questionDateObj.QuestionText().
        SetTextToQuestion("Some question text for Date-Input interface");        

    // Answer Date interface
    questionDateObj.DateInput('Select Date');

    res.status(200).json(strikeObj.Data());
});

module.exports = router;