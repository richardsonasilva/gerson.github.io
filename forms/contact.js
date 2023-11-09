const nome = document.getElementById('nome');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const submit = document.getElementsByClassName('form-contact')[0];

submit.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log("Clique ok");
    let ebody= `
    <b>Nome: </b>${nome.value}
    <br>
    <b>E-mail: </b>${email.value} 
    <br>
    <b>Telefone: </b>${subject.value}     
    <br>
    <b>Mensagem: </b>${message.value}     
    <br>
    `
    Email.send({
        SecureToken : "5b3d4656-25c9-4102-aebd-896651a91f25",
        To : 'contato@ataidemiranda.com.br',
        From : "contato@ataidemiranda.com.br",
        Subject : "Formulário de contato do site",
        Body : ebody
    }).then(
      message => alert("Mensagem enviado com sucesso!") ? "" : location.reload()               
      );
});