import ChatList from "./list/ChatList"
import Userinfo from "./list/Userinfo"

const List = () => {
  return (
    <div className="basis-1/4 flex flex-col">
      <Userinfo/>
      <ChatList/>
    </div>
  )
}

export default List