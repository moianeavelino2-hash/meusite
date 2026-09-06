```javascript
formContacto.onsubmit = e => {
    e.preventDefault();

    let ok = true;

    [nome, email, assunto, mensagem].forEach((campo, i) => {
        let erro = [erroNome, erroEmail, erroAssunto, erroMensagem][i];
        erro.textContent = campo.value.trim() ? "" : "Campo obrigatório";
        if (!campo.value.trim()) ok = false;
    });

    if (ok) {
        sucesso.textContent = "Mensagem enviada com sucesso!";
        formContacto.reset();
    }
};
```
