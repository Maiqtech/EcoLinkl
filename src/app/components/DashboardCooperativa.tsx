import { useState } from "react";
import {
  CheckCircle,
  Clock,
  Eye,
  MapPin,
  Navigation,
  Package,
  Route,
  Star,
  TrendingUp,
  Truck,
  Users,
} from "lucide-react";

interface DashboardCooperativaProps {
  onNavigate: (page: string) => void;
}

type StatusRota = "disponivel" | "aceita" | "coletada" | "entregue";

const rotasIniciais = [
  {
    id: 1,
    empresa: "TechCorp Industries",
    tipo: "Plastico PET",
    quantidade: "150 kg",
    localizacao: "Av. Tancredo Neves, 1189 - Pituba",
    destino: "Recicla SSA",
    distancia: "3.2 km",
    tempo: "18 min",
    status: "disponivel" as StatusRota,
  },
  {
    id: 2,
    empresa: "EcoFood Ltda",
    tipo: "Papelao",
    quantidade: "320 kg",
    localizacao: "Av. Sete de Setembro, 1238 - Centro",
    destino: "Circular Recicladora",
    distancia: "2.5 km",
    tempo: "14 min",
    status: "aceita" as StatusRota,
  },
  {
    id: 3,
    empresa: "SmartOffice",
    tipo: "Eletronicos",
    quantidade: "85 kg",
    localizacao: "Av. ACM, 3849 - Iguatemi",
    destino: "TechCycle Bahia",
    distancia: "5.1 km",
    tempo: "25 min",
    status: "coletada" as StatusRota,
  },
  {
    id: 4,
    empresa: "BuildMax Construcoes",
    tipo: "Metal",
    quantidade: "210 kg",
    localizacao: "Rua Carlos Gomes, 698 - Centro",
    destino: "MetalVerde Processamento",
    distancia: "4.2 km",
    tempo: "21 min",
    status: "disponivel" as StatusRota,
  },
];

const statusConfig = {
  disponivel: { label: "Disponivel", badge: "bg-yellow-100 text-yellow-700" },
  aceita: { label: "Rota aceita", badge: "bg-blue-100 text-blue-700" },
  coletada: { label: "Coleta confirmada", badge: "bg-purple-100 text-purple-700" },
  entregue: { label: "Entrega confirmada", badge: "bg-green-100 text-green-700" },
};

