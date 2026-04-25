import { useState } from "react";
import { Search, Filter, BookOpen, CheckCircle, XCircle, AlertTriangle, Lightbulb, Scale } from "lucide-react";

interface EducacaoCulturalProps {
  onNavigate: (page: string, materialId?: number) => void;
}

const materiais = [
  {
    id: 1,
    nome: "Garrafa PET",
    categoria: "Plástico",
    reciclavel: true,
    imagem: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=300",
    resumo: "Plástico reciclável amplamente aceito",
    confuso: false
  },
  {
    id: 2,
    nome: "Caixa de Papelão",
    categoria: "Papel",
    reciclavel: true,
    imagem: "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?w=300",
    resumo: "Papel reciclável quando limpo e seco",
    confuso: false
  },
  {
    id: 3,
    nome: "Embalagem de Salgadinho",
    categoria: "Rejeito",
    reciclavel: false,
    imagem: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=300",
    resumo: "Material misto não é reciclável",
    confuso: true
  },
  {
    id: 4,
    nome: "Lata de Alumínio",
    categoria: "Metal",
    reciclavel: true,
    imagem: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=300",
    resumo: "Metal 100% reciclável",
    confuso: false
  },
  {
    id: 5,
    nome: "Garrafa de Vidro",
    categoria: "Vidro",
    reciclavel: true,
    imagem: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=300",
    resumo: "Vidro totalmente reciclável",
    confuso: false
  },
  {
    id: 6,
    nome: "Copo de Papel Plastificado",
    categoria: "Rejeito",
    reciclavel: false,
    imagem: "https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?w=300",
    resumo: "Revestimento plástico impede reciclagem",
    confuso: true
  },
  {
    id: 7,
    nome: "Papelão Molhado",
    categoria: "Papel",
    reciclavel: false,
    imagem: "https://images.unsplash.com/photo-1605600659908-0ef719419d41?w=300",
    resumo: "Umidade danifica as fibras do papel",
    confuso: true
  },
  {
    id: 8,
    nome: "Sacola Plástica",
    categoria: "Plástico",
    reciclavel: true,
    imagem: "https://images.unsplash.com/photo-1607968565043-36af90dde238?w=300",
    resumo: "Plástico filme reciclável em pontos específicos",
    confuso: false
  },
  {
    id: 9,
    nome: "Eletrônicos",
    categoria: "Metal",
    reciclavel: true,
    imagem: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=300",
    resumo: "Requer descarte em pontos especializados",
    confuso: false
  },
  {
    id: 10,
    nome: "Isopor",
    categoria: "Rejeito",
    reciclavel: false,
    imagem: "https://images.unsplash.com/photo-1572981781188-7e3d86c5de2a?w=300",
    resumo: "Difícil reciclagem, baixa aceitação",
    confuso: true
  },
];

const dicasSabia = [
  {
    id: 1,
    titulo: "Embalagem de salgadinho não é reciclável",
    descricao: "A mistura de plástico e alumínio torna a separação impossível para reciclagem comum",
    icone: AlertTriangle,
    cor: "orange"
  },
  {
    id: 2,
    titulo: "Papelão molhado perde valor de reciclagem",
    descricao: "A água danifica as fibras do papel, tornando impossível sua reutilização",
    icone: AlertTriangle,
    cor: "red"
  },
  {
    id: 3,
    titulo: "Latas de alumínio são 100% recicláveis",
    descricao: "O alumínio pode ser reciclado infinitas vezes sem perder qualidade",
    icone: CheckCircle,
    cor: "green"
  },
  {
    id: 4,
    titulo: "Copo de papel com plástico não recicla",
    descricao: "O revestimento plástico impede que o papel seja processado normalmente",
    icone: AlertTriangle,
    cor: "orange"
  },
];

const legislacaoPenalidades = [
  {
    titulo: "Riscos legais",
    descricao: "Empresas podem responder por descarte inadequado, falta de comprovacao de destino e ausencia de logistica reversa.",
  },
  {
    titulo: "Penalidades",
    descricao: "Multas, restricoes operacionais, notificacoes ambientais e perda de certificacoes podem ocorrer sem rastreabilidade.",
  },
  {
    titulo: "Impactos ambientais",
    descricao: "Residuos sem destino correto ampliam contaminacao do solo, emissao de CO2 e pressao sobre aterros.",
  },
];

