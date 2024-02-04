import { ThemeProvider } from "@/components/theme-provider";
import { ScrollAreaCoponent } from "@/components/ferramentas/scrollArea";

export default function FerramentasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className="flex flex-col sm:flex-row items-start w-full justify-between sm:justify-normal">
          <div className="mb-4">
            <ScrollAreaCoponent />
          </div>
          <div className="w-full sm:px-8 flex items-center justify-center">
            {children}
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}
