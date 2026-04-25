import { useState, useEffect, useRef } from "react";
import { Bell, User, LogOut, Recycle, CheckCircle, Clock, AlertCircle, Package, TrendingUp, Menu, X, Factory } from "lucide-react";

interface HeaderNavProps {
  userType: "empresa" | "cooperativa" | "recicladora" | "governo" | null;
  currentPage: string;
  onNavigate: (page: any) => void;
  onLogout: () => void;
}

const notificacoesEmpresa = [
  { id: 1, tipo: "sucesso", icone: CheckCircle, titulo: "Coleta confirmada", mensagem: "CoopRecicla aceitou a coleta de Plástico PET (150 kg)", tempo: "5 min atrás", cor: "text-green-600", bg: "bg-green-50" },
  { id: 2, tipo: "andamento", icone: Clock, titulo: "Coleta em andamento", mensagem: "Papelão (320 kg) será coletado hoje às 14h", tempo: "1 hora atrás", cor: "text-blue-600", bg: "bg-blue-50" },
  { id: 3, tipo: "match", icone: TrendingUp, titulo: "Novo match disponível", mensagem: "95% de compatibilidade com EcoBahia Cooperativa", tempo: "2 horas atrás", cor: "text-purple-600", bg: "bg-purple-50" },
  { id: 4, tipo: "alerta", icone: AlertCircle, titulo: "Resíduo pendente", mensagem: "Metal (210 kg) aguardando aprovação há 2 dias", tempo: "1 dia atrás", cor: "text-orange-600", bg: "bg-orange-50" },
];

const notificacoesCooperativa = [
  { id: 1, tipo: "sucesso", icone: Package, titulo: "Nova coleta aceita", mensagem: "Plástico PET (150 kg) - TechCorp Industries", tempo: "10 min atrás", cor: "text-green-600", bg: "bg-green-50" },
  { id: 2, tipo: "andamento", icone: Clock, titulo: "Rota otimizada", mensagem: "4 pontos de coleta sugeridos em Salvador", tempo: "30 min atrás", cor: "text-blue-600", bg: "bg-blue-50" },
  { id: 3, tipo: "match", icone: TrendingUp, titulo: "Score atualizado", mensagem: "Seu score subiu para 4.8★ (+0.2)", tempo: "3 horas atrás", cor: "text-purple-600", bg: "bg-purple-50" },
  { id: 4, tipo: "sucesso", icone: CheckCircle, titulo: "Pagamento confirmado", mensagem: "R$ 1.250,00 recebido de 3 coletas", tempo: "1 dia atrás", cor: "text-green-600", bg: "bg-green-50" },
];

const notificacoesRecicladora = [
  { id: 1, tipo: "match", icone: Factory, titulo: "Nova negociacao", mensagem: "TechCorp publicou Plastico PET (150 kg) para validacao", tempo: "8 min atras", cor: "text-green-600", bg: "bg-green-50" },
  { id: 2, tipo: "andamento", icone: Clock, titulo: "Rota gerada", mensagem: "EcoBahia recebeu rota para EcoFood -> Recicla SSA", tempo: "24 min atras", cor: "text-yellow-600", bg: "bg-yellow-50" },
  { id: 3, tipo: "sucesso", icone: CheckCircle, titulo: "Recebimento validado", mensagem: "85 kg de eletronicos registrados com rastreabilidade ESG", tempo: "2 horas atras", cor: "text-green-600", bg: "bg-green-50" },
  { id: 4, tipo: "sucesso", icone: TrendingUp, titulo: "Relatorio consolidado", mensagem: "Indicador ESG atualizado para 94% de rastreabilidade", tempo: "1 dia atras", cor: "text-purple-600", bg: "bg-purple-50" },
];

