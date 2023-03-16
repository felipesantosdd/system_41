import { BodyComponent } from "../components/body/body";
import SearchAppBar from "../components/header/header"
import { Products } from "../components/products/products";

export function Dashboard() {

    return (
        <>
            <BodyComponent>
                <SearchAppBar></SearchAppBar>
                <Products />
            </BodyComponent>
        </>
    )
}