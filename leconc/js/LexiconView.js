/*
Interface for interacting with 
the lexicon of a language
*/

class LexiconView {
	constructor(lexicon=new Lexicon, el){
		this.lexicon = new Lexicon(lexicon, lexicon.metadata)
		this.el = el

		this.initialize()
	}

	initialize(){
		this.el.innerHTML += `
		<header class=drop-lexicon-view>
			<h1>Lexicon</h1>
		</header>

		<section class=lexicon-query></section>
		<section class=full-lex-view>
		</section>
		`
		this.lexiconQuery = new LexiconQuery(this.lexicon, this.el.querySelector('.lexicon-query'))
		this.fullLexView = new FullLexView(this.el.querySelector('.full-lex-view'))

		this.listen()
	}

	showLex(lex){
		this.fullLexView = new FullLexView(lex, this.el.querySelector('.full-lex-view'))
		this.fullLexView.render()
	}

	render(){
	}

	listen(){
		this.el.addEventListener('lexicon-processed', lexiconProcessedEvent => {
			this.lexicon.add(lexiconProcessedEvent.detail.text)
		})

		this.el.addEventListener('show-lex-request', showLexRequest => {
			let text = showLexRequest.detail.text
			this.showLex(lex)
		})
	}
}