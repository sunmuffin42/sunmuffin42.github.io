class Word {
  constructor(attributes, metadata={}){
    this.form = attributes.form
    this.gloss = attributes.gloss

    this.metadata = metadata
  }

  search(query){
    return this.form.normalize('NFD').match(new RegExp(query, 'ig'))
  }
}


