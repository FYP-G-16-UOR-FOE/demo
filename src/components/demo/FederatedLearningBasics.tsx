import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Server, Smartphone, Brain, ArrowRight, Database } from "lucide-react";

const FederatedLearningBasics = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [dataFlowing, setDataFlowing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
      setDataFlowing(true);
      setTimeout(() => setDataFlowing(false), 1000);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    { icon: Smartphone, label: "Local Devices", color: "primary" },
    { icon: Brain, label: "Train Locally", color: "secondary" },
    { icon: ArrowRight, label: "Send Updates", color: "success" },
    { icon: Server, label: "Global Model", color: "warning" },
  ];

  return (
    <div className="space-y-12">
      {/* Introduction */}
      <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-accent/30 backdrop-blur border-primary/20">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            What is Federated Learning?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A distributed machine learning approach where multiple devices collaboratively train a model 
            <span className="font-semibold text-primary"> without sharing raw data</span>
          </p>
        </div>
      </Card>

      {/* Animated Process Diagram */}
      <Card className="p-8 md:p-12 bg-card/50 backdrop-blur border-primary/10">
        <h3 className="text-2xl font-bold mb-8 text-center">How It Works</h3>
        
        <div className="relative">
          {/* Central Server */}
          <div className="flex justify-center mb-12">
            <div className={`relative p-8 rounded-3xl bg-gradient-to-br from-warning/20 to-warning/5 border-2 transition-all duration-500 ${
              activeStep === 3 ? 'border-warning scale-110 shadow-xl' : 'border-warning/30'
            }`}>
              <Server className="w-16 h-16 text-warning mb-2" />
              <p className="text-sm font-medium text-center">Global Model</p>
              {activeStep === 3 && (
                <div className="absolute -inset-2 bg-warning/20 rounded-3xl animate-pulse-glow" />
              )}
            </div>
          </div>

          {/* Data Flow Lines */}
          <div className="relative h-32 mb-12">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className="absolute top-0 left-1/2 h-full -translate-x-1/2"
                style={{ transform: `translateX(-50%) rotate(${(index - 1) * 30}deg)` }}
              >
                <div className="relative h-full w-1 bg-gradient-to-b from-primary/50 to-transparent">
                  {dataFlowing && (
                    <div
                      className="absolute top-0 left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 animate-data-flow"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Local Devices */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((device, index) => (
              <div key={device} className="space-y-4">
                {/* Device */}
                <div className={`p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border-2 transition-all duration-500 ${
                  activeStep === 0 ? 'border-primary scale-105 shadow-lg' : 'border-primary/30'
                }`}>
                  <Smartphone className="w-12 h-12 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-center">Device {device}</p>
                  {activeStep === 0 && (
                    <div className="absolute -inset-1 bg-primary/10 rounded-2xl animate-pulse-glow" />
                  )}
                </div>

                {/* Local Data */}
                <div className={`p-4 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/5 border-2 transition-all duration-500 ${
                  activeStep === 1 ? 'border-secondary scale-105' : 'border-secondary/30'
                }`}>
                  <Database className="w-8 h-8 text-secondary mx-auto mb-1" />
                  <p className="text-xs text-center text-muted-foreground">Local Data</p>
                </div>

                {/* Training */}
                <div className={`p-4 rounded-xl bg-gradient-to-br from-success/20 to-success/5 border-2 transition-all duration-500 ${
                  activeStep === 2 ? 'border-success scale-105' : 'border-success/30'
                }`}>
                  <Brain className="w-8 h-8 text-success mx-auto mb-1 animate-spin-slow" />
                  <p className="text-xs text-center text-muted-foreground">Train Model</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Steps */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className={`p-4 rounded-xl border-2 transition-all duration-500 ${
                  activeStep === index
                    ? `border-${step.color} bg-${step.color}/10 scale-105`
                    : 'border-border bg-card/50'
                }`}
              >
                <Icon className={`w-8 h-8 mx-auto mb-2 text-${step.color}`} />
                <p className="text-xs font-medium text-center">{step.label}</p>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Key Concepts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent backdrop-blur border-primary/20 hover:shadow-lg transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Database className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold mb-2">Privacy Preserved</h4>
              <p className="text-sm text-muted-foreground">
                Raw data never leaves the device. Only model updates are shared, protecting user privacy.
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-secondary/10 to-transparent backdrop-blur border-secondary/20 hover:shadow-lg transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
              <Brain className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <h4 className="font-semibold mb-2">Collaborative Training</h4>
              <p className="text-sm text-muted-foreground">
                Multiple devices work together to improve a shared model without centralizing data.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FederatedLearningBasics;
