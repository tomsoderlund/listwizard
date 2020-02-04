
function getTextfieldAsArray (textfieldObj) {
  textArray = new Array()
  strCount = 0
  strPos = -1
  strOldPos = 0
  while ((strPos = textfieldObj.value.indexOf('\n', strPos + 1)) != -1) {
    wordStr = textfieldObj.value.substring(strOldPos, strPos)
    textArray[strCount] = wordStr
    strCount++
    strOldPos = strPos + 1
  }
  if (strOldPos < textfieldObj.value.length - 1) {
    strPos = textfieldObj.value.length
    wordStr = textfieldObj.value.substring(strOldPos, strPos)
    textArray[strCount] = wordStr
  }
  return textArray
}

function doRunScript () {
  appMode = ListForm.listOperands.value

  // Read words
  arrayWordlist = new Array()
  arrayWordlist[0] = getTextfieldAsArray(ListForm.textListA)
  arrayWordlist[1] = getTextfieldAsArray(ListForm.textListB)

  const appendToResult = function (str, addNewLine = true) {
    ListForm.textListResult.value += str + (addNewLine ? '\n' : '')
  }

  // Loop through lists
  ListForm.textListResult.value = ''
  aggregationNewWords = ''
  maxLoop = 10000
  for (a = 0; a < arrayWordlist[0].length && a < maxLoop; a++) {
    wordA = arrayWordlist[0][a]
    wordAsearch = wordA
    if (ListForm.checkCaseInsensitive.checked) { wordAsearch = wordAsearch.toLowerCase() }
    foundWord = false
    for (b = 0; b < arrayWordlist[1].length && b < maxLoop; b++) {
      wordB = arrayWordlist[1][b]
      wordBsearch = wordB
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
        for (b = 0; b < arrayWordlist[1].length && b < maxLoop; b++) {
          wordB = arrayWordlist[1][b]
          appendToResult(wordA + ' ' + wordB)
        }
      },

      doRemoveDuplicates: function () {
        // Check duplicates from A only
        if (a >= 1) {
          wordLastAsearch = arrayWordlist[0][a - 1]
          if (ListForm.checkCaseInsensitive.checked) { wordLastAsearch = wordLastAsearch.toLowerCase() }
          if (wordLastAsearch != wordAsearch) {
            appendToResult(wordA)
          }
        } else { appendToResult(wordA) }
      }
    }

    // Execute
    doFunctions['do' + appMode]()
  }
  ListForm.textListResult.value += aggregationNewWords
}
