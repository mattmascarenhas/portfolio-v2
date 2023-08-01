export function Experiencia() {
  return (
    <div>
      <div className="mb-6 bg-[#252525] w-full  border-t border-b border-[#838383] my-4">
        <h2 className="font-extrabold text-3xl mx-24 py-16 ">EXPERIÊNCIA</h2>
      </div>
      <div className="lg:flex flex-col lg:mx-[200px] items-start justify-start  mb-6">
        {/* Criação de sistema para escritório de advocácia */}
        <div className="w-full my-4">
          <div className="lg:grid grid-cols-7 gap-6 mt-6 ">
            <div className="col-span-3">
              <div className="w-[370px]  uppercase text-[#007CED] font-bold  border border-grayLight p-2 mr-20 ">
                Sistema para escritório de advocácia
              </div>
            </div>
            <div className="col-span-4 flex justify-start flex-col">
              <h1 className="lg:text-3xl text-2xl font-bold">
                Desenvolvedor Full Stack
              </h1>
              <h2 className="font-bold text-[#656D72] ml-1">Freelancer</h2>
              <h3 className="font-bold text-[#656D72] ml-1">
                Jun 2022 - Fev 2023
              </h3>
              <div className="flex flex-col sm:flex-row mt-2 ">
                <div className="flex">
                  <div className="w-fit h-fit px-1 py-1 m-1 border border-grayLight rounded-md text-white dark:text-grayLight font-Inter font-medium font-sm bg-[#2c3333]">
                    React
                  </div>
                  <div className="w-fit h-fit px-1 py-1 m-1 border border-grayLight rounded-md text-white dark:text-grayLight font-Inter font-medium font-sm bg-[#2c3333]">
                    Node.js
                  </div>
                  <div className="w-fit h-fit px-1 py-1 m-1 border border-grayLight rounded-md text-white dark:text-grayLight font-Inter font-medium font-sm bg-[#2c3333]">
                    JavaScript
                  </div>
                  <div className="w-fit h-fit px-1 py-1 m-1 border border-grayLight rounded-md text-white dark:text-grayLight font-Inter font-medium font-sm bg-[#2c3333]">
                    MySQL
                  </div>
                  <div className="w-fit h-fit px-1 py-1 m-1 border border-grayLight rounded-md text-white dark:text-grayLight font-Inter font-medium font-sm bg-[#2c3333]">
                    Next.js
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col mt-2 gap-2 font-bold">
                  <p>
                    · Sistema criado para escritório de advocacia, projetado
                    para simplificar o processo de criação de documentos.
                  </p>
                  <p>· Criação de toda a base de dados do sistema.</p>
                  <p>
                    · Implementação do back-end, utilizando o Node.js com auxílo
                    da biblioteca Sequelize.
                  </p>
                  <p>
                    · Implementação do front-end, utilizando o Next.js e o
                    TailwindCss como pilares do sistema.
                  </p>
                  <p>
                    · Biblioteca NextAuth utilizada para fazer a autenticação.
                  </p>
                  <p>
                    · A lógica para a criação do arquivo .doc foi feita sem
                    auxilio de biblicotecas externas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Criação de API para sistema de advocacia */}
        <div className="w-full border-t border-black my-4">
          <div className="lg:grid grid-cols-7 gap-6 mt-6 ">
            <div className="col-span-3">
              <div className="w-[300px] uppercase text-[#007CED] font-bold  border border-grayLight p-2 mr-20 ">
                API para sistema de advocacia
              </div>
            </div>
            <div className="col-span-4  flex justify-start flex-col">
              <h1 className="lg:text-3xl text-2xl font-bold">
                Desenvolvedor Back-End
              </h1>
              <h2 className="font-bold text-[#656D72] ml-1">Freelancer</h2>
              <h3 className="font-bold text-[#656D72] ml-1">
                Mai 2023 - Jun 2023
              </h3>
              <div className="flex flex-col sm:flex-row mt-2 ">
                <div className="flex">
                  <div className="w-fit h-fit px-1 py-1 m-1 border border-grayLight rounded-md text-white dark:text-grayLight font-Inter font-medium font-sm bg-[#2c3333]">
                    Asp.net
                  </div>
                  <div className="w-fit h-fit px-1 py-1 m-1 border border-grayLight rounded-md text-white dark:text-grayLight font-Inter font-medium font-sm bg-[#2c3333]">
                    C#
                  </div>
                  <div className="w-fit h-fit px-1 py-1 m-1 border border-grayLight rounded-md text-white dark:text-grayLight font-Inter font-medium font-sm bg-[#2c3333]">
                    SQL Server
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col mt-2 gap-2 font-bold">
                  <p>
                    · Evolução do sistema antigo feito em Node.js, com foco na
                    melhoria de performance
                  </p>
                  <p>· Criação de toda a base de dados do sistema.</p>
                  <p>
                    · Foi utilizado o MVC ASP.NET para a implementação da API,
                    com o auxílio do Dapper.
                  </p>
                  <p>
                    · Procedures e views criadas para fazer as operações de
                    CRUD.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* distribuição automatica */}
        <div className="w-full border-t border-black my-4">
          <div className="lg:grid grid-cols-7 gap-6 mt-6 ">
            <div className="col-span-3">
              <div className="w-[355px] uppercase text-[#007CED] font-bold  border border-grayLight p-2 mr-20 ">
                Distribuição automatizada de chats
              </div>
            </div>
            <div className="col-span-4 flex justify-start flex-col">
              <h1 className="lg:text-3xl text-2xl font-bold">
                Desenvolvedor Back-End
              </h1>
              <h2 className="font-bold text-[#656D72] ml-1">Bold Solution</h2>
              <h3 className="font-bold text-[#656D72] ml-1">
                Jun 2023 - Jul 2023
              </h3>
              <div className="flex flex-col sm:flex-row mt-2 ">
                <div className="flex">
                  <div className="w-fit h-fit px-1 py-1 m-1 border border-grayLight rounded-md text-white dark:text-grayLight font-Inter font-medium font-sm bg-[#2c3333]">
                    Asp.net
                  </div>
                  <div className="w-fit h-fit px-1 py-1 m-1 border border-grayLight rounded-md text-white dark:text-grayLight font-Inter font-medium font-sm bg-[#2c3333]">
                    C#
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col mt-2 gap-2 font-bold">
                  <p>
                    · Distribuição automática de chat para agentes, com base na
                    prioridade da fila, nos departamentos adequados e
                    disponibilidade de agentes.
                  </p>
                  <p>
                    · O sistema back-end recebe via GET os dados de chats e
                    agentes para fazer a distribução, e devolve via POST os
                    dados atualizados para os chats.
                  </p>
                  <p>· Integração feita na API da huggy.io</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Experiencia;
