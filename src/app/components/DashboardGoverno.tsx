import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { TrendingUp, AlertTriangle, CheckCircle, MapPin, Package, Recycle, Building2, Users, Factory, ShieldCheck, ArrowRight } from "lucide-react";

interface DashboardGovernoProps {
  onNavigate: (page: string) => void;
}

const fluxoResiduosData = [
  { mes: "Jan", reciclado: 45, descartado: 55 },
  { mes: "Fev", reciclado: 52, descartado: 48 },
  { mes: "Mar", reciclado: 61, descartado: 39 },
  { mes: "Abr", reciclado: 68, descartado: 32 },
];

const tiposResiduosData = [
  { name: "Plástico", value: 35, color: "#3b82f6" },
  { name: "Papel", value: 25, color: "#10b981" },
  { name: "Metal", value: 20, color: "#f59e0b" },
  { name: "Vidro", value: 12, color: "#8b5cf6" },
  { name: "Eletrônico", value: 8, color: "#ef4444" },
];

const regioesCriticas = [
  { regiao: "Subúrbio Ferroviário", problema: "Alta geração de resíduos", nivel: "critico", quantidade: "2.8 ton/dia" },
  { regiao: "Centro Histórico", problema: "Baixa taxa de reciclagem", nivel: "alerta", quantidade: "1.9 ton/dia" },
  { regiao: "Orla Atlântica", problema: "Gargalo logístico", nivel: "alerta", quantidade: "2.1 ton/dia" },
  { regiao: "Cajazeiras", problema: "Falta de cooperativas", nivel: "critico", quantidade: "2.5 ton/dia" },
];

const evolucaoMensalData = [
  { mes: "Out", coletas: 145, empresas: 120, cooperativas: 85 },
  { mes: "Nov", coletas: 178, empresas: 135, cooperativas: 95 },
  { mes: "Dez", coletas: 203, empresas: 148, cooperativas: 102 },
  { mes: "Jan", coletas: 234, empresas: 160, cooperativas: 108 },
  { mes: "Fev", coletas: 267, empresas: 172, cooperativas: 114 },
  { mes: "Mar", coletas: 298, empresas: 185, cooperativas: 120 },
];

const volumePorRegiaoData = [
  { regiao: "Suburbio", volume: 2800, intensidade: 92, cor: "bg-red-500" },
  { regiao: "Cajazeiras", volume: 2500, intensidade: 84, cor: "bg-orange-500" },
  { regiao: "Orla Atlantica", volume: 2100, intensidade: 72, cor: "bg-yellow-500" },
  { regiao: "Centro", volume: 1900, intensidade: 65, cor: "bg-amber-500" },
  { regiao: "Pituba", volume: 1450, intensidade: 48, cor: "bg-green-500" },
  { regiao: "Iguatemi", volume: 1180, intensidade: 38, cor: "bg-emerald-500" },
];

const rankingGeracao = [
  { posicao: 1, regiao: "Suburbio Ferroviario", volume: "2.8 ton/dia", principal: "Plastico e papel" },
  { posicao: 2, regiao: "Cajazeiras", volume: "2.5 ton/dia", principal: "Organico e rejeito" },
  { posicao: 3, regiao: "Orla Atlantica", volume: "2.1 ton/dia", principal: "Vidro e plastico" },
  { posicao: 4, regiao: "Centro Historico", volume: "1.9 ton/dia", principal: "Papelao" },
];

const fluxoCompleto = [
  { nome: "Empresa", descricao: "Publica residuo", icone: Building2, cor: "bg-blue-100 text-blue-700" },
  { nome: "Recicladora", descricao: "Negocia e valida destino", icone: Factory, cor: "bg-green-100 text-green-700" },
  { nome: "Sistema", descricao: "Gera rota rastreavel", icone: Recycle, cor: "bg-gray-100 text-gray-700" },
  { nome: "Cooperativa", descricao: "Executa coleta e entrega", icone: Users, cor: "bg-yellow-100 text-yellow-700" },
  { nome: "Governo", descricao: "Analisa indicadores agregados", icone: ShieldCheck, cor: "bg-purple-100 text-purple-700" },
];

