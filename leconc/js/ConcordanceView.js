class ConcordanceView {
  constructor(corpus, el=document.createElement('section')){
    this.corpus = corpus
    this.el = el
    this.el.classList.add('concordance-view')

    this.initialize()
    this.listen()
  }

  initialize(){
    this.el.innerHTML = `
  <header>
    <section class="query info">
      <h2>Concordance</h2>
    
      <input class="query" placeholder="Search for a word…">
      
      <div class=results-summary>
         <p>Number of results: <span class=results-count>0</span></p>
      </div>

      <!-- 
      <div class="filters">
        <p>Filter texts by…
        <select id= name=text-filter>
          <option value=genre>Genre</option>
          <option value=author>Author</option>
        </select></p>
      </div>
      
      <div class="filter">
        <p>Choose among:
        <select name=filter-values>
          <option value=genre>Horror</option>
          <option value=author>Romance</option>
        </select></p>
      </div> 
      -->
    
    </section>
  </header>

  <div class=concordance>
 …results will be here…
  </div>

`
  }

  get textCount(){
    return this.el.querySelector('.text-count span')
  }

  set textCount(count){
    this.textCount.textContent = count
  }

  get isRegex(){
    return this.el.querySelector('input.regex').checked
  }

  get resultsCountSpan(){
    return this.el.querySelector('.results-count')
  }

  set resultsCountSpan(n){
    this.el.querySelector('.results-count').textContent = n
  }


  get queryInput(){
    return this.el.querySelector('input.query')
  }

  get query(){
    let unnormalizedQuery = this.queryInput.value
    let normalizedQuery = unnormalizedQuery.normalize('NFD')
    return normalizedQuery
  }

  get concordanceDIV(){
    return this.el.querySelector('.concordance')
  }

  highlightQuery(query, sentenceView){
    sentenceView.highlight(query)
  }

  groupByText(hits){
    return hits.reduce((byText, hit) => {
      let textId = hit.text.metadata.file.fileName // @@ too specific
      if(!byText[textId]){
        byText[textId] = [] 
      }
      byText[textId].push(hit)
      return byText
    }, {})
  }

  search(){
    this.hits = this.corpus.search(this.query)
    this.hitViews = this.hits.map(hit => {
      let sentenceView = new HitView(hit)
      return sentenceView
    })
    
    this.render()

  }


  render(){
    if(this.hitViews.length === 0){ 
      this.concordanceDIV.innerHTML = ''
      return 
    }

    let fragment = document.createDocumentFragment()
    this.hitViews.forEach(hitView => {
      hitView.render()
      this.highlightQuery(this.query, hitView)
      fragment.appendChild(hitView.el)
    })

    this.concordanceDIV.innerHTML = ''
    this.concordanceDIV.appendChild(fragment)

    this.resultsCountSpan = this.hits.length
  }

  listen(){
    this.el.addEventListener('keyup', keyupEvent => {
      if(this.query && keyupEvent.key == 'Enter'){
        this.search()
      }
    })
  }
}




