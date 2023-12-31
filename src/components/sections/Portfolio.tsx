export function Portfolio() {
  return (
    <div>
      <div className="mb-10 bg-[#252525] w-full  justify-center lg:justify-start border-t border-b border-[#838383] my-4">
        <h2 className="font-extrabold text-3xl mx-24 py-16 ">PORTFÓLIO</h2>
      </div>
      <div className="lg:flex flex-col lg:mx-[200px] items-start justify-start  mb-12">
        <div className="lg:grid grid-cols-2 gap-6">
          <div className="col-span-1">
            <h1 className="font-bold text-3xl lg:pl-0 pl-4">Geradoc</h1>
            <div className="flex flex-col sm:flex-row mt-6 pl-8 ">
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
              </div>
              <div className="flex">
                <div className="w-fit h-fit px-1 py-1 m-1 border border-grayLight rounded-md text-white dark:text-grayLight font-Inter font-medium font-sm bg-[#2c3333]">
                  Next.js
                </div>
                <div className="w-fit h-fit px-1 py-1 m-1 border border-grayLight rounded-md text-white dark:text-grayLight font-Inter font-medium font-sm bg-[#2c3333]">
                  Asp.net
                </div>
                <div className="w-fit h-fit px-1 py-1 m-1 border border-grayLight rounded-md text-white dark:text-grayLight font-Inter font-medium font-sm bg-[#2c3333]">
                  SQL Server
                </div>
              </div>
            </div>
            <h2 className="text-justify lg:p-8 p-4 text-xl font-semibold">
              Geradoc é um sistema desenvolvido para escritórios de advocacia,
              inicialmente construído com tecnologias modernas, como React,
              Node.js e MySQL. No entanto, evoluímos o sistema e desenvolvemos
              uma nova API em ASP.NET com SQL Server, mantendo as mesmas
              funcionalidades da API anterior desenvolvida em Node.js.
            </h2>
            <div className="flex justify-center items-center my-8">
              <button className="bg-[#211d19] text-[#e7f6f2] p-4 text-xl font-bold rounded-2xl border-2 border-[#007CED]">
                <a
                  href="https://dev.to/mattmascarenhas/geradoc-b65"
                  target="_blank"
                  className="text-white text-xl "
                >
                  SAIBA MAIS
                </a>
              </button>
            </div>
          </div>
          <div className="col-span-1">
            <a
              href="https://dev.to/mattmascarenhas/geradoc-b65"
              target="_blank"
            >
              <img
                src="mockup-geradoc.png"
                alt="Clique para ver mais informações"
                className="p-2"
              />
            </a>
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid black",
            margin: "1rem 0",
          }}
        >
          <div className="lg:grid grid-cols-2 gap-6 mt-6">
            <div className="col-span-1">
              <h1 className="font-bold text-3xl lg:pl-0 pl-4">Geraduo</h1>
              <div className="flex flex-col sm:flex-row  mt-6 pl-8">
                <div className="flex">
                  <div className="w-fit h-fit px-1 py-1 m-1 border border-grayLight rounded-md text-white dark:text-grayLight font-Inter font-medium font-sm bg-[#2c3333]">
                    React
                  </div>
                  <div className="w-fit h-fit px-1 py-1 m-1 border border-grayLight rounded-md text-white dark:text-grayLight font-Inter font-medium font-sm bg-[#2c3333]">
                    Asp.net
                  </div>
                  <div className="w-fit h-fit px-1 py-1 m-1 border border-grayLight rounded-md text-white dark:text-grayLight font-Inter font-medium font-sm bg-[#2c3333]">
                    SQL Server
                  </div>
                </div>
                <div className="flex">
                  <div className="w-fit h-fit px-1 py-1 m-1 border border-grayLight rounded-md text-white dark:text-grayLight font-Inter font-medium font-sm bg-[#2c3333]">
                    TypeScript
                  </div>
                  <div className="w-fit h-fit px-1 py-1 m-1 border border-grayLight rounded-md text-white dark:text-grayLight font-Inter font-medium font-sm bg-[#2c3333]">
                    Next.js
                  </div>
                </div>
              </div>
              <h2 className="text-justify lg:p-8 p-4  text-xl font-semibold">
                O GeraDuo é uma plataforma que foi construída para atender às
                necessidades dos amantes de jogos, permitindo que eles encontrem
                facilmente parceiros de jogo compatíveis. A plataforma é
                alimentada por um conjunto de poderosas ferramentas de
                desenvolvimento, incluindo ASP.NET para a criação da API e React
                para o desenvolvimento da interface do usuário. Além disso, o
                banco de dados foi implementado utilizando o SQL Server,
                proporcionando uma base sólida para armazenar as informações dos
                usuários.
              </h2>
              <div className="flex justify-center items-center my-8">
                <button className="bg-[#211d19] text-[#e7f6f2] p-4 text-xl font-bold rounded-2xl border-2 border-[#007CED]">
                  <a
                    href="https://dev.to/mattmascarenhas/geraduo-423f"
                    target="_blank"
                    className="text-white text-xl "
                  >
                    SAIBA MAIS
                  </a>
                </button>
              </div>
            </div>
            <div className="col-span-1">
              <a
                href="https://dev.to/mattmascarenhas/geraduo-423f"
                target="_blank"
              >
                <img
                  src="mockup-geraduo.png"
                  alt="Clique para ver mais informações"
                  className="p-2"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
