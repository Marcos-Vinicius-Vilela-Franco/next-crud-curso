
import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import useClientes from "../hooks/useClientes";


export default function Home() {
  const {
    salvarCliente,
    clientes,
    exibirTabela,
    tabelaVisivel,
    cliente,
    selecionarCliente,
    novoCliente,
    excluirCliente} = useClientes()
  return (
    <div className={`
    flex h-screen justify-center items-center
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    `}>
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Button
                onClick={novoCliente}
                cor="green"
                className="mb-4">
                Novo Cliente
              </Button>
            </div>
            <Tabela clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            />
          </>
        ) : (
          <Form
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={exibirTabela} />
        )}


        {/*  */}

      </Layout>
    </div>
  )
}
