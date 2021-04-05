const initional = {
  name: ''
}

export function getUserAuth(state = initional, action) {
  switch (action.type) {
    case 'ALL':
      console.log('all')
      
      return {...state, name: action}
    case 'TOKEN':
      console.log('token')
      return state
    case 'USERID':
      console.log('userid')
      return state
    default:
      return state
  }
}
