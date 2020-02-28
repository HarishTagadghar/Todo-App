
let  notes = [
    {title:'GO to home',
    discription:'do some work'},
    {title:'come to shop',
    discription:'do some work'},
     {title:'go to market',
      discription:'do some work'}
]

let filter = {
    searchtext:''
}
let todosjson = localStorage.getItem('todos')
if(todosjson !== null){
    notes = JSON.parse(todosjson)
}

// notes = JSON.parse(todosjson) 

const renderingnotes = function (notes, filter ){
    const filtertitle = notes.filter(function(note){
        return note.title.toUpperCase().includes(filter.searchtext.toUpperCase())
    })
      
        
    document.querySelector('#notes').innerHTML = ''

    filtertitle.forEach(function(note){
        let paragraph = document.createElement('p')
        paragraph.textContent = note.title;
        document.querySelector('#notes').appendChild(paragraph)
    })

}
renderingnotes(notes,filter)

document.querySelector('#search-input').addEventListener('input',function(e){
    filter.searchtext = e.target.value
    renderingnotes(notes,filter)
})

document.querySelector('#add-todo').addEventListener('submit',function(e){
    e.preventDefault();
    notes.push({
        title:e.target.elements.notestitle.value,
        discription:'do some work'
    })
    
    localStorage.setItem('todos', JSON.stringify(notes))
    
    renderingnotes(notes,filter)
    e.target.elements.notestitle.value = ''
})