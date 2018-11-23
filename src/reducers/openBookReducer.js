export default function openBookReducer(state = {}, action){
  switch(action.type){
    case 'HANDLE_LOGIN':
    //or would it just be event? use debugger to find out, if not working
    debugger
      let username = action.event.target.children[0].children[0].value



      return {}

    default:
      return state
  }
}


  // event.preventDefault()
  // let username = event.target.children[0].children[0].value
  //
  // fetch('http://localhost:3000/api/v1/login', {
  //   method: "POST",
  //     headers: {
  //       "Content-Type" : "application/json",
  //       "Accept" : "application/json"
  //     },
  //     body: JSON.stringify({
  //       name: username
  //     })
  // }).then(res => res.text())
  // .then(data => {
  //   if (!isNaN(data)){
  //     this.setState({
  //       userID: data
  //     })
  //   } else {
  //     alert('Wrong username')
  //   }
  // })
