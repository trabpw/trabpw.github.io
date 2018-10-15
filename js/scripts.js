$("#proposta").validate({
  rules: {
    nomeEmpresa:{
      required:true,
      maxlength: 100,
      minlength: 5
    },
    email1:{
      required:true,
      maxlength: 100,
      minlength: 5
    },
    vaga:{
      required:true,
      maxlength: 100,
      minlength: 5
    },
    turno:{
      required:true,
      maxlength: 100,
      minlength: 5
    }
  }
});

$("#relato").validate({
  rules: {
    nome:{
      required:true,
      maxlength: 100,
      minlength: 5
    },
    email1:{
      required:true,
      maxlength: 100,
      minlength: 5
    },
    historia:{
      required:true,
      maxlength: 1000,
      minlength: 5
    }
  }
});

$("#cadastro").validate({
  rules: {
    nome:{
      required:true,
      maxlength: 100,
      minlength: 5
    },
    email1:{
      required:true,
      maxlength: 100,
      minlength: 5
    },
    funcao:{
      required:true,
      maxlength: 100,
      minlength: 5
    },
    turno:{
      required:true,
      maxlength: 100,
      minlength: 5
    },
    cv:{
      required:true
    }
  },
  submitHandler: function(form){
    alert("Deu bom!");
    form.submit();
  }
});

$("#fale-conosco").validate({
  rules: {
    nome:{
      required:true,
      maxlength: 100,
      minlength: 5
    },
    email1:{
      required:true,
      maxlength: 100,
      minlength: 5
    },
    historia:{
      required:true,
      maxlength: 100,
      minlength: 5
    },
  }
});