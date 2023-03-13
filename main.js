const general=document.querySelector('.general')

// const transparente=document.createElement('div')
// transparente.className='list_fondo_transparente'
// const imagen_titulo=document.createElement('div')
// imagen_titulo.className='imagen_titulo'
// const image=document.createElement('img')
// image.src= 'https://thumbs.dreamstime.com/b/to-do-list-banner-template-ribbon-label-sign-177650097.jpg'
// imagen_titulo.append(image)
// const informacion=document.createElement('div')
// informacion.className='informacion'
// const titulo=document.createElement('h1')
// titulo.textContent = 'To Do List'
// const contenedor_input=document.createElement('div')
// contenedor_input.className='contenedor_input'
// const input=document.createElement('input')
// input.setAttribute('type','text')
// const mas=document.createElement('button')
// mas.className='boton'
// mas.textContent='+'
// contenedor_input.append(input)
// contenedor_input.append(mas)


// informacion.append(titulo)
// informacion.append(contenedor_input)

// transparente.append(imagen_titulo)
// transparente.append(informacion)
// general.append(transparente)
const tareas=document.querySelector('.contenedor__tareas')

agregar.addEventListener('click',()=>{
          const tarea=document.createElement('div')
          tarea.textContent =tareita.value
          tarea.className = 'tarea'
          const caneca=document.createElement('img')
          caneca.src="./bin2.png"
          caneca.className='caneca'
          tarea.appendChild(caneca)
          tareas.appendChild(tarea)




          // if(event.target.className='boton'){
          //           const agregar=document.createElement('div')
          //           agregar.className='agregar'
          //           agregar.id='agregar'
          //           agregar.textContent=input.value
          //           const borrar=document.createElement('button')
          //           borrar.className='borrar'
          //           borrar.id='borrar'
          //           agregar.append(borrar)
          //           transparente.appendChild(agregar)
          // }
          tareita.value=''
})
tareas.addEventListener('click',(event)=>{
          if(event.target.className=='caneca'){
                    const borrado=event.target.parentElement
                    borrado.removeChild(borrado)
          }
})