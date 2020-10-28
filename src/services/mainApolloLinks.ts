import { ApolloLink } from "@apollo/client";

export default class MainApolloLinks {  
  public cleanTypenameLink = new ApolloLink((operation, forward) => {
    if (operation.variables) {
      operation.variables = this.omitDeep (operation.variables, "__typename")
    }

    return forward(operation).map((data) => {
      return data;
    })
  })

private omitDeep(obj, key) {
  const keys = Object.keys(obj)
  const newObj = {}
  keys.forEach((i) => {
    if (i !== key) {
      const val = obj[i]
      if (Array.isArray(val)) newObj[i] = this.omitDeepArrayWalk(val, key)
      else if (typeof val === 'object' && val !== null) newObj[i] = this.omitDeep(val, key)
      else newObj[i] = val
    }
  })
  return newObj
}

private omitDeepArrayWalk(arr, key) {
  return arr.map((val) => {
    if (Array.isArray(val)) return this.omitDeepArrayWalk(val, key)
    else if (typeof val === 'object') return this.omitDeep(val, key)
    return val
  })
}
}

