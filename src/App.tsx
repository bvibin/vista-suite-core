import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Projects from "./pages/Projects";
import Team from "./pages/Team";
import PromoValidation from "./pages/PromoValidation";
import Auth from "./pages/Auth";
import PlaceholderPage from "./pages/PlaceholderPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/promo-validation" element={<PromoValidation />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/team" element={<Team />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/cards" element={<PlaceholderPage title="Cards" description="Manage your card collections and templates" />} />
            <Route path="/more" element={<PlaceholderPage title="More Tools" description="Additional features and utilities" />} />
            <Route path="/settings" element={<PlaceholderPage title="Settings" description="Configure your application preferences" />} />
            <Route path="/help" element={<PlaceholderPage title="Get Help" description="Support documentation and assistance" />} />
            <Route path="/search" element={<PlaceholderPage title="Search" description="Advanced search across all your data" />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
