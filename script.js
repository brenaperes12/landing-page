const formulario = document.getElementById("formOrcamento");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const servico = document.getElementById("servico").value;
    const mensagem = document.getElementById("mensagem").value;

    const numeroWhatsApp = "5585999999999";

    const texto = `
Olá, JR Vidraçaria!

Gostaria de solicitar um orçamento.

Nome: ${nome}
Meu WhatsApp: ${telefone}
Serviço: ${servico}

Descrição do projeto:
${mensagem}
    `;

    const mensagemCodificada = encodeURIComponent(texto);

    const linkWhatsApp =
        `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;


    window.open(linkWhatsApp, "_blank");

});