import Cliente from "../core/Cliente"
import { EditIcon, TrashIcon } from "./Icons"

interface TabelaProps {
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}


export default function Tabela(props: TabelaProps) {

    const showActions = props.clienteSelecionado || props.clienteExcluido

    function renderCabecalho() {
        return (
            <tr>
                <th className="text-lef p-4">Código</th>
                <th className="text-lef p-4">Nome</th>
                <th className="text-lef p-4">Idade</th>
                {showActions?<th className="p-4">Ações</th>:false}
            </tr>
        )
    }
    function renderActions(cliente: Cliente) {
        return (
            <td className="flex justify-center">
                {props.clienteSelecionado ? (
                    <button onClick={() => props.clienteSelecionado?.(cliente)} className={`
                        flex justify-center items-center
                        text-green-600 rounded-full
                        hover:bg-purple-50 p-2 m-1
                        `}>{EditIcon}</button>
                ) : false}
                {props.clienteExcluido ? (
                    <button onClick={()=>props.clienteExcluido?.(cliente)} className={`
                        flex justify-center items-center
                        text-red-500 rounded-full
                        hover:bg-purple-50 p-2 m-1
                        `}>{TrashIcon}</button>
                ) : false}


            </td>
        )
    }
    function renderDados() {
        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.id}
                    className={`${i % 2 == 0 ? 'bg-purple-200' : 'bg-purple-100'}`} >
                    <td className=" text-center p-4">{cliente.id}</td>
                    <td className="text-center p-4">{cliente.nome}</td>
                    <td className="text-center p-4">{cliente.idade}</td>
                    {showActions? renderActions(cliente):false}
                </tr>
            )
        })
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
            text-gray-100
            bg-gradient-to-r from-purple-500 to-purple-800
            `}> {renderCabecalho()}</thead>
            <tbody>{renderDados()}</tbody>

        </table>
    )
}