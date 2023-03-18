import { BodyComponent } from "../components/body/body";
import ClientsTables from "../components/clients/clients";
import { Container } from "../components/container/container.styled";
import SearchAppBar from "../components/header/header";

export function Clientes() {

    return (
        <BodyComponent>
            <SearchAppBar />
            <Container style={{ paddingBottom: 0, height: 'auto', alignItems: "baseline", borderRadius: "0" }}>
                <ClientsTables />
            </Container>

        </BodyComponent>

    )
}