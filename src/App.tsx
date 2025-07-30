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
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/team" element={<Team />} />
            <Route path="/cards" element={<PlaceholderPage title="Cards" description="Manage your card collections and templates" />} />
            <Route path="/mail" element={<PlaceholderPage title="Mail" description="Email management and communication tools" />} />
            <Route path="/pricing" element={<PlaceholderPage title="Pricing" description="View and manage pricing plans" />} />
            <Route path="/colors" element={<PlaceholderPage title="Color Palette" description="Design system color management" />} />
            <Route path="/lifecycle" element={<PlaceholderPage title="Lifecycle" description="Project lifecycle management" />} />
            <Route path="/data-library" element={<PlaceholderPage title="Data Library" description="Centralized data management and storage" />} />
            <Route path="/reports" element={<PlaceholderPage title="Reports" description="Generate and view detailed reports" />} />
            <Route path="/word-assistant" element={<PlaceholderPage title="Word Assistant" description="AI-powered writing and editing tools" />} />
            <Route path="/more" element={<PlaceholderPage title="More Tools" description="Additional features and utilities" />} />
            <Route path="/settings" element={<PlaceholderPage title="Settings" description="Configure your application preferences" />} />
            <Route path="/help" element={<PlaceholderPage title="Get Help" description="Support documentation and assistance" />} />
            <Route path="/search" element={<PlaceholderPage title="Search" description="Advanced search across all your data" />} />
            <Route path="/quick-create" element={<PlaceholderPage title="Quick Create" description="Rapidly create new projects and assets" actionText="Start Creating" />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
