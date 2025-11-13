
// Lista de leiloeiros conhecidos com seus domínios associados
// Isso idealmente viria de um banco de dados, mas para esta implementação
// usaremos um mapa estático para simplicidade

export interface AuctioneerData {
  name: string;
  status: 'active' | 'inactive';
  registrationNumber: string;
  reason?: string;
}

export type AuctioneerDatabase = Record<string, AuctioneerData>;

export const KNOWN_AUCTIONEERS: AuctioneerDatabase = {
  'portalzuk.com.br': { 
    name: 'Zukerman Leilões', 
    status: 'active', 
    registrationNumber: 'JUCESP 328/744'
  },
  'megaleiloes.com.br': { 
    name: 'Mega Leilões', 
    status: 'active', 
    registrationNumber: 'JUCESP 957' 
  },
  'freitasleiloeiro.com.br': { 
    name: 'Freitas Leiloeiro', 
    status: 'active', 
    registrationNumber: 'JUCESP 692' 
  },
  'e-leiloeiro.leilao.br': { 
    name: 'E-Leiloeiro', 
    status: 'active', 
    registrationNumber: 'JUCESP 1083' 
  },
  'gilsonleiloes.com.br': { 
    name: 'Gilson Leilões', 
    status: 'active', 
    registrationNumber: 'JUCESP 762' 
  },
  'alfaleiloes.com': { 
    name: 'Alfa Leilões', 
    status: 'active', 
    registrationNumber: 'JUCESP 1070' 
  },
  'vmleiloes.com.br': { 
    name: 'VM Leilões', 
    status: 'active', 
    registrationNumber: 'JUCESP 609' 
  },
  'verrileiloes.com.br': { 
    name: 'Verrileilões', 
    status: 'active', 
    registrationNumber: 'JUCESP 22/351-L' 
  },
  'topoleiloes.com.br': { 
    name: 'Topoleilões', 
    status: 'active', 
    registrationNumber: 'JUCESP 12/049-L' 
  },
  'frazaoleiloes.com.br': {
    name: 'Frazão Leilões',
    status: 'active',
    registrationNumber: 'JUCESP 836'
  },
  'biasileiloes.com.br': {
    name: 'Biasi Leilões',
    status: 'active',
    registrationNumber: 'JUCESP 616'
  },
  'jmfleiloes.com.br': {
    name: 'JMF Leilões',
    status: 'active',
    registrationNumber: 'JUCESP 21/331-L'
  },
  'legisleiloes.com.br': {
    name: 'Legis Leilões',
    status: 'active',
    registrationNumber: 'JUCESP Registrado'
  },
  'vivaleiloes.com.br': {
    name: 'Viva Leilões',
    status: 'active',
    registrationNumber: 'JUCESP 899'
  },
  'hastapublica.com.br': {
    name: 'HastaPública Leilões',
    status: 'active',
    registrationNumber: 'JUCESP Registrado'
  },
  'casareisleiloes.com.br': {
    name: 'Eduardo dos Reis Leilões',
    status: 'active',
    registrationNumber: 'JUCESP 748'
  },
  'cardosoleiloes.com.br': {
    name: 'Cardoso Leilões',
    status: 'active',
    registrationNumber: 'JUCESP 939'
  },
  '3torresleiloes.com.br': {
    name: 'Torres Leilões',
    status: 'active',
    registrationNumber: 'JUCESP Registrado'
  },
  'leiloesgold.com.br': {
    name: 'Leilões Gold',
    status: 'active',
    registrationNumber: 'JUCESP 958'
  },
  'leilaobrasil.com.br': {
    name: 'Leilão Brasil',
    status: 'active',
    registrationNumber: 'JUCESP 901'
  },
  'giordanoleiloes.com.br': {
    name: 'Giordano Leilões',
    status: 'active',
    registrationNumber: 'JUCESP 22/348-L'
  },
  'gustavomorettoleiloeiro.com.br': {
    name: 'Gustavo Moretto Leiloeiro',
    status: 'active',
    registrationNumber: 'JUCESP 22/344-L'
  },
  'rigolonleiloes.com.br': {
    name: 'Rigolon Leilões',
    status: 'active',
    registrationNumber: 'JUCESP 22/354-L'
  },
  'resale.com.br': {
    name: 'Resale',
    status: 'active',
    registrationNumber: 'JUCESP Registrado'
  },
  'sperancaleiloes.com.br': {
    name: 'Sperança Leilões',
    status: 'active',
    registrationNumber: 'JUCESP 21/328-L'
  },
  'kronbergleiloes.com.br': {
    name: 'Kronberg Leilões',
    status: 'active',
    registrationNumber: 'JUCESP 653'
  },
  'schulmannleiloes.com.br': {
    name: 'Leonardo Schulmann Leilões',
    status: 'active',
    registrationNumber: 'JUCESP Registrado'
  },
  'gfleiloes.com.br': {
    name: 'GF Leilões',
    status: 'active',
    registrationNumber: 'JUCESP 1278'
  },
  'dhleiloes.com.br': {
    name: 'Daniel Hamoui Leilões',
    status: 'active',
    registrationNumber: 'JUCESP 1105'
  },
  'nogari.com.br': {
    name: 'Nogari Leilões',
    status: 'active',
    registrationNumber: 'JUCESP 1166'
  },
  'dbmleiloes.com.br': {
    name: 'DBM Leilões',
    status: 'active',
    registrationNumber: 'JUCESP 1148'
  },
  'sudesteleiloes.com.br': {
    name: 'Sudeste Leilões',
    status: 'active',
    registrationNumber: 'JUCESP 1225'
  },
  'leilaoonline.net': {
    name: 'Leilão Online',
    status: 'active',
    registrationNumber: 'JUCESP 464'
  },
  'clicleiloes.com.br': {
    name: 'Clic Leilões',
    status: 'active',
    registrationNumber: 'JUCESP 1297'
  },
  'amaralleiloes.com.br': {
    name: 'Amaral Leilões',
    status: 'active',
    registrationNumber: 'JUCESP 966'
  },
  'nordesteleiloes.com': {
    name: 'Nordeste Leilões',
    status: 'active',
    registrationNumber: 'JUCESP 1435'
  },
  'lancetotal.com.br': {
    name: 'Lance Total',
    status: 'active',
    registrationNumber: 'JUCESP 747'
  },
  'sold.com.br': {
    name: 'Sold Leilões',
    status: 'active',
    registrationNumber: 'JUCESP Registrado'
  },
  'sodresantoro.com.br': {
    name: 'Sodré Santoro',
    status: 'active',
    registrationNumber: 'JUCESP Registrado'
  },
  'leiloeiropublico.com.br': {
    name: 'Leiloeiro Público Oficial',
    status: 'active',
    registrationNumber: 'JUCESP Registrado'
  },

  // Leiloeiros inativos
  'russoleiloes.com.br': { 
    name: 'Iara Russo Leilões', 
    status: 'inactive', 
    registrationNumber: 'JUCESP 554',
    reason: 'Leiloeira destituída em 20/07/2021' 
  },
  'leiloesbrasileiros.com.br': { 
    name: 'Iraildo Leilões', 
    status: 'inactive', 
    registrationNumber: 'JUCESP 814',
    reason: 'Leiloeiro destituído em 06/10/2020' 
  },
  'rocha.lel.br': {
    name: 'Adriano Rocha Neves',
    status: 'inactive',
    registrationNumber: 'JUCESP 696',
    reason: 'Leiloeiro destituído em 05/09/2024'
  },
  'lanceleiloes.com': {
    name: 'Aedi de Andrade Verrone',
    status: 'inactive',
    registrationNumber: 'JUCESP 840',
    reason: 'Leiloeiro falecido em 26/09/2023'
  }
};
