import { createEntry, filterData } from './filter'

onmessage = e => {
  const { data: [action, data, args = []] } = e
  let result
  switch (action) {
    case 'createEntry':
      result = createEntry(data, ...args)
      break
    case 'filter':
      debugger
      try {
        result = filterData(data, ...args)
      } catch (e) {
        console.error(e)
      }
      break
  }
  postMessage(result)
}