export default function EducacaoCultural({ onNavigate }: EducacaoCulturalProps) {
  const [busca, setBusca] = useState("");
  const [filtroCategoria, setFiltroCategoria] = useState("todos");
  const [filtroTipo, setFiltroTipo] = useState("todos");

  const materiaisFiltrados = materiais.filter((material) => {
    const matchBusca = material.nome.toLowerCase().includes(busca.toLowerCase());
    const matchCategoria = filtroCategoria === "todos" || material.categoria === filtroCategoria;
    const matchTipo =
      filtroTipo === "todos" ||
      (filtroTipo === "reciclavel" && material.reciclavel) ||
      (filtroTipo === "nao-reciclavel" && !material.reciclavel);

    return matchBusca && matchCategoria && matchTipo;
  });

  const materiaisConhecidos = 12;
  const totalMateriais = 40;
  const progresso = (materiaisConhecidos / totalMateriais) * 100;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen className="w-8 h-8 text-[--eco-green]" />
            <h1 className="text-3xl">Educação Cultural</h1>
          </div>
          <p className="text-gray-600">Aprenda a identificar materiais recicláveis e descarte corretamente</p>
        </div>

        {/* Progresso do Usuário */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border border-green-200 mb-8">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="font-semibold text-lg mb-1">Seu Progresso</h3>
              <p className="text-sm text-gray-600">Você já conhece {materiaisConhecidos} de {totalMateriais} materiais</p>
            </div>
            <div className="text-3xl font-bold text-[--eco-green]">{Math.round(progresso)}%</div>
          </div>
          <div className="w-full h-3 bg-white rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full transition-all"
              style={{ width: `${progresso}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
              <Scale className="w-6 h-6 text-purple-700" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Legislação e Penalidades</h2>
              <p className="text-sm text-gray-600">Responsabilidade legal e ambiental no descarte de resíduos</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {legislacaoPenalidades.map((item) => (
              <div key={item.titulo} className="rounded-xl border border-purple-100 bg-purple-50 p-5">
                <h3 className="font-semibold mb-2 text-purple-900">{item.titulo}</h3>
                <p className="text-sm text-gray-700">{item.descricao}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Busca e Filtros */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Busca */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                placeholder="Buscar material..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[--eco-green]"
              />
            </div>

            {/* Filtro Categoria */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={filtroCategoria}
                onChange={(e) => setFiltroCategoria(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[--eco-green] bg-white"
              >
                <option value="todos">Todas as categorias</option>
                <option value="Papel">Papel</option>
                <option value="Plástico">Plástico</option>
                <option value="Metal">Metal</option>
                <option value="Vidro">Vidro</option>
                <option value="Rejeito">Rejeito</option>
              </select>
            </div>

            {/* Filtro Tipo */}
            <select
              value={filtroTipo}
              onChange={(e) => setFiltroTipo(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[--eco-green] bg-white"
            >
              <option value="todos">Todos os tipos</option>
              <option value="reciclavel">Apenas recicláveis</option>
              <option value="nao-reciclavel">Apenas não recicláveis</option>
            </select>
          </div>

          {busca && (
            <div className="mt-4 text-sm text-gray-600">
              Encontrados {materiaisFiltrados.length} resultado(s)
            </div>
          )}
        </div>

        {/* Grid de Materiais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {materiaisFiltrados.map((material) => (
            <div
              key={material.id}
              onClick={() => onNavigate("detalhe-material", material.id)}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
            >
              {/* Imagem */}
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                  src={material.imagem}
                  alt={material.nome}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                {/* Badge Reciclável */}
                <div className={`absolute top-3 right-3 px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 ${
                  material.reciclavel
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                }`}>
                  {material.reciclavel ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      Reciclável
                    </>
                  ) : (
                    <>
                      <XCircle className="w-4 h-4" />
                      Não Reciclável
                    </>
                  )}
                </div>

                {/* Badge Confuso */}
                {material.confuso && (
                  <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full text-xs font-medium bg-yellow-500 text-white flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4" />
                    Atenção
                  </div>
                )}
              </div>

              {/* Conteúdo */}
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{material.nome}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                    {material.categoria}
                  </span>
                </div>
                <p className="text-sm text-gray-600 line-clamp-2">{material.resumo}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Seção Você Sabia? */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb className="w-8 h-8 text-yellow-600" />
            <h2 className="text-2xl font-semibold">Você Sabia?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dicasSabia.map((dica) => {
              const Icone = dica.icone;
              return (
                <div
                  key={dica.id}
                  className={`p-6 rounded-xl border-2 ${
                    dica.cor === "green" ? "border-green-200 bg-green-50" :
                    dica.cor === "orange" ? "border-orange-200 bg-orange-50" :
                    "border-red-200 bg-red-50"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      dica.cor === "green" ? "bg-green-500" :
                      dica.cor === "orange" ? "bg-orange-500" :
                      "bg-red-500"
                    }`}>
                      <Icone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{dica.titulo}</h3>
                      <p className="text-sm text-gray-700">{dica.descricao}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
