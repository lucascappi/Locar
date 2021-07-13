import { Container } from './styles';

interface LoadingProps{
    size?: 'small' | 'medium' | 'large';
    color?: 'red' | 'gray';
}

export function Loading({
    size = 'large', 
    color = 'red'
}: LoadingProps) {
    return (
        <Container size={size} color={color} />
    )
}