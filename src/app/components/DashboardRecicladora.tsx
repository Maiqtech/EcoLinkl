import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  Download,
  Factory,
  FileText,
  Leaf,
  MapPin,
  Package,
  Recycle,
  ShieldCheck,
  TrendingUp,
  Truck,
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface DashboardRecicladoraProps {
  onNavigate: (page: string) => void;
}

const materiaisPorTipo = [
  { tipo: "Plastico PET", quantidade: 1840, percentual: 36, cor: "#10b981" },
  { tipo: "Papelao", quantidade: 1260, percentual: 25, cor: "#3b82f6" },
  { tipo: "Metal", quantidade: 940, percentual: 18, cor: "#f59e0b" },
  { tipo: "Vidro", quantidade: 620, percentual: 12, cor: "#8b5cf6" },
  { tipo: "Eletronicos", quantidade: 480, percentual: 9, cor: "#ef4444" },
];

const origensResiduos = [
  { origem: "Empresas", volume: 3260, lotes: 18, cor: "#3b82f6" },
  { origem: "Cooperativas", volume: 1880, lotes: 11, cor: "#f59e0b" },
];

const negociacoesAtivas = [
  {
    id: "NEG-2048",
    empresa: "TechCorp Industries",
    material: "Plastico PET",
    quantidade: "150 kg",
    localizacao: "Pituba, Salvador",
    cooperativa: "CoopRecicla Salvador",
    status: "Rota gerada",
    rastreabilidade: "92%",
  },
  {
    id: "NEG-2049",
    empresa: "EcoFood Ltda",
    material: "Papelao",
    quantidade: "320 kg",
    localizacao: "Centro, Salvador",
    cooperativa: "EcoBahia Cooperativa",
    status: "Coleta confirmada",
    rastreabilidade: "88%",
  },
  {
    id: "NEG-2050",
    empresa: "SmartOffice",
    material: "Eletronicos",
    quantidade: "85 kg",
    localizacao: "Iguatemi, Salvador",
    cooperativa: "TechRecycle SSA",
    status: "Validar recebimento",
    rastreabilidade: "96%",
  },
];

const fluxoSistema = [
  "Empresa publica residuo",
  "Recicladora negocia",
  "Sistema gera rota",
  "Cooperativa executa coleta",
  "Recicladora valida recebimento",
  "Sistema registra rastreabilidade",
  "Relatorio consolidado gerado",
];