const notificacoesGoverno = [
  { id: 1, tipo: "alerta", icone: AlertCircle, titulo: "Região crítica identificada", mensagem: "Cajazeiras: alta geração de resíduos", tempo: "1 hora atrás", cor: "text-orange-600", bg: "bg-orange-50" },
  { id: 2, tipo: "sucesso", icone: TrendingUp, titulo: "Meta ESG progredindo", mensagem: "68% de 75% alcançado (+3% este mês)", tempo: "4 horas atrás", cor: "text-green-600", bg: "bg-green-50" },
  { id: 3, tipo: "andamento", icone: Package, titulo: "Novas cooperativas", mensagem: "3 cooperativas cadastradas em Salvador", tempo: "1 dia atrás", cor: "text-blue-600", bg: "bg-blue-50" },
  { id: 4, tipo: "sucesso", icone: CheckCircle, titulo: "Relatório disponível", mensagem: "Relatório mensal de reciclagem está pronto", tempo: "2 dias atrás", cor: "text-purple-600", bg: "bg-purple-50" },
];

export default function HeaderNav({ userType, currentPage, onNavigate, onLogout }: HeaderNavProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);

  const getNotifications = () => {
    switch (userType) {
      case "empresa":
        return notificacoesEmpresa;
      case "cooperativa":
        return notificacoesCooperativa;
      case "recicladora":
        return notificacoesRecicladora;
      case "governo":
        return notificacoesGoverno;
      default:
        return [];
    }
  };

  const notifications = getNotifications();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
    }

    if (showNotifications) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showNotifications]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <button onClick={() => onNavigate(userType || "login")} className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-[#667eea] via-[#764ba2] to-[#10b981] flex items-center justify-center">
              <Recycle className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-semibold text-[--eco-green]">EcoLink</span>
              <span className="text-xs text-gray-500 hidden sm:block">Marketplace by Hive</span>
            </div>
          </div>
        </button>

        <nav className="hidden md:flex items-center gap-6">
          {userType === "empresa" && (
            <>
              <button
                onClick={() => onNavigate("empresa")}
                className={`text-sm hover:text-[--eco-green] transition-colors ${
                  currentPage === "empresa" ? "text-[--eco-green] font-medium" : ""
                }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => onNavigate("matching")}
                className={`text-sm hover:text-[--eco-green] transition-colors ${
                  currentPage === "matching" ? "text-[--eco-green] font-medium" : ""
                }`}
              >
                Matching
              </button>
              <button
                onClick={() => onNavigate("mapa")}
                className={`text-sm hover:text-[--eco-green] transition-colors ${
                  currentPage === "mapa" ? "text-[--eco-green] font-medium" : ""
                }`}
              >
                Mapa
              </button>
              <button
                onClick={() => onNavigate("educacao")}
                className={`text-sm transition-all px-3 py-1.5 rounded-full border-2 border-transparent relative overflow-hidden group ${
                  currentPage === "educacao" ? "text-[--eco-green] font-medium" : ""
                }`}
                style={{
                  background: "linear-gradient(white, white) padding-box, linear-gradient(to right, rgb(250 204 21), rgb(249 115 22)) border-box"
                }}
              >
                <span className="relative z-10 group-hover:text-white transition-colors">Guia de Descarte</span>
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </button>
            </>
          )}
          {userType === "cooperativa" && (
            <>
              <button
                onClick={() => onNavigate("cooperativa")}
                className={`text-sm hover:text-[--eco-green] transition-colors ${
                  currentPage === "cooperativa" ? "text-[--eco-green] font-medium" : ""
                }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => onNavigate("score")}
                className={`text-sm hover:text-[--eco-green] transition-colors ${
                  currentPage === "score" ? "text-[--eco-green] font-medium" : ""
                }`}
              >
                Ranking
              </button>
              <button
                onClick={() => onNavigate("mapa")}
                className={`text-sm hover:text-[--eco-green] transition-colors ${
                  currentPage === "mapa" ? "text-[--eco-green] font-medium" : ""
                }`}
              >
                Mapa
              </button>
            </>
          )}
          {userType === "recicladora" && (
            <>
              <button
                onClick={() => onNavigate("recicladora")}
                className={`text-sm hover:text-[--eco-green] transition-colors ${
                  currentPage === "recicladora" ? "text-[--eco-green] font-medium" : ""
                }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => onNavigate("matching")}
                className={`text-sm hover:text-[--eco-green] transition-colors ${
                  currentPage === "matching" ? "text-[--eco-green] font-medium" : ""
                }`}
              >
                Negociacoes
              </button>
              <button
                onClick={() => onNavigate("mapa")}
                className={`text-sm hover:text-[--eco-green] transition-colors ${
                  currentPage === "mapa" ? "text-[--eco-green] font-medium" : ""
                }`}
              >
                Rotas
              </button>
              <button
                onClick={() => onNavigate("relatorio")}
                className={`text-sm hover:text-[--eco-green] transition-colors ${
                  currentPage === "relatorio" ? "text-[--eco-green] font-medium" : ""
                }`}
              >
                Relatorio
              </button>
            </>
          )}
          {userType === "governo" && (
            <>
              <button
                onClick={() => onNavigate("governo")}
                className={`text-sm hover:text-[--eco-green] transition-colors ${
                  currentPage === "governo" ? "text-[--eco-green] font-medium" : ""
                }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => onNavigate("score")}
                className={`text-sm hover:text-[--eco-green] transition-colors ${
                  currentPage === "score" ? "text-[--eco-green] font-medium" : ""
                }`}
              >
                Ranking
              </button>
              <button
                onClick={() => onNavigate("mapa")}
                className={`text-sm hover:text-[--eco-green] transition-colors ${
                  currentPage === "mapa" ? "text-[--eco-green] font-medium" : ""
                }`}
              >
                Mapa
              </button>
            </>
          )}
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {showMobileMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <div className="relative" ref={notificationRef}>
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Bell className="w-5 h-5" />
              {notifications.length > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              )}
            </button>

            {showNotifications && (
              <div className="fixed md:absolute right-4 md:right-0 left-4 md:left-auto mt-2 md:w-96 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 max-h-[500px] overflow-hidden flex flex-col">
                <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">Notificações</h3>
                  <span className="text-xs text-gray-500">{notifications.length} novas</span>
                </div>

                <div className="overflow-y-auto">
                  {notifications.map((notif) => {
                    const Icon = notif.icone;
                    return (
                      <div
                        key={notif.id}
                        className="p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors cursor-pointer"
                      >
                        <div className="flex gap-3">
                          <div className={`w-10 h-10 rounded-lg ${notif.bg} flex items-center justify-center flex-shrink-0`}>
                            <Icon className={`w-5 h-5 ${notif.cor}`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm text-gray-900 mb-1">{notif.titulo}</p>
                            <p className="text-xs text-gray-600 mb-2">{notif.mensagem}</p>
                            <p className="text-xs text-gray-400">{notif.tempo}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="p-3 border-t border-gray-100">
                  <button className="w-full text-center text-sm text-[--eco-green] hover:text-emerald-700 font-medium">
                    Ver todas as notificações
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="hidden md:flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[--eco-green] to-[--eco-blue] flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
          </div>
          <button onClick={onLogout} className="hidden md:block p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <LogOut className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {showMobileMenu && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="container py-4 space-y-2">
            {userType === "empresa" && (
              <>
                <button
                  onClick={() => {
                    onNavigate("empresa");
                    setShowMobileMenu(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors ${
                    currentPage === "empresa" ? "bg-green-50 text-[--eco-green] font-medium" : "text-gray-700"
                  }`}
                >
                  Dashboard
                </button>
                <button
                  onClick={() => {
                    onNavigate("matching");
                    setShowMobileMenu(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors ${
                    currentPage === "matching" ? "bg-green-50 text-[--eco-green] font-medium" : "text-gray-700"
                  }`}
                >
                  Matching
                </button>
                <button
                  onClick={() => {
                    onNavigate("mapa");
                    setShowMobileMenu(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors ${
                    currentPage === "mapa" ? "bg-green-50 text-[--eco-green] font-medium" : "text-gray-700"
                  }`}
                >
                  Mapa
                </button>
                <button
                  onClick={() => {
                    onNavigate("educacao");
                    setShowMobileMenu(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors ${
                    currentPage === "educacao" ? "bg-green-50 text-[--eco-green] font-medium" : "text-gray-700"
                  }`}
                >
                  Educação
                </button>
              </>
            )}
            {userType === "cooperativa" && (
              <>
                <button
                  onClick={() => {
                    onNavigate("cooperativa");
                    setShowMobileMenu(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors ${
                    currentPage === "cooperativa" ? "bg-green-50 text-[--eco-green] font-medium" : "text-gray-700"
                  }`}
                >
                  Dashboard
                </button>
                <button
                  onClick={() => {
                    onNavigate("score");
                    setShowMobileMenu(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors ${
                    currentPage === "score" ? "bg-green-50 text-[--eco-green] font-medium" : "text-gray-700"
                  }`}
                >
                  Ranking
                </button>
                <button
                  onClick={() => {
                    onNavigate("mapa");
                    setShowMobileMenu(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors ${
                    currentPage === "mapa" ? "bg-green-50 text-[--eco-green] font-medium" : "text-gray-700"
                  }`}
                >
                  Mapa
                </button>
              </>
            )}
            {userType === "recicladora" && (
              <>
                <button
                  onClick={() => {
                    onNavigate("recicladora");
                    setShowMobileMenu(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors ${
                    currentPage === "recicladora" ? "bg-green-50 text-[--eco-green] font-medium" : "text-gray-700"
                  }`}
                >
                  Dashboard
                </button>
                <button
                  onClick={() => {
                    onNavigate("matching");
                    setShowMobileMenu(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors ${
                    currentPage === "matching" ? "bg-green-50 text-[--eco-green] font-medium" : "text-gray-700"
                  }`}
                >
                  Negociacoes
                </button>
                <button
                  onClick={() => {
                    onNavigate("mapa");
                    setShowMobileMenu(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors ${
                    currentPage === "mapa" ? "bg-green-50 text-[--eco-green] font-medium" : "text-gray-700"
                  }`}
                >
                  Rotas
                </button>
                <button
                  onClick={() => {
                    onNavigate("relatorio");
                    setShowMobileMenu(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors ${
                    currentPage === "relatorio" ? "bg-green-50 text-[--eco-green] font-medium" : "text-gray-700"
                  }`}
                >
                  Relatorio
                </button>
              </>
            )}
            {userType === "governo" && (
              <>
                <button
                  onClick={() => {
                    onNavigate("governo");
                    setShowMobileMenu(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors ${
                    currentPage === "governo" ? "bg-green-50 text-[--eco-green] font-medium" : "text-gray-700"
                  }`}
                >
                  Dashboard
                </button>
                <button
                  onClick={() => {
                    onNavigate("score");
                    setShowMobileMenu(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors ${
                    currentPage === "score" ? "bg-green-50 text-[--eco-green] font-medium" : "text-gray-700"
                  }`}
                >
                  Ranking
                </button>
                <button
                  onClick={() => {
                    onNavigate("mapa");
                    setShowMobileMenu(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors ${
                    currentPage === "mapa" ? "bg-green-50 text-[--eco-green] font-medium" : "text-gray-700"
                  }`}
                >
                  Mapa
                </button>
              </>
            )}

            <div className="border-t border-gray-200 mt-4 pt-4">
              <button
                onClick={() => {
                  onLogout();
                  setShowMobileMenu(false);
                }}
                className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors text-red-600 flex items-center gap-2"
              >
                <LogOut className="w-5 h-5" />
                Sair
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
