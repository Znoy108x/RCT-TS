import Greet from "../Greet"

const CustomComponent = ({age , isLoggedIn , name} : React.ComponentProps<typeof Greet>) => {
  return (
    <div>
        <span>Name     : {name}</span>
        <span>Age      : {age}</span>
        <span>Loggedin : {isLoggedIn}</span>
    </div>
  )
}

export default CustomComponent