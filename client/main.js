const complimentBtn = document.getElementById("complimentButton")

const newNameinput = document.querySelector('#nameinput')
const namesButton = document.getElementById("names")

const hashInput = document.querySelector('#hashInput')
const hashButton = document.getElementById("hashName")


const list = document.querySelector('ul')
const div = document.querySelector('div')

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};


const postnewName= () =>{
    let body = {
        username: newNameinput.value
    }
    
    console.log("Sent",body)
    axios.post('http://localhost:4000/api/names',body).then(response => {
        console.log("Received", response.data)
     
        let {username} = response.data  
        list.innerHTML = "Hello - " + username        
        
    })
    
}


const hashName= () =>{
    let body = {
        hashname: hashInput.value
    }
    
    console.log("Sent",body)
    axios.post('http://localhost:4000/api/hash',body).then(response => {
        console.log("Received HASH", response.data)
     

        div.innerHTML = "Hello your hashed Name is -  " + response.data        
        
    })
    
}

complimentBtn.addEventListener('click', getCompliment)
namesButton.addEventListener('click', postnewName)
hashButton.addEventListener('click',hashName)

