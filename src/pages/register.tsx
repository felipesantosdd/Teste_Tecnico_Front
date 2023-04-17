import Body from "@/components/body/body";
import Register from "@/components/register/register";
import { Provider } from "@/context/context";

export default function RegisterPage() {

    return (
        <Provider>
            <Body>
                <Register />
            </Body>
        </Provider>
    )
}