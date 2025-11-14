import { AlertCircle, Info, CheckCircle, Lightbulb, XCircle } from "lucide-react";
import { CalloutType } from "@/types/course.types";

interface CalloutBoxProps {
  type: CalloutType;
  title?: string;
  content: string;
}

const CalloutBox = ({ type, title, content }: CalloutBoxProps) => {
  const configs = {
    warning: {
      bg: "bg-yellow-50",
      border: "border-yellow-500",
      text: "text-yellow-800",
      icon: <AlertCircle className="h-5 w-5 text-yellow-600" />,
      defaultTitle: "Atenção",
    },
    tip: {
      bg: "bg-purple-50",
      border: "border-purple-500",
      text: "text-purple-800",
      icon: <Lightbulb className="h-5 w-5 text-purple-600" />,
      defaultTitle: "Dica",
    },
    error: {
      bg: "bg-red-50",
      border: "border-red-500",
      text: "text-red-800",
      icon: <XCircle className="h-5 w-5 text-red-600" />,
      defaultTitle: "Erro Comum",
    },
    info: {
      bg: "bg-blue-50",
      border: "border-blue-500",
      text: "text-blue-800",
      icon: <Info className="h-5 w-5 text-blue-600" />,
      defaultTitle: "Informação",
    },
    success: {
      bg: "bg-green-50",
      border: "border-green-500",
      text: "text-green-800",
      icon: <CheckCircle className="h-5 w-5 text-green-600" />,
      defaultTitle: "Sucesso",
    },
  };

  const config = configs[type];

  return (
    <div className={`${config.bg} ${config.border} ${config.text} border-l-4 p-4 rounded-r-lg my-4`}>
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0 mt-0.5">{config.icon}</div>
        <div className="flex-1">
          {title && <h4 className="font-semibold mb-1">{title}</h4>}
          {!title && <h4 className="font-semibold mb-1">{config.defaultTitle}</h4>}
          <div className="text-sm whitespace-pre-wrap">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default CalloutBox;
