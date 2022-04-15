
// constructor
class Create {

    constructor(actionHandler, nextActionHandler){
        this.resp = {
            status:200,
            body:{
                actionHandler:actionHandler,
                nextActionHandlerURL:nextActionHandler,
                questionArray:[]
            }    
        }

        // Declearing constants
        this.HALF_WIDTH = 'HALF';
        this.FULL_WIDTH='FULL';
        this.PICTURE_ROW='pic_row';
        this.VIDEO_ROW='video_row';
        this.HORIZONTAL_ORIENTATION='HORIZONTAL';
        this.VERTICAL_ORIENTATION='VERTICAL';
        this.H1 = 'h1';
        this.H2 = 'h2';
        this.H3 = 'h3';
        this.H4 = 'h4';
        this.H5 = 'h5';
        this.H6 = 'h6';
    }  

    // bare minimum stub
    Question(qContext){
        const question = {
            "question":{
                "qContext":qContext
            }
        }

        this.resp.body.questionArray.push(question);

        return this;
    }

    Answer(multiple_select){
        const answer = {
            "multipleSelect":multiple_select
        }

        this.resp.body.questionArray[this.resp.body.questionArray.length-1].answer=answer;

        return this;
    }

    // Question card interface

    QuestionCard(){
        this.resp.body.questionArray[this.resp.body.questionArray.length-1].question.questionType='Card';
        return this;
    }

    SetHeaderToQuestion(context_index,width){
        this.resp.body.questionArray[this.resp.body.questionArray.length-1].question.qCard = [
            {
                type:'header',
                    descriptor:{
                        'context-object':context_index,
                        'card-type':width
                    }
            }
        ]

        return this;
    }

    AddGraphicRowToQuestion(graphic_type,url,thumbnail_url){
        const row = {
            "type":graphic_type,
            "descriptor":{
                "value":url,
                "thumbnail":thumbnail_url
                 }
            }

       this.resp.body.questionArray[this.resp.body.questionArray.length-1].question.qCard.push(row);
       return this;
    }

    AddTextRowToQuestion(row_type,value,color,bold){
        const row = {
            "type":row_type,
            "descriptor":{
                "value":[value],
                "color":color,
                "bold":bold
                }
            }

       this.resp.body.questionArray[this.resp.body.questionArray.length-1].question.qCard.push(row);
       return this;
    }

    // Answer Card Interface
    AnswerCardArray(card_orientation){
        const ms = this.resp.body.questionArray[this.resp.body.questionArray.length-1].answer.multipleSelect;
        this.resp.body.questionArray[this.resp.body.questionArray.length-1].answer = {
            multipleSelect:ms,
            'card-orientation':card_orientation,
            responseType:'Card',
            'qCard':[]
        }

        return this;
    }

    AnswerCard(){
        this.resp.body.questionArray[this.resp.body.questionArray.length-1].answer.qCard.push([]);
        return this;
    }

    SetHeaderToAnswer(card_context,width){
        const qCardArray = this.resp.body.questionArray[this.resp.body.questionArray.length-1].answer.qCard;

        const card = {
            type:'header',
            descriptor:{
                    'context-object':card_context,
                    'card-type':width
                    }
            }
        this.resp.body.questionArray[this.resp.body.questionArray.length-1].answer.qCard[qCardArray.length-1].push(card);
        return this;
    }

    AddGraphicRowToAnswer(graphic_type="default",url=["default"],thumbnail_url=["default"]){
        const qCardArray = this.resp.body.questionArray[this.resp.body.questionArray.length-1].answer.qCard;

        const card = {
            type: graphic_type,
            descriptor:{
                    value:url,
                    thumbnail:thumbnail_url
                    }
            }

        this.resp.body.questionArray[this.resp.body.questionArray.length-1].answer.qCard[qCardArray.length-1].push(card);
        return this;
    }

    AddTextRowToAnswer(row_type="string",value="string",color="string",bold=true){
        const qCardArray = this.resp.body.questionArray[this.resp.body.questionArray.length-1].answer.qCard;

        const card = {
            type: row_type,
            descriptor:{
                    value: [value],
                    color: color,
                    bold: bold    
                    }
            }

        this.resp.body.questionArray[this.resp.body.questionArray.length-1].answer.qCard[qCardArray.length-1].push(card);
        return this;
    }

    // Text Interface
    QuestionText(){
        this.resp.body.questionArray[this.resp.body.questionArray.length-1].question.questionType='Text';
        return this;   
    }

    SetTextToQuestion(question_text="string"){
        this.resp.body.questionArray[this.resp.body.questionArray.length-1].question.qText=question_text;
        return this;
    }

    // Text-Input interface
    TextInput(){
        this.resp.body.questionArray[this.resp.body.questionArray.length-1].answer={
            responseType:'Text-Input'
        }
        return this;        
    } 

    // Location-Input interface        
    LocationInput(location_input_text="string"){  
        this.resp.body.questionArray[this.resp.body.questionArray.length-1].answer={
                    responseType:'Location-Input',
                    'qLocation-Input': [location_input_text] 
        }

        return this;
    }

     // Number-Input interface
     NumberInput(){
        this.resp.body.questionArray[this.resp.body.questionArray.length-1].answer={
            responseType:'Number-Input'
        }
        return this;        
    }
    
    // Date-Input interface
    DateInput(){
        this.resp.body.questionArray[this.resp.body.questionArray.length-1].answer={
            responseType:'Date-Input'
        }
        return this;        
    }

    // Get the final object to be exported
    Build(){
        return this.resp
    }

}

module.exports = Create ;