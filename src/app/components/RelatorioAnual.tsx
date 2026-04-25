import { ArrowLeft, Download, FileText, Leaf, TrendingUp, Award, Calendar, BarChart3 } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

interface RelatorioAnualProps {
  onNavigate: (page: string) => void;
  userType?: "empresa" | "cooperativa" | "recicladora" | "governo" | null;
}

const dadosColetasPorMes = [
  { mes: "Jan", plastico: 450, papel: 320, metal: 180, vidro: 90, total: 1040 },
  { mes: "Fev", plastico: 520, papel: 380, metal: 210, vidro: 110, total: 1220 },
  { mes: "Mar", plastico: 580, papel: 420, metal: 240, vidro: 130, total: 1370 },
  { mes: "Abr", plastico: 610, papel: 450, metal: 260, vidro: 140, total: 1460 },
  { mes: "Mai", plastico: 650, papel: 480, metal: 280, vidro: 150, total: 1560 },
  { mes: "Jun", plastico: 680, papel: 510, metal: 300, vidro: 165, total: 1655 },
  { mes: "Jul", plastico: 720, papel: 540, metal: 320, vidro: 180, total: 1760 },
  { mes: "Ago", plastico: 750, papel: 570, metal: 340, vidro: 190, total: 1850 },
  { mes: "Set", plastico: 780, papel: 600, metal: 360, vidro: 205, total: 1945 },
  { mes: "Out", plastico: 810, papel: 630, metal: 380, vidro: 220, total: 2040 },
  { mes: "Nov", plastico: 850, papel: 660, metal: 400, vidro: 235, total: 2145 },
  { mes: "Dez", plastico: 890, papel: 690, metal: 420, vidro: 250, total: 2250 },
];

const dadosPorTipo = [
  { tipo: "Plástico", quantidade: 8290, percentual: 42, cor: "#3b82f6" },
  { tipo: "Papel", quantidade: 6250, percentual: 32, cor: "#10b981" },
  { tipo: "Metal", quantidade: 3690, percentual: 19, cor: "#f59e0b" },
  { tipo: "Vidro", quantidade: 2065, percentual: 10, cor: "#8b5cf6" },
];

