import { useState } from "react";
import { Plus, Package, TrendingUp, Leaf, MapPin, Calendar, Search, Filter, Eye, Image, CheckSquare, X, FileText, Download, Factory, ArrowRight } from "lucide-react";

interface DashboardEmpresaProps {
  onNavigate: (page: string) => void;
}

const residuosCadastrados = [
  {
    id: 1,
    tipo: "Plástico PET",
    quantidade: "150 kg",
    status: "Aguardando coleta",
    data: "2026-04-18",
    recicladora: "Recicla SSA",
    cooperativa: "CoopRecicla Salvador",
    distancia: "3.2 km",
    fotos: [
      "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=300",
      "https://images.unsplash.com/photo-1607968565043-36af90dde238?w=300"
    ]
  },
  {
    id: 2,
    tipo: "Papelão",
    quantidade: "320 kg",
    status: "Coletado",
    data: "2026-04-15",
    recicladora: "Circular Recicladora",
    cooperativa: "EcoBahia Cooperativa",
    distancia: "2.5 km",
    fotos: [
      "https://images.unsplash.com/photo-1594843302824-9ab51238f2d7?w=300",
      "https://images.unsplash.com/photo-1581579438747-6d61f0c3c17b?w=300",
      "https://images.unsplash.com/photo-1605600659908-0ef719419d41?w=300"
    ]
  },
  {
    id: 3,
    tipo: "Eletrônicos",
    quantidade: "85 kg",
    status: "Em análise",
    data: "2026-04-17",
    recicladora: "TechCycle Bahia",
    cooperativa: "TechRecycle SSA",
    distancia: "5.1 km",
    fotos: [
      "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=300",
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=300"
    ]
  },
  {
    id: 4,
    tipo: "Metal",
    quantidade: "210 kg",
    status: "Aguardando coleta",
    data: "2026-04-19",
    recicladora: "MetalVerde Processamento",
    cooperativa: "MetalVerde Bahia",
    distancia: "4.2 km",
    fotos: [
      "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=300",
      "https://images.unsplash.com/photo-1583314965950-cd54a8b6db15?w=300",
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=300"
    ]
  },
];

const recicladorasSugeridas = [
  { nome: "Recicla SSA", tipos: ["Plástico", "Papel"], distancia: "6.8 km", score: 94, demandas: 18 },
  { nome: "Circular Recicladora", tipos: ["Papelão", "Vidro"], distancia: "8.1 km", score: 91, demandas: 24 },
  { nome: "TechCycle Bahia", tipos: ["Eletrônicos"], distancia: "9.4 km", score: 96, demandas: 9 },
];

const fluxoAtualizado = [
  "Empresa publica resíduo",
  "Recicladora negocia",
  "Sistema gera rota",
  "Cooperativa executa coleta",
  "Recicladora valida recebimento",
  "Sistema registra rastreabilidade",
  "Relatório consolidado gerado",
];

