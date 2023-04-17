import Body from '@/components/body/body'
import Login from '@/components/login/login'
import { Provider } from '@/context/context'


export default function LoginPage() {
  return (
    <Provider>
      <Body>
        <Login />
      </Body>
    </Provider>
  )
}
