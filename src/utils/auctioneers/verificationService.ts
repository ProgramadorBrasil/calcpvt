
import { supabase } from '@/integrations/supabase/client';
import { KNOWN_AUCTIONEERS } from './database';
import { extractDomain } from './urlUtils';

/**
 * Verify if an auctioneer site is legitimate and active
 */
export const verifyAuctioneerSite = async (url: string): Promise<{
  isValid: boolean;
  auctioneerName?: string;
  reason?: string;
}> => {
  const domain = extractDomain(url);
  
  // Check if domain matches any known auctioneer
  for (const knownDomain in KNOWN_AUCTIONEERS) {
    if (domain.includes(knownDomain)) {
      const auctioneer = KNOWN_AUCTIONEERS[knownDomain];
      
      if (auctioneer.status === 'active') {
        return {
          isValid: true,
          auctioneerName: `${auctioneer.name} (${auctioneer.registrationNumber})`
        };
      } else {
        return {
          isValid: false,
          auctioneerName: auctioneer.name,
          reason: auctioneer.reason || `${auctioneer.name} não está mais ativo como leiloeiro oficial.`
        };
      }
    }
  }
  
  // No match found
  return {
    isValid: false,
    reason: 'Este site não corresponde a nenhum leiloeiro registrado em nossa base de dados. Consulte a lista completa no PDF disponível para download.'
  };
};

// Function to handle direct auctioneer verification by name or registration number
export const verifyAuctioneerByName = (name: string): {
  isValid: boolean;
  auctioneerInfo?: {
    name: string;
    registrationNumber: string;
    status: 'active' | 'inactive';
    website?: string;
  };
  reason?: string;
} => {
  // Normalize the search term (remove accents, lowercase, etc.)
  const normalizedSearch = name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  
  // Check in the known auctioneers database
  for (const domain in KNOWN_AUCTIONEERS) {
    const auctioneer = KNOWN_AUCTIONEERS[domain];
    const normalizedName = auctioneer.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const normalizedRegNumber = auctioneer.registrationNumber.toLowerCase();
    
    if (
      normalizedName.includes(normalizedSearch) || 
      normalizedSearch.includes(normalizedName) ||
      normalizedRegNumber.includes(normalizedSearch)
    ) {
      if (auctioneer.status === 'active') {
        return {
          isValid: true,
          auctioneerInfo: {
            name: auctioneer.name,
            registrationNumber: auctioneer.registrationNumber,
            status: auctioneer.status,
            website: domain
          }
        };
      } else {
        return {
          isValid: false,
          auctioneerInfo: {
            name: auctioneer.name,
            registrationNumber: auctioneer.registrationNumber,
            status: auctioneer.status,
            website: domain
          },
          reason: auctioneer.reason || `${auctioneer.name} não está mais ativo como leiloeiro oficial.`
        };
      }
    }
  }
  
  // No match found
  return {
    isValid: false,
    reason: 'Este leiloeiro não foi encontrado em nossa base de dados. Consulte a lista completa no PDF disponível para download.'
  };
};