export default function RelatorioAnual({ onNavigate, userType }: RelatorioAnualProps) {
  const totalColetado = 20295; // kg
  const reducaoCO2 = 48.7; // toneladas
  const arvoresEquivalentes = 2340;
  const economiaAgua = 15420; // litros

  const handleExportar = () => {
    alert("Relatório consolidado pronto para exportação em PDF.");
  };

  const dashboardOrigem = userType === "recicladora" ? "recicladora" : "empresa";
  const tituloRelatorio = userType === "recicladora"
    ? "Relatório ESG Consolidado da Recicladora"
    : "Relatório ESG Consolidado da Empresa";

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <button
              onClick={() => onNavigate(dashboardOrigem)}
              className="flex items-center gap-2 text-gray-600 hover:text-[--eco-green] mb-4 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Voltar ao Dashboard
            </button>
            <div className="flex items-center gap-3 mb-2">
              <FileText className="w-8 h-8 text-[--eco-green]" />
              <h1 className="text-3xl">{tituloRelatorio}</h1>
            </div>
            <p className="text-gray-600">Origem, rota, coleta, recebimento e rastreabilidade - Ano 2025</p>
          </div>
          <button
            onClick={handleExportar}
            className="flex items-center gap-2 px-6 py-3 bg-[--eco-green] text-white rounded-lg hover:bg-emerald-600 transition-colors"
          >
            <Download className="w-5 h-5" />
            Exportar relatório consolidado
          </button>
        </div>

        {/* Cards de Resumo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Coletado</p>
                <p className="text-2xl font-bold text-gray-900">{totalColetado.toLocaleString()} kg</p>
              </div>
            </div>
            <p className="text-xs text-gray-500">+18% vs ano anterior</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Redução CO₂</p>
                <p className="text-2xl font-bold text-gray-900">{reducaoCO2} ton</p>
              </div>
            </div>
            <p className="text-xs text-gray-500">Impacto ambiental positivo</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Árvores Equivalentes</p>
                <p className="text-2xl font-bold text-gray-900">{arvoresEquivalentes.toLocaleString()}</p>
              </div>
            </div>
            <p className="text-xs text-gray-500">Preservadas pelo ano</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Economia Água</p>
                <p className="text-2xl font-bold text-gray-900">{economiaAgua.toLocaleString()}L</p>
              </div>
            </div>
            <p className="text-xs text-gray-500">Recurso preservado</p>
          </div>
        </div>

        {/* Gráfico de Coletas Mensais */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
          <h2 className="text-xl font-semibold mb-6">Evolução de Coletas por Tipo de Material (kg)</h2>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={dadosColetasPorMes}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="plastico" fill="#3b82f6" name="Plástico" />
              <Bar dataKey="papel" fill="#10b981" name="Papel" />
              <Bar dataKey="metal" fill="#f59e0b" name="Metal" />
              <Bar dataKey="vidro" fill="#8b5cf6" name="Vidro" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Distribuição por Tipo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-semibold mb-6">Distribuição por Tipo de Material</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={dadosPorTipo}
                  dataKey="quantidade"
                  nameKey="tipo"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label={(entry) => `${entry.tipo}: ${entry.percentual}%`}
                >
                  {dadosPorTipo.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.cor} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-semibold mb-6">Detalhamento por Material</h2>
            <div className="space-y-4">
              {dadosPorTipo.map((material) => (
                <div key={material.tipo} className="flex items-center justify-between pb-4 border-b border-gray-100 last:border-0">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded" style={{ backgroundColor: material.cor }}></div>
                    <div>
                      <p className="font-medium">{material.tipo}</p>
                      <p className="text-sm text-gray-500">{material.percentual}% do total</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-lg">{material.quantidade.toLocaleString()} kg</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefícios Fiscais */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl border-2 border-green-200 p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-8 h-8 text-[--eco-green]" />
            <h2 className="text-2xl font-semibold">Benefícios Fiscais Elegíveis</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">ICMS Ecológico</h3>
              <p className="text-sm text-gray-700 mb-4">
                Sua empresa está elegível para redução de até <span className="font-bold text-[--eco-green]">12%</span> no ICMS estadual devido ao volume de reciclagem realizado.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Total reciclado: {totalColetado.toLocaleString()} kg/ano</li>
                <li>✓ Meta mínima: 10.000 kg/ano ✓</li>
                <li>✓ Documentação completa disponível</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">Incentivos Federais</h3>
              <p className="text-sm text-gray-700 mb-4">
                Elegível para dedução de até <span className="font-bold text-[--eco-green]">6%</span> no Imposto de Renda através de programas de sustentabilidade.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Redução CO₂: {reducaoCO2} toneladas</li>
                <li>✓ Certificação ESG em andamento</li>
                <li>✓ Conforme Lei 12.305/2010 (PNRS)</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">Créditos de Carbono</h3>
              <p className="text-sm text-gray-700 mb-4">
                Estimativa de <span className="font-bold text-[--eco-green]">240 créditos</span> de carbono gerados pela atividade de reciclagem.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Valor estimado: R$ 14.400,00</li>
                <li>✓ Comercializável no mercado voluntário</li>
                <li>✓ Auditoria disponível para certificação</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">Certificações</h3>
              <p className="text-sm text-gray-700 mb-4">
                Sua empresa pode solicitar certificações ambientais reconhecidas nacionalmente.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ ISO 14001 - Gestão Ambiental</li>
                <li>✓ Selo Empresa Sustentável</li>
                <li>✓ Certificado de Logística Reversa</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Informações Complementares */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-6 h-6 text-[--eco-green]" />
            <h2 className="text-xl font-semibold">Informações do Relatório</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600">
            <div>
              <p className="font-medium text-gray-900 mb-1">Período de Referência</p>
              <p>01/01/2025 - 31/12/2025</p>
            </div>
            <div>
              <p className="font-medium text-gray-900 mb-1">Cooperativas Parceiras</p>
              <p>8 cooperativas certificadas</p>
            </div>
            <div>
              <p className="font-medium text-gray-900 mb-1">Total de Coletas</p>
              <p>156 coletas realizadas</p>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              Este relatório foi gerado automaticamente pela plataforma EcoLink e contém dados consolidados verificados.
              Para mais informações ou dúvidas sobre benefícios fiscais, consulte seu contador ou entre em contato com nosso suporte.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
