import { useState, useEffect } from "react";

import { api } from "../../services/api";

import { 
    Container, 
    VehicleContent 
} from "./styles";

import { Loading } from "../Loading";

interface Vehicle{
    id: string;
    brand: string;
    model: string;
    image: string;
    year: string;
}

export function VehicleList() {
    const[vehicles, setVehicles] = useState<Vehicle[]>([]);
    const[loading, setLoading] = useState(true);

    useEffect(() => {
        //Get vehicles from api
    
        async function fetchVehicles(){
            const { data } = await api.get<Vehicle[]>('vehicles');

            setVehicles(data);
            setLoading(false);
        }

        //Fetch data when the component starts

        fetchVehicles();
    }, [])

    return (
        <Container>
            { loading ? <Loading /> :

                vehicles.map(vehicle =>(
                    <VehicleContent to={`/alugar/${vehicle.id}`} key={vehicle.id}>
                        <strong>{vehicle.brand} - {vehicle.model}</strong>
                        <p>{vehicle.year}</p>
                        
                        <img src={vehicle.image} alt={vehicle.brand} />
                    </VehicleContent>
                ))
            }
        </Container>
    )
}