import { useState } from "react";
import { Building2, Users, Building, ArrowRight, Leaf, Recycle, MapPin, Factory } from "lucide-react";

interface LoginProps {
  onUserTypeSelect: (type: "empresa" | "cooperativa" | "recicladora" | "governo") => void;
}

export default function Login({ onUserTypeSelect }: LoginProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#667eea] via-[#764ba2] to-[#10b981] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 flex flex-col justify-center px-16 text-white">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Recycle className="w-12 h-12 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-5xl font-bold">EcoLink</span>
              <span className="text-xl text-white/80">Marketplace by Hive</span>
            </div>
          </div>
          <h1 className="text-5xl mb-6">Transforme resíduos em oportunidade</h1>
          <p className="text-xl text-white/90 mb-12">
            Conectando empresas, cooperativas, recicladoras e governo para criar uma cadeia rastreavel de reciclagem
          </p>

          <div className="grid gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                <Recycle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg mb-1">Matching Inteligente</h3>
                <p className="text-white/80 text-sm">IA conecta automaticamente oferta e demanda de resíduos</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg mb-1">Rotas Otimizadas</h3>
                <p className="text-white/80 text-sm">Rotas liberadas apos negociacao e validacao operacional</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                <Leaf className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg mb-1">Impacto Mensurável</h3>
                <p className="text-white/80 text-sm">Origem, coleta, recebimento e relatorio ESG em tempo real</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>

      <div className="flex-1 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          <div className="lg:hidden mb-8">
            <div className="flex items-center gap-3 justify-center">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#667eea] via-[#764ba2] to-[#10b981] flex items-center justify-center">
                <Recycle className="w-8 h-8 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900">EcoLink</span>
                <span className="text-sm text-gray-600">Marketplace by Hive</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl mb-2">Bem-vindo ao EcoLink</h2>
              <p className="text-gray-600">Escolha como você deseja acessar</p>
            </div>

            <div className="grid gap-4 mb-8">
              <button
                onClick={() => onUserTypeSelect("empresa")}
                className="group flex items-center justify-between p-5 rounded-xl border-2 border-gray-200 hover:border-[--eco-blue] hover:bg-blue-50 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center group-hover:bg-[--eco-blue] transition-colors">
                    <Building2 className="w-6 h-6 text-[--eco-blue] group-hover:text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium">Sou Empresa</div>
                    <div className="text-sm text-gray-600">Gerador de resíduos</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[--eco-blue]" />
              </button>

              <button
                onClick={() => onUserTypeSelect("cooperativa")}
                className="group flex items-center justify-between p-5 rounded-xl border-2 border-gray-200 hover:border-yellow-500 hover:bg-yellow-50 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center group-hover:bg-yellow-500 transition-colors">
                    <Users className="w-6 h-6 text-yellow-600 group-hover:text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium">Sou Cooperativa</div>
                    <div className="text-sm text-gray-600">Logistica e coleta</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-yellow-600" />
              </button>

              <button
                onClick={() => onUserTypeSelect("recicladora")}
                className="group flex items-center justify-between p-5 rounded-xl border-2 border-gray-200 hover:border-[--eco-green] hover:bg-green-50 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center group-hover:bg-[--eco-green] transition-colors">
                    <Factory className="w-6 h-6 text-[--eco-green] group-hover:text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium">Sou Recicladora</div>
                    <div className="text-sm text-gray-600">Negociacao e validacao ESG</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[--eco-green]" />
              </button>

              <button
                onClick={() => onUserTypeSelect("governo")}
                className="group flex items-center justify-between p-5 rounded-xl border-2 border-gray-200 hover:border-purple-500 hover:bg-purple-50 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center group-hover:bg-purple-500 transition-colors">
                    <Building className="w-6 h-6 text-purple-500 group-hover:text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium">Sou Governo</div>
                    <div className="text-sm text-gray-600">Gestão pública ESG</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-500" />
              </button>
            </div>

            <div className="text-center text-sm text-gray-600">
              Não tem uma conta? <a href="#" className="text-[--eco-green] hover:underline">Cadastre-se</a>
            </div>
          </div>

          <p className="text-center text-xs text-gray-500 mt-6">
            Ao continuar, você concorda com nossos Termos de Serviço e Política de Privacidade
          </p>
        </div>
      </div>
    </div>
  );
}
