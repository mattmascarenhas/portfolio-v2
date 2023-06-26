export function Experiencia() {
  return (
    <div className="lg:flex flex-col lg:mx-[200px] items-start justify-start  mb-6">
      <div className="mb-6">
        <h2 className="font-extrabold text-3xl">EXPERIÊNCIA</h2>
      </div>
      <div className="lg:grid grid-cols-3 gap-6 mb-6">
        <div>
          <div className="col-span-1 uppercase text-red-500 font-bold  border border-grayLight p-2">
            Criação de sistema para escritório de advocácia
          </div>
        </div>
        <div className="col-span-2 lg:ml-20 flex justify-start flex-col">
          <h1 className="lg:text-3xl text-2xl font-bold">
            Desenvolvedor Full Stack
          </h1>
          <h2 className="font-bold text-[#656D72] ml-1">Freelancer</h2>
          <h3 className="font-bold text-[#656D72] ml-1">Jun 2022 - Fev 2023</h3>
          <div className="flex flex-col sm:flex-row mt-2 ">
            <div className="flex">
              <div className="w-fit h-fit px-1 py-1 m-1 border border-grayLight rounded text-white dark:text-grayLight font-Inter font-medium font-sm bg-[#2c3333]">
                React
              </div>
              <div className="w-fit h-fit px-1 py-1 m-1 border border-grayLight rounded text-white dark:text-grayLight font-Inter font-medium font-sm bg-[#2c3333]">
                Node.js
              </div>
              <div className="w-fit h-fit px-1 py-1 m-1 border border-grayLight rounded text-white dark:text-grayLight font-Inter font-medium font-sm bg-[#2c3333]">
                JavaScript
              </div>
              <div className="w-fit h-fit px-1 py-1 m-1 border border-grayLight rounded text-white dark:text-grayLight font-Inter font-medium font-sm bg-[#2c3333]">
                MySQL
              </div>
              <div className="w-fit h-fit px-1 py-1 m-1 border border-grayLight rounded text-white dark:text-grayLight font-Inter font-medium font-sm bg-[#2c3333]">
                Next.js
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col mt-2 gap-2 font-bold">
              <p>
                · Sistema criado para escritório de advocacia, projetado para
                simplificar o processo de criação de documentos.
              </p>
              <p>· Criação de toda a base de dados do sistema.</p>
              <p>
                · Implementação do back-end, utilizando o Node.js com auxílo da
                biblioteca Sequelize.
              </p>
              <p>
                · Implementação do front-end, utilizando o Next.js e o
                TailwindCss como pilares do sistema.
              </p>
              <p>· Biblioteca NextAuth utilizada para fazer a autenticação.</p>
              <p>
                · A lógica para a criação do arquivo .doc foi feita sem auxilio
                de biblicotecas externas.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          borderTop: "1px solid black",
          margin: "1rem 0",
          color: "#2d2d2d",
        }}
      >
        <div className="lg:grid grid-cols-3 gap-6 mt-6 ">
          <div>
            <div className="w-[400px] uppercase text-red-500 font-bold  border border-grayLight p-2 mr-20 ">
              Criação de API para sistema de advocacia
            </div>
          </div>
          <div className="col-span-2 lg:ml-20 flex justify-start flex-col">
            <h1 className="lg:text-3xl text-2xl font-bold">
              Desenvolvedor Back-End
            </h1>
            <h2 className="font-bold text-[#656D72] ml-1">Freelancer</h2>
            <h3 className="font-bold text-[#656D72] ml-1">
              Mai 2023 - Jun 2023
            </h3>
            <div className="flex flex-col sm:flex-row mt-2 ">
              <div className="flex">
                <div className="w-fit h-fit px-1 py-1 m-1 border border-grayLight rounded text-white dark:text-grayLight font-Inter font-medium font-sm bg-[#2c3333]">
                  Asp.net
                </div>
                <div className="w-fit h-fit px-1 py-1 m-1 border border-grayLight rounded text-white dark:text-grayLight font-Inter font-medium font-sm bg-[#2c3333]">
                  C#
                </div>
                <div className="w-fit h-fit px-1 py-1 m-1 border border-grayLight rounded text-white dark:text-grayLight font-Inter font-medium font-sm bg-[#2c3333]">
                  SQL Server
                </div>
                <div className="w-fit h-fit px-1 py-1 m-1 border border-grayLight rounded text-white dark:text-grayLight font-Inter font-medium font-sm bg-[#2c3333]">
                  Next.js
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
                  · Foi utilizado o MVC ASP.NET para a implementação da API, com
                  o auxílio do Dapper.
                </p>
                <p>
                  · Procedures e views criadas para fazer as operações de CRUD.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Experiencia;
