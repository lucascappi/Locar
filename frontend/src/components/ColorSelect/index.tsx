import { useEffect, useState } from 'react';
import { Container } from './styles';

import { FiChevronDown } from 'react-icons/fi';

interface ColorSelectProps{
    selectedColor: string;
    setSelectedColor: (color: string) => void;
    colors: string[];
}

export function ColorSelect({
    selectedColor, 
    setSelectedColor, 
    colors
}: ColorSelectProps) {
    const[selectOpen, setSelectOpen] = useState(false);

    useEffect(() => {
        //Set the color as the first color in the array

        setSelectedColor(colors[0]);
    }, [colors, setSelectedColor])

    function selectColor(color: string){
        //Check if the color is not the same as the selected previously

        if(color !== selectedColor){
            setSelectedColor(color);
        }

        setSelectOpen(false);
    }

    return (
        <Container selectOpen={selectOpen}>
            <div onClick={() => setSelectOpen(!selectOpen)}>
                <span>
                    Cor: <strong>{selectedColor}</strong>
                </span> 
                <FiChevronDown 
                size={18}
                className="icon"
                />
            </div>
            { selectOpen && (
                <ul>
                    {colors.map(color => (
                        <li key={color} onClick={() => selectColor(color)}>
                            {color}
                        </li>
                    ))}
                </ul>
            )}
        </Container>
    )
}