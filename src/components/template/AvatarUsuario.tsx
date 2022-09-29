import Link from "next/link"
import { useEffect, useState } from "react"
import useAuth from "../../data/hook/useAuth"

interface AvatarUsuarioProps {
    className?: string
}

export default function AvatarUsuario(props: AvatarUsuarioProps) {
    const { usuario } = useAuth()

    const userImageDefault = '/images/avatar.svg'

    const [ userImage, setUserImage] = useState(userImageDefault)

    useEffect(() => {
        if(usuario?.imagemUrl) {
            setUserImage(usuario.imagemUrl)  
        }
    }, [usuario])
    
    return (
        <Link href="/perfil">
            <img 
                src={userImage}
                alt="Avatar do Usuário" 
                className={`
                    h-10 w-10 rounded-full cursor-pointer
                    ${props.className}
                `}
            />
        </Link>
    )
}