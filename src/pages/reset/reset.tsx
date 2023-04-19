import ResponsiveAppBar from "@/components/appBar/appBar";
import Body from "@/components/body/body";
import Reset from "@/components/reset/reset";
import { Provider } from "@/context/context";

export default function ResetPassword() {

    return (
        <Provider>
            <Body>
                <Reset token={''} />
            </Body>
        </Provider>

    )
}