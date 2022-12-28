var form_submit = document.querySelector('form')

form_submit.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log('Form Submitted');


    var first_name = document.querySelector('[placeholder="First Name"]');
    var last_name = document.querySelector('[placeholder="Last Name"]');
    var address = document.querySelector('[placeholder="Address"]');
    var pincode = document.querySelector('[placeholder="Pincode"]');
    var state = document.querySelector('[placeholder="State"]');
    var country = document.querySelector('[placeholder="Country"]');
    var gender = document.querySelector('[placeholder="Gender"]');
    var choice = document.querySelector('[placeholder="Choice"]');

    var data = [first_name,last_name,address,pincode,state,country,gender,choice];

    if(first_name.value != "" && last_name.value != "" && address.value != "" && pincode.value != "" && state.value != "" && country.value != "" && gender.value != "" &&  choice.value != ""){
        var creating_tr = document.createElement("tr");

        for(let i = 0; i<8; i++){
            var creating_td = document.createElement('td');
            creating_td.innerText = data[i].value;
            creating_tr.append(creating_td);
        }

        var table_body = document.createElement('tbody');
        table_body.append(creating_tr);
        var table = document.querySelector('table');
        table.append(table_body);

        for(let i of data){
            i.value = "";
        }
    }

})