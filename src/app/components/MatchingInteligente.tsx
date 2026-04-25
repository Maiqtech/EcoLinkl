import { Sparkles, TrendingUp, MapPin, CheckCircle, Clock, Package, Eye } from "lucide-react";

interface MatchingInteligenteProps {
  onNavigate: (page: string) => void;
}

const matchesSugeridos = [
  {
    id: 1,
    empresa: "TechCorp Industries",
    residuo: { tipo: "Plástico PET", quantidade: "150 kg" },
    recicladora: "Recicla SSA",
    cooperativaRota: "CoopRecicla Salvador",
    score: 95,
    motivos: [
      "Recicladora especializada em plásticos",
      "Rota logística disponível pela cooperativa parceira",
      "Alta capacidade de recebimento (85%)",
      "Rastreabilidade ESG: 94%"
    ],
    economia: { distancia: "3.2 km", tempo: "18 min", co2: "0.6 kg" }
  },
  {
    id: 2,
    empresa: "EcoFood Ltda",
    residuo: { tipo: "Papelão", quantidade: "320 kg" },
    recicladora: "Circular Recicladora",
    cooperativaRota: "EcoBahia Cooperativa",
    score: 88,
    motivos: [
      "Recicladora especializada em papel/papelão",
      "Rota otimizada com baixa quilometragem",
      "Capacidade disponível para recebimento",
      "Documentação ESG completa"
    ],
    economia: { distancia: "2.5 km", tempo: "14 min", co2: "0.5 kg" }
  },
  {
    id: 3,
    empresa: "SmartOffice",
    residuo: { tipo: "Eletrônicos", quantidade: "85 kg" },
    recicladora: "TechCycle Bahia",
    cooperativaRota: "TechRecycle SSA",
    score: 82,
    motivos: [
      "Recicladora especializada em e-waste",
      "Certificações ambientais para recebimento",
      "Distância aceitável (5.1 km)",
      "Rastreabilidade de componentes sensíveis"
    ],
    economia: { distancia: "5.1 km", tempo: "25 min", co2: "1.2 kg" }
  },
];

export default function MatchingInteligente({ onNavigate }: MatchingInteligenteProps) {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Sparkles className="w-8 h-8 text-[--eco-green]" />
            <h1 className="text-3xl">Matching Inteligente</h1>
          </div>
          <p className="text-gray-600">IA identificou as melhores conexões entre resíduos, recicladoras e rotas cooperativas em Salvador</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-[--eco-green]" />
              </div>
            </div>
            <div className="text-2xl mb-1">12</div>
            <div className="text-sm text-gray-600">Matches sugeridos hoje</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-[--eco-blue]" />
              </div>
            </div>
            <div className="text-2xl mb-1">89%</div>
            <div className="text-sm text-gray-600">Taxa de aceitação</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                <Package className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <div className="text-2xl mb-1">34</div>
            <div className="text-sm text-gray-600">Coletas realizadas</div>
          </div>
        </div>

        <div className="space-y-6">
          {matchesSugeridos.map((match) => (
            <div key={match.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h2 className="text-xl">{match.empresa}</h2>
                      <div className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                        <Sparkles className="w-4 h-4" />
                        {match.score}% Match
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Package className="w-4 h-4" />
                      <span className="text-sm">{match.residuo.tipo} - {match.residuo.quantidade}</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-sm text-gray-600 mb-1">Recicladora negociadora</div>
                    <div className="font-medium">{match.recicladora}</div>
                    <div className="text-xs text-gray-500">Rota: {match.cooperativaRota}</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-medium mb-3">Por que este match?</h3>
                    <ul className="space-y-2">
                      {match.motivos.map((motivo, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-[--eco-green] flex-shrink-0 mt-0.5" />
                          {motivo}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium mb-3">Economia estimada</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <MapPin className="w-4 h-4" />
                          Distância
                        </div>
                        <span className="font-medium">{match.economia.distancia}</span>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Clock className="w-4 h-4" />
                          Tempo estimado
                        </div>
                        <span className="font-medium">{match.economia.tempo}</span>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <div className="flex items-center gap-2 text-sm text-green-700">
                          <TrendingUp className="w-4 h-4" />
                          CO₂ economizado
                        </div>
                        <span className="font-medium text-green-700">{match.economia.co2}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                    <Eye className="w-5 h-5" />
                    Ver Detalhes
                  </button>
                  <button
                    onClick={() => onNavigate("chat")}
                    className="flex-1 py-3 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <CheckCircle className="w-5 h-5" />
                    Negociar com recicladora
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-gradient-to-br from-emerald-600 via-emerald-700 to-green-800 rounded-xl p-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl mb-3 font-bold">Como funciona o Matching Inteligente?</h2>
              <p className="text-white/90 mb-6 max-w-2xl">
                Nossa IA analisa tipo de resíduo, localização, capacidade das recicladoras, cooperativas disponíveis e requisitos de rastreabilidade para sugerir as melhores conexões.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl mb-1 font-bold">95%</div>
                  <div className="text-sm text-white/80">Precisão dos matches</div>
                </div>
                <div>
                  <div className="text-3xl mb-1 font-bold">21 min</div>
                  <div className="text-sm text-white/80">Economia média de tempo</div>
                </div>
                <div>
                  <div className="text-3xl mb-1 font-bold">13 km</div>
                  <div className="text-sm text-white/80">Redução média de distância</div>
                </div>
              </div>
            </div>
            <Sparkles className="w-24 h-24 opacity-20" />
          </div>
        </div>
      </div>
    </div>
  );
}
