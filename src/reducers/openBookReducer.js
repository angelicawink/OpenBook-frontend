export default function openBookReducer(state = {}, action){
  switch(action.type){
    case 'HANDLE_LOGIN':
    //or would it just be event? use debugger to find out, if not working
    debugger
      // let username = action.event.target.children[0].children[0].value



      return {}

    default:
      return state
  }
}
