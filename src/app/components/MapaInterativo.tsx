import { useState } from "react";
import { MapPin, Filter, Navigation, Package, Building2, Users, ZoomIn, ZoomOut, Layers, Crosshair, Eye } from "lucide-react";

const pontosResiduo = [
  { id: 1, lat: -12.971, lng: -38.501, tipo: "Plástico PET", quantidade: "150 kg", empresa: "TechCorp", prioridade: "alta" },
  { id: 2, lat: -12.975, lng: -38.507, tipo: "Papelão", quantidade: "320 kg", empresa: "EcoFood", prioridade: "media" },
  { id: 3, lat: -12.968, lng: -38.495, tipo: "Eletrônicos", quantidade: "85 kg", empresa: "SmartOffice", prioridade: "alta" },
  { id: 4, lat: -12.979, lng: -38.512, tipo: "Metal", quantidade: "210 kg", empresa: "BuildMax", prioridade: "baixa" },
  { id: 5, lat: -12.973, lng: -38.504, tipo: "Vidro", quantidade: "95 kg", empresa: "GlassIndustry", prioridade: "media" },
];

const cooperativas = [
  { id: 1, lat: -12.972, lng: -38.503, nome: "CoopRecicla Salvador", capacidade: 85, score: 4.8 },
  { id: 2, lat: -12.976, lng: -38.509, nome: "EcoBahia Cooperativa", capacidade: 70, score: 4.9 },
  { id: 3, lat: -12.969, lng: -38.497, nome: "TechRecycle SSA", capacidade: 60, score: 4.7 },
];

const ruas = [
  { nome: "Av. Tancredo Neves", path: "M 5,25 L 95,25", x: 50, y: 23, tipo: "principal" },
  { nome: "Av. ACM", path: "M 5,45 L 95,45", x: 50, y: 43, tipo: "principal" },
  { nome: "Av. Paralela", path: "M 5,12 L 95,12", x: 50, y: 10, tipo: "principal" },
  { nome: "Av. Garibaldi", path: "M 8,60 L 92,60", x: 50, y: 58, tipo: "secundaria" },

  { nome: "R. das Palmeiras", path: "M 20,5 L 20,80", x: 21, y: 40, tipo: "secundaria" },
  { nome: "Av. Paulo VI", path: "M 35,5 L 35,80", x: 36, y: 40, tipo: "secundaria" },
  { nome: "R. Raul Leite", path: "M 50,5 L 50,80", x: 51, y: 40, tipo: "secundaria" },
  { nome: "Av. Vasco da Gama", path: "M 65,5 L 65,80", x: 66, y: 40, tipo: "secundaria" },
  { nome: "R. Caetano Moura", path: "M 80,5 L 80,80", x: 81, y: 40, tipo: "secundaria" },

  { nome: "", path: "M 5,15 L 95,15", x: 0, y: 0, tipo: "terciaria" },
  { nome: "", path: "M 5,18 L 95,18", x: 0, y: 0, tipo: "terciaria" },
  { nome: "", path: "M 5,22 L 95,22", x: 0, y: 0, tipo: "terciaria" },
  { nome: "", path: "M 5,28 L 95,28", x: 0, y: 0, tipo: "terciaria" },
  { nome: "", path: "M 5,32 L 95,32", x: 0, y: 0, tipo: "terciaria" },
  { nome: "", path: "M 5,35 L 95,35", x: 0, y: 0, tipo: "terciaria" },
  { nome: "", path: "M 5,38 L 95,38", x: 0, y: 0, tipo: "terciaria" },
  { nome: "", path: "M 5,42 L 95,42", x: 0, y: 0, tipo: "terciaria" },
  { nome: "", path: "M 5,48 L 95,48", x: 0, y: 0, tipo: "terciaria" },
  { nome: "", path: "M 5,52 L 95,52", x: 0, y: 0, tipo: "terciaria" },
  { nome: "", path: "M 5,55 L 95,55", x: 0, y: 0, tipo: "terciaria" },
  { nome: "", path: "M 5,58 L 95,58", x: 0, y: 0, tipo: "terciaria" },
  { nome: "", path: "M 5,62 L 95,62", x: 0, y: 0, tipo: "terciaria" },
  { nome: "", path: "M 5,65 L 95,65", x: 0, y: 0, tipo: "terciaria" },
  { nome: "", path: "M 5,68 L 95,68", x: 0, y: 0, tipo: "terciaria" },
  { nome: "", path: "M 5,72 L 95,72", x: 0, y: 0, tipo: "terciaria" },
  { nome: "", path: "M 5,75 L 95,75", x: 0, y: 0, tipo: "terciaria" },

  { nome: "", path: "M 10,5 L 10,80", x: 0, y: 0, tipo: "terciaria" },
  { nome: "", path: "M 13,5 L 13,80", x: 0, y: 0, tipo: "terciaria" },
  { nome: "", path: "M 17,5 L 17,80", x: 0, y: 0, tipo: "terciaria" },
  { nome: "", path: "M 23,5 L 23,80", x: 0, y: 0, tipo: "terciaria" },
  { nome: "", path: "M 27,5 L 27,80", x: 0, y: 0, tipo: "terciaria" },
  { nome: "", path: "M 30,5 L 30,80", x: 0, y: 0, tipo: "terciaria" },
  { nome: "", path: "M 32,5 L 32,80", x: 0, y: 0, tipo: "terciaria" },
  { nome: "", path: "M 38,5 L 38,80", x: 0, y: 0, tipo: "terciaria" },
  { nome: "", path: "M 42,5 L 42,80", x: 0, y: 0, tipo: "terciaria" },
  { nome: "", path: "M 45,5 L 45,80", x: 0, y: 0, tipo: "terciaria" },
  { nome: "", path: "M 47,5 L 47,80", x: 0, y: 0, tipo: "terciaria" },
  { nome: "", path: "M 53,5 L 53,80", x: 0, y: 0, tipo: "terciaria" },
  { nome: "", path: "M 57,5 L 57,80", x: 0, y: 0, tipo: "terciaria" },
  { nome: "", path: "M 60,5 L 60,80", x: 0, y: 0, tipo: "terciaria" },
  { nome: "", path: "M 62,5 L 62,80", x: 0, y: 0, tipo: "terciaria" },
  { nome: "", path: "M 68,5 L 68,80", x: 0, y: 0, tipo: "terciaria" },
  { nome: "", path: "M 72,5 L 72,80", x: 0, y: 0, tipo: "terciaria" },
  { nome: "", path: "M 75,5 L 75,80", x: 0, y: 0, tipo: "terciaria" },
  { nome: "", path: "M 77,5 L 77,80", x: 0, y: 0, tipo: "terciaria" },
  { nome: "", path: "M 83,5 L 83,80", x: 0, y: 0, tipo: "terciaria" },
  { nome: "", path: "M 87,5 L 87,80", x: 0, y: 0, tipo: "terciaria" },
  { nome: "", path: "M 90,5 L 90,80", x: 0, y: 0, tipo: "terciaria" },
];

