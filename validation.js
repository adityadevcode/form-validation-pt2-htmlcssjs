// password lo regular expression check cheyali vuntundi minimum 1 number 1chara, enni characters

// user correct details enter chesthe correct page ki user ni ela redirect chestharu
// coreect details enter chesthe user vere page velthadu
// user prathi input feild lo enter chesaka ha data oka varible lo store chesukovali

const form = document.getElementById("form")
const uname = document.getElementById("uname")
const email = document.getElementById("email")
const password = document.getElementById("password")
const cpassword = document.getElementById("cpassword")
const tandc= document.getElementById("tc")

// kinda 5 varibles tisukuntuna
//page epudu load avuthundi apude e values initialize avuthai 
var isValidName = false;
var isValidEmail = false;
var isValidPassword = false;
var isValidCPassword = false;
var isTCChecked = false

// user enter chese input valid or kada ani check chesedaniki keyup or keydown use chestham
// keyup ante input enter chesaka kanipisthundi
uname.addEventListener('keyup',checkUserName)
form.addEventListener('submit',(e)=>{

    e.preventDefault()
    validate()
})



function validate(){
    let nameValue = uname.value.trim()
    let emailValue = email.value.trim()
    let passwordValue = password.value.trim()
    let cpasswordValue = cpassword.value.trim()
    //ikada false cheyali leda initialize avuthundi user epudu submit button click chesina
    isValidName = false;
    isValidEmail = false;
    isValidPassword = false;
    isValidCPassword = false;
    isTCChecked = false



   checkUserName()

    //email check
    if(emailValue===''){
        setError(email,'Eamil cannot be empty')
    }  
    else if(!emailCheck(emailValue)){
        setError(email,'Enter Valid Email Id')
    }
    else{        
        setSuccesss(email)
        // ani correct ayithe ikada true set cheyali
        isValidEmail =true
    }

    
    //Password check

    if(passwordValue===''){
        setError(password,'password cannot be empty')
    }
    else if(passwordValue.length<8){
        setError(password,'password should be minimum 8 characters')
    }
    else{        
        setSuccesss(password)
        // ani correct ayithe ikada vasthundi then true cheyali
        isValidPassword = true
    }

      
    //Confirm Password check

    if(cpasswordValue===''){
        setError(cpassword,'password cannot be empty')
    }
    else if(cpasswordValue !==passwordValue){
        setError(cpassword,'passwords not matched')
    }
    else{        
        setSuccesss(cpassword)
        isValidCPassword = true
    }

     //Terms and conditions check

     if(!tandc.checked){
         
        setError(tc,'click on agree terms checkbox')        
    }
    else{
        setSuccesss(tc)
        isTCChecked = true
    }
    
// ikada user ani inputs correct field ichado check check cheyali, then check chesaka submit avuthundi form
    if(isValidName && isValidEmail && isValidPassword && isValidCPassword && isTCChecked){
//    form anedi pyna variable lo store chesam
//form ki sumbit ane method vuntundi
// action page lo e page ki velalo rasam kada akadiki velthundi
//ipudu ani correct ga fill chesanu submit ani meda click chesthe index.html page velthundi
        form.submit()
    }   


    function emailCheck(input){
        let emailReg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        let valid = emailReg.test(input)       
        return valid
    }
}

function setError(input,message){
    let parent = input.parentElement;
    let small = parent.querySelector('small')
    small.innerText = message
    parent.classList.add('error')
    parent.classList.remove('success')
}
function setSuccesss(input){
    let parent = input.parentElement;
    parent.classList.add('success')
    parent.classList.remove('error')
}

//User name check
//username key check chesthundi
function checkUserName(){
    // maali pyna field lo vunna value testhunam
    // uname. ante ha feild lo vunna value vasthundi
    let nameValue = uname.value.trim()
    if(nameValue===''){
        setError(uname,'user name cannot be empty')
    }
    else if(nameValue.length<3){
        setError(uname,'user name should be minimum 3 characters')
    }
    else{        
        setSuccesss(uname)
        isValidName =true
    }
}

