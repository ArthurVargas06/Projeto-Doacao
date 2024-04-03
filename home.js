document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById('menu')
    
    const itensMenu = [
        { nome: "REQUISITOS BÁSICOS PARA DOAÇÃO", descricao: "" },
        { nome: "Estar em boas condições de saúde", descricao: "" },
        { nome: "Documento oficial", descricao: "Com foto" },
        { nome: "Estar descansado", descricao: "Ter dormido pelo menos 6 horas antes de doar" },
        { nome: "Ter entre 18 e 69 anos", descricao: "Permitida doação a partir de 16 anos se acompanhado de responsável legal à cada doação" },
        { nome: "Estar alimentado", descricao: "Evitar alimentos gordurosos 3h antes da doação" }
    ]

    itensMenu.forEach(item => {
        const div = document.createElement('div')
        div.classList.add('menu-item')
        div.innerHTML = `<h2>${item.nome}</h2><p>${item.descricao}</p>`
        menu.appendChild(div)
    })

    const locais = [
        { nome: "HEMOVIDA - Hospital Regina", telefone: "(51) 2581-5241", endereco: "Av. Dr. Mauricio Cardoso, 711 - B. Hamburgo velho, Novo Hamburgo" },
        { nome: "Unidade de coleta de sangue do hospital Getúlio Vargas", telefone: "(51) 3451-820", endereco: "Rua pinheiro machado, 331, B. Diehl, sapucaia do sul" },
        { nome: "HEMOCENTRO Porto Alegre", telefone: "(51) 3336-6755", endereco: "Av. Bento Gonçalves, 3722 - Bairro Partenon, Porto Alegre" }
    ]

    const locaisContainer = document.createElement('div')
    locaisContainer.classList.add('locais-container')
    locais.forEach(local => {
        const localBox = document.createElement('div')
        localBox.classList.add('local-box')
        localBox.innerHTML = `
            <h2>${local.nome}</h2>
            <p>Telefone: ${local.telefone}</p>
            <p>Endereço: ${local.endereco}</p>
        `
        locaisContainer.appendChild(localBox)
    })
    menu.appendChild(locaisContainer)
})
