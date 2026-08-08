import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { InquiryModal } from "./InquiryModal";

interface InquiryContextValue {
  open: (product?: string) => void;
  close: () => void;
}

const InquiryContext = createContext<InquiryContextValue | null>(null);

export function useInquiry() {
  const ctx = useContext(InquiryContext);
  if (!ctx) throw new Error("useInquiry must be used inside InquiryProvider");
  return ctx;
}

export function InquiryProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<string>("");

  const open = useCallback((p?: string) => {
    setProduct(p ?? "");
    setIsOpen(true);
  }, []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const value = useMemo(() => ({ open, close }), [open, close]);

  return (
    <InquiryContext.Provider value={value}>
      {children}
      <InquiryModal open={isOpen} onClose={close} product={product} />
    </InquiryContext.Provider>
  );
}