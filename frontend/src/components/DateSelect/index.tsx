import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

import { add } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { useEffect } from 'react';

import { Container } from './styles';

interface DateSelectProps{
    pickUpDate: MaterialUiPickersDate;
    dropOffDate: MaterialUiPickersDate;
    setPickUpDate: (date: MaterialUiPickersDate) => void;
    setDropOffDate: (date: MaterialUiPickersDate) => void;
}

export function DateSelect({
    pickUpDate,
    dropOffDate,
    setPickUpDate,
    setDropOffDate
}: DateSelectProps) {

    //Check if the pickup date is bigger than dropoff and then update dropoff date

    useEffect(() => {
        if(pickUpDate && dropOffDate){
            if(pickUpDate > dropOffDate){
                setDropOffDate(pickUpDate)
            }
        }  
    }, [pickUpDate, dropOffDate, setDropOffDate])

    //Handle max date of 30 days to dropoff

    function handleMaxDate(pickUpDate: MaterialUiPickersDate){

        if(pickUpDate){
            return add(pickUpDate, { days: 30})
        }
    }

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptBR}>
            <Container>
                <strong>De:</strong>
                <KeyboardDatePicker 
                    value={pickUpDate} 
                    minDate={add(new Date(), {days: 1})}
                    onChange={(date) => setPickUpDate(date)}
                    format="dd/MM/yyyy"
                    autoOk
                />
            </Container>
            <Container>
                <strong>Até:</strong>
                <KeyboardDatePicker 
                    value={dropOffDate} 
                    minDate={pickUpDate}
                    maxDate={handleMaxDate(pickUpDate)}
                    onChange={(date) => setDropOffDate(date)}
                    format="dd/MM/yyyy"
                    autoOk
                />
            </Container>
        </ MuiPickersUtilsProvider>
        
    )
}