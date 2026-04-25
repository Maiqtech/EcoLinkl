import { ArrowLeft, CheckCircle, XCircle, AlertTriangle, Lightbulb, Trash2, Package } from "lucide-react";

interface DetalheMaterialProps {
  onNavigate: (page: string) => void;
  materialId?: number;
}

const materiaisDetalhes = {
  1: {
    nome: "Garrafa PET",
    categoria: "Plástico",
    reciclavel: true,
    confuso: false,
    imagem: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=600",
    motivo: "O PET (Polietileno Tereftalato) é um plástico termoplástico que pode ser reciclado múltiplas vezes. É um dos materiais mais reciclados no mundo.",
    exemplos: [
      "Garrafas de refrigerante",
      "Garrafas de água",
      "Embalagens de produtos de limpeza",
      "Potes de alimentos"
    ],
    descarte: "Lave a garrafa, retire o rótulo e a tampa (que devem ser descartados separadamente), amasse para economizar espaço e coloque no lixo reciclável."
  },
  2: {
    nome: "Caixa de Papelão",
    categoria: "Papel",
    reciclavel: true,
    confuso: false,
    imagem: "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?w=600",
    motivo: "O papelão é feito de fibras de celulose que podem ser reaproveitadas para fabricação de novos produtos de papel.",
    exemplos: [
      "Caixas de produtos eletrônicos",
      "Embalagens de delivery",
      "Caixas de sapatos",
      "Embalagens de alimentos secos"
    ],
    descarte: "Desmonte e achate as caixas para economizar espaço. Remova fitas adesivas e grampos. Mantenha seco e limpo."
  },
  3: {
    nome: "Embalagem de Salgadinho",
    categoria: "Rejeito",
    reciclavel: false,
    confuso: true,
    imagem: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=600",
    motivo: "Essas embalagens são feitas de múltiplas camadas de plástico metalizado (alumínio + plástico filme). Essa mistura não pode ser separada nos processos convencionais de reciclagem.",
    exemplos: [
      "Pacotes de salgadinhos",
      "Embalagens de biscoitos recheados",
      "Barras de chocolate",
      "Embalagens de balas"
    ],
    descarte: "Deve ir para o lixo comum (rejeito). Algumas marcas possuem programas de logística reversa - consulte o fabricante."
  },
  4: {
    nome: "Lata de Alumínio",
    categoria: "Metal",
    reciclavel: true,
    confuso: false,
    imagem: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=600",
    motivo: "O alumínio é 100% reciclável e pode ser reciclado infinitas vezes sem perder suas propriedades. A reciclagem economiza 95% da energia necessária para produzir alumínio novo.",
    exemplos: [
      "Latas de refrigerante",
      "Latas de cerveja",
      "Marmitas descartáveis",
      "Embalagens de alimentos"
    ],
    descarte: "Lave rapidamente, amasse para economizar espaço e coloque no lixo reciclável. Não precisa retirar a argola de abertura."
  },
  5: {
    nome: "Garrafa de Vidro",
    categoria: "Vidro",
    reciclavel: true,
    confuso: false,
    imagem: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600",
    motivo: "O vidro é 100% reciclável e pode ser reciclado infinitas vezes sem perder qualidade ou pureza.",
    exemplos: [
      "Garrafas de bebidas",
      "Potes de conserva",
      "Frascos de perfume",
      "Potes de geleia"
    ],
    descarte: "Lave e retire tampas e rótulos. Tenha cuidado ao manusear vidros quebrados. Embale vidros quebrados em jornal antes de descartar."
  },
  6: {
    nome: "Copo de Papel Plastificado",
    categoria: "Rejeito",
    reciclavel: false,
    confuso: true,
    imagem: "https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?w=600",
    motivo: "Esses copos têm um revestimento plástico interno que impede que o papel seja processado normalmente nas fábricas de reciclagem. A separação das camadas é inviável economicamente.",
    exemplos: [
      "Copos de café descartáveis",
      "Copos de refrigerante de fast-food",
      "Copos de água de máquinas",
      "Embalagens de sorvete"
    ],
    descarte: "Descarte no lixo comum (rejeito). Sempre que possível, opte por copos reutilizáveis."
  },
  7: {
    nome: "Papelão Molhado",
    categoria: "Papel",
    reciclavel: false,
    confuso: true,
    imagem: "https://images.unsplash.com/photo-1605600659908-0ef719419d41?w=600",
    motivo: "A água danifica irreversivelmente as fibras de celulose do papel, tornando impossível sua reciclagem. O papelão molhado perde toda sua resistência estrutural.",
    exemplos: [
      "Caixas de pizza com restos de óleo",
      "Papelão molhado por chuva",
      "Embalagens com gordura",
      "Papel higiênico usado"
    ],
    descarte: "Descarte no lixo orgânico. Para evitar isso, mantenha papelão sempre seco e limpo até o descarte."
  },
  8: {
    nome: "Sacola Plástica",
    categoria: "Plástico",
    reciclavel: true,
    confuso: false,
    imagem: "https://images.unsplash.com/photo-1607968565043-36af90dde238?w=600",
    motivo: "Sacolas plásticas são feitas de polietileno, um material reciclável. Porém, nem todas cooperativas aceitam devido ao baixo valor comercial.",
    exemplos: [
      "Sacolas de supermercado",
      "Sacos de pão",
      "Embalagens de produtos",
      "Film plástico"
    ],
    descarte: "Lave se necessário, seque e descarte em pontos específicos de coleta de plástico filme ou leve para supermercados que aceitam."
  },
  9: {
    nome: "Eletrônicos",
    categoria: "Metal",
    reciclavel: true,
    confuso: false,
    imagem: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=600",
    motivo: "Equipamentos eletrônicos contêm metais preciosos e substâncias tóxicas. Requerem descarte especializado para extração segura dos materiais.",
    exemplos: [
      "Celulares antigos",
      "Computadores",
      "Televisores",
      "Pilhas e baterias"
    ],
    descarte: "NUNCA descarte no lixo comum. Leve para pontos de coleta especializados ou programas de logística reversa de fabricantes."
  },
  10: {
    nome: "Isopor",
    categoria: "Rejeito",
    reciclavel: false,
    confuso: true,
    imagem: "https://images.unsplash.com/photo-1572981781188-7e3d86c5de2a?w=600",
    motivo: "Apesar de tecnicamente reciclável, o isopor possui baixíssima densidade (98% de ar), tornando sua reciclagem economicamente inviável. Poucas cooperativas aceitam.",
    exemplos: [
      "Embalagens de eletrônicos",
      "Bandejinhas de alimentos",
      "Copos descartáveis",
      "Pranchas de isolamento"
    ],
    descarte: "Descarte no lixo comum. Procure alternativas reutilizáveis sempre que possível. Alguns pontos especializados aceitam grandes volumes."
  }
};

