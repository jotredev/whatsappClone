import {
  RiLoader3Line,
  RiChatPollFill,
  RiMore2Fill,
  RiSearchLine,
  RiCheckDoubleFill,
  RiCameraFill,
  RiLinkM,
  RiEmotionHappyLine,
  RiMicFill,
} from "react-icons/ri";

function App() {
  return (
    <div className="min-h-screen grid grid-cols-1 xl:grid-cols-4 text-gray-300">
      {/* Contacts */}
      <div className="hidden bg-[#1B2831] xl:flex flex-col">
        {/* Profile */}
        <div className="p-4 h-[15vh]">
          <div className="flex items-center justify-between mb-4">
            <div>
              <img
                src="https://img.freepik.com/psd-gratis/estudiante-alegre-idea_1154-280.jpg"
                className="w-10 h-10 object-cover rounded-full"
              />
            </div>
            <div className="flex items-center gap-8 text-2xl text-gray-500">
              <RiLoader3Line className="hover:cursor-pointer" />
              <RiChatPollFill className="hover:cursor-pointer" />
              <RiMore2Fill className="hover:cursor-pointer" />
            </div>
          </div>
          <form className="w-full">
            <div className="relative">
              <RiSearchLine className="absolute top-1/2 -translate-y-1/2 left-4" />
              <input
                className="bg-[#0B131A] w-full rounded-full py-2 pl-10 pr-4 outline-none"
                placeholder="Buscar o empezar un chat nuevo"
              />
            </div>
          </form>
        </div>
        {/* Contacts */}
        <div className="h-[85vh] overflow-y-scroll">
          {/* Contact */}
          <div className="p-4 flex items-center gap-4 bg-[#222C32] border-b border-[#222C32] hover:cursor-pointer">
            <img
              src="https://img.freepik.com/foto-gratis/retrato-joven-confiado-gafas_171337-4841.jpg"
              className="w-10 h-10 object-cover rounded-full"
            />
            <div className="flex-1 flex justify-between">
              <div>
                <h1>Jorge Luis Trejo</h1>
                <p className="text-gray-500 text-xs">
                  Lorem Ipsum es simplemente el texto de relleno aaa...
                </p>
              </div>
              <div className="text-sm text-gray-500">14:45</div>
            </div>
          </div>
          {/* Contact */}
          <div className="p-4 flex items-center gap-4 hover:bg-[#222C32] border-b border-[#222C32] transition-colors hover:cursor-pointer">
            <img
              src="https://img.freepik.com/foto-gratis/retrato-joven-confiado-gafas_171337-4841.jpg"
              className="w-10 h-10 object-cover rounded-full"
            />
            <div className="flex-1 flex justify-between">
              <div>
                <h1>Jorge Luis Trejo</h1>
                <p className="text-gray-500 text-xs">
                  Lorem Ipsum es simplemente el texto de relleno aaa...
                </p>
              </div>
              <div className="text-sm text-gray-500">14:45</div>
            </div>
          </div>
          {/* Contact */}
          <div className="p-4 flex items-center gap-4 hover:bg-[#222C32] border-b border-[#222C32] transition-colors hover:cursor-pointer">
            <img
              src="https://img.freepik.com/foto-gratis/retrato-joven-confiado-gafas_171337-4841.jpg"
              className="w-10 h-10 object-cover rounded-full"
            />
            <div className="flex-1 flex justify-between">
              <div>
                <h1>Jorge Luis Trejo</h1>
                <p className="text-gray-500 text-xs">
                  Lorem Ipsum es simplemente el texto de relleno aaa...
                </p>
              </div>
              <div className="text-sm text-gray-500">14:45</div>
            </div>
          </div>
          {/* Contact */}
          <div className="p-4 flex items-center gap-4 hover:bg-[#222C32] border-b border-[#222C32] transition-colors hover:cursor-pointer">
            <img
              src="https://img.freepik.com/foto-gratis/retrato-joven-confiado-gafas_171337-4841.jpg"
              className="w-10 h-10 object-cover rounded-full"
            />
            <div className="flex-1 flex justify-between">
              <div>
                <h1>Jorge Luis Trejo</h1>
                <p className="text-gray-500 text-xs">
                  Lorem Ipsum es simplemente el texto de relleno aaa...
                </p>
              </div>
              <div className="text-sm text-gray-500">14:45</div>
            </div>
          </div>
          {/* Contact */}
          <div className="p-4 flex items-center gap-4 hover:bg-[#222C32] border-b border-[#222C32] transition-colors hover:cursor-pointer">
            <img
              src="https://img.freepik.com/foto-gratis/retrato-joven-confiado-gafas_171337-4841.jpg"
              className="w-10 h-10 object-cover rounded-full"
            />
            <div className="flex-1 flex justify-between">
              <div>
                <h1>Jorge Luis Trejo</h1>
                <p className="text-gray-500 text-xs">
                  Lorem Ipsum es simplemente el texto de relleno aaa...
                </p>
              </div>
              <div className="text-sm text-gray-500">14:45</div>
            </div>
          </div>
          {/* Contact */}
          <div className="p-4 flex items-center gap-4 hover:bg-[#222C32] border-b border-[#222C32] transition-colors hover:cursor-pointer">
            <img
              src="https://img.freepik.com/psd-gratis/estudiante-alegre-idea_1154-280.jpg"
              className="w-10 h-10 object-cover rounded-full"
            />
            <div className="flex-1 flex justify-between">
              <div>
                <h1>Luisa Yared Jacquez</h1>
                <p className="text-gray-500 flex items-center gap-2">
                  <RiCheckDoubleFill className="text-lg text-cyan-500" />{" "}
                  <RiCameraFill />
                  Foto
                </p>
              </div>
              <div className="text-sm text-gray-500">Ayer</div>
            </div>
          </div>
          {/* Contact */}
          <div className="p-4 flex items-center gap-4 hover:bg-[#222C32] border-b border-[#222C32] transition-colors hover:cursor-pointer">
            <img
              src="https://img.freepik.com/psd-gratis/estudiante-alegre-idea_1154-280.jpg"
              className="w-10 h-10 object-cover rounded-full"
            />
            <div className="flex-1 flex justify-between">
              <div>
                <h1>Luisa Yared Jacquez</h1>
                <p className="text-gray-500 flex items-center gap-2">
                  <RiCheckDoubleFill className="text-lg text-cyan-500" />{" "}
                  <RiCameraFill />
                  Foto
                </p>
              </div>
              <div className="text-sm text-gray-500">Ayer</div>
            </div>
          </div>
          {/* Contact */}
          <div className="p-4 flex items-center gap-4 hover:bg-[#222C32] border-b border-[#222C32] transition-colors hover:cursor-pointer">
            <img
              src="https://img.freepik.com/psd-gratis/estudiante-alegre-idea_1154-280.jpg"
              className="w-10 h-10 object-cover rounded-full"
            />
            <div className="flex-1 flex justify-between">
              <div>
                <h1>Luisa Yared Jacquez</h1>
                <p className="text-gray-500 flex items-center gap-2">
                  <RiCheckDoubleFill className="text-lg text-cyan-500" />{" "}
                  <RiCameraFill />
                  Foto
                </p>
              </div>
              <div className="text-sm text-gray-500">Ayer</div>
            </div>
          </div>
          {/* Contact */}
          <div className="p-4 flex items-center gap-4 hover:bg-[#222C32] border-b border-[#222C32] transition-colors hover:cursor-pointer">
            <img
              src="https://img.freepik.com/psd-gratis/estudiante-alegre-idea_1154-280.jpg"
              className="w-10 h-10 object-cover rounded-full"
            />
            <div className="flex-1 flex justify-between">
              <div>
                <h1>Luisa Yared Jacquez</h1>
                <p className="text-gray-500 flex items-center gap-2">
                  <RiCheckDoubleFill className="text-lg text-cyan-500" />{" "}
                  <RiCameraFill />
                  Foto
                </p>
              </div>
              <div className="text-sm text-gray-500">Ayer</div>
            </div>
          </div>
          {/* Contact */}
          <div className="p-4 flex items-center gap-4 hover:bg-[#222C32] border-b border-[#222C32] transition-colors hover:cursor-pointer">
            <img
              src="https://img.freepik.com/psd-gratis/estudiante-alegre-idea_1154-280.jpg"
              className="w-10 h-10 object-cover rounded-full"
            />
            <div className="flex-1 flex justify-between">
              <div>
                <h1>Luisa Yared Jacquez</h1>
                <p className="text-gray-500 flex items-center gap-2">
                  <RiCheckDoubleFill className="text-lg text-cyan-500" />{" "}
                  <RiCameraFill />
                  Foto
                </p>
              </div>
              <div className="text-sm text-gray-500">Ayer</div>
            </div>
          </div>
          {/* Contact */}
          <div className="p-4 flex items-center gap-4 hover:bg-[#222C32] border-b border-[#222C32] transition-colors hover:cursor-pointer">
            <img
              src="https://img.freepik.com/psd-gratis/estudiante-alegre-idea_1154-280.jpg"
              className="w-10 h-10 object-cover rounded-full"
            />
            <div className="flex-1 flex justify-between">
              <div>
                <h1>Luisa Yared Jacquez</h1>
                <p className="text-gray-500 flex items-center gap-2">
                  <RiCheckDoubleFill className="text-lg text-cyan-500" />{" "}
                  <RiCameraFill />
                  Foto
                </p>
              </div>
              <div className="text-sm text-gray-500">Ayer</div>
            </div>
          </div>
          {/* Contact */}
          <div className="p-4 flex items-center gap-4 hover:bg-[#222C32] border-b border-[#222C32] transition-colors hover:cursor-pointer">
            <img
              src="https://img.freepik.com/psd-gratis/estudiante-alegre-idea_1154-280.jpg"
              className="w-10 h-10 object-cover rounded-full"
            />
            <div className="flex-1 flex justify-between">
              <div>
                <h1>Luisa Yared Jacquez</h1>
                <p className="text-gray-500 flex items-center gap-2">
                  <RiCheckDoubleFill className="text-lg text-cyan-500" />{" "}
                  <RiCameraFill />
                  Foto
                </p>
              </div>
              <div className="text-sm text-gray-500">Ayer</div>
            </div>
          </div>
        </div>
      </div>
      {/* Chat */}
      <div className="xl:col-span-3">
        <header className="h-[8vh] bg-[#1B2831] p-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="https://img.freepik.com/psd-gratis/estudiante-alegre-idea_1154-280.jpg"
              className="w-10 h-10 object-cover rounded-full"
            />
            <div>
              <h1>Jorge Luis Trejo</h1>
              <span className="text-gray-500 text-sm">En Linea</span>
            </div>
          </div>
          <div className="flex items-center gap-8 text-2xl text-gray-500">
            <RiSearchLine className="hover:cursor-pointer" />
            <RiLinkM className="hover:cursor-pointer" />
            <RiMore2Fill className="hover:cursor-pointer" />
          </div>
        </header>
        {/* Messages */}
        <main className="h-[84vh] overflow-y-scroll p-4">
          {/* Message 1 */}
          <div className="mb-3 flex">
            <p className="bg-[#1B2831] max-w-[80%] xl:max-w-2xl py-1 px-4 rounded-tr-xl rounded-br-xl rounded-bl-xl">
              Hola
            </p>
          </div>
          {/* Message 1 */}
          <div className="mb-3 flex">
            <p className="bg-[#1B2831] max-w-[80%] xl:max-w-2xl py-1 px-4 rounded-tr-xl rounded-br-xl rounded-bl-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              sodales massa id lectus ultricies finibus. Pellentesque fringilla
              convallis urna ut blandit.
            </p>
          </div>
          {/* Message 2 */}
          <div className="mb-3 flex justify-end">
            <p className="bg-[#054640] max-w-[80%] xl:max-w-2xl py-1 px-4 rounded-tl-xl rounded-bl-xl rounded-br-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              sodales massa id lectus ultricies finibus. Pellentesque fringilla
              convallis urna ut blandit.
            </p>
          </div>
          {/* Message 2 */}
          <div className="mb-3 flex justify-end">
            <p className="bg-[#054640] max-w-[80%] xl:max-w-2xl py-1 px-4 rounded-tl-xl rounded-bl-xl rounded-br-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              sodales massa id lectus ultricies finibus. Pellentesque fringilla
              convallis urna ut blandit.
            </p>
          </div>
          {/* Message 2 */}
          <div className="mb-3 flex justify-end">
            <p className="bg-[#054640] max-w-[80%] xl:max-w-2xl py-1 px-4 rounded-tl-xl rounded-bl-xl rounded-br-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              sodales massa id lectus ultricies finibus. Pellentesque fringilla
              convallis urna ut blandit.
            </p>
          </div>
          {/* Message 2 */}
          <div className="mb-3 flex justify-end">
            <p className="bg-[#054640] max-w-[80%] xl:max-w-2xl py-1 px-4 rounded-tl-xl rounded-bl-xl rounded-br-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              sodales massa id lectus ultricies finibus. Pellentesque fringilla
              convallis urna ut blandit.
            </p>
          </div>
          {/* Message 2 */}
          <div className="mb-3 flex justify-end">
            <p className="bg-[#054640] max-w-[80%] xl:max-w-2xl py-1 px-4 rounded-tl-xl rounded-bl-xl rounded-br-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              sodales massa id lectus ultricies finibus. Pellentesque fringilla
              convallis urna ut blandit.
            </p>
          </div>
          {/* Message 2 */}
          <div className="mb-3 flex justify-end">
            <p className="bg-[#054640] max-w-[80%] xl:max-w-2xl py-1 px-4 rounded-tl-xl rounded-bl-xl rounded-br-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              sodales massa id lectus ultricies finibus. Pellentesque fringilla
              convallis urna ut blandit.
            </p>
          </div>
          {/* Message 2 */}
          <div className="mb-3 flex justify-end">
            <p className="bg-[#054640] max-w-[80%] xl:max-w-2xl py-1 px-4 rounded-tl-xl rounded-bl-xl rounded-br-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              sodales massa id lectus ultricies finibus. Pellentesque fringilla
              convallis urna ut blandit.
            </p>
          </div>
          {/* Message 2 */}
          <div className="mb-3 flex justify-end">
            <p className="bg-[#054640] max-w-[80%] xl:max-w-2xl py-1 px-4 rounded-tl-xl rounded-bl-xl rounded-br-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              sodales massa id lectus ultricies finibus. Pellentesque fringilla
              convallis urna ut blandit.
            </p>
          </div>
          {/* Message 2 */}
          <div className="mb-3 flex justify-end">
            <p className="bg-[#054640] max-w-[80%] xl:max-w-2xl py-1 px-4 rounded-tl-xl rounded-bl-xl rounded-br-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              sodales massa id lectus ultricies finibus. Pellentesque fringilla
              convallis urna ut blandit.
            </p>
          </div>
          {/* Message 2 */}
          <div className="mb-3 flex justify-end">
            <p className="bg-[#054640] max-w-[80%] xl:max-w-2xl py-1 px-4 rounded-tl-xl rounded-bl-xl rounded-br-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              sodales massa id lectus ultricies finibus. Pellentesque fringilla
              convallis urna ut blandit.
            </p>
          </div>
          {/* Message 2 */}
          <div className="mb-3 flex justify-end">
            <p className="bg-[#054640] max-w-[80%] xl:max-w-2xl py-1 px-4 rounded-tl-xl rounded-bl-xl rounded-br-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              sodales massa id lectus ultricies finibus. Pellentesque fringilla
              convallis urna ut blandit.
            </p>
          </div>
          {/* Message 2 */}
          <div className="mb-3 flex justify-end">
            <p className="bg-[#054640] max-w-[80%] xl:max-w-2xl py-1 px-4 rounded-tl-xl rounded-bl-xl rounded-br-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              sodales massa id lectus ultricies finibus. Pellentesque fringilla
              convallis urna ut blandit.
            </p>
          </div>
          {/* Message 2 */}
          <div className="mb-3 flex justify-end">
            <p className="bg-[#054640] max-w-[80%] xl:max-w-2xl py-1 px-4 rounded-tl-xl rounded-bl-xl rounded-br-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              sodales massa id lectus ultricies finibus. Pellentesque fringilla
              convallis urna ut blandit.
            </p>
          </div>
          {/* Message 2 */}
          <div className="mb-3 flex justify-end">
            <p className="bg-[#054640] max-w-[80%] xl:max-w-2xl py-1 px-4 rounded-tl-xl rounded-bl-xl rounded-br-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              sodales massa id lectus ultricies finibus. Pellentesque fringilla
              convallis urna ut blandit.
            </p>
          </div>
        </main>
        {/* Send message */}
        <div className="h-[8vh] text-gray-500 flex items-center bg-[#1B2831]">
          <div className="w-[20%] xl:w-1/12 flex justify-center text-2xl">
            <RiEmotionHappyLine className="hover:cursor-pointer" />
          </div>
          <form className="w-[60%] xl:w-10/12">
            <input
              type="text"
              className="bg-[#0B131A] w-full py-2 px-6 rounded-full outline-none text-gray-300"
              placeholder="Escribe un mensaje aquì"
            />
          </form>
          <div className="w-[20%] xl:w-1/12 flex justify-center text-2xl">
            <RiMicFill className="hover:cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
