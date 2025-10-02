let nomes = [
	"sherlock",
	"watson",
	"adams",
	"arthur",
	"marvin",
	"morgan",
	"leon",
	"simon",
]

function pesquisarNome(){
	let nomePesquisa = document.getElementById('campoNome').value
	let itensLista = ''

	for(indice in nomes){
		let nome = nomes[indice];
		if ( nomePesquisa == nome ){
			itensLista += `
			<li class="list-group-item">
				${nome}
			<li>`
		}
	}
	
	document.getElementById('lista').innerHTML = itensLista
}

function carregarNomes(){

	let itensLista = ''
	for(indice in nomes){
		let nome = nomes[indice]

		itensLista += `
			<li class="list-group-item">
				${nome}
			<li>`

		// alert(itensLista)
	}

	document.getElementById('lista').innerHTML = itensLista
}