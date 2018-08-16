// $("#loginForm").submit(function(event) {
//     // Предотвращаем обычную отправку формы
//     event.preventDefault();
//     $.post('http://504080.com/api/v1/support', {'login':$('#login').val(), 'password' : $('#password').val()},
//             function(data) {
//                     $('#result').html(data);
//             });
//     });


const submitbtn = document.getElementById('submit');
const select = document.getElementById('select');
const selectvalue = document.getElementById('selectvalue')
const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const description = document.getElementById('description');
const inputfileimg = document.getElementById('inputfileimg');


submitbtn.addEventListener ('click', (event) => {
        console.log(submitbtn);
        event.preventDefault();
        let formdata = new FormData();
        let isvalid = true;
        let iputfileimgvalue = iputfileimg.files[0];
        if(select.value.length==0){
                document.getElementById("selectvalid").innerHTML="*данное поле обязательно для заполнения";
                isvalid = false;
        } else {
                formdata.append("enquiry_type", select.value);
        }
        
        if(name.value.length==0){
                document.getElementById("namevalid").innerHTML="*данное поле обязательно для заполнения";
                isvalid = false;
        } else {
                formdata.append("user_name", name.value);
        }

        if(email.value.length==0){
                document.getElementById("emailvalid").innerHTML="*данное поле обязательно для заполнения";
                isvalid = false;
        } else {
                formdata.append("email", email.value);
        }

        if(subject.value.length==0){
                document.getElementById("subjectvalid").innerHTML="*данное поле обязательно для заполнения";
                isvalid = false;
        } else {
                formdata.append("subject", subject.value);
        }

        if(description.value.length==0){
                document.getElementById("descriptionvalid").innerHTML="*данное поле обязательно для заполнения";
                isvalid = false; 
        } else {
                formdata.append("description", subject.value);
        }
        console.log(inputfileimg.files[0]);
        if(inputfileimg.files[0] && inputfileimg.files[0].size > (1024 * 1024 * 5) && (inputfileimg.files[0].type!== "image/jpeg" || inputfileimg.files[0].type!== "image/png") ){ 
                document.getElementById("imgvalid").innerHTML="*данное поле обязательно для заполнения Размер файла не должен превышать 5 мб";
                isvalid = false; 
        } else {
                formdata.append("file", inputfileimg.files[0]);
        }

        if(isvalid = true) {
                fetch(
                        "http://504080.com/api/v1/support", 
                        {
                            method: "POST",
                            body: formdata
                        }
                );
        } 
        
});

