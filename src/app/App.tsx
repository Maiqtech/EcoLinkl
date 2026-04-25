import { useState } from "react";
import HeaderNav from "./components/HeaderNav";
import Login from "./components/Login";
import DashboardEmpresa from "./components/DashboardEmpresa";
import DashboardCooperativa from "./components/DashboardCooperativa";
import DashboardRecicladora from "./components/DashboardRecicladora";
import DashboardGoverno from "./components/DashboardGoverno";
import MapaInterativo from "./components/MapaInterativo";
import MatchingInteligente from "./components/MatchingInteligente";
import ScoreConfiabilidade from "./components/ScoreConfiabilidade";
import ChatNegociacao from "./components/ChatNegociacao";
import EducacaoCultural from "./components/EducacaoCultural";
import DetalheMaterial from "./components/DetalheMaterial";
import RelatorioAnual from "./components/RelatorioAnual";

type Page = "login" | "empresa" | "cooperativa" | "recicladora" | "governo" | "mapa" | "matching" | "score" | "chat" | "educacao" | "detalhe-material" | "relatorio";
type UserType = "empresa" | "cooperativa" | "recicladora" | "governo" | null;

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("login");
  const [userType, setUserType] = useState<UserType>(null);
  const [materialId, setMaterialId] = useState<number | undefined>(undefined);

  const handleUserTypeSelect = (type: UserType) => {
    setUserType(type);
    setCurrentPage(type as Page);
  };

  const navigateTo = (page: Page, id?: number) => {
    setCurrentPage(page);
    if (id !== undefined) {
      setMaterialId(id);
    }
  };

  const logout = () => {
    setCurrentPage("login");
    setUserType(null);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "login":
        return <Login onUserTypeSelect={handleUserTypeSelect} />;
      case "empresa":
        return <DashboardEmpresa onNavigate={navigateTo} />;
      case "cooperativa":
        return <DashboardCooperativa onNavigate={navigateTo} />;
      case "recicladora":
        return <DashboardRecicladora onNavigate={navigateTo} />;
      case "governo":
        return <DashboardGoverno onNavigate={navigateTo} />;
      case "mapa":
        return <MapaInterativo />;
      case "matching":
        return <MatchingInteligente onNavigate={navigateTo} />;
      case "score":
        return <ScoreConfiabilidade />;
      case "chat":
        return <ChatNegociacao onNavigate={navigateTo} />;
      case "educacao":
        return <EducacaoCultural onNavigate={navigateTo} />;
      case "detalhe-material":
        return <DetalheMaterial onNavigate={navigateTo} materialId={materialId} />;
      case "relatorio":
        return <RelatorioAnual onNavigate={navigateTo} userType={userType} />;
      default:
        return <Login onUserTypeSelect={handleUserTypeSelect} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {currentPage !== "login" && (
        <HeaderNav
          userType={userType}
          currentPage={currentPage}
          onNavigate={navigateTo}
          onLogout={logout}
        />
      )}
      {renderPage()}
    </div>
  );
}
