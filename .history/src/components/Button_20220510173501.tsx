import { ButtonHTMLAttributes } from 'react';

import '../styles/Button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutlined?: boolean
}

export function Button({ isOutlined = false, ...props}: ButtonProps) { 
    return (
        <button 
            className={`button ${isOutlined ? 'outlined' : ''}`} 
            {...props}
        />
    )
}

// Ensinamentos desse componente 

// 1° Repassse de props - Quando pega todas as propriedades que ele recebe (...props) e passa para outro (no caso, o botão do HTML).

//...props restprops do Javascript