const editList = {
  list: [],
  add: function(value) {this.list.push(value)},
  remove: function() {this.list.pop()}
}

const view = (arr) => {
  const listCt = document.getElementById('list')
  const formCt = document.getElementById('form')
  console.log(formCt)
  
  const renderList = (arr) => {
    listCt.append(arr)
  }
  
  const clearList = (el) => {
  el.innerHTML = '' 
  }
  
  return {
    listCt,
    formCt,
    renderList,
    clearList
  }
}

// Controller
const controller = ((mo, vi) => {
  const viewable = vi()
  
})(editList, view)




