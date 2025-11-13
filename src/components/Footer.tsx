import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Ferramentas',
      links: [
        { label: 'Calculadora de Leilão', href: '#calculadora' },
        { label: 'Verificador de Leiloeiros', href: '/verificador-leiloes' },
        { label: 'Checklist de Compra', href: '#checklist' },
        { label: 'Links Úteis', href: '#links' }
      ]
    },
    {
      title: 'Suporte',
      links: [
        { label: 'Dúvidas Frequentes', href: '#faq' },
        { label: 'Tutoriais', href: '#tutorial' },
        { label: 'Contato', href: '#contato' },
        { label: 'Suporte Técnico', href: '#suporte' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Termos de Uso', href: '#termos' },
        { label: 'Política de Privacidade', href: '#privacidade' },
        { label: 'Cookies', href: '#cookies' },
        { label: 'Disclaimer', href: '#disclaimer' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Github, href: '#github', label: 'GitHub' },
    { icon: Twitter, href: '#twitter', label: 'Twitter' },
    { icon: Linkedin, href: '#linkedin', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gradient-to-r from-ms-blue-dark to-ms-blue text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSI0IiBjeT0iNCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] repeat" />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <Calculator className="h-8 w-8 text-ms-yellow" />
              <h3 className="text-xl font-bold">Leilão Calculadora BR</h3>
            </div>
            <p className="text-white/80 mb-4 leading-relaxed">
              Ferramenta completa para investidores em leilões judiciais de imóveis no Brasil. 
              Calcule custos, verifique leiloeiros e encontre as melhores oportunidades.
            </p>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <MapPin className="h-4 w-4" />
              <span>Brasil</span>
            </div>
          </motion.div>

          {/* Footer links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            >
              <h4 className="font-semibold mb-4 text-ms-yellow">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        if (link.href.startsWith('/')) {
                          navigate(link.href);
                        }
                      }}
                      className="text-white/70 hover:text-white transition-colors duration-200 text-sm hover:underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-white/20 pt-8 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4 text-ms-yellow">Entre em Contato</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white/80">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">contato@leilao-calculadora.com.br</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">(11) 9999-9999</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-ms-yellow">Siga-nos</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors duration-200"
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-white/70"
        >
          <div>
            <p>&copy; {currentYear} Leilão Calculadora Brasil. Todos os direitos reservados.</p>
          </div>
          <div className="mt-2 md:mt-0">
            <p>Desenvolvido com ❤️ para investidores brasileiros</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;