export default function DashboardEmpresa({ onNavigate }: DashboardEmpresaProps) {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    tipo: "",
    quantidade: "",
    localizacao: "",
    condicoes: {
      molhado: false,
      contaminado: false,
      danificado: false,
      separado: true,
      misturado: false,
      armazenado: true,
    },
    fotos: [] as string[],
  });

  const handleExportarRelatorio = () => {
    alert("Relatório consolidado preparado para exportação.");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-8">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h1 className="text-3xl mb-2">Dashboard Empresa</h1>
            <p className="text-gray-600">Publique resíduos, acompanhe negociações com recicladoras e gere rastreabilidade ESG</p>
          </div>
          <button
            onClick={handleExportarRelatorio}
            className="flex items-center justify-center gap-2 rounded-lg bg-[--eco-blue] px-5 py-3 text-white transition-colors hover:bg-blue-700"
          >
            <Download className="w-5 h-5" />
            Exportar relatório consolidado
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                <Package className="w-6 h-6 text-[--eco-blue]" />
              </div>
              <span className="text-xs text-gray-500">Este mês</span>
            </div>
            <div className="text-2xl mb-1">765 kg</div>
            <div className="text-sm text-gray-600">Total reciclado</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-[--eco-blue]" />
              </div>
              <span className="text-xs text-green-600">+23%</span>
            </div>
            <div className="text-2xl mb-1">12</div>
            <div className="text-sm text-gray-600">Coletas realizadas</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                <Leaf className="w-6 h-6 text-[--eco-green]" />
              </div>
              <span className="text-xs text-gray-500">CO₂</span>
            </div>
            <div className="text-2xl mb-1">1.2 ton</div>
            <div className="text-sm text-gray-600">CO₂ evitado</div>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all flex flex-col items-center justify-center gap-2 group"
          >
            <Plus className="w-8 h-8 group-hover:scale-110 transition-transform" />
            <span>Cadastrar Resíduo</span>
          </button>
        </div>

        {/* Card de Relatório Consolidado */}
        <div className="mb-8">
          <div
            onClick={() => onNavigate("relatorio")}
            className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6 border-2 border-blue-200 hover:border-blue-300 transition-all cursor-pointer shadow-sm hover:shadow-md"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center">
                  <FileText className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Relatório ESG Consolidado</h3>
                  <p className="text-sm text-gray-600">
                    Origem, negociação, rota, coleta e validação da recicladora em um fluxo rastreável
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <button
                  onClick={(event) => {
                    event.stopPropagation();
                    onNavigate("relatorio");
                  }}
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-white rounded-lg border border-blue-200"
                >
                  <span className="text-sm font-medium text-blue-600">Ver relatório</span>
                  <TrendingUp className="w-4 h-4 text-blue-600" />
                </button>
                <button
                  onClick={(event) => {
                    event.stopPropagation();
                    handleExportarRelatorio();
                  }}
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-[--eco-blue] text-white rounded-lg"
                >
                  <Download className="w-4 h-4" />
                  <span className="text-sm font-medium">Exportar relatório consolidado</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8 rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center gap-3">
            <Factory className="h-6 w-6 text-[--eco-green]" />
            <h2 className="text-xl">Fluxo atualizado do sistema</h2>
          </div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-7">
            {fluxoAtualizado.map((etapa, index) => (
              <div key={etapa} className="flex items-center gap-3 md:block">
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-3 md:min-h-[112px]">
                  <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-[--eco-blue] text-sm text-white">
                    {index + 1}
                  </div>
                  <p className="text-sm text-gray-700">{etapa}</p>
                </div>
                {index < fluxoAtualizado.length - 1 && <ArrowRight className="h-4 w-4 flex-shrink-0 text-gray-400 md:hidden" />}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl">Resíduos Cadastrados</h2>
                  <div className="flex gap-2">
                    <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                      <Search className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                      <Filter className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="divide-y divide-gray-100">
                {residuosCadastrados.map((residuo) => (
                  <div key={residuo.id} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex gap-4 mb-4">
                      {/* Fotos do Material */}
                      {residuo.fotos && residuo.fotos.length > 0 && (
                        <div className="flex gap-2">
                          {residuo.fotos.slice(0, 3).map((foto, index) => (
                            <div
                              key={index}
                              className="w-20 h-20 rounded-lg overflow-hidden border-2 border-gray-200 flex-shrink-0"
                            >
                              <img
                                src={foto}
                                alt={`${residuo.tipo} ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ))}
                          {residuo.fotos.length > 3 && (
                            <div className="w-20 h-20 rounded-lg bg-gray-100 border-2 border-gray-200 flex items-center justify-center flex-shrink-0">
                              <span className="text-sm text-gray-600">+{residuo.fotos.length - 3}</span>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Informações */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-medium mb-1">{residuo.tipo}</h3>
                            <p className="text-sm text-gray-600">{residuo.quantidade}</p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs ${
                            residuo.status === "Coletado" ? "bg-green-100 text-green-700" :
                            residuo.status === "Aguardando coleta" ? "bg-yellow-100 text-yellow-700" :
                            "bg-blue-100 text-blue-700"
                          }`}>
                            {residuo.status}
                          </span>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {residuo.data}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {residuo.recicladora}
                          </div>
                          <div className="text-gray-500">
                            Coleta: {residuo.cooperativa} · {residuo.distancia}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl mb-6">Recicladoras Sugeridas</h2>

            <div className="space-y-4">
              {recicladorasSugeridas.map((recicladora, index) => (
                <div key={index} className="p-4 rounded-xl border border-gray-200 hover:border-[--eco-green] hover:bg-green-50 transition-all cursor-pointer">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-medium mb-1">{recicladora.nome}</h3>
                      <div className="flex items-center gap-1 text-sm">
                        <span className="text-green-600">●</span>
                        <span className="font-medium">{recicladora.score}% ESG</span>
                        <span className="text-gray-500">({recicladora.demandas} demandas)</span>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">{recicladora.distancia}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {recicladora.tipos.map((tipo) => (
                      <span key={tipo} className="px-2 py-1 bg-gray-100 rounded text-xs">
                        {tipo}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors text-sm flex items-center justify-center gap-2">
              <Eye className="w-4 h-4" />
              Ver todas recicladoras
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-8 my-8">
            <h2 className="text-2xl mb-6">Cadastrar Novo Resíduo</h2>

            <div className="space-y-6 mb-6 max-h-[calc(100vh-240px)] overflow-y-auto pr-2">
              {/* Informações Básicas */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-2">Tipo de Resíduo</label>
                  <select
                    value={formData.tipo}
                    onChange={(e) => setFormData({ ...formData, tipo: e.target.value })}
                    className="w-full p-3 rounded-lg border border-gray-300 bg-white"
                  >
                    <option value="">Selecione...</option>
                    <option value="plastico">Plástico</option>
                    <option value="papel">Papel/Papelão</option>
                    <option value="metal">Metal</option>
                    <option value="vidro">Vidro</option>
                    <option value="eletronico">Eletrônico</option>
                    <option value="organico">Orgânico</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm mb-2">Quantidade (kg)</label>
                  <input
                    type="number"
                    value={formData.quantidade}
                    onChange={(e) => setFormData({ ...formData, quantidade: e.target.value })}
                    className="w-full p-3 rounded-lg border border-gray-300"
                    placeholder="Ex: 150"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">Localização</label>
                  <input
                    type="text"
                    value={formData.localizacao}
                    onChange={(e) => setFormData({ ...formData, localizacao: e.target.value })}
                    className="w-full p-3 rounded-lg border border-gray-300"
                    placeholder="Endereço completo"
                  />
                </div>
              </div>

              {/* Condições do Material */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <CheckSquare className="w-5 h-5 text-[--eco-green]" />
                  <h3 className="font-medium">Condições do Material</h3>
                </div>

                <div className="space-y-3">
                  {[
                    { key: 'molhado', label: 'O material está molhado?' },
                    { key: 'contaminado', label: 'O material está contaminado?' },
                    { key: 'danificado', label: 'O material está danificado?' },
                    { key: 'separado', label: 'O material está separado por tipo?' },
                    { key: 'misturado', label: 'Há mistura com resíduos orgânicos?' },
                    { key: 'armazenado', label: 'Está armazenado corretamente?' },
                  ].map((item) => (
                    <div key={item.key} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm">{item.label}</span>
                      <button
                        type="button"
                        onClick={() => setFormData({
                          ...formData,
                          condicoes: {
                            ...formData.condicoes,
                            [item.key]: !formData.condicoes[item.key as keyof typeof formData.condicoes]
                          }
                        })}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          formData.condicoes[item.key as keyof typeof formData.condicoes]
                            ? 'bg-[--eco-green]'
                            : 'bg-gray-300'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            formData.condicoes[item.key as keyof typeof formData.condicoes]
                              ? 'translate-x-6'
                              : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upload de Fotos */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <Image className="w-5 h-5 text-[--eco-green]" />
                  <h3 className="font-medium">Fotos do Material</h3>
                  <span className="text-xs text-gray-500">(até 5 fotos)</span>
                </div>

                <div className="grid grid-cols-5 gap-3 mb-3">
                  {formData.fotos.map((foto, index) => (
                    <div key={index} className="relative aspect-square rounded-lg overflow-hidden border-2 border-gray-200">
                      <img src={foto} alt={`Foto ${index + 1}`} className="w-full h-full object-cover" />
                      <button
                        type="button"
                        onClick={() => setFormData({
                          ...formData,
                          fotos: formData.fotos.filter((_, i) => i !== index)
                        })}
                        className="absolute top-1 right-1 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>

                {formData.fotos.length < 5 && (
                  <button
                    type="button"
                    onClick={() => {
                      // Simular upload de foto (em produção, seria um input file real)
                      const novaFoto = `https://images.unsplash.com/photo-1581579438747-6d61f0c3c17b?w=300`;
                      setFormData({
                        ...formData,
                        fotos: [...formData.fotos, novaFoto]
                      });
                    }}
                    className="w-full py-3 rounded-lg border-2 border-dashed border-gray-300 hover:border-[--eco-green] hover:bg-green-50 transition-colors flex items-center justify-center gap-2 text-gray-600 hover:text-[--eco-green]"
                  >
                    <Image className="w-5 h-5" />
                    Adicionar fotos do material
                  </button>
                )}
              </div>
            </div>

            <div className="flex gap-3 border-t border-gray-200 pt-6">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 py-3 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
              >
                Cadastrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
