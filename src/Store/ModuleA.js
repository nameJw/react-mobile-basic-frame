export default function moduleA(stateModify, action) {
  if (!stateModify) {
    return {}
  }
  switch(action.type) {
    case 'MODIFY_STATE':
      return Object.assign({}, stateModify, action)
    default:
      return stateModify
  }
}