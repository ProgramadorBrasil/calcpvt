import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { motion } from 'framer-motion';

interface BreadcrumbItem {
  label: string;
  onClick?: () => void;
  isActive?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex items-center space-x-2 text-sm text-muted-foreground mb-6 bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg px-4 py-2"
    >
      <Home className="h-4 w-4 text-ms-blue" />
      
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <ChevronRight className="h-4 w-4" />}
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={item.onClick}
            className={`transition-colors hover:text-foreground ${
              item.isActive 
                ? 'text-ms-blue font-medium' 
                : 'text-muted-foreground hover:text-ms-blue'
            }`}
            disabled={item.isActive}
          >
            {item.label}
          </motion.button>
        </React.Fragment>
      ))}
    </motion.nav>
  );
};

export default Breadcrumb;