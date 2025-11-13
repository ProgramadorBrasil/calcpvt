
import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface PercentageInputProps {
  id: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
  className?: string;
  description?: string;
}

const PercentageInput: React.FC<PercentageInputProps> = ({
  id,
  label,
  value,
  onChange,
  className,
  description,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    onChange(isNaN(newValue) ? 0 : newValue);
  };

  return (
    <div className={cn("grid w-full items-center gap-1.5", className)}>
      <Label htmlFor={id} className="font-medium">{label}</Label>
      <div className="relative">
        <Input
          type="number"
          id={id}
          value={value}
          onChange={handleChange}
          min={0}
          max={100}
          step={0.1}
          className="pr-8 font-medium"
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <span className="text-gray-500">%</span>
        </div>
      </div>
      {description && (
        <p className="text-xs text-muted-foreground">{description}</p>
      )}
    </div>
  );
};

export default PercentageInput;
