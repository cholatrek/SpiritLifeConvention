
var submitForm =  document.getElementById('submitForms');
var loader = document.getElementById('loader');

submitForm.addEventListener('submit', submitSlc );

function submitSlc(e){
    e.preventDefault();
    var fullname = getInputval('fullname');
    var email = getInputval('email');
    var address = getInputval('address');
    var phonenumber = getInputval('phonenumber');
    var city = getInputval('city');
    var state = getInputval('state');
    loader.style.display = 'block'

    // console.log(fullname)

    saveMessage(fullname, email, address, phonenumber,city,state);

}
function getInputval(id){
    return document.getElementById(id).value
}


function saveMessage(fullname, email, address, phonenumber,city,state){
    db.collection('slc').add({
        fullname : fullname,
        email:email,
        address:address,
        phonenumber:phonenumber,
        city:city,
        state:state
    }).then(function(){
        defaultText.style.display = 'none' ;
        submitForm.reset();
        // success.style.display = 'block';
        $('#myModal').modal('show');
        // alert('done');
    })
}





