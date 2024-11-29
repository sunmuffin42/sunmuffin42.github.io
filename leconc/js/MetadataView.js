class MetadataView {
  constructor(metadata, el=document.createElement("table")){
    this.metadata = metadata
    this.el = el
    this.el.classList.add("metadata-table")

    this.initialize()
  }

  initialize(){
    this.el.innerHTML = `
  <tbody>
  </tbody>
`
  }

  get tbody(){
    return this.el.querySelector('tbody')
  }

  get tbody(){
    return this.el.querySelector('tbody')
  }

  renderArray(arrayValue){
    let ol = document.createElement('ol')
    this.td.appendChild(ol)

    arrayValue.forEach(item => {
      ol.appendChild(new MetadataView(item).render().el)
    })

    return this
  }

  renderObject(objectValue){
    this.td.appendChild(new MetadataView(objectValue).render().el)

    return this
  }

  renderPrimitive(primitiveValue){
    this.td.textContent = primitiveValue
    return this
  }

  renderValue(value){
    if(Array.isArray(value)){ // the value is an array
      this.renderArray(value)
    } else if(typeof value == 'object'){ // the value is an array
      this.renderObject(value)
    } else { // it’s neither an array nor an object, just print it
      this.renderPrimitive(value)
    }
  }

  render(){
    Object.entries(this.metadata).forEach(([property, value]) => {
      let tr = document.createElement('tr')
      this.tbody.appendChild(tr)
      let th = document.createElement('th')
      th.textContent = property
      tr.appendChild(th)

      this.td = document.createElement('td')
      tr.appendChild(this.td)
      this.renderValue(value)
    })
    return this
  }
}
  
