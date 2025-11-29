import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import FederatedLearningBasics from "@/components/demo/FederatedLearningBasics";
import TraditionalIssues from "@/components/demo/TraditionalIssues";
import OurSolution from "@/components/demo/OurSolution";
import Methodology from "@/components/demo/Methodology";
import ExperimentalResults from "@/components/demo/ExperimentalResults";
import { Brain, Shield, Zap, Workflow, BarChart3 } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("basics");

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent to-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-6">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwYThmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMy4zMTQgMi42ODYtNiA2LTZzNi0yLjY4NiA2LTYgMi42ODYtNiA2LTYgNi0yLjY4NiA2LTYgMi42ODYtNiA2LTYgNi0yLjY4NiA2LTYgMi42ODYtNiA2LTYgNi0yLjY4NiA2LTYgMi42ODYtNiA2LTYgNi0yLjY4NiA2LTYgMi42ODYtNiA2LTZ2MSIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-primary/20">
              <Brain className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Research Demonstration</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-slide-in-right">
              Federated Learning
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-slide-in-left">
              Addressing Non-IID Data, Security & Performance Challenges
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card className="p-6 bg-gradient-to-br from-card to-card/50 backdrop-blur border-primary/20 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Intelligent Learning</h3>
              <p className="text-sm text-muted-foreground">Distributed machine learning without centralized data collection</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-card to-card/50 backdrop-blur border-secondary/20 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Enhanced Security</h3>
              <p className="text-sm text-muted-foreground">Robust defense against attacks and malicious participants</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-card to-card/50 backdrop-blur border-success/20 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-success" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Optimized Performance</h3>
              <p className="text-sm text-muted-foreground">Handling non-IID data for better accuracy and convergence</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Demo Content */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-7xl">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-6xl mx-auto grid-cols-5 h-14 mb-12 bg-card/50 backdrop-blur p-1 rounded-2xl">
              <TabsTrigger 
                value="basics" 
                className="rounded-xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
              >
                <Brain className="w-4 h-4 mr-2" />
                Basics
              </TabsTrigger>
              <TabsTrigger 
                value="issues" 
                className="rounded-xl data-[state=active]:bg-destructive data-[state=active]:text-destructive-foreground transition-all duration-300"
              >
                <Shield className="w-4 h-4 mr-2" />
                Issues
              </TabsTrigger>
              <TabsTrigger 
                value="solution" 
                className="rounded-xl data-[state=active]:bg-success data-[state=active]:text-success-foreground transition-all duration-300"
              >
                <Zap className="w-4 h-4 mr-2" />
                Our Solution
              </TabsTrigger>
              <TabsTrigger 
                value="methodology" 
                className="rounded-xl data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground transition-all duration-300"
              >
                <Workflow className="w-4 h-4 mr-2" />
                Methodology
              </TabsTrigger>
              <TabsTrigger 
                value="results" 
                className="rounded-xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
              >
                <BarChart3 className="w-4 h-4 mr-2" />
                Results
              </TabsTrigger>
            </TabsList>

            <TabsContent value="basics" className="animate-fade-in">
              <FederatedLearningBasics />
            </TabsContent>

            <TabsContent value="issues" className="animate-fade-in">
              <TraditionalIssues />
            </TabsContent>

            <TabsContent value="solution" className="animate-fade-in">
              <OurSolution />
            </TabsContent>

            <TabsContent value="methodology" className="animate-fade-in">
              <Methodology />
            </TabsContent>

            <TabsContent value="results" className="animate-fade-in">
              <ExperimentalResults />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/50 mt-20">
        <div className="container mx-auto max-w-7xl text-center text-sm text-muted-foreground">
          <p>Federated Learning Research Demonstration © 2025</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
