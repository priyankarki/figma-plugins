var gridSize = 10

var sel = figma.currentPage.selection

//go through every object in the selection and change it
for(var i = 0; i < sel.length; i++){
  var node = sel[i]


  //fix position
  node.x = Math.round(node.x / gridSize) * gridSize
  node.y = Math.round(node.y / gridSize) * gridSize

  //fix size
  var roundedWidth = Math.round(node.width/ gridSize) * gridSize
  var roundedHeight = Math.round(node.height/ gridSize) * gridSize
  node.resize(roundedWidth, roundedHeight)
}

figma.closePlugin("Done!")