const quarteiroes = [
  { x: 5.5, y: 12.5, width: 4, height: 2, tipo: "predio" },
  { x: 10.5, y: 12.5, width: 2, height: 2, tipo: "predio" },
  { x: 13.5, y: 12.5, width: 3, height: 2, tipo: "predio" },
  { x: 17.5, y: 12.5, width: 2, height: 2, tipo: "predio" },
  { x: 21, y: 12.5, width: 1.5, height: 2, tipo: "predio" },
  { x: 23.5, y: 12.5, width: 3, height: 2, tipo: "predio" },
  { x: 27.5, y: 12.5, width: 2, height: 2, tipo: "predio" },
  { x: 30.5, y: 12.5, width: 1.5, height: 2, tipo: "predio" },
  { x: 32.5, y: 12.5, width: 2, height: 2, tipo: "predio" },
  { x: 36, y: 12.5, width: 1.5, height: 2, tipo: "predio" },
  { x: 38.5, y: 12.5, width: 3, height: 2, tipo: "predio" },
  { x: 42.5, y: 12.5, width: 2, height: 2, tipo: "predio" },
  { x: 45.5, y: 12.5, width: 1.5, height: 2, tipo: "predio" },
  { x: 47.5, y: 12.5, width: 2, height: 2, tipo: "predio" },
  { x: 51, y: 12.5, width: 1.5, height: 2, tipo: "predio" },
  { x: 53.5, y: 12.5, width: 3, height: 2, tipo: "predio" },
  { x: 57.5, y: 12.5, width: 2, height: 2, tipo: "predio" },
  { x: 60.5, y: 12.5, width: 1.5, height: 2, tipo: "predio" },
  { x: 62.5, y: 12.5, width: 2, height: 2, tipo: "predio" },
  { x: 66, y: 12.5, width: 1.5, height: 2, tipo: "predio" },
  { x: 68.5, y: 12.5, width: 3, height: 2, tipo: "predio" },
  { x: 72.5, y: 12.5, width: 2, height: 2, tipo: "predio" },
  { x: 75.5, y: 12.5, width: 1.5, height: 2, tipo: "predio" },
  { x: 77.5, y: 12.5, width: 2, height: 2, tipo: "predio" },
  { x: 81, y: 12.5, width: 1.5, height: 2, tipo: "predio" },
  { x: 83.5, y: 12.5, width: 3, height: 2, tipo: "predio" },
  { x: 87.5, y: 12.5, width: 2, height: 2, tipo: "predio" },
  { x: 90.5, y: 12.5, width: 4, height: 2, tipo: "predio" },

  { x: 5.5, y: 15.5, width: 4, height: 2, tipo: "predio" },
  { x: 10.5, y: 15.5, width: 2, height: 2, tipo: "predio" },
  { x: 13.5, y: 15.5, width: 3, height: 2, tipo: "predio" },
  { x: 17.5, y: 15.5, width: 2, height: 2, tipo: "predio" },
  { x: 21, y: 15.5, width: 1.5, height: 2, tipo: "predio" },
  { x: 23.5, y: 15.5, width: 3, height: 2, tipo: "predio" },
  { x: 27.5, y: 15.5, width: 2, height: 2, tipo: "predio" },
  { x: 30.5, y: 15.5, width: 1.5, height: 2, tipo: "predio" },
  { x: 32.5, y: 15.5, width: 2, height: 2, tipo: "predio" },
  { x: 36, y: 15.5, width: 1.5, height: 2, tipo: "predio" },
  { x: 38.5, y: 15.5, width: 3, height: 2, tipo: "predio" },
  { x: 42.5, y: 15.5, width: 2, height: 2, tipo: "predio" },
  { x: 45.5, y: 15.5, width: 1.5, height: 2, tipo: "predio" },
  { x: 47.5, y: 15.5, width: 2, height: 2, tipo: "predio" },
  { x: 51, y: 15.5, width: 1.5, height: 2, tipo: "predio" },
  { x: 53.5, y: 15.5, width: 3, height: 2, tipo: "predio" },
  { x: 57.5, y: 15.5, width: 2, height: 2, tipo: "predio" },
  { x: 60.5, y: 15.5, width: 1.5, height: 2, tipo: "predio" },
  { x: 62.5, y: 15.5, width: 2, height: 2, tipo: "predio" },
  { x: 66, y: 15.5, width: 1.5, height: 2, tipo: "predio" },
  { x: 68.5, y: 15.5, width: 3, height: 2, tipo: "predio" },
  { x: 72.5, y: 15.5, width: 2, height: 2, tipo: "predio" },
  { x: 75.5, y: 15.5, width: 1.5, height: 2, tipo: "predio" },
  { x: 77.5, y: 15.5, width: 2, height: 2, tipo: "predio" },
  { x: 81, y: 15.5, width: 1.5, height: 2, tipo: "predio" },
  { x: 83.5, y: 15.5, width: 3, height: 2, tipo: "predio" },
  { x: 87.5, y: 15.5, width: 2, height: 2, tipo: "predio" },
  { x: 90.5, y: 15.5, width: 4, height: 2, tipo: "predio" },

  { x: 5.5, y: 18.5, width: 4, height: 3, tipo: "predio" },
  { x: 10.5, y: 18.5, width: 2, height: 3, tipo: "predio" },
  { x: 13.5, y: 18.5, width: 3, height: 3, tipo: "predio" },
  { x: 17.5, y: 18.5, width: 2, height: 3, tipo: "predio" },
  { x: 21, y: 18.5, width: 1.5, height: 3, tipo: "predio" },
  { x: 23.5, y: 18.5, width: 3, height: 3, tipo: "predio" },
  { x: 27.5, y: 18.5, width: 2, height: 3, tipo: "predio" },
  { x: 30.5, y: 18.5, width: 1.5, height: 3, tipo: "predio" },
  { x: 32.5, y: 18.5, width: 2, height: 3, tipo: "predio" },
  { x: 36, y: 18.5, width: 1.5, height: 3, tipo: "predio" },
  { x: 38.5, y: 18.5, width: 3, height: 3, tipo: "predio" },
  { x: 42.5, y: 18.5, width: 2, height: 3, tipo: "predio" },
  { x: 45.5, y: 18.5, width: 1.5, height: 3, tipo: "predio" },
  { x: 47.5, y: 18.5, width: 2, height: 3, tipo: "predio" },
  { x: 51, y: 18.5, width: 1.5, height: 3, tipo: "predio" },
  { x: 53.5, y: 18.5, width: 3, height: 3, tipo: "predio" },
  { x: 57.5, y: 18.5, width: 2, height: 3, tipo: "predio" },
  { x: 60.5, y: 18.5, width: 1.5, height: 3, tipo: "predio" },
  { x: 62.5, y: 18.5, width: 2, height: 3, tipo: "predio" },
  { x: 66, y: 18.5, width: 1.5, height: 3, tipo: "predio" },
  { x: 68.5, y: 18.5, width: 3, height: 3, tipo: "predio" },
  { x: 72.5, y: 18.5, width: 2, height: 3, tipo: "predio" },
  { x: 75.5, y: 18.5, width: 1.5, height: 3, tipo: "predio" },
  { x: 77.5, y: 18.5, width: 2, height: 3, tipo: "predio" },
  { x: 81, y: 18.5, width: 1.5, height: 3, tipo: "predio" },
  { x: 83.5, y: 18.5, width: 3, height: 3, tipo: "predio" },
  { x: 87.5, y: 18.5, width: 2, height: 3, tipo: "predio" },
  { x: 90.5, y: 18.5, width: 4, height: 3, tipo: "predio" },

  { x: 5.5, y: 25.5, width: 4, height: 2, tipo: "predio" },
  { x: 10.5, y: 25.5, width: 2, height: 2, tipo: "predio" },
  { x: 13.5, y: 25.5, width: 3, height: 2, tipo: "predio" },
  { x: 17.5, y: 25.5, width: 2, height: 2, tipo: "predio" },
  { x: 21, y: 25.5, width: 1.5, height: 2, tipo: "predio" },
  { x: 23.5, y: 25.5, width: 3, height: 2, tipo: "predio" },
  { x: 27.5, y: 25.5, width: 2, height: 2, tipo: "predio" },
  { x: 51, y: 25.5, width: 1.5, height: 2, tipo: "predio" },
  { x: 53.5, y: 25.5, width: 3, height: 2, tipo: "predio" },
  { x: 57.5, y: 25.5, width: 2, height: 2, tipo: "predio" },
  { x: 60.5, y: 25.5, width: 1.5, height: 2, tipo: "predio" },
  { x: 62.5, y: 25.5, width: 2, height: 2, tipo: "predio" },
  { x: 66, y: 25.5, width: 1.5, height: 2, tipo: "predio" },
  { x: 68.5, y: 25.5, width: 3, height: 2, tipo: "predio" },
  { x: 72.5, y: 25.5, width: 2, height: 2, tipo: "predio" },
  { x: 75.5, y: 25.5, width: 1.5, height: 2, tipo: "predio" },
  { x: 77.5, y: 25.5, width: 2, height: 2, tipo: "predio" },
  { x: 81, y: 25.5, width: 1.5, height: 2, tipo: "predio" },
  { x: 83.5, y: 25.5, width: 3, height: 2, tipo: "predio" },
  { x: 87.5, y: 25.5, width: 2, height: 2, tipo: "predio" },
  { x: 90.5, y: 25.5, width: 4, height: 2, tipo: "predio" },

  { x: 5.5, y: 28.5, width: 4, height: 3, tipo: "predio" },
  { x: 10.5, y: 28.5, width: 2, height: 3, tipo: "predio" },
  { x: 13.5, y: 28.5, width: 3, height: 3, tipo: "predio" },
  { x: 17.5, y: 28.5, width: 2, height: 3, tipo: "predio" },
  { x: 21, y: 28.5, width: 1.5, height: 3, tipo: "predio" },
  { x: 23.5, y: 28.5, width: 3, height: 3, tipo: "predio" },
  { x: 27.5, y: 28.5, width: 2, height: 3, tipo: "predio" },
  { x: 36, y: 28.5, width: 1.5, height: 3, tipo: "predio" },
  { x: 38.5, y: 28.5, width: 3, height: 3, tipo: "predio" },
  { x: 42.5, y: 28.5, width: 2, height: 3, tipo: "predio" },
  { x: 45.5, y: 28.5, width: 1.5, height: 3, tipo: "predio" },
  { x: 47.5, y: 28.5, width: 2, height: 3, tipo: "predio" },
  { x: 51, y: 28.5, width: 1.5, height: 3, tipo: "predio" },
  { x: 53.5, y: 28.5, width: 3, height: 3, tipo: "predio" },
  { x: 57.5, y: 28.5, width: 2, height: 3, tipo: "predio" },
  { x: 60.5, y: 28.5, width: 1.5, height: 3, tipo: "predio" },
  { x: 62.5, y: 28.5, width: 2, height: 3, tipo: "predio" },
  { x: 66, y: 28.5, width: 1.5, height: 3, tipo: "predio" },
  { x: 68.5, y: 28.5, width: 3, height: 3, tipo: "predio" },
  { x: 72.5, y: 28.5, width: 2, height: 3, tipo: "predio" },
  { x: 75.5, y: 28.5, width: 1.5, height: 3, tipo: "predio" },
  { x: 77.5, y: 28.5, width: 2, height: 3, tipo: "predio" },
  { x: 81, y: 28.5, width: 1.5, height: 3, tipo: "predio" },
  { x: 83.5, y: 28.5, width: 3, height: 3, tipo: "predio" },
  { x: 87.5, y: 28.5, width: 2, height: 3, tipo: "predio" },
  { x: 90.5, y: 28.5, width: 4, height: 3, tipo: "predio" },

  { x: 5.5, y: 32.5, width: 4, height: 2, tipo: "predio" },
  { x: 10.5, y: 32.5, width: 2, height: 2, tipo: "predio" },
  { x: 13.5, y: 32.5, width: 3, height: 2, tipo: "predio" },
  { x: 17.5, y: 32.5, width: 2, height: 2, tipo: "predio" },
  { x: 21, y: 32.5, width: 1.5, height: 2, tipo: "predio" },
  { x: 23.5, y: 32.5, width: 3, height: 2, tipo: "predio" },
  { x: 27.5, y: 32.5, width: 2, height: 2, tipo: "predio" },
  { x: 30.5, y: 32.5, width: 1.5, height: 2, tipo: "predio" },
  { x: 32.5, y: 32.5, width: 2, height: 2, tipo: "predio" },
  { x: 36, y: 32.5, width: 1.5, height: 2, tipo: "predio" },
  { x: 38.5, y: 32.5, width: 3, height: 2, tipo: "predio" },
  { x: 42.5, y: 32.5, width: 2, height: 2, tipo: "predio" },
  { x: 45.5, y: 32.5, width: 1.5, height: 2, tipo: "predio" },
  { x: 47.5, y: 32.5, width: 2, height: 2, tipo: "predio" },
  { x: 51, y: 32.5, width: 1.5, height: 2, tipo: "predio" },
  { x: 53.5, y: 32.5, width: 3, height: 2, tipo: "predio" },
  { x: 57.5, y: 32.5, width: 2, height: 2, tipo: "predio" },
  { x: 60.5, y: 32.5, width: 1.5, height: 2, tipo: "predio" },
  { x: 62.5, y: 32.5, width: 2, height: 2, tipo: "predio" },
  { x: 66, y: 32.5, width: 1.5, height: 2, tipo: "predio" },
  { x: 68.5, y: 32.5, width: 3, height: 2, tipo: "predio" },
  { x: 72.5, y: 32.5, width: 2, height: 2, tipo: "predio" },
  { x: 75.5, y: 32.5, width: 1.5, height: 2, tipo: "predio" },
  { x: 77.5, y: 32.5, width: 2, height: 2, tipo: "predio" },
  { x: 81, y: 32.5, width: 1.5, height: 2, tipo: "predio" },
  { x: 83.5, y: 32.5, width: 3, height: 2, tipo: "predio" },
  { x: 87.5, y: 32.5, width: 2, height: 2, tipo: "predio" },
  { x: 90.5, y: 32.5, width: 4, height: 2, tipo: "predio" },

  { x: 5.5, y: 45.5, width: 4, height: 2, tipo: "predio" },
  { x: 10.5, y: 45.5, width: 2, height: 2, tipo: "predio" },
  { x: 13.5, y: 45.5, width: 3, height: 2, tipo: "predio" },
  { x: 17.5, y: 45.5, width: 2, height: 2, tipo: "predio" },
  { x: 21, y: 45.5, width: 1.5, height: 2, tipo: "predio" },
  { x: 23.5, y: 45.5, width: 3, height: 2, tipo: "predio" },
  { x: 27.5, y: 45.5, width: 2, height: 2, tipo: "predio" },
  { x: 30.5, y: 45.5, width: 1.5, height: 2, tipo: "predio" },
  { x: 32.5, y: 45.5, width: 2, height: 2, tipo: "predio" },
  { x: 36, y: 45.5, width: 1.5, height: 2, tipo: "predio" },
  { x: 38.5, y: 45.5, width: 3, height: 2, tipo: "predio" },
  { x: 42.5, y: 45.5, width: 2, height: 2, tipo: "predio" },
  { x: 45.5, y: 45.5, width: 1.5, height: 2, tipo: "predio" },
  { x: 47.5, y: 45.5, width: 2, height: 2, tipo: "predio" },
  { x: 51, y: 45.5, width: 1.5, height: 2, tipo: "predio" },
  { x: 63, y: 45.5, width: 1.5, height: 2, tipo: "predio" },
  { x: 66, y: 45.5, width: 1.5, height: 2, tipo: "predio" },
  { x: 68.5, y: 45.5, width: 3, height: 2, tipo: "predio" },
  { x: 72.5, y: 45.5, width: 2, height: 2, tipo: "predio" },
  { x: 75.5, y: 45.5, width: 1.5, height: 2, tipo: "predio" },
  { x: 77.5, y: 45.5, width: 2, height: 2, tipo: "predio" },
  { x: 81, y: 45.5, width: 1.5, height: 2, tipo: "predio" },
  { x: 83.5, y: 45.5, width: 3, height: 2, tipo: "predio" },
  { x: 87.5, y: 45.5, width: 2, height: 2, tipo: "predio" },
  { x: 90.5, y: 45.5, width: 4, height: 2, tipo: "predio" },

  { x: 5.5, y: 60.5, width: 4, height: 2, tipo: "predio" },
  { x: 10.5, y: 60.5, width: 2, height: 2, tipo: "predio" },
  { x: 13.5, y: 60.5, width: 3, height: 2, tipo: "predio" },
  { x: 17.5, y: 60.5, width: 2, height: 2, tipo: "predio" },
  { x: 21, y: 60.5, width: 1.5, height: 2, tipo: "predio" },
  { x: 30.5, y: 60.5, width: 4, height: 2, tipo: "predio" },
  { x: 36, y: 60.5, width: 1.5, height: 2, tipo: "predio" },
  { x: 38.5, y: 60.5, width: 3, height: 2, tipo: "predio" },
  { x: 42.5, y: 60.5, width: 2, height: 2, tipo: "predio" },
  { x: 45.5, y: 60.5, width: 1.5, height: 2, tipo: "predio" },
  { x: 47.5, y: 60.5, width: 2, height: 2, tipo: "predio" },
  { x: 51, y: 60.5, width: 1.5, height: 2, tipo: "predio" },
  { x: 63, y: 60.5, width: 1.5, height: 2, tipo: "predio" },
  { x: 66, y: 60.5, width: 1.5, height: 2, tipo: "predio" },
  { x: 68.5, y: 60.5, width: 3, height: 2, tipo: "predio" },
  { x: 77.5, y: 60.5, width: 2, height: 2, tipo: "predio" },
  { x: 81, y: 60.5, width: 1.5, height: 2, tipo: "predio" },
  { x: 83.5, y: 60.5, width: 3, height: 2, tipo: "predio" },
  { x: 87.5, y: 60.5, width: 2, height: 2, tipo: "predio" },
  { x: 90.5, y: 60.5, width: 4, height: 2, tipo: "predio" },

  { x: 6, y: 38, width: 3, height: 3, tipo: "comercial" },
  { x: 11, y: 38, width: 2, height: 3, tipo: "predio" },
  { x: 14, y: 38, width: 2, height: 3, tipo: "predio" },
  { x: 17, y: 38, width: 2, height: 3, tipo: "predio" },
  { x: 21, y: 38, width: 1.5, height: 3, tipo: "predio" },
  { x: 23.5, y: 38, width: 3, height: 3, tipo: "predio" },
  { x: 27, y: 38, width: 2, height: 3, tipo: "predio" },
  { x: 30, y: 38, width: 1.5, height: 3, tipo: "predio" },
  { x: 32.5, y: 38, width: 2, height: 3, tipo: "predio" },
  { x: 36, y: 38, width: 1.5, height: 3, tipo: "predio" },
  { x: 38.5, y: 38, width: 3, height: 3, tipo: "predio" },
  { x: 42.5, y: 38, width: 2, height: 3, tipo: "predio" },
  { x: 51, y: 38, width: 1.5, height: 3, tipo: "predio" },
  { x: 53.5, y: 38, width: 3, height: 3, tipo: "predio" },
  { x: 57.5, y: 38, width: 2, height: 3, tipo: "predio" },
  { x: 60.5, y: 38, width: 1.5, height: 3, tipo: "predio" },
  { x: 63, y: 38, width: 2, height: 3, tipo: "predio" },
  { x: 66, y: 38, width: 1.5, height: 3, tipo: "predio" },
  { x: 68.5, y: 38, width: 3, height: 3, tipo: "predio" },
  { x: 72.5, y: 38, width: 2, height: 3, tipo: "predio" },
  { x: 75.5, y: 38, width: 1.5, height: 3, tipo: "predio" },
  { x: 77.5, y: 38, width: 2, height: 3, tipo: "predio" },
  { x: 81, y: 38, width: 1.5, height: 3, tipo: "predio" },
  { x: 83.5, y: 38, width: 3, height: 3, tipo: "predio" },
  { x: 87.5, y: 38, width: 2, height: 3, tipo: "predio" },
  { x: 90.5, y: 38, width: 4, height: 3, tipo: "predio" },

  { x: 6, y: 48.5, width: 3, height: 3, tipo: "predio" },
  { x: 11, y: 48.5, width: 2, height: 3, tipo: "predio" },
  { x: 14, y: 48.5, width: 2, height: 3, tipo: "predio" },
  { x: 30, y: 48.5, width: 4, height: 3, tipo: "comercial" },
  { x: 36, y: 48.5, width: 1.5, height: 3, tipo: "predio" },
  { x: 38.5, y: 48.5, width: 3, height: 3, tipo: "predio" },
  { x: 42.5, y: 48.5, width: 2, height: 3, tipo: "predio" },
  { x: 45.5, y: 48.5, width: 1.5, height: 3, tipo: "predio" },
  { x: 47.5, y: 48.5, width: 2, height: 3, tipo: "predio" },
  { x: 51, y: 48.5, width: 1.5, height: 3, tipo: "predio" },
  { x: 63, y: 48.5, width: 2, height: 3, tipo: "predio" },
  { x: 66, y: 48.5, width: 1.5, height: 3, tipo: "predio" },
  { x: 68.5, y: 48.5, width: 3, height: 3, tipo: "predio" },
  { x: 72.5, y: 48.5, width: 2, height: 3, tipo: "predio" },
  { x: 83.5, y: 48.5, width: 3, height: 3, tipo: "predio" },
  { x: 87.5, y: 48.5, width: 2, height: 3, tipo: "predio" },
  { x: 90.5, y: 48.5, width: 4, height: 3, tipo: "predio" },
];

