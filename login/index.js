const listUser = [
    {
        email: 'abcxyz@gmail.com',
        password: '123456',
    },
    {
        email: 'test@gmail.com',
        password: '123456',
    },
    {
        email: 'cuongmanh0x@gmail.com',
        password: '123456',
    },
];

document.getElementById('login').onclick = function () {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    console.log('email', email);
    console.log('password', password);

    let checkEmail = false;
    for(let user of listUser){
        if(user.email === email){
            if(user.password === password){
                alert("Chúc mừng em Phúc đã đăng nhập thành công!");
                window.location = './homepage.html';
        }else{
            alert("Nhớ lại đi, quên thì hỏi Ánh nhé =)))")
        }

        checkEmail = true;
    }
    // if(checkEmail === true){
    // alert("Email này em đã đăng kí với anh đâu :D");}
  };
}
