import ResponsiveAppBar from "@/components/appBar/appBar";
import Body from "@/components/body/body";
import TableComponent from "@/components/table/table";
import { Provider } from "@/context/context";

export default function Dashboard() {

    return (
        <Provider>
            <Body>
                <ResponsiveAppBar />
                <TableComponent />
            </Body>
        </Provider>

    )
}