export const processText = function (rawText, operations) {
  const rows = rawText.split('\n')
  const newRows = rows.map((row, index) => processRow(row, index, operations))
  return newRows
}

const processRow = (row, index, operations) => {
  let newRow = row
  for (const o in operations) {
    const operation = operations[o]
    switch (operation.operation) {
      case 'regex':
        newRow = newRow.replace(new RegExp(operation.from, 'g'), operation.to)
        break
      case 'splitColumn':
        newRow = newRow.substr(0, operation.position) + '\t' + newRow.substring(operation.position, newRow.length)
        break
      case 'insertAt':
        newRow = newRow.substr(0, operation.position) + operation.text + newRow.substring(operation.position, newRow.length)
        break
      default:
        break
    }
  }
  return newRow.split('\t')
}

export const formatTSV = function (array) {
  return array.reduce((result, columns) => {
    const row = columns.reduce((result, column) => result + column + '\t', '')
    return result + row + '\n'
  }, '')
}