const indicadoresESG = [
  { nome: "Rastreabilidade media", valor: "91%", detalhe: "+9% no trimestre" },
  { nome: "Rotas validadas", valor: "87%", detalhe: "1.042 rotas auditaveis" },
  { nome: "CO2 evitado", valor: "8.2 ton", detalhe: "+18% vs mes anterior" },
];

export default function DashboardGoverno({ onNavigate }: DashboardGovernoProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl mb-2">Dashboard Setor Público</h1>
          <p className="text-gray-600">
            Inteligência urbana para planejamento, políticas ambientais e fiscalização baseada em dados reais da cadeia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-[--eco-green]" />
              </div>
              <span className="text-xs text-green-600">+12%</span>
            </div>
            <div className="text-2xl mb-1">91%</div>
            <div className="text-sm text-gray-600">Indicador ESG agregado</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                <Package className="w-6 h-6 text-[--eco-blue]" />
              </div>
              <span className="text-xs text-gray-500">Este mês</span>
            </div>
            <div className="text-2xl mb-1">12.5 ton</div>
            <div className="text-sm text-gray-600">Volume rastreado</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                <Recycle className="w-6 h-6 text-purple-600" />
              </div>
              <span className="text-xs text-gray-500">Completos</span>
            </div>
            <div className="text-2xl mb-1">1,042</div>
            <div className="text-sm text-gray-600">Fluxos auditáveis</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
              </div>
              <span className="text-xs text-orange-600">Atenção</span>
            </div>
            <div className="text-2xl mb-1">4</div>
            <div className="text-sm text-gray-600">Regiões críticas</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl">Mapa de calor por região</h2>
                <p className="text-sm text-gray-600">Volume de resíduos por região urbana</p>
              </div>
              <MapPin className="w-6 h-6 text-purple-600" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {volumePorRegiaoData.map((regiao) => (
                <div key={regiao.regiao} className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="font-medium">{regiao.regiao}</h3>
                    <span className="text-sm text-gray-500">{regiao.intensidade}%</span>
                  </div>
                  <div className="h-24 rounded-lg bg-white p-2">
                    <div
                      className={`${regiao.cor} h-full rounded-md opacity-80`}
                      style={{ width: `${regiao.intensidade}%` }}
                    />
                  </div>
                  <div className="mt-3 text-sm text-gray-600">{regiao.volume.toLocaleString("pt-BR")} kg/dia</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl mb-6">Ranking de geração</h2>
            <div className="space-y-4">
              {rankingGeracao.map((item) => (
                <div key={item.posicao} className="rounded-lg border border-gray-100 bg-gray-50 p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-sm text-purple-700">
                        #{item.posicao}
                      </div>
                      <h3 className="font-medium">{item.regiao}</h3>
                    </div>
                    <span className="text-sm font-medium text-gray-900">{item.volume}</span>
                  </div>
                  <p className="text-xs text-gray-600">Principal tipo: {item.principal}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-xl">Fluxo completo da cadeia</h2>
              <p className="text-sm text-gray-600">Empresa → cooperativa → recicladora com inteligência pública agregada</p>
            </div>
            <Recycle className="w-6 h-6 text-[--eco-green]" />
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
            {fluxoCompleto.map((etapa, index) => {
              const Icone = etapa.icone;
              return (
                <div key={etapa.nome} className="relative rounded-xl border border-gray-100 bg-gray-50 p-4">
                  <div className={`mb-3 flex h-11 w-11 items-center justify-center rounded-lg ${etapa.cor}`}>
                    <Icone className="h-5 w-5" />
                  </div>
                  <h3 className="font-medium">{etapa.nome}</h3>
                  <p className="text-sm text-gray-600">{etapa.descricao}</p>
                  {index < fluxoCompleto.length - 1 && (
                    <ArrowRight className="absolute right-3 top-5 hidden h-4 w-4 text-gray-400 md:block" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {indicadoresESG.map((indicador) => (
            <div key={indicador.nome} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="text-sm text-gray-600 mb-2">{indicador.nome}</div>
              <div className="text-3xl mb-1 text-purple-700">{indicador.valor}</div>
              <div className="text-xs text-gray-500">{indicador.detalhe}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl mb-6">Gráficos de tendência</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={fluxoResiduosData} key="bar-chart-fluxo">
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="reciclado" fill="#10b981" name="Reciclado (%)" radius={[8, 8, 0, 0]} />
                <Bar dataKey="descartado" fill="#ef4444" name="Descartado (%)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl mb-6">Tipos de resíduos mais gerados</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart key="pie-chart-tipos">
                <Pie
                  data={tiposResiduosData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name} ${value}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {tiposResiduosData.map((entry, index) => (
                    <Cell key={`cell-${entry.name}-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
              <h2 className="text-xl mb-6">Crescimento do Ecossistema</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={evolucaoMensalData} key="line-chart-evolucao">
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="mes" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="coletas" stroke="#10b981" strokeWidth={3} name="Coletas" dot={{ r: 4 }} activeDot={{ r: 6 }} />
                  <Line type="monotone" dataKey="empresas" stroke="#3b82f6" strokeWidth={3} name="Empresas" dot={{ r: 4 }} activeDot={{ r: 6 }} />
                  <Line type="monotone" dataKey="cooperativas" stroke="#8b5cf6" strokeWidth={3} name="Cooperativas" dot={{ r: 4 }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl">Regiões Críticas</h2>
              </div>

              <div className="divide-y divide-gray-100">
                {regioesCriticas.map((regiao, index) => (
                  <div key={`regiao-${regiao.regiao}-${index}`} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-medium">{regiao.regiao}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs ${
                            regiao.nivel === "critico"
                              ? "bg-red-100 text-red-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}>
                            {regiao.nivel === "critico" ? "Crítico" : "Alerta"}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{regiao.problema}</p>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Package className="w-4 h-4" />
                          {regiao.quantidade}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="bg-gradient-to-br from-emerald-600 via-emerald-700 to-green-800 rounded-xl p-6 text-white mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-white/80">Meta ESG 2026</div>
                  <div className="text-2xl">75%</div>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span>Progresso</span>
                  <span>68% de 75%</span>
                </div>
                <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-white rounded-full" style={{ width: "91%" }}></div>
                </div>
              </div>
              <p className="text-sm text-white/90">Faltam 7% para atingir a meta anual de reciclagem</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
              <h3 className="font-medium mb-4">Insights Automáticos</h3>

              <div className="space-y-4">
                <div className="flex gap-3 p-3 bg-blue-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-[--eco-blue] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium mb-1">Zona Centro melhorou</p>
                    <p className="text-xs text-gray-600">Taxa de reciclagem subiu 15% este mês</p>
                  </div>
                </div>

                <div className="flex gap-3 p-3 bg-orange-50 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium mb-1">Zona Norte precisa de atenção</p>
                    <p className="text-xs text-gray-600">Apenas 2 cooperativas para 2.1 ton/dia</p>
                  </div>
                </div>

                <div className="flex gap-3 p-3 bg-green-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-[--eco-green] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium mb-1">3 novas cooperativas</p>
                    <p className="text-xs text-gray-600">Cadastradas na plataforma este mês</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-medium mb-4">Impacto Ambiental</h3>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">CO₂ evitado</span>
                    <span className="font-medium">8.2 ton</span>
                  </div>
                  <div className="text-xs text-green-600">↑ 18% vs mês anterior</div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Árvores equivalentes</span>
                    <span className="font-medium">412</span>
                  </div>
                  <div className="text-xs text-gray-500">Baseado em captura de CO₂</div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Água economizada</span>
                    <span className="font-medium">45k L</span>
                  </div>
                  <div className="text-xs text-gray-500">Na produção de materiais</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
