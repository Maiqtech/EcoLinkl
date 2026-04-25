import { useState } from "react";
import { Send, ArrowLeft, MapPin, Package, Image as ImageIcon } from "lucide-react";

interface ChatNegociacaoProps {
  onNavigate: (page: string) => void;
}

const mensagensIniciais = [
  {
    id: 1,
    remetente: "empresa",
    texto: "Olá! Gostaria de confirmar a coleta de papelão (200kg)",
    hora: "14:23",
  },
  {
    id: 2,
    remetente: "cooperativa",
    texto: "Olá! Sim, temos interesse. Qual a disponibilidade para retirada?",
    hora: "14:25",
  },
  {
    id: 3,
    remetente: "empresa",
    texto: "Podemos disponibilizar amanhã pela manhã, entre 8h e 12h",
    hora: "14:27",
  },
];

const acoesRapidas = [
  "Tenho interesse na coleta",
  "Qual a disponibilidade?",
  "Podemos negociar retirada?",
  "Consegue ajustar o volume?",
];

export default function ChatNegociacao({ onNavigate }: ChatNegociacaoProps) {
  const [mensagens, setMensagens] = useState(mensagensIniciais);
  const [mensagemAtual, setMensagemAtual] = useState("");

  const enviarMensagem = () => {
    if (mensagemAtual.trim()) {
      const novaMensagem = {
        id: mensagens.length + 1,
        remetente: "cooperativa",
        texto: mensagemAtual,
        hora: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
      };
      setMensagens([...mensagens, novaMensagem]);
      setMensagemAtual("");
    }
  };

  const enviarAcaoRapida = (texto: string) => {
    const novaMensagem = {
      id: mensagens.length + 1,
      remetente: "cooperativa",
      texto: texto,
      hora: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
    };
    setMensagens([...mensagens, novaMensagem]);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate("cooperativa")}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            <div className="flex-1">
              <h2 className="font-semibold">TechCorp Industries</h2>
              <p className="text-sm text-gray-600">Papelão - 200 kg</p>
            </div>

            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[--eco-green] to-[--eco-blue] flex items-center justify-center">
              <span className="text-white font-medium text-sm">TC</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card com Informações do Resíduo */}
      <div className="bg-white border-b border-gray-200">
        <div className="container py-4">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-4 border border-green-200">
            <div className="flex gap-4">
              {/* Fotos do Material */}
              <div className="flex gap-2 flex-shrink-0">
                <div className="w-20 h-20 rounded-lg overflow-hidden border-2 border-green-200">
                  <img
                    src="https://images.unsplash.com/photo-1594843302824-9ab51238f2d7?w=300"
                    alt="Papelão 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-20 h-20 rounded-lg overflow-hidden border-2 border-green-200">
                  <img
                    src="https://images.unsplash.com/photo-1581579438747-6d61f0c3c17b?w=300"
                    alt="Papelão 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Informações */}
              <div className="flex-1">
                <h3 className="font-medium mb-2">Papelão - 200 kg</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                  <MapPin className="w-4 h-4" />
                  Av. Tancredo Neves, 1189 - Pituba, Salvador
                </div>
                <div className="flex gap-2 mt-2">
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Separado</span>
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Armazenado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Área de Mensagens */}
      <div className="flex-1 overflow-y-auto">
        <div className="container py-6 space-y-4">
          {mensagens.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.remetente === "cooperativa" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                  msg.remetente === "cooperativa"
                    ? "bg-[--eco-green] text-white rounded-br-sm"
                    : "bg-white border border-gray-200 rounded-bl-sm"
                }`}
              >
                <p className="text-sm">{msg.texto}</p>
                <p
                  className={`text-xs mt-1 ${
                    msg.remetente === "cooperativa" ? "text-white/70" : "text-gray-500"
                  }`}
                >
                  {msg.hora}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ações Rápidas */}
      <div className="bg-white border-t border-gray-200">
        <div className="container py-3">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {acoesRapidas.map((acao, index) => (
              <button
                key={index}
                onClick={() => enviarAcaoRapida(acao)}
                className="px-4 py-2 rounded-full border border-[--eco-green] text-[--eco-green] hover:bg-green-50 transition-colors text-sm whitespace-nowrap flex-shrink-0"
              >
                {acao}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Input de Mensagem */}
      <div className="bg-white border-t border-gray-200 sticky bottom-0">
        <div className="container py-4">
          <div className="flex gap-3">
            <button className="p-3 rounded-lg hover:bg-gray-100 transition-colors">
              <ImageIcon className="w-5 h-5 text-gray-600" />
            </button>

            <input
              type="text"
              value={mensagemAtual}
              onChange={(e) => setMensagemAtual(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && enviarMensagem()}
              placeholder="Digite sua mensagem…"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[--eco-green]"
            />

            <button
              onClick={enviarMensagem}
              className="px-6 py-3 rounded-lg bg-[--eco-green] text-white hover:bg-emerald-600 transition-colors flex items-center gap-2"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
