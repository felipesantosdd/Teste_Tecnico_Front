import ResponsiveAppBar from "@/components/appBar/appBar";
import Body from "@/components/body/body";
import { Provider } from "@/context/context";

export default function Dashboard() {

    return (
        <Provider>
            <Body>
                <ResponsiveAppBar />
            </Body>
        </Provider>

    )
}