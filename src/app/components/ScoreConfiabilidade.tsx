import { Star, TrendingUp, Award, CheckCircle, Clock, MapPin, Package } from "lucide-react";

const cooperativasRanking = [
  {
    id: 1,
    nome: "EcoBahia Cooperativa",
    score: 4.9,
    badge: "Alta confiabilidade",
    coletas: 456,
    pontualidade: 98,
    qualidade: 96,
    avaliacoes: 234,
    especialidades: ["Papel", "Papelão", "Vidro"],
    localizacao: "Pituba, Salvador"
  },
  {
    id: 2,
    nome: "CoopRecicla Salvador",
    score: 4.8,
    badge: "Alta confiabilidade",
    coletas: 398,
    pontualidade: 95,
    qualidade: 94,
    avaliacoes: 189,
    especialidades: ["Plástico", "Metal"],
    localizacao: "Centro, Salvador"
  },
  {
    id: 3,
    nome: "TechRecycle SSA",
    score: 4.7,
    badge: "Confiável",
    coletas: 234,
    pontualidade: 92,
    qualidade: 91,
    avaliacoes: 156,
    especialidades: ["Eletrônicos", "E-waste"],
    localizacao: "Iguatemi, Salvador"
  },
  {
    id: 4,
    nome: "MetalVerde Bahia",
    score: 4.6,
    badge: "Confiável",
    coletas: 187,
    pontualidade: 90,
    qualidade: 89,
    avaliacoes: 98,
    especialidades: ["Metal", "Alumínio"],
    localizacao: "Cajazeiras, Salvador"
  },
];

export default function ScoreConfiabilidade() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Award className="w-8 h-8 text-yellow-600" />
            <h1 className="text-3xl">Ranking de Confiabilidade</h1>
          </div>
          <p className="text-gray-600">Sistema de avaliação das cooperativas de Salvador baseado em coletas, pontualidade e qualidade</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center">
                <Star className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
            <div className="text-2xl mb-1">4.75</div>
            <div className="text-sm text-gray-600">Score médio geral</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                <Package className="w-6 h-6 text-[--eco-green]" />
              </div>
            </div>
            <div className="text-2xl mb-1">1,275</div>
            <div className="text-sm text-gray-600">Coletas realizadas</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                <Clock className="w-6 h-6 text-[--eco-blue]" />
              </div>
            </div>
            <div className="text-2xl mb-1">94%</div>
            <div className="text-sm text-gray-600">Pontualidade média</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <div className="text-2xl mb-1">677</div>
            <div className="text-sm text-gray-600">Avaliações</div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-8">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl">Top Cooperativas</h2>
          </div>

          <div className="divide-y divide-gray-100">
            {cooperativasRanking.map((coop, index) => (
              <div key={coop.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-start gap-6">
                  <div className="flex flex-col items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg ${
                      index === 0 ? "bg-yellow-500 text-white" :
                      index === 1 ? "bg-gray-400 text-white" :
                      index === 2 ? "bg-orange-600 text-white" :
                      "bg-gray-200 text-gray-600"
                    }`}>
                      #{index + 1}
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-medium">{coop.nome}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs ${
                            coop.badge === "Alta confiabilidade"
                              ? "bg-green-100 text-green-700"
                              : "bg-blue-100 text-blue-700"
                          }`}>
                            {coop.badge}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {coop.localizacao}
                          </div>
                          <div className="flex items-center gap-1">
                            <Package className="w-4 h-4" />
                            {coop.coletas} coletas
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {coop.especialidades.map((esp) => (
                            <span key={esp} className="px-2 py-1 bg-gray-100 rounded text-xs">
                              {esp}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="flex items-center gap-2 mb-2">
                          <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                          <span className="text-2xl font-medium">{coop.score}</span>
                        </div>
                        <div className="text-xs text-gray-600">{coop.avaliacoes} avaliações</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-gray-600">Pontualidade</span>
                          <span className="text-xs font-medium">{coop.pontualidade}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[--eco-blue] rounded-full bg-[#ad46ff]"
                            style={{ width: `${coop.pontualidade}%` }}
                          ></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-gray-600">Qualidade</span>
                          <span className="text-xs font-medium">{coop.qualidade}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[--eco-green] rounded-full bg-[#ad46ff]"
                            style={{ width: `${coop.qualidade}%` }}
                          ></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-gray-600">Confiabilidade</span>
                          <span className="text-xs font-medium">{Math.round((coop.score / 5) * 100)}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-purple-500 rounded-full"
                            style={{ width: `${(coop.score / 5) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-12 h-12" />
              <div>
                <h2 className="text-2xl mb-1">Como funciona o Score?</h2>
                <p className="text-white/90 text-sm">Sistema baseado em múltiplos critérios</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium mb-1">Histórico de coletas</div>
                  <div className="text-sm text-white/80">Número total de coletas realizadas com sucesso</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium mb-1">Pontualidade</div>
                  <div className="text-sm text-white/80">Taxa de coletas realizadas no prazo acordado</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium mb-1">Avaliações das empresas</div>
                  <div className="text-sm text-white/80">Feedback direto dos geradores de resíduos</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium mb-1">Qualidade do serviço</div>
                  <div className="text-sm text-white/80">Certificações e cumprimento de normas ambientais</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-xl mb-6">Distribuição de Scores</h2>

            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">4.5 - 5.0</span>
                  </div>
                  <span className="text-sm text-gray-600">4 cooperativas</span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: "50%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">4.0 - 4.4</span>
                  </div>
                  <span className="text-sm text-gray-600">6 cooperativas</span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: "50%" }}></div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <TrendingUp className="w-5 h-5 text-[--eco-green]" />
                  <span className="font-medium">Tendência Geral</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  O score médio aumentou 8% nos últimos 3 meses, indicando melhoria constante na qualidade dos serviços.
                </p>
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl text-[--eco-green] mb-1">+8%</div>
                  <div className="text-sm text-gray-600">vs trimestre anterior</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
