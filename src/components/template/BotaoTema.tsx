import { IconeTemaClaro, IconeTemaEscuro } from "../icons"

interface BotaoTemaProps {
    tema: string
    alternarTema: () => void
}

export default function BotaoTema(props: BotaoTemaProps) {
    return props.tema === 'dark' ? (
        <div onClick={props.alternarTema} className={`
        flex items-center cursor-pointer
            bg-gradient-to-r from-yellow-300 to-yellow-600
            w-8 sm:w-14 h-8 p-1 rounded-full
        `}>
            <div className={`
                flex items-center justify-center
                bg-white text-yellow-600 
                w-6 h-6 rounded-full
            `}>
                {IconeTemaClaro(4)}
            </div>
            <div className={`
                hidden lg:flex items-center ml-4
                text-white
            `}>
                {/* <span className="text-sm">CLaro</span> */}
            </div>
        </div>
    ) : (
        <div onClick={props.alternarTema} className={`
        flex items-center cursor-pointer justify-end
            bg-gradient-to-r from-gray-500 to-gray-900
            w-8 sm:w-14 h-8 p-1 rounded-full
        `}>
            <div className={`
                hidden lg:flex items-center mr-2
                text-gray-300
            `}>
                {/* <span className="text-sm">Escuro</span> */}
            </div>
            <div className={`
                flex items-center justify-center
                bg-white text-gray-300 
                w-6 h-6 rounded-full
            `}>
                {IconeTemaEscuro(4)}
            </div>
        </div>
    )
}