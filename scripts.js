window.onload = function(){
    var email= document.getElementById('email');
    const newsletter= document.getElementsByClassName('newsletter')[0];
    const message= newsletter.getElementsByClassName('message')[0];
    const button= newsletter.getElementsByTagName('button')[0];
    
    button.onclick = event =>{
        event.preventDefault();
        message.textContent  = (email.value == "" || !email.value.match( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) 
        ? `Please enter a valid email address` :  `Thank you! Your email address ${email.value} has been added to our mailing list!`
    } 
}