export default function DashboardRecicladora({ onNavigate }: DashboardRecicladoraProps) {
  const totalRecebido = materiaisPorTipo.reduce((total, material) => total + material.quantidade, 0);

  const handleExportar = () => {
    alert("Relatorio ESG consolidado pronto para exportacao em PDF.");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-8">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-3">
              <Factory className="h-8 w-8 text-[--eco-green]" />
              <h1 className="text-3xl">Dashboard Recicladora</h1>
            </div>
            <p className="max-w-3xl text-gray-600">
              Operacao central de negociacao, recebimento, validacao e governanca dos residuos da cadeia EcoLink.
            </p>
          </div>

          <button
            onClick={handleExportar}
            className="flex items-center justify-center gap-2 rounded-lg bg-[--eco-green] px-5 py-3 text-white transition-colors hover:bg-emerald-700"
          >
            <Download className="h-5 w-5" />
            Exportar relatorio consolidado
          </button>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-4">
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                <Package className="h-6 w-6 text-[--eco-green]" />
              </div>
              <span className="text-xs text-green-600">+21%</span>
            </div>
            <div className="mb-1 text-2xl">{totalRecebido.toLocaleString("pt-BR")} kg</div>
            <div className="text-sm text-gray-600">Volume total recebido</div>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <Factory className="h-6 w-6 text-[--eco-blue]" />
              </div>
              <span className="text-xs text-gray-500">Este mes</span>
            </div>
            <div className="mb-1 text-2xl">29</div>
            <div className="text-sm text-gray-600">Lotes recebidos</div>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
                <ShieldCheck className="h-6 w-6 text-emerald-700" />
              </div>
              <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-700">Auditavel</span>
            </div>
            <div className="mb-1 text-2xl">94%</div>
            <div className="text-sm text-gray-600">Rastreabilidade ESG</div>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100">
                <Truck className="h-6 w-6 text-yellow-600" />
              </div>
              <span className="text-xs text-gray-500">Em campo</span>
            </div>
            <div className="mb-1 text-2xl">7</div>
            <div className="text-sm text-gray-600">Rotas em execucao</div>
          </div>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm lg:col-span-2">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl">Materiais por tipo</h2>
              <span className="text-sm text-gray-500">kg processados</span>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={materiaisPorTipo}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="tipo" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="quantidade" name="Quantidade (kg)" radius={[8, 8, 0, 0]}>
                  {materiaisPorTipo.map((entry) => (
                    <Cell key={entry.tipo} fill={entry.cor} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl">Origem dos residuos</h2>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie
                  data={origensResiduos}
                  dataKey="volume"
                  nameKey="origem"
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={85}
                  paddingAngle={4}
                >
                  {origensResiduos.map((entry) => (
                    <Cell key={entry.origem} fill={entry.cor} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-3">
              {origensResiduos.map((origem) => (
                <div key={origem.origem} className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full" style={{ backgroundColor: origem.cor }} />
                    <span className="text-sm text-gray-700">{origem.origem}</span>
                  </div>
                  <span className="text-sm font-medium">{origem.volume.toLocaleString("pt-BR")} kg</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-8 rounded-xl border border-green-200 bg-gradient-to-br from-green-50 to-blue-50 p-6">
          <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[--eco-green]">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl">Relatorio ESG Consolidado</h2>
                <p className="text-sm text-gray-600">
                  Origem, rota, validacao de recebimento e indicadores ambientais em um unico documento auditavel.
                </p>
              </div>
            </div>
            <button
              onClick={handleExportar}
              className="flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2 text-sm text-green-700 shadow-sm transition-colors hover:bg-green-100"
            >
              <Download className="h-4 w-4" />
              Exportar relatorio (PDF)
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <div className="rounded-lg bg-white p-4">
              <div className="text-2xl text-green-700">5.1 ton</div>
              <div className="text-sm text-gray-600">Volume consolidado</div>
            </div>
            <div className="rounded-lg bg-white p-4">
              <div className="text-2xl text-blue-700">2.8 ton</div>
              <div className="text-sm text-gray-600">CO2 evitado</div>
            </div>
            <div className="rounded-lg bg-white p-4">
              <div className="text-2xl text-purple-700">96%</div>
              <div className="text-sm text-gray-600">Documentos completos</div>
            </div>
            <div className="rounded-lg bg-white p-4">
              <div className="text-2xl text-amber-700">R$ 42k</div>
              <div className="text-sm text-gray-600">Valor potencial ESG</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-xl border border-gray-100 bg-white shadow-sm lg:col-span-2">
            <div className="border-b border-gray-100 p-6">
              <h2 className="text-xl">Negociacoes e recebimentos</h2>
            </div>
            <div className="divide-y divide-gray-100">
              {negociacoesAtivas.map((negociacao) => (
                <div key={negociacao.id} className="p-6 hover:bg-gray-50">
                  <div className="mb-4 flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <div className="mb-2 flex flex-wrap items-center gap-3">
                        <h3 className="font-medium">{negociacao.empresa}</h3>
                        <span className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-700">
                          {negociacao.status}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Package className="h-4 w-4" />
                          {negociacao.material} - {negociacao.quantidade}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {negociacao.localizacao}
                        </span>
                        <span className="flex items-center gap-1">
                          <Truck className="h-4 w-4" />
                          {negociacao.cooperativa}
                        </span>
                      </div>
                    </div>
                    <div className="text-left lg:text-right">
                      <div className="text-xs text-gray-500">Rastreabilidade</div>
                      <div className="text-lg font-medium text-green-700">{negociacao.rastreabilidade}</div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <button
                      onClick={() => onNavigate("chat")}
                      className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-sm transition-colors hover:bg-gray-50"
                    >
                      Negociar
                    </button>
                    <button className="flex-1 rounded-lg bg-[--eco-green] px-4 py-2 text-sm text-white transition-colors hover:bg-emerald-700">
                      Validar recebimento
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center gap-2">
                <ShieldCheck className="h-6 w-6 text-[--eco-green]" />
                <h2 className="text-xl">Indicador ESG</h2>
              </div>
              <div className="mb-4 flex items-end gap-2">
                <span className="text-5xl font-semibold text-green-700">A-</span>
                <span className="pb-2 text-sm text-gray-500">governanca operacional</span>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="mb-2 flex justify-between text-sm">
                    <span>Origem comprovada</span>
                    <span>96%</span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-200">
                    <div className="h-2 rounded-full bg-[--eco-green]" style={{ width: "96%" }} />
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex justify-between text-sm">
                    <span>Rotas validadas</span>
                    <span>89%</span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-200">
                    <div className="h-2 rounded-full bg-[--eco-blue]" style={{ width: "89%" }} />
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex justify-between text-sm">
                    <span>Documentacao fiscal</span>
                    <span>93%</span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-200">
                    <div className="h-2 rounded-full bg-purple-500" style={{ width: "93%" }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-gradient-to-br from-emerald-600 via-emerald-700 to-green-800 p-6 text-white">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-xl">Fluxo atualizado</h2>
                <Recycle className="h-6 w-6" />
              </div>
              <div className="space-y-3">
                {fluxoSistema.map((etapa, index) => (
                  <div key={etapa} className="flex items-center gap-3">
                    <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-white/20 text-xs">
                      {index + 1}
                    </div>
                    <span className="text-sm text-white/90">{etapa}</span>
                    {index < fluxoSistema.length - 1 && <ArrowRight className="ml-auto h-4 w-4 text-white/50" />}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <Leaf className="h-5 w-5 text-[--eco-green]" />
                <h3 className="font-medium">Governanca para mercado</h3>
              </div>
              <p className="mb-4 text-sm text-gray-600">
                A recicladora comprova origem, validacao e destino dos residuos para gerar valor ambiental e comercial.
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-lg bg-green-50 p-3 text-green-700">
                  <CheckCircle className="mb-2 h-4 w-4" />
                  Cadeia auditavel
                </div>
                <div className="rounded-lg bg-blue-50 p-3 text-blue-700">
                  <BarChart3 className="mb-2 h-4 w-4" />
                  Dados ESG
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
