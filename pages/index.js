import Publication from 'Components/CustomComponents/Publication'
import Sidebar from 'Components/CustomComponents/SideBar'
import UserStatus from 'Components/CustomComponents/UserStatus'

export default function MainRoute() {
  return (
    <div>
      {/* <UserStatus title="magnus" description="ahhh sos picante" isActive/> */}
      <Publication/>
      {/* <Sidebar /> */}
    </div>
  )
}
