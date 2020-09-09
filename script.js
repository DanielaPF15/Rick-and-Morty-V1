function cambiarNombre(idDiv){
    let nombre=prompt('Escribe el nuevo nombre')
    document.getElementById(idDiv).innerHTML=("<h2>"+nombre+"</h2>")
    
}