import { useEffect } from "react";
import { VehicleList } from "../../components/VehicleList";

import { Container } from "./styles";

export default function Home() {
    
    useEffect(() => {
        document.title="Locar | Início";
    }, []);

    return (
        <Container>
            <h1>Veículos</h1>
            <p>Selecione um dos veículos disponíveis para locação.</p>
            <main>
                <VehicleList />
            </main>
        </Container>
    )
}
