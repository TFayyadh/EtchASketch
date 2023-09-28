const brownButton =  document.querySelector('.brown')
const blackButton =  document.querySelector('.black')
const startButton =  document.querySelector('.start')
const container = document.querySelector('.container')
const clearGrid = document.querySelector('.clear')

const createGrid = (size) => {

    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')

    for(i = 0; i < size; i++){
        const row = document.createElement("div")
        row.classList.add('grid-row')

        for (j = 0; j< size; j++){
            const widthAndHeight = 960 / size
            const gridBox = document.createElement("div")
            gridBox.classList.add('grid-box')
            gridBox.style.width = `${widthAndHeight}px`
            gridBox.style.height = `${widthAndHeight}px`

            gridBox.addEventListener('mouseenter',() => {
                gridBox.style.backgroundColor = "black"
            })

            clearGrid.addEventListener('click', () => {

                gridBox.style.backgroundColor = 'white'
            
            })

            brownButton.addEventListener('click', () => {
                

                gridBox.addEventListener('mouseenter',() => {
                    gridBox.style.backgroundColor = "brown"
                })
                
            
            })

            blackButton.addEventListener('click', () => {

                gridBox.addEventListener('mouseenter',() => {
                    gridBox.style.backgroundColor = "black"
                })
                
            
            })

            row.appendChild(gridBox)

        }

        wrapper.appendChild(row)
    }
    container.appendChild(wrapper)
}


startButton.addEventListener('click', () => {
    let userSize = Number(prompt('Give a number for the new grid'))

    while(userSize > 100){
        
        userSize = Number(prompt('Pick a number from 2 to 100'))
        
    }

    const wrapper = document.querySelector('.wrapper')
    
    if(!wrapper){
        createGrid(userSize)
    }else {
        wrapper.remove()
        createGrid(userSize)
    }
    
})