const parques = [
  { path: "M 8,30 L 15,30 L 15,36 L 8,36 Z", nome: "Parque da Cidade" },
  { path: "M 55,50 L 62,50 L 62,56 L 55,56 Z", nome: "" },
  { path: "M 24,68 L 29,68 L 29,72 L 24,72 Z", nome: "" },
  { path: "M 46,34 L 49,34 L 49,37 L 46,37 Z", nome: "" },
];

const agua = [
  { path: "M 70,8 Q 72,10 75,9 Q 78,8 80,10 L 80,14 Q 78,12 75,13 Q 72,14 70,12 Z" },
];

const pontosInteresse = [
  { x: 32, y: 26.5, tipo: "escola", nome: "Escola Municipal" },
  { x: 44, y: 26.5, tipo: "hospital", nome: "Hospital" },
  { x: 18, y: 52, tipo: "shopping", nome: "Shopping Iguatemi" },
  { x: 73, y: 63, tipo: "universidade", nome: "UFBA" },
  { x: 58, y: 47, tipo: "parque", nome: "Praça" },
  { x: 12, y: 20, tipo: "igreja", nome: "Igreja" },
  { x: 85, y: 33, tipo: "escola", nome: "Colégio" },
  { x: 40, y: 61, tipo: "metro", nome: "Estação Pituba" },
  { x: 25, y: 46, tipo: "metro", nome: "Estação ACM" },
  { x: 65, y: 26, tipo: "hospital", nome: "Hospital São Rafael" },
  { x: 48, y: 35.5, tipo: "parque", nome: "Praça" },
  { x: 35, y: 14, tipo: "shopping", nome: "Shopping Barra" },
  { x: 55, y: 62, tipo: "igreja", nome: "Igreja" },
];

