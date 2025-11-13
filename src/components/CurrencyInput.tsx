
import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface CurrencyInputProps {
  id: string;
  label?: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
  description?: string;
  required?: boolean;
  placeholder?: string;
}

const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};

const parseCurrency = (value: string): number => {
  // Remove all non-numeric characters and convert to number
  const numericValue = value.replace(/[^\d]/g, '');
  return numericValue ? parseInt(numericValue, 10) / 100 : 0;
};

const CurrencyInput: React.FC<CurrencyInputProps> = ({
  id,
  label,
  value,
  onChange,
  className,
  description,
  required = false,
  placeholder,
}) => {
  const numericValue = parseCurrency(value);
  const displayValue = numericValue > 0 
    ? formatCurrency(numericValue) 
    : '';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseCurrency(e.target.value);
    // Convert the numeric value back to string format
    const formattedValue = newValue === 0 ? '' : String(Math.round(newValue * 100));
    onChange(formattedValue);
  };

  return (
    <div className={cn("grid w-full items-center gap-1.5", className)}>
      {label && (
        <Label htmlFor={id} className="font-medium">
          {label} {required && <span className="text-destructive">*</span>}
        </Label>
      )}
      <Input
        type="text"
        id={id}
        value={displayValue}
        onChange={handleChange}
        className="font-medium"
        placeholder={placeholder}
      />
      {description && (
        <p className="text-xs text-muted-foreground">{description}</p>
      )}
    </div>
  );
};

export default CurrencyInput;