export default function DetalheMaterial({ onNavigate, materialId = 1 }: DetalheMaterialProps) {
  const material = materiaisDetalhes[materialId as keyof typeof materiaisDetalhes] || materiaisDetalhes[1];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container max-w-4xl">
        {/* Botão Voltar */}
        <button
          onClick={() => onNavigate("educacao")}
          className="flex items-center gap-2 text-gray-600 hover:text-[--eco-green] mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Voltar para Educação Cultural
        </button>

        {/* Card Principal */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-8">
          {/* Imagem */}
          <div className="relative h-96 overflow-hidden bg-gray-100">
            <img
              src={material.imagem}
              alt={material.nome}
              className="w-full h-full object-cover"
            />

            {/* Badges Sobrepostas */}
            <div className="absolute top-6 right-6 flex flex-col gap-3">
              {/* Badge Reciclável */}
              <div className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 ${
                material.reciclavel
                  ? "bg-green-500 text-white"
                  : "bg-red-500 text-white"
              }`}>
                {material.reciclavel ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Reciclável
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5" />
                    Não Reciclável
                  </>
                )}
              </div>

              {/* Badge Confuso */}
              {material.confuso && (
                <div className="px-4 py-2 rounded-full text-sm font-medium bg-yellow-500 text-white flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Confunde muita gente
                </div>
              )}
            </div>

            {/* Categoria */}
            <div className="absolute bottom-6 left-6">
              <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium">
                {material.categoria}
              </span>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="p-8">
            <h1 className="text-4xl font-bold mb-6">{material.nome}</h1>

            {/* Motivo */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="w-6 h-6 text-[--eco-green]" />
                <h2 className="text-xl font-semibold">Por que {material.reciclavel ? "é" : "não é"} reciclável?</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">{material.motivo}</p>
            </div>

            {/* Exemplos */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Package className="w-6 h-6 text-[--eco-blue]" />
                <h2 className="text-xl font-semibold">Exemplos Práticos</h2>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {material.exemplos.map((exemplo, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-[--eco-green] rounded-full"></div>
                    {exemplo}
                  </li>
                ))}
              </ul>
            </div>

            {/* Descarte */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <Trash2 className="w-6 h-6 text-[--eco-green]" />
                <h2 className="text-xl font-semibold">Como Descartar Corretamente</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">{material.descarte}</p>
            </div>
          </div>
        </div>

        {/* Botão Voltar (inferior) */}
        <button
          onClick={() => onNavigate("educacao")}
          className="w-full py-3 rounded-lg bg-[--eco-green] text-white hover:bg-emerald-600 transition-colors font-medium"
        >
          Voltar para Educação Cultural
        </button>
      </div>
    </div>
  );
}
