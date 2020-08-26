//Validadores

function validarCNPJ(cnpj) {

    cnpj = cnpj.replace(/[^\d]+/g, '');

    if (cnpj == '') return false;

    if (cnpj.length != 14)
        return false;

    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" ||
        cnpj == "11111111111111" ||
        cnpj == "22222222222222" ||
        cnpj == "33333333333333" ||
        cnpj == "44444444444444" ||
        cnpj == "55555555555555" ||
        cnpj == "66666666666666" ||
        cnpj == "77777777777777" ||
        cnpj == "88888888888888" ||
        cnpj == "99999999999999")
        return false;

    // Valida DVs
    tamanho = cnpj.length - 2
    numeros = cnpj.substring(0, tamanho);
    digitos = cnpj.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0))
        return false;

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1))
        return false;

    return true;

}



function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf == '') return false;
    // Elimina CPFs invalidos conhecidos	
    if (cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999")
        return false;
    // Valida 1o digito	
    add = 0;
    for (i = 0; i < 9; i++)
        add += parseInt(cpf.charAt(i)) * (10 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(9)))
        return false;
    // Valida 2o digito	
    add = 0;
    for (i = 0; i < 10; i++)
        add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(10)))
        return false;
    return true;
}


$("#cep").mask("99.999-999");

// fim validadores

//MASCARAS 

//mascara CNPJ
$("#cnpj").on("keyup", function (e) {
    $(this).val(
        $(this).val()
            .replace(/\D/g, '')
            .replace(/^(\d{2})(\d{3})?(\d{3})?(\d{4})?(\d{2})?/, "$1 $2 $3/$4-$5"));
});



//mascara CPF

$("#cpf").on("keyup", function (e) {
    $(this).val(
        $(this).val()
            .replace(/\D/g, "")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d{1,2})$/, "$1-$2"));
});


//mascara TEL

$("#telefone").on("keyup", function (e) {

    let tel = $(this).val();
    tel = tel.replace(/\D/g, "")
    tel = tel.replace(/^(\d)/, "($1")
    tel = tel.replace(/(.{3})(\d)/, "$1)$2")
    if (tel.length == 9) {
        tel = tel.replace(/(.{1})$/, "-$1")
    } else if (tel.length == 10) {
        tel = tel.replace(/(.{2})$/, "-$1")
    } else if (tel.length == 11) {
        tel = tel.replace(/(.{3})$/, "-$1")
    } else if (tel.length == 12) {
        tel = tel.replace(/(.{4})$/, "-$1")
    } else if (tel.length > 12) {
        tel = tel.replace(/(.{4})$/, "-$1")
    }
    $(this).val(tel);
});

$("#celular").on("keyup", function (e) {

    let tel = $(this).val();
    tel = tel.replace(/\D/g, "")
    tel = tel.replace(/^(\d)/, "($1")
    tel = tel.replace(/(.{3})(\d)/, "$1)$2")
    if (tel.length == 9) {
        tel = tel.replace(/(.{1})$/, "-$1")
    } else if (tel.length == 10) {
        tel = tel.replace(/(.{2})$/, "-$1")
    } else if (tel.length == 11) {
        tel = tel.replace(/(.{3})$/, "-$1")
    } else if (tel.length == 12) {
        tel = tel.replace(/(.{4})$/, "-$1")
    } else if (tel.length > 12) {
        tel = tel.replace(/(.{4})$/, "-$1")
    }
    $(this).val(tel);
});


//FIM MASCARAS



$('#teminscricao').click(() => {
    if ($('#teminscricao').is(":checked")) {
        $("#inscriacaoEstadual").hide();
    } else {
        $("#inscriacaoEstadual").show();
    }
})










async function clientSave() {


    var jsonSaveDadosUser = {
        "firstName": $("#nome").val(),
        "corporateName": $("#razaosocial").val(),
        "corporateDocument": $("#cnpj").val(),
        "tradeName": $("#nomefantasia").val(),
        "im": $("#im").val(),
        "stateRegistration": $("#inscriacaoEstadual").val(),
        "endereco": $("#endereco").val(),
        "cidade": $("#cidade").val(),
        "estado": $("#estado").val(),
        "cep": $("#cep").val(),
        "celular": $("#celular").val(),
        "businessPhone": $("#telefone").val(),
        "email": $("#email").val(),
        "complemento": $("#complemento").val()
    };

    // colocar e-mail tambem como campo
    let alreadyRequested = false;
    let cnpjchecker = jsonSaveDadosUser.corporateDocument.replace(/[\s-/,]+/g, '');
    let resultscnpj = await fetch(`/api/dataentities/CL/search?_fields=corporateDocument&corporateDocument=*${cnpjchecker}*`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json', "Accept": "application/vnd.vtex.ds.v10+json"
        }
    })
        .then(response => {
            return response.json();
        });
    console.log(resultscnpj);

    let resultsemail = await fetch(`/api/dataentities/CL/search?_fields=email&email=*${jsonSaveDadosUser.email}*`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json', "Accept": "application/vnd.vtex.ds.v10+json"
        }
    })
        .then(response => {
            return response.json();
        });
    console.log(resultsemail);







    if (resultscnpj.length >= 1 || resultsemail.length >= 1) {
        alreadyRequested = true;
    }



    if (alreadyRequested) {
        alert("Seu formulário de cadastro já foi enviado, aguarde sua aprovação.");
    } else {
        console.log("nao existo ainda")

        var urlSaveDadosUser = '/api/dataentities/CL/documents/';

        $.ajax({
            headers: {
                'Content-Type': 'application/json',
            },
            data: JSON.stringify(jsonSaveDadosUser),
            type: 'PATCH',
            url: urlSaveDadosUser,
            success: function (data) {
                console.log(data);
                $("div#messageSuccess").removeClass("hide");
                $('html,body').animate({scrollTop: $("body").offset().top});
                $('#buttonSubmit').attr('disabled','disabled');

            },
            error: function (data) {
                console.log(data);
                $("div#messageError").removeClass("hide");
            }
        });
    }




}

function clientValidate() {
    $("div#messageSuccess").addClass("hide");
    $("div#messageError").addClass("hide");

    if (($("#name").val() == "") || ($("#email").val() == "") || ($("#razaosocial").val() == "") || ($("#cnpj").val() == "") || ($("#nomefantasia").val() == "") || ($("#endereco").val() == "")
        || ($("#cidade").val() == "") || ($("#estado").val() == "") || ($("#cep").val() == "") || ($("#telefone").val() == "") || ($("#email").val() == "")) {
        $("div#messageError").removeClass("hide");
    } else {
        clientSave();
    }
}





