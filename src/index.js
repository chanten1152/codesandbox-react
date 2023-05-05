const onClickAdd = () => {
  const inputText = document.getElementById('addText').value
  document.getElementById('addText').value = ''
  createIncompleteList(inputText)
}

const deleteFromIncomplete = (target) => {
  document.getElementById('incomplete-list').removeChild(target)
}

const createIncompleteList = (text) => {
  
  const div = document.createElement('div')
  div.className = 'list-row'

  const li = document.createElement('li')
  li.innerText = text

  const completeButton = document.createElement('button')
  completeButton.innerText = '完了'
  completeButton.addEventListener('click', () => {
    deleteFromIncomplete(completeButton.parentNode)
  
    const addTarget = completeButton.parentNode
    const text = addTarget.firstElementChild.innerText
    addTarget.textContent = null
    const li = document.createElement('li')
    li.innerText = text

    const backButton = document.createElement('button')
    backButton.innerText = '戻す'
    backButton.addEventListener('click', () => {
      const deleteTarget = backButton.parentElement
      document.getElementById ('complete-list').removeChild(deleteTarget)

      const text = backButton.parentNode.firstElementChild.innerText
      createIncompleteList(text)
    })

    addTarget.appendChild(li)
    addTarget.appendChild(backButton)

    document.getElementById('complete-list').appendChild(addTarget)
  })
  
  const deleteButton = document.createElement('button')
  deleteButton.innerText = '削除'
  deleteButton.addEventListener('click', () => {
    deleteFromIncomplete(deleteButton.parentNode) 
  })

  div.appendChild(li)
  div.appendChild(completeButton)
  div.appendChild(deleteButton)

  document.getElementById('incomplete-list').appendChild(div)
}

document.getElementById('addButton').addEventListener('click', () => onClickAdd())