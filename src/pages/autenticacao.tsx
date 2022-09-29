import Image from "next/image";
import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { IconeAtencao, IconeGoogle } from "../components/icons";
import useAuth from "../data/hook/useAuth";

export default function Autenticacao() {

    const { cadastrar, login, loginGoogle } = useAuth()

    const [erro, setErro] = useState(null)
    const [modo, setModo] = useState<'login' | 'cadastro'>('login')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function exibirErro(msg, tempo = 5000) {
        setErro(msg)
        setTimeout(() => setErro(null), tempo)
    }

    async function submit() {
        try {
            if(modo === 'login') {
                await login(email, senha)
            } else {
                await cadastrar(email, senha)
            }
        } catch(e) {
            exibirErro(e?.message ?? 'Erro desconhecido!')
        }
    }

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="hidden md:block md:w-1/2 lg:w-2/3">
                <img
                    src="https://source.unsplash.com/random" 
                    alt="Imagem da Tela de Autenticação" 
                    className="h-screen w-full object-cover"
                />
            </div>
            <div className="m-10 w-full md:w-1/2 lg:w-1/3">
                <h1 className={`text-3xl font-bold mb-5`}>
                    {modo === 'login' ? 'Entre com sua Conta' : 'Cadastre-se'}
                </h1>

                {erro ? (
                    <div className={`
                    bg-red-400 text-white py-3 px-5 my-2
                    border border-red-700 rounded-lg flex items-center
                    `}>
                        {IconeAtencao()}
                        <span className="ml-3">{erro}</span>
                    </div>
                ) : false}
                

                <AuthInput 
                    label="Email"
                    type="email"
                    value={email}
                    required
                    changeValue={setEmail}
                />
                <AuthInput 
                    label="Senha"
                    type="password"
                    value={senha}
                    required
                    changeValue={setSenha}
                />
                <button onClick={submit} className={`
                    w-full bg-indigo-500 hover:bg-indigo-400
                    text-white rounded-lg px-4 py-3 mt-6
                `}>
                    {modo === 'login' ? 'Entrar' : 'Cadastrar'}
                </button>

                <hr className="my-6border-gray-300 w-full" />
                        
                    <button onClick={loginGoogle}  className={`
                        flex items-center justify-center
                        w-full bg-red-500 hover:bg-red-400
                        text-white rounded-lg px-4 py-3
                    `}>
                        {IconeGoogle()}Entrar com o Google
                    </button>

                {modo === 'login' ? (
                    <p className="mt-8">
                        Novo por aqui?
                        <a onClick={() => setModo('cadastro')} className={`
                            text-blue-500 hover:text-blue-700 font-semibold
                            cursor-pointer
                        `}> Criar uma Conta Gratuitamente</a>
                    </p>
                ) : (
                    <p className="mt-8">
                        Já tem cadastro?
                        <a onClick={() => setModo('login')} className={`
                            text-blue-500 hover:text-blue-700 font-semibold
                            cursor-pointer
                        `}> Entre com seus dados</a>
                    </p>
                )}
            </div>
        </div>
    )
}