export default function DashboardCooperativa({ onNavigate }: DashboardCooperativaProps) {
  const [rotas, setRotas] = useState(rotasIniciais);

  const atualizarStatus = (id: number, status: StatusRota) => {
    setRotas((rotasAtuais) =>
      rotasAtuais.map((rota) => (rota.id === id ? { ...rota, status } : rota))
    );
  };

  const rotasDisponiveis = rotas.filter((rota) => rota.status === "disponivel").length;
  const rotasEmAndamento = rotas.filter((rota) => rota.status === "aceita" || rota.status === "coletada").length;
  const rotasEntregues = rotas.filter((rota) => rota.status === "entregue").length;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-8">
        <div className="mb-8">
          <div className="mb-2 flex items-center gap-3">
            <Users className="h-8 w-8 text-yellow-600" />
            <h1 className="text-3xl">Dashboard Cooperativa</h1>
          </div>
          <p className="text-gray-600">
            Execute as coletas liberadas apos negociacao entre empresas e recicladoras.
          </p>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-4">
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100">
                <Route className="h-6 w-6 text-yellow-600" />
              </div>
              <span className="text-xs text-gray-500">Hoje</span>
            </div>
            <div className="mb-1 text-2xl">{rotasDisponiveis}</div>
            <div className="text-sm text-gray-600">Rotas disponiveis</div>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <Truck className="h-6 w-6 text-[--eco-blue]" />
              </div>
              <span className="text-xs text-blue-600">Em campo</span>
            </div>
            <div className="mb-1 text-2xl">{rotasEmAndamento}</div>
            <div className="text-sm text-gray-600">Rotas em execucao</div>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                <CheckCircle className="h-6 w-6 text-[--eco-green]" />
              </div>
              <span className="text-xs text-green-600">Validadas</span>
            </div>
            <div className="mb-1 text-2xl">{rotasEntregues}</div>
            <div className="text-sm text-gray-600">Entregas confirmadas</div>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                <Star className="h-6 w-6 text-orange-600" />
              </div>
              <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-700">Alta</span>
            </div>
            <div className="mb-1 text-2xl">4.8</div>
            <div className="text-sm text-gray-600">Score logistico</div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="mb-6 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
              <div className="border-b border-gray-100 p-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h2 className="text-xl">Rotas disponiveis</h2>
                    <p className="text-sm text-gray-600">
                      Coletas liberadas pelo fluxo: empresa negocia, recicladora aprova, sistema gera rota.
                    </p>
                  </div>
                  <button
                    onClick={() => onNavigate("mapa")}
                    className="flex items-center justify-center gap-2 rounded-lg bg-yellow-500 px-4 py-2 text-sm text-white transition-colors hover:bg-yellow-600"
                  >
                    <MapPin className="h-4 w-4" />
                    Ver no mapa
                  </button>
                </div>
              </div>

              <div className="divide-y divide-gray-100">
                {rotas.map((rota) => {
                  const status = statusConfig[rota.status];
                  return (
                    <div key={rota.id} className="p-6 transition-colors hover:bg-gray-50">
                      <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                        <div className="flex-1">
                          <div className="mb-3 flex flex-wrap items-center gap-3">
                            <h3 className="font-medium">{rota.empresa}</h3>
                            <span className={`rounded-full px-3 py-1 text-xs ${status.badge}`}>
                              {status.label}
                            </span>
                          </div>

                          <div className="mb-3 flex flex-wrap items-center gap-2 text-sm text-gray-600">
                            <span className="rounded bg-blue-100 px-2 py-1 text-blue-700">{rota.tipo}</span>
                            <span className="flex items-center gap-1">
                              <Package className="h-4 w-4" />
                              {rota.quantidade}
                            </span>
                          </div>

                          <div className="grid grid-cols-1 gap-3 text-sm text-gray-600 md:grid-cols-2">
                            <div className="flex items-start gap-2">
                              <MapPin className="mt-0.5 h-4 w-4 text-blue-600" />
                              <div>
                                <div className="text-xs uppercase text-gray-400">Origem</div>
                                <div>{rota.localizacao}</div>
                              </div>
                            </div>
                            <div className="flex items-start gap-2">
                              <Navigation className="mt-0.5 h-4 w-4 text-green-600" />
                              <div>
                                <div className="text-xs uppercase text-gray-400">Destino</div>
                                <div>{rota.destino}</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="grid min-w-[140px] grid-cols-2 gap-3 rounded-lg bg-gray-50 p-3 text-center">
                          <div>
                            <div className="text-lg font-medium">{rota.distancia}</div>
                            <div className="text-xs text-gray-500">Distancia</div>
                          </div>
                          <div>
                            <div className="text-lg font-medium">{rota.tempo}</div>
                            <div className="text-xs text-gray-500">Tempo</div>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
                        <button className="rounded-lg border border-gray-300 px-4 py-2 text-sm transition-colors hover:bg-gray-50">
                          <span className="flex items-center justify-center gap-2">
                            <Eye className="h-4 w-4" />
                            Detalhes
                          </span>
                        </button>
                        <button
                          disabled={rota.status !== "disponivel"}
                          onClick={() => atualizarStatus(rota.id, "aceita")}
                          className="rounded-lg bg-yellow-500 px-4 py-2 text-sm text-white transition-colors hover:bg-yellow-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500"
                        >
                          Aceitar rota
                        </button>
                        <button
                          disabled={rota.status !== "aceita"}
                          onClick={() => atualizarStatus(rota.id, "coletada")}
                          className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500"
                        >
                          Confirmar coleta
                        </button>
                        <button
                          disabled={rota.status !== "coletada"}
                          onClick={() => atualizarStatus(rota.id, "entregue")}
                          className="rounded-lg bg-[--eco-green] px-4 py-2 text-sm text-white transition-colors hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500"
                        >
                          Confirmar entrega
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <h2 className="mb-6 text-xl">Performance logistica</h2>

              <div className="space-y-6">
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm text-gray-600">Coletas no prazo</span>
                    <span className="text-sm font-medium">92%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                    <div className="h-full rounded-full bg-yellow-500" style={{ width: "92%" }} />
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm text-gray-600">Entregas validadas</span>
                    <span className="text-sm font-medium">97%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                    <div className="h-full rounded-full bg-[--eco-green]" style={{ width: "97%" }} />
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm text-gray-600">Capacidade utilizada</span>
                    <span className="text-sm font-medium">70%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                    <div className="h-full rounded-full bg-[--eco-blue]" style={{ width: "70%" }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 p-6 text-white">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl">Rota otimizada do dia</h3>
                <Navigation className="h-6 w-6" />
              </div>
              <p className="mb-4 text-white/90">
                Sequencia recomendada reduz 14 km e prioriza entregas com validacao ESG pendente.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-white/15 p-3">
                  <div className="text-2xl">4</div>
                  <div className="text-xs text-white/80">Pontos</div>
                </div>
                <div className="rounded-lg bg-white/15 p-3">
                  <div className="text-2xl">28 min</div>
                  <div className="text-xs text-white/80">Economia</div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
              <div className="mb-3 flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">Proxima acao</h3>
              </div>
              <p className="mb-4 text-sm text-gray-600">
                Confirme a entrega dos eletronicos da SmartOffice para liberar a validacao da recicladora.
              </p>
              <button className="w-full rounded-lg bg-blue-600 py-2 text-sm text-white transition-colors hover:bg-blue-700">
                Ver rota em andamento
              </button>
            </div>

            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-[--eco-green]" />
                <h3 className="font-medium">Impacto no fluxo</h3>
              </div>
              <p className="text-sm text-gray-600">
                Cada entrega confirmada fecha a etapa logistica e permite que a recicladora valide recebimento,
                registrando a rastreabilidade completa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
