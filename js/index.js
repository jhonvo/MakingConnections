// console.log("This is working fine...")

// Changing the profile name
function profilename(){
    // console.log(event);
    myname = document.querySelector(".name");
    myname.innerHTML = "New Name (*^_^*)";
}

let namechange = document.querySelectorAll('.profilename');

for (let i = 0; i < namechange.length; i++){
    namechange[i].addEventListener('click', profilename);
}

// Updating the informtion on connections

function connectionUpdate (event){
    // console.log(event.target);
    let request = event.target.closest('div');
    let requestaction = event.target.alt;
    console.log(requestaction)
    if(requestaction == "accept"){
        let pending = document.querySelector('.connectionrequest')
        console.log(pending);
        let subs = parseInt(pending.innerHTML);
        subs -= 1;
        pending.innerHTML = subs;
    }

    else{
        // Adds to the actual number of connections
        let accepted = document.querySelector('.connectionaccepted')
        console.log(accepted);
        let sum = parseInt(accepted.innerHTML);
        sum += 1;
        accepted.innerHTML = sum;
        // Substract from the actual number of requests
        let pending = document.querySelector('.connectionrequest')
        console.log(pending);
        let subs = parseInt(pending.innerHTML);
        subs -= 1;
        pending.innerHTML = subs;
    }
    request.remove();
}

let connectionclick = document.querySelectorAll('.reqaction img')

for (i=0; i < connectionclick.length; i++){
    connectionclick[i].addEventListener('click', connectionUpdate);
}