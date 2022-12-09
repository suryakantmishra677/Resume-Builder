function addNewedField() {
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add("mt-2");
    newNode.classList.add('edField');
    newNode.setAttribute('placeholder','Enter here');

    let edOb=document.getElementById('ed');
    let edAddButtonOb=document.getElementById('edAddButton');
 
    edOb.insertBefore(newNode, edAddButtonOb);


}

function addNewisField() {
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add("mt-2");
    newNode.classList.add('isField');
    newNode.setAttribute('placeholder','Enter here');

    let isOb=document.getElementById('is');
    let isAddButtonOb=document.getElementById('isAddButton');
 
    isOb.insertBefore(newNode, isAddButtonOb);


} 

function addNewpjField() {
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add("mt-2");
    newNode.classList.add('pjField');
    newNode.setAttribute('placeholder','Enter here');

    let pjOb=document.getElementById('pj');
    let pjAddButtonOb=document.getElementById('pjAddButton');
 
    pjOb.insertBefore(newNode, pjAddButtonOb);


} 

function addNewsField() {
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add("mt-2");
    newNode.classList.add('sField');
    newNode.setAttribute('placeholder','Enter here');

    let sOb=document.getElementById('s');
    let sAddButtonOb=document.getElementById('sAddButton');
 
    sOb.insertBefore(newNode, sAddButtonOb);


} 

function addNewecaField() {
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add("mt-2");
    newNode.classList.add('ecaField');
    newNode.setAttribute('placeholder','Enter here');

    let ecaOb=document.getElementById('eca');
    let ecaAddButtonOb=document.getElementById('ecaAddButton');
 
    ecaOb.insertBefore(newNode, ecaAddButtonOb);


} 

// generating resume
// window.onload = function(){
    // generateResume();
    function generateResume() {
        let nameField = document.getElementById("nameField").value;
        let nameT1 = document.getElementById("nameT1");
        nameT1.innerHTML = nameField;
    
        document.getElementById('nameT2').innerHTML =  nameField;
    

      
        //contact
        document.getElementById('contactT').innerHTML = document.getElementById(
            "contactField").value;


            //email
            document.getElementById('emailT').innerHTML = document.getElementById(
                "emailField").value;

                //Addresses
                document.getElementById('addressT').innerHTML = document.getElementById(
                    "addressField").value;
        
                    //linkedin
                    document.getElementById('linkedT').innerHTML = document.getElementById(
                        "linkedField").value;  
            //github
            document.getElementById('gitT').innerHTML = document.getElementById(
                "gitField").value;    
                
                
        
        //education
        let eds=document.getElementsByClassName('edField');
        let str ="";

        for (let e of eds) {
            str = str + `<li> ${e.value}</li>`;
        }
        document.getElementById('edT').innerHTML = str;


        //InternShip experience

        let iss=document.getElementsByClassName('isField');
        let str1 ="";

        for (let e of iss) {
            str1 = str1 + `<li> ${e.value}</li>`;
        }
        document.getElementById('isT').innerHTML = str1;


        //project

        let pjs=document.getElementsByClassName('pjField');
        let str2 ="";

        for (let e of pjs) {
            str2 = str2 + `<li> ${e.value}</li>`;
        }
        document.getElementById('pjT').innerHTML = str2;

        //skill
        let ss=document.getElementsByClassName('sField');
        let str3 ="";

        for (let e of ss) {
            str3 = str3 + `<li> ${e.value}</li>`;
        }
        document.getElementById('sT').innerHTML = str3;

        //extra curricular activies


        let ecas=document.getElementsByClassName('ecaField');
        let str4 ="";

        for (let e of ecas) {
            str4 = str4 + `<li> ${e.value}</li>`;
        }
        document.getElementById('ecaT').innerHTML = str4;
        
                
        
           //Declarations

        document.getElementById('dT').innerHTML = document.getElementById(
            "dField").value; 


            //coden fo photo
            let file=document.getElementById('imgField').files[0];
            console.log(file);
            let reader = new FileReader();
            reader.readAsDataURL(file);
            console.log(reader.result);
            reader.onloadend = function() {
                document.getElementById('imgTemplate').src = reader.result;
            };



            
            document.getElementById('resume-form').style.display = 'none';
            document.getElementById('resume-template').style.display = 'block';


    }

   function printresume()
    {
       window.print();
    }
