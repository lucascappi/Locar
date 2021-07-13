import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../../services/api";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";

import { useAuth } from "../../hooks/useAuth";
import { ColorSelect } from "../../components/ColorSelect";
import { Loading } from "../../components/Loading";
import { DateSelect } from "../../components/DateSelect";

import { Container } from "./styles";
import { 
    add,
    parseJSON
} from "date-fns";
import moment from 'moment'
import { toast } from "react-toastify";

interface RouteParams{
    id: string;
}

interface Response{
    message: string;
    success: boolean;
}

interface Booking{
    dropOffDate: MaterialUiPickersDate;
    pickUpDate: MaterialUiPickersDate;
    userId: string;
    vehicle: Vehicle;
}

interface Vehicle{
    id: string;
    brand: string;
    model: string;
    year: number;
    colors: string[];
    km: number;
    image: string;
}

export default function Rent() {
    const { id } = useParams<RouteParams>();
    const { user } = useAuth();
    const[vehicle, setVehicle] = useState<Vehicle>({} as Vehicle);
    const[loadingVehicle, setLoadingVehicle] = useState(true);
    const[loadingRent, setLoadingRent] = useState(false);

    const[bookings, setBookings] = useState<Booking[]>([]);
    const[dropOffDate, setDropOffDate] = useState<MaterialUiPickersDate>(add(new Date(), {days: 1}));
    const[pickUpDate, setPickUpDate] = useState<MaterialUiPickersDate>(add(new Date(), {days: 1}));
    const[selectedColor, setSelectedColor] = useState('');


    useEffect(() => {
        //Get vehicle by Id from api

        async function fetchVehicle(){
            const { data } = await api.get<Vehicle>(`vehicles/${id}`);
    
            setVehicle(data);
            setLoadingVehicle(false);
        }

        //Get bookings list from api with formated date formats

        async function fetchBookings(){
            const { data } = await api.get<Booking[]>('bookings');

            const formatedData: Booking[] = data.map(booking => {
                if(booking.pickUpDate && booking.dropOffDate){
                    return {
                        ...booking,
                        pickUpDate: parseJSON(booking.pickUpDate),
                        dropOffDate: parseJSON(booking.dropOffDate),
                    }
                } else {
                    return booking
                }
            })
            setBookings(formatedData);
        }

        //Fetch data when the component starts

        fetchVehicle();
        fetchBookings();
    }, [id])

    useEffect(() => {
        //Change page title when vehicle is loaded

        document.title=`Locar | ${vehicle.brand} ${vehicle.model}`

    }, [vehicle.brand, vehicle.model])

    async function checkVehicleAvailable(
        dropOffDate: MaterialUiPickersDate, 
        pickUpDate: MaterialUiPickersDate,
        vehicleId: string,
        userId: string
    ){

        let response: Response = { 
            message: 'Veículo reservado com sucesso',
            success: true
        };

        bookings.forEach(booking => {

            if(booking.pickUpDate && booking.dropOffDate && pickUpDate && dropOffDate){
                if(booking.vehicle.id === vehicleId){
                    const isBefore = (moment(pickUpDate).isBefore(booking.pickUpDate, 'day') && moment(dropOffDate).isBefore(booking.pickUpDate, 'day'));
                    const isAfter = (moment(pickUpDate).isAfter(booking.dropOffDate, 'day') && moment(dropOffDate).isAfter(booking.dropOffDate, 'day'));

                    if(!(isBefore || isAfter) || 
                    (moment(booking.pickUpDate).isSame(pickUpDate) || moment(booking.dropOffDate).isSame(dropOffDate))
                    ){
                        return response = {
                            message: 'Veículo já reservado nessa data',
                            success: false
                        };
                    }
                }         
                
                if(booking.userId === userId){
                    const isBefore = (moment(pickUpDate).isBefore(booking.pickUpDate, 'day') && moment(dropOffDate).isBefore(booking.pickUpDate, 'day'));
                    const isAfter = (moment(pickUpDate).isAfter(booking.dropOffDate, 'day') && moment(dropOffDate).isAfter(booking.dropOffDate, 'day'));

                    if(!(isBefore || isAfter) || 
                    (moment(booking.pickUpDate).isSame(pickUpDate) || moment(booking.dropOffDate).isSame(dropOffDate))
                    ){
                        return response = {
                            message: 'Você já possui um agendamento nessa data',
                            success: false
                        };
                    }
                }
            }
        })

        return response;
    }

    async function rentVehicle(){
        try{
            setLoadingRent(true);

            let booking: Booking = {
                dropOffDate,
                pickUpDate,
                userId: user.id,
                vehicle: {
                    ...vehicle,
                    colors: vehicle.colors.filter(color => color === selectedColor),
                }
            }

            const response: Response = await checkVehicleAvailable(
                dropOffDate, 
                pickUpDate,
                vehicle.id,
                user.id
            );

            if(!response.success){
                toast.error(response.message);
                return;
            } else{
                api.post('/bookings', booking);
                setBookings([...bookings, booking]);
                toast.success(response.message);
            }
            
        } catch{
            toast.error('Erro na reserva do veículo');
        } finally{
            setLoadingRent(false);
        }
    }

    return (
        <Container>
            {
                loadingVehicle ? <Loading /> 
                : (
                    <>
                        <main>
                            <section>
                                <h1>{vehicle.brand} - {vehicle.model}</h1>
                                <p>
                                    <strong>{vehicle.year}</strong> / {vehicle.km} km
                                </p> 
                                <div>
                                    <strong>Selecione a cor</strong>
                                    <ColorSelect 
                                        colors={vehicle.colors}
                                        selectedColor={selectedColor}
                                        setSelectedColor={setSelectedColor}
                                    />
                                </div>
                                <div>
                                    <strong>Selecione o período da reserva <span>(máx: 30 dias)</span></strong>
                                    <div className="date-container">   
                                        <DateSelect 
                                            dropOffDate={dropOffDate} 
                                            pickUpDate={pickUpDate}
                                            setDropOffDate={setDropOffDate}
                                            setPickUpDate={setPickUpDate}
                                        />
                                    </div>
                                </div>
                            </section>

                            <img src={vehicle.image} alt={vehicle.brand} />
                        </main>
                        
                        <footer>
                            <Link to="/">
                                Voltar
                            </Link>

                            <div />
                            
                            <button 
                                onClick={rentVehicle}
                                disabled={loadingRent}
                            >
                                { loadingRent ? <Loading size="small" color="gray"/> : 'Reservar agora'}
                            </button>
                        </footer>
                    </>
                )
            }
                
        </Container>
    )
}