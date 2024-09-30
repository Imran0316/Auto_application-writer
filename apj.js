function funct(){
    let Reciepent_name = document.getElementById("recp_name").value;
    let Your_name = document.getElementById("you_name").value;
    let Department_name = document.getElementById("Dept_name").value;
    let DatE = document.getElementById("Date_I").value;
    let S_Date = document.getElementById("Date_S").value;
    let E_Date = document.getElementById("Date_E").value;
    let ReaSon = document.getElementById("Reason").value;
    let Y_position = document.getElementById("Position").value;
    let ConTact = document.getElementById("Contact_n").value;

    let Output1 = document.getElementById("head");
    Output1.innerHTML = `<strong> Reciepent Name: </strong> ${Reciepent_name} </br> <strong>  Your Name: </strong> ${Your_name} </br> <strong>Department Name: </strong> ${Department_name} </br><strong> Date: </strong> ${DatE}`;

    let Output2 = document.getElementById("body-h")
    Output2.innerHTML=`Dear ${Reciepent_name} , </br>`

    let Output3 = document.getElementById("body-content")
    Output3.innerHTML = `I hope this message finds you well. I am writing to request leave from <strong> ${S_Date} </strong> to <strong> ${E_Date} </strong> due to ${ReaSon}  During this time, I will ensure that all my responsibilities are taken care of, and I will make the necessary arrangements to delegate any urgent tasks to my team </br> </br> Please let me know if further information is required for the approval process. I appreciate your understanding. </br> </br> Thank you for considering my request.  `

    let Output4 = document.getElementById("body_b")
    Output4.innerHTML = ` <h3>Sincerely,</h3> </br> ${Your_name} </br> ${Y_position} </br> ${ConTact} `

}

