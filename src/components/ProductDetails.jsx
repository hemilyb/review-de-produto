import headsetImage from '../assets/headset.jpg'

export default function ProductDetails() {
  return (
    <>
      <div className="flex flex-col lg:px-40 pt-20">
        <img src={headsetImage} alt="fone-de-ouvido"
          className="sm:w-5/6 rounded-3xl"
        />
        <h2 className="text-3xl mt-4">Fone de ouvido EchoBeat</h2>
        <div className="flex mt-6 text-3xl gap-2 w-80">
          <span className="text-purple-600">R$ </span>
          <p className="font-semibold w-28">699</p>
          <div className="flex-nowrap text-purple-600">
            {[1, 2, 3, 4, 5].map((i) => (
              <span key={i}
              className="material-symbols-outlined fill-1 text-3xl">
                kid_star
              </span>
            ))}
          </div>
        </div>
        <ProductDescription />
        <ProductSpecifications />
      </div>
    </>
  )
}

function ProductDescription() {
  return (
    <div className="mt-6 text-lg border-b pb-8 sm:w-5/6">
      <p>
        Eleve sua experiência sonora com o Fone de Ouvido Escutante Deluxe
        On-Ear, um acessório de áudio premium com design sofisticado e
        desempenho excepcional. Com drivers de alta qualidade e tecnologia de
        cancelamento de ruído avançada, este fone foi projetado para oferecer o
        máximo de conforto e um som cristalino. Ideal para quem busca estilo e
        alta performance, o Escutante Deluxe proporciona graves profundos,
        médios nítidos e agudos cristalinos, garantindo uma imersão completa em
        qualquer gênero musical.
      </p>
    </div>
  )
}

function ProductSpecifications() {
  return (
    <>
      <div className="pt-8" />
      <div className='text-lg'>
        <h3 className="font-semibold">Especificações:</h3>
        <ul>
          <li>Modelo: Escutante Deluxe On-Ear</li>
          <li>Material: Alumínio escovado com almofadas em couro macio</li>
          <li>Conectividade: Cabo reforçado de alta durabilidade</li>
          <li>
            Compatibilidade: Funciona com qualquer dispositivo que tenha entrada
            P2
          </li>
          <li>Impedância: 32Ω</li>
          <li>Arco: Flexível com detalhes em couro marrom</li>
          <li>Peso: 280g</li>
          <li>Resposta de frequência: 20Hz - 20kHz</li>
          <li>Sensibilidade: 100dB</li>
          <li>Impedância: 32Ω</li>
        </ul>
      </div>
    </>
  );
}