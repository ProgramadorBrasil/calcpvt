
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function AuctionComparisonTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="shadow-lg border-t-4 border-t-blue-600">
        <CardHeader className="bg-gray-50 pb-2">
          <CardTitle className="text-lg font-bold text-gray-800 flex items-center">
            <span className="bg-blue-600 p-1 rounded-md mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 16v-8h-8" />
                <path d="M19 10c.34.3.55.7.55 1.2" />
                <path d="M19 8v8h-8" />
                <circle cx="12" cy="12" r="9" />
              </svg>
            </span>
            Dúvidas Frequentes: Comparativo 1ª vs 2ª Praça
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-3">
          <Table>
            <TableHeader>
              <TableRow className="bg-blue-50">
                <TableHead className="font-bold">Característica</TableHead>
                <TableHead className="font-bold">1ª Praça</TableHead>
                <TableHead className="font-bold">2ª Praça</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Valor mínimo</TableCell>
                <TableCell>100% da avaliação</TableCell>
                <TableCell>50-75% da avaliação*</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Competitividade</TableCell>
                <TableCell>Baixa</TableCell>
                <TableCell>Alta</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Oportunidades</TableCell>
                <TableCell>Limitadas</TableCell>
                <TableCell>Diversificadas</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Desconto potencial</TableCell>
                <TableCell>Mínimo ou nenhum</TableCell>
                <TableCell>Significativo (25-50%)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <p className="text-xs mt-2 text-gray-500">* O percentual varia conforme determinação judicial.</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
