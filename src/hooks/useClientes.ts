import Cliente from "../core/Cliente";
import ClienteRepo from "../core/ClienteRepo";
import { useEffect, useState } from "react";
import ClientColection from "../backend/db/ClientColection";
import useTabelaOuForm from "./useTabelaOuForm";
export default function useClientes() {
    const { tabelaVisivel, exibirForm, exibirTabela } = useTabelaOuForm()
    const repo: ClienteRepo = new ClientColection
    const [clientes, setClientes] = useState<Cliente[]>([]);
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
    // const clientes = [
    //   new Cliente('Ana', 34, '1'),
    //   new Cliente('Cleo', 24, '2'),
    //   new Cliente('Bia', 20, '3'),
    //   new Cliente('Deo', 24, '4'),
    // ]
    useEffect(obterTodos, []);

    function obterTodos() {
        repo.obterTodos().then(clientes => {
            setClientes(clientes)
            exibirTabela()
        })
    }

    function selecionarCliente(cliente: Cliente) {
        setCliente(cliente)
        exibirForm()
        
    }
    async function excluirCliente(cliente: Cliente) {
        await repo.excluir(cliente)
        obterTodos()
    }
    async function salvarCliente(cliente: Cliente) {
        await repo.salvar(cliente)
        obterTodos()
        exibirTabela()
    }
    function novoCliente() {
        setCliente(Cliente.vazio());
        
       exibirForm()
    }

    return {
        cliente,
        clientes,
        tabelaVisivel,
        exibirTabela,
        salvarCliente,
        novoCliente,
        excluirCliente,
        selecionarCliente,
        obterTodos

    }
}