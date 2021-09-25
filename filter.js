import { v4 as uuidv4 } from 'uuid'

export function createEntry (input, expandDepth) {
  if (!Array.isArray(input)) {
    input = [input]
  }
  return input.map(entry => {
    return {
      id: uuidv4(),
      expandDepth,
      data: entry
    }
  })
}

export function filterEntry (entry, searchInput) {
  if (!searchInput || JSON.stringify(entry.data).includes(searchInput)) {
    return entry
  }
}

export function filterData (input, searchInput, expandDepth) {
  const result = []
  input.forEach(entry => {
    const res = filterEntry(entry, searchInput)
    if (res) {
      res.expandDepth = expandDepth
      result.push(res)
    }
  })
  return result
}

