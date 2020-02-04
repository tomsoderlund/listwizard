
function getTextfieldAsArray (textfieldObj) {
  const textArray = new Array()
  let strCount = 0
  let strPos = -1
  let strOldPos = 0
  while ((strPos = textfieldObj.value.indexOf('\n', strPos + 1)) != -1) {
    const wordStr = textfieldObj.value.substring(strOldPos, strPos)
    textArray[strCount] = wordStr
    strCount++
    strOldPos = strPos + 1
  }
  if (strOldPos < textfieldObj.value.length - 1) {
    strPos = textfieldObj.value.length
    const wordStr = textfieldObj.value.substring(strOldPos, strPos)
    textArray[strCount] = wordStr
  }
  return textArray
}

export function doRunScript () {
  // Read words
  const arrayWordlist = new Array()
  arrayWordlist[0] = getTextfieldAsArray(ListForm.textListA)
  arrayWordlist[1] = getTextfieldAsArray(ListForm.textListB)

  const appendToResult = function (str, addNewLine = true) {
    ListForm.textListResult.value += str + (addNewLine ? '\n' : '')
  }

  // Loop through lists
  ListForm.textListResult.value = ''
  let aggregationNewWords = ''
  const maxLoop = 10000
  let wordA, wordB
  for (let a = 0; a < arrayWordlist[0].length && a < maxLoop; a++) {
    wordA = arrayWordlist[0][a]
    let wordAsearch = wordA
    if (ListForm.checkCaseInsensitive.checked) { wordAsearch = wordAsearch.toLowerCase() }
    let foundWord = false
    for (let b = 0; b < arrayWordlist[1].length && b < maxLoop; b++) {
      wordB = arrayWordlist[1][b]
      let wordBsearch = wordB
      if (ListForm.checkCaseInsensitive.checked) { wordBsearch = wordBsearch.toLowerCase() }
      if (wordBsearch == wordAsearch) { foundWord = true }
    }

    const doFunctions = {
      doSubtraction: function () {
        // Subtract A-B
        if (!foundWord) {
          appendToResult(wordA)
        } else {
          if (!ListForm.checkRemoveEmpty.checked) { appendToResult('') }
        }
      },

      doIntersection: function () {
        // In Both (in A and B)
        if (foundWord) {
          appendToResult(wordA)
        } else {
          if (!ListForm.checkRemoveEmpty.checked) { appendToResult('') }
        }
      },

      doAggregation: function () {
        // Unify both A and B, no duplicates
        appendToResult(wordA)
        if (!foundWord && aggregationNewWords.indexOf(wordB) == -1) {
          aggregationNewWords += wordB + '\n'
        }
      },

      doMultiply: function () {
        for (let b = 0; b < arrayWordlist[1].length && b < maxLoop; b++) {
          wordB = arrayWordlist[1][b]
          appendToResult(wordA + ' ' + wordB)
        }
      },

      doRemoveDuplicates: function () {
        // Check duplicates from A only
        if (a >= 1) {
          let wordLastAsearch = arrayWordlist[0][a - 1]
          if (ListForm.checkCaseInsensitive.checked) { wordLastAsearch = wordLastAsearch.toLowerCase() }
          if (wordLastAsearch != wordAsearch) {
            appendToResult(wordA)
          }
        } else { appendToResult(wordA) }
      }
    }

    // Execute
    const appMode = ListForm.listOperands.value
    doFunctions['do' + appMode]()
  }
  ListForm.textListResult.value += aggregationNewWords
}