const bairros = [
  { nome: "PITUBA", x: 30, y: 35 },
  { nome: "CAMINHO DAS ÁRVORES", x: 70, y: 50 },
  { nome: "BROTAS", x: 15, y: 68 },
];

export default function MapaInterativo() {
  const [filtroTipo, setFiltroTipo] = useState<string>("todos");
  const [mostrarCooperativas, setMostrarCooperativas] = useState(true);
  const [mostrarHeatmap, setMostrarHeatmap] = useState(false);
  const [pontoSelecionado, setPontoSelecionado] = useState<number | null>(null);

  const tipos = ["todos", "Plástico", "Papel", "Metal", "Vidro", "Eletrônico"];

  const pontosFiltrados = filtroTipo === "todos"
    ? pontosResiduo
    : pontosResiduo.filter(p => p.tipo.includes(filtroTipo));

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-8">
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[--eco-green] to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/20">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Mapa Interativo</h1>
              <p className="text-sm text-gray-500">Salvador, Bahia</p>
            </div>
          </div>
          <p className="text-gray-600">
            Visualize resíduos disponíveis e cooperativas em tempo real na região metropolitana de Salvador
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden relative">
              <div className="absolute top-4 left-4 right-4 z-10 flex items-center gap-3">
                <div className="flex-1 bg-white rounded-xl shadow-md border border-gray-200/50 p-3.5">
                  <div className="flex items-center gap-3">
                    <Filter className="w-4 h-4 text-gray-500" />
                    <select
                      value={filtroTipo}
                      onChange={(e) => setFiltroTipo(e.target.value)}
                      className="flex-1 bg-transparent border-none outline-none text-sm font-medium text-gray-700 cursor-pointer"
                    >
                      {tipos.map(tipo => (
                        <option key={tipo} value={tipo}>{tipo === "todos" ? "Todos os tipos de resíduos" : tipo}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setMostrarCooperativas(!mostrarCooperativas)}
                    className={`p-3 rounded-xl shadow-md transition-all ${
                      mostrarCooperativas
                        ? "bg-[--eco-blue] text-white shadow-blue-500/30"
                        : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200/50"
                    }`}
                    title="Mostrar/Ocultar Cooperativas"
                  >
                    <Users className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setMostrarHeatmap(!mostrarHeatmap)}
                    className={`p-3 rounded-xl shadow-md transition-all ${
                      mostrarHeatmap
                        ? "bg-orange-500 text-white shadow-orange-500/30"
                        : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200/50"
                    }`}
                    title="Heatmap de Resíduos"
                  >
                    <Layers className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <button className="p-3 hover:bg-gray-50 transition-colors border-b border-gray-100 w-full">
                    <ZoomIn className="w-5 h-5 text-gray-700 mx-auto" />
                  </button>
                  <button className="p-3 hover:bg-gray-50 transition-colors w-full">
                    <ZoomOut className="w-5 h-5 text-gray-700 mx-auto" />
                  </button>
                </div>

                <button className="bg-white rounded-lg shadow-md p-3 hover:bg-gray-50 transition-colors">
                  <Crosshair className="w-5 h-5 text-gray-700" />
                </button>
              </div>

              <div className="relative bg-[#efebe3] h-[600px] overflow-hidden">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <pattern id="quarteiroes-fill" patternUnits="userSpaceOnUse" width="100" height="100">
                      <rect width="100" height="100" fill="#efebe3"/>
                    </pattern>
                  </defs>

                  <rect width="100" height="100" fill="#efebe3"/>

                  {quarteiroes.map((q, index) => (
                    <rect
                      key={`quarteirao-${index}`}
                      x={q.x}
                      y={q.y}
                      width={q.width}
                      height={q.height}
                      fill="#e3dfd7"
                      stroke="#d8d4cc"
                      strokeWidth="0.08"
                      opacity="0.8"
                    />
                  ))}

                  {agua.map((a, index) => (
                    <path key={`agua-${index}`} d={a.path} fill="#c5dded" opacity="0.6"/>
                  ))}

                  {parques.map((parque, index) => (
                    <g key={`parque-${index}`}>
                      <path d={parque.path} fill="#d4e7d4" opacity="0.7"/>
                      {parque.nome && (
                        <text x="11.5" y="33.5" fontSize="1.4" fill="#82a682" fontWeight="500" opacity="0.8">
                          {parque.nome}
                        </text>
                      )}
                    </g>
                  ))}

                  {pontosInteresse.map((poi, index) => (
                    <g key={`poi-${index}`}>
                      {poi.tipo === "metro" ? (
                        <rect
                          x={poi.x - 0.5}
                          y={poi.y - 0.5}
                          width="1"
                          height="1"
                          fill="#ff6b35"
                          opacity="0.8"
                        />
                      ) : (
                        <circle
                          cx={poi.x}
                          cy={poi.y}
                          r="0.5"
                          fill={
                            poi.tipo === "escola" ? "#4a90e2" :
                            poi.tipo === "hospital" ? "#e74c3c" :
                            poi.tipo === "shopping" ? "#9b59b6" :
                            poi.tipo === "universidade" ? "#f39c12" :
                            poi.tipo === "parque" ? "#27ae60" :
                            poi.tipo === "igreja" ? "#8e44ad" :
                            "#95a5a6"
                          }
                          opacity="0.8"
                        />
                      )}
                      <text
                        x={poi.x}
                        y={poi.y - 1.2}
                        fontSize="0.9"
                        fill="#666"
                        fontWeight="400"
                        textAnchor="middle"
                        opacity="0.75"
                      >
                        {poi.nome}
                      </text>
                    </g>
                  ))}

                  {ruas.filter(r => r.tipo === "terciaria").map((rua, index) => (
                    <path
                      key={`terciaria-${index}`}
                      d={rua.path}
                      stroke="#ffffff"
                      strokeWidth="0.3"
                      fill="none"
                      opacity="0.8"
                    />
                  ))}

                  {ruas.filter(r => r.tipo === "secundaria").map((rua, index) => (
                    <g key={`secundaria-${index}`}>
                      <path
                        d={rua.path}
                        stroke="#ffffff"
                        strokeWidth="0.5"
                        fill="none"
                      />
                      {rua.nome && (
                        <text
                          x={rua.x}
                          y={rua.y}
                          fontSize="1.1"
                          fill="#8a8a8a"
                          fontWeight="400"
                          textAnchor="middle"
                          opacity="0.7"
                        >
                          {rua.nome}
                        </text>
                      )}
                    </g>
                  ))}

                  {ruas.filter(r => r.tipo === "principal").map((rua, index) => (
                    <g key={`principal-${index}`}>
                      <path
                        d={rua.path}
                        stroke="#d4d0c8"
                        strokeWidth="1.2"
                        fill="none"
                      />
                      <path
                        d={rua.path}
                        stroke="#ffffff"
                        strokeWidth="0.8"
                        fill="none"
                      />
                      <text
                        x={rua.x}
                        y={rua.y}
                        fontSize="1.3"
                        fill="#6b6b6b"
                        fontWeight="500"
                        textAnchor="middle"
                        opacity="0.85"
                      >
                        {rua.nome}
                      </text>
                    </g>
                  ))}

                  {bairros.map((bairro, index) => (
                    <text
                      key={`bairro-${index}`}
                      x={bairro.x}
                      y={bairro.y}
                      fontSize="4"
                      fill="#d0d0d0"
                      fontWeight="700"
                      textAnchor="middle"
                      letterSpacing="1"
                      opacity="0.5"
                    >
                      {bairro.nome}
                    </text>
                  ))}
                </svg>

                {mostrarHeatmap && (
                  <div className="absolute inset-0 pointer-events-none z-20">
                    <div className="absolute" style={{ top: '25%', left: '45%', width: '200px', height: '200px' }}>
                      <div className="w-full h-full bg-gradient-radial from-red-500/25 via-red-500/10 to-transparent rounded-full blur-2xl"></div>
                    </div>
                    <div className="absolute" style={{ top: '50%', left: '30%', width: '160px', height: '160px' }}>
                      <div className="w-full h-full bg-gradient-radial from-orange-500/25 via-orange-500/10 to-transparent rounded-full blur-2xl"></div>
                    </div>
                    <div className="absolute" style={{ top: '40%', left: '65%', width: '180px', height: '180px' }}>
                      <div className="w-full h-full bg-gradient-radial from-yellow-500/20 via-yellow-500/8 to-transparent rounded-full blur-2xl"></div>
                    </div>
                    <div className="absolute" style={{ top: '60%', left: '55%', width: '140px', height: '140px' }}>
                      <div className="w-full h-full bg-gradient-radial from-orange-400/20 via-orange-400/8 to-transparent rounded-full blur-xl"></div>
                    </div>
                  </div>
                )}

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    {pontosFiltrados.map((ponto) => (
                      <div
                        key={ponto.id}
                        onClick={() => setPontoSelecionado(ponto.id)}
                        className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-full group"
                        style={{
                          left: `${((ponto.lng - (-38.520)) / 0.02) * 100}%`,
                          top: `${((-12.965 - ponto.lat) / 0.02) * 100}%`,
                        }}
                      >
                        <div className={`relative ${pontoSelecionado === ponto.id ? 'z-20' : 'z-10'}`}>
                          <div className="relative">
                            <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all shadow-md ${
                              ponto.prioridade === "alta"
                                ? "bg-red-500"
                                : ponto.prioridade === "media"
                                ? "bg-yellow-500"
                                : "bg-gray-500"
                            } ${pontoSelecionado === ponto.id ? 'scale-125 shadow-lg' : 'group-hover:scale-110'} border-3 border-white`}>
                              <Package className="w-4 h-4 text-white" />
                            </div>
                            <div className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 ${
                              ponto.prioridade === "alta"
                                ? "bg-red-500"
                                : ponto.prioridade === "media"
                                ? "bg-yellow-500"
                                : "bg-gray-500"
                            }`}></div>
                          </div>

                          <div className="absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all pointer-events-none">
                            <div className="bg-white border border-gray-200 shadow-lg px-3 py-2 rounded-lg text-xs whitespace-nowrap">
                              <div className="font-semibold text-gray-900">{ponto.empresa}</div>
                              <div className="text-gray-600 text-xs mt-0.5">{ponto.tipo} - {ponto.quantidade}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    {mostrarCooperativas && cooperativas.map((coop) => (
                      <div
                        key={`coop-${coop.id}`}
                        className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-full group"
                        style={{
                          left: `${((coop.lng - (-38.520)) / 0.02) * 100}%`,
                          top: `${((-12.965 - coop.lat) / 0.02) * 100}%`,
                        }}
                      >
                        <div className="relative z-5">
                          <div className="relative">
                            <div className="w-10 h-10 rounded-full bg-[--eco-blue] flex items-center justify-center shadow-md group-hover:scale-110 transition-all border-3 border-white">
                              <Users className="w-5 h-5 text-white" />
                            </div>
                            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-[--eco-blue]"></div>
                          </div>

                          <div className="absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all pointer-events-none">
                            <div className="bg-white border border-gray-200 shadow-lg px-3 py-2.5 rounded-lg text-xs whitespace-nowrap">
                              <div className="font-semibold text-gray-900">{coop.nome}</div>
                              <div className="text-gray-600 text-xs mt-1 space-y-0.5">
                                <div>Score: {coop.score} ★</div>
                                <div>Capacidade: {coop.capacidade}%</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 space-y-2">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-md p-4">
                    <h3 className="text-xs font-semibold mb-3 text-gray-700">Legenda</h3>
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-2.5 text-xs text-gray-700">
                        <div className="w-3 h-3 rounded-full bg-red-500 shadow-sm"></div>
                        <span>Prioridade Alta</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-xs text-gray-700">
                        <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-sm"></div>
                        <span>Prioridade Média</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-xs text-gray-700">
                        <div className="w-3 h-3 rounded-full bg-gray-500 shadow-sm"></div>
                        <span>Prioridade Baixa</span>
                      </div>
                      {mostrarCooperativas && (
                        <div className="flex items-center gap-2.5 text-xs text-gray-700">
                          <div className="w-3 h-3 rounded-full bg-[--eco-blue] shadow-sm border-2 border-white"></div>
                          <span>Cooperativas</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-md p-3">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-0.5 bg-gray-800"></div>
                      <span className="text-xs font-medium text-gray-700">2 km</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Navigation className="w-3.5 h-3.5 text-gray-600" />
                      <span className="text-xs text-gray-600">Norte</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-gradient-to-br from-emerald-600 via-emerald-700 to-green-800 rounded-2xl p-6 text-white shadow-xl shadow-green-500/20">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Navigation className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Rota Otimizada</h3>
                    <p className="text-xs text-white/80">Sugestão da IA</p>
                  </div>
                </div>
                <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
                  4 pontos
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-2xl font-bold mb-1">9.2 km</div>
                  <div className="text-xs text-white/80">Economia de distância</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-2xl font-bold mb-1">22 min</div>
                  <div className="text-xs text-white/80">Economia de tempo</div>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 py-2.5 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-colors text-sm font-medium flex items-center justify-center gap-2">
                  <Navigation className="w-4 h-4" />
                  Iniciar Rota
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-semibold text-gray-800">Resumo do Mapa</h2>
                <div className="px-2 py-1 bg-green-50 rounded text-xs font-medium text-green-700">
                  Ao vivo
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                  <div className="flex items-center gap-2">
                    <Package className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-700">Resíduos disponíveis</span>
                  </div>
                  <span className="text-lg font-semibold text-gray-900">{pontosFiltrados.length}</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-blue-50">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-[--eco-blue]" />
                    <span className="text-sm text-blue-700">Cooperativas ativas</span>
                  </div>
                  <span className="text-lg font-semibold text-blue-900">{cooperativas.length}</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-red-50">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <span className="text-sm text-red-700">Alta prioridade</span>
                  </div>
                  <span className="text-lg font-semibold text-red-600">
                    {pontosFiltrados.filter(p => p.prioridade === "alta").length}
                  </span>
                </div>
              </div>

              <div className="mt-5 pt-5 border-t border-gray-100">
                <div className="text-xs text-gray-500 flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  Salvador, Bahia
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-green-50/30 rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[--eco-green] to-emerald-600 flex items-center justify-center">
                  <Navigation className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800">Matching Inteligente</h3>
              </div>
              <p className="text-xs text-gray-600 mb-4">
                A IA identificou 3 oportunidades de coleta otimizadas em Salvador
              </p>

              <div className="space-y-2.5">
                <div className="p-3 bg-white border border-green-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-start gap-2 mb-2">
                    <div className="w-6 h-6 rounded bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-3.5 h-3.5 text-[--eco-green]" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">TechCorp</div>
                      <div className="text-xs text-gray-500">Plástico PET - 150 kg</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-xs">
                    <span className="text-green-700 font-medium">95% match</span>
                    <span className="text-gray-500">3.2 km</span>
                  </div>
                </div>

                <div className="p-3 bg-white border border-blue-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-start gap-2 mb-2">
                    <div className="w-6 h-6 rounded bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-3.5 h-3.5 text-[--eco-blue]" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">EcoFood</div>
                      <div className="text-xs text-gray-500">Papelão - 320 kg</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-xs">
                    <span className="text-blue-700 font-medium">88% match</span>
                    <span className="text-gray-500">2.5 km</span>
                  </div>
                </div>
              </div>

              <button className="w-full mt-4 py-2.5 rounded-lg bg-[--eco-green] text-white hover:bg-emerald-600 transition-colors text-sm font-medium shadow-sm flex items-center justify-center gap-2 text-[#101828]">
                <Package className="w-4 h-4" />
                Ver Todos os Matches
              </button>
            </div>

            <div className="bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-600 rounded-xl p-6 text-white shadow-lg shadow-purple-500/20">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Navigation className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Próxima Coleta</h3>
                  <p className="text-xs text-white/80">Otimização automática</p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-white/90">Resíduos disponíveis</span>
                  <span className="text-2xl font-bold">5</span>
                </div>
                <div className="text-xs text-white/80">
                  Na sua área de cobertura
                </div>
              </div>
              <button className="w-full py-2.5 rounded-lg bg-white text-purple-600 hover:bg-purple-50 transition-colors text-sm font-medium shadow-sm">
                Aceitar Rota Otimizada
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
