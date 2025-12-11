import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Lock, Key, Server, Smartphone, ArrowRight, Shield, Zap, Database, Play, Pause, RotateCcw } from "lucide-react";

const Methodology = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const steps = [
    { id: 0, title: "mTLS Handshake", icon: Shield, color: "primary" },
    { id: 1, title: "Key Generation", icon: Key, color: "secondary" },
    { id: 2, title: "Key Exchange", icon: ArrowRight, color: "success" },
    { id: 3, title: "Client Training", icon: Database, color: "primary" },
    { id: 4, title: "Quantization", icon: Zap, color: "warning" },
    { id: 5, title: "Model Encryption", icon: Lock, color: "success" },
    { id: 6, title: "Accuracy Validation", icon: Shield, color: "secondary" },
    { id: 7, title: "Aggregation", icon: Server, color: "primary" },
    { id: 8, title: "Final Encryption", icon: Lock, color: "success" },
  ];

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying, steps.length]);

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="space-y-8">
      {/* Process Overview */}
      <Card className="p-8 bg-gradient-to-br from-card via-card/80 to-accent/5">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <Zap className="w-8 h-8 text-primary animate-pulse-glow" />
            Complete Workflow
          </h2>
          
          {/* Playback Controls */}
          <div className="flex items-center gap-2">
            <Button
              onClick={() => setIsPlaying(!isPlaying)}
              variant="outline"
              size="sm"
              className="gap-2"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              {isPlaying ? "Pause" : "Play"}
            </Button>
            <Button
              onClick={handleReset}
              variant="outline"
              size="sm"
              className="gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </Button>
          </div>
        </div>
        
        {/* Step Indicators */}
        <div className="flex items-center justify-between mb-12 overflow-x-auto pb-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className="flex items-center">
                <button
                  onClick={() => setActiveStep(index)}
                  className={`flex flex-col items-center gap-2 transition-all duration-500 ${
                    activeStep === index ? 'scale-110' : 'scale-90 opacity-50'
                  }`}
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                    activeStep === index
                      ? `bg-${step.color} animate-pulse-glow shadow-lg`
                      : `bg-${step.color}/20`
                  } transition-all duration-500`}>
                    <Icon className={`w-8 h-8 ${
                      activeStep === index ? 'text-white' : `text-${step.color}`
                    }`} />
                  </div>
                  <span className={`text-xs font-medium text-center max-w-[80px] ${
                    activeStep === index ? 'text-foreground' : 'text-muted-foreground'
                  }`}>
                    {step.title}
                  </span>
                </button>
                {index < steps.length - 1 && (
                  <ArrowRight className={`w-6 h-6 mx-2 ${
                    activeStep > index ? 'text-primary animate-data-flow' : 'text-muted'
                  }`} />
                )}
              </div>
            );
          })}
        </div>

        {/* Animated Workflow Diagram */}
        <div className="relative bg-background/50 backdrop-blur rounded-2xl p-8 border border-border/50 min-h-[600px]">
          
          {/* Step 0: mTLS Handshake */}
          {activeStep === 0 && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="relative">
                    <Smartphone className="w-24 h-24 mx-auto text-primary animate-pulse" />
                    <Badge className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary">Client</Badge>
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col items-center gap-4">
                  <div className="relative w-full">
                    <ArrowRight className="w-16 h-16 text-success animate-data-flow" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <Shield className="w-8 h-8 text-success animate-pulse-glow" />
                    </div>
                  </div>
                  <p className="text-sm font-medium text-center">mTLS Handshake</p>
                  <div className="text-xs text-muted-foreground text-center max-w-xs">
                    Mutual TLS authentication establishes secure connection between client and server
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="relative">
                    <Server className="w-24 h-24 mx-auto text-secondary animate-pulse" />
                    <Badge className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-secondary">Server</Badge>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 1: Key Generation */}
          {activeStep === 1 && (
            <div className="space-y-6 animate-fade-in">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Key Generation Phase</h3>
                <p className="text-muted-foreground">Server generates KEM key pair</p>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                <Card className="p-6 bg-secondary/5 border-secondary/30 animate-slide-in-left">
                  <Server className="w-16 h-16 text-secondary mb-4 animate-spin-slow" />
                  <h4 className="font-bold mb-2">Server Actions</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Key className="w-4 h-4 text-warning animate-pulse" />
                      <span>Generate KEM Private Key</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Key className="w-4 h-4 text-success animate-pulse" style={{ animationDelay: "0.2s" }} />
                      <span>Generate KEM Public Key</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-primary animate-data-flow" />
                      <span>Send Public Key to Client</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-primary/5 border-primary/30 animate-slide-in-right">
                  <Smartphone className="w-16 h-16 text-primary mb-4" />
                  <h4 className="font-bold mb-2">Client Actions</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Key className="w-4 h-4 text-primary animate-pulse" />
                      <span>Receive KEM Public Key</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-success animate-pulse" style={{ animationDelay: "0.2s" }} />
                      <span>Ready for Encapsulation</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          )}

          {/* Step 2: Key Exchange & Shared Key */}
          {activeStep === 2 && (
            <div className="space-y-6 animate-fade-in">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Shared Key Generation</h3>
                <p className="text-muted-foreground">Using KEM encapsulation</p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <Card className="flex-1 p-4 bg-primary/5 border-primary/30 animate-slide-in-left">
                    <Smartphone className="w-12 h-12 text-primary mb-2" />
                    <p className="text-sm font-medium">Client encrypts with Public Key</p>
                    <div className="mt-4 p-3 bg-background rounded-lg">
                      <code className="text-xs text-success animate-pulse">KEM.encap() → Cipher</code>
                    </div>
                  </Card>
                  
                  <ArrowRight className="w-12 h-12 text-success mx-4 animate-data-flow" />
                  
                  <Card className="flex-1 p-4 bg-secondary/5 border-secondary/30 animate-slide-in-right">
                    <Server className="w-12 h-12 text-secondary mb-2" />
                    <p className="text-sm font-medium">Server decapsulates Cipher</p>
                    <div className="mt-4 p-3 bg-background rounded-lg">
                      <code className="text-xs text-warning animate-pulse">KEM.decap() → Shared Key</code>
                    </div>
                  </Card>
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center gap-3 px-6 py-4 bg-success/10 border border-success/30 rounded-xl animate-scale-in">
                    <Lock className="w-6 h-6 text-success animate-pulse-glow" />
                    <span className="font-bold text-lg">Both sides now have identical Shared Key</span>
                    <Lock className="w-6 h-6 text-success animate-pulse-glow" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Client Training & JS Divergence */}
          {activeStep === 3 && (
            <div className="space-y-6 animate-fade-in">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Local Training & Data Distribution</h3>
                <p className="text-muted-foreground">Client-side model training on local data</p>
              </div>
              
              <div className="space-y-4">
                <Card className="p-6 bg-primary/5 border-primary/30">
                  <div className="flex items-center gap-4 mb-4">
                    <Smartphone className="w-12 h-12 text-primary animate-pulse" />
                    <h4 className="text-xl font-bold">Client Processing</h4>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-lg border border-primary/30 animate-slide-in-right">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-sm font-bold">1</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Receive Initial Model</p>
                        <p className="text-xs text-muted-foreground">Download global model from server</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-primary" />
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-secondary/10 rounded-lg border border-secondary/30 animate-slide-in-right" style={{ animationDelay: "0.1s" }}>
                      <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                        <span className="text-sm font-bold">2</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Local Training</p>
                        <p className="text-xs text-muted-foreground">Train on private local data</p>
                      </div>
                      <Database className="w-5 h-5 text-secondary animate-pulse-glow" />
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-warning/10 rounded-lg border border-warning/30 animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
                      <div className="w-8 h-8 rounded-full bg-warning/20 flex items-center justify-center">
                        <span className="text-sm font-bold">3</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Measure JS Divergence</p>
                        <p className="text-xs text-muted-foreground">Calculate data distribution (IID measure)</p>
                      </div>
                      <Shield className="w-5 h-5 text-warning" />
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-success/10 rounded-lg border border-success/30 animate-slide-in-right" style={{ animationDelay: "0.3s" }}>
                      <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center">
                        <span className="text-sm font-bold">4</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Model Update Ready</p>
                        <p className="text-xs text-muted-foreground">Trained model ready for quantization</p>
                      </div>
                      <Database className="w-5 h-5 text-success animate-pulse" />
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          )}

          {/* Step 4: Quantization */}
          {activeStep === 4 && (
            <div className="space-y-6 animate-fade-in">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Model Quantization</h3>
                <p className="text-muted-foreground">Compress model for efficient transmission</p>
              </div>
              
              <div className="space-y-6">
                <Card className="p-6 bg-warning/5 border-warning/30">
                  <div className="flex items-center gap-4 mb-4">
                    <Zap className="w-12 h-12 text-warning animate-pulse" />
                    <h4 className="text-xl font-bold">Quantization Process</h4>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-lg border border-primary/30 animate-slide-in-left">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-sm font-bold">1</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Analyze Model Weights</p>
                        <p className="text-xs text-muted-foreground">Identify weight distribution patterns</p>
                      </div>
                      <Database className="w-5 h-5 text-primary animate-pulse" />
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-warning/10 rounded-lg border border-warning/30 animate-slide-in-left" style={{ animationDelay: "0.1s" }}>
                      <div className="w-8 h-8 rounded-full bg-warning/20 flex items-center justify-center">
                        <span className="text-sm font-bold">2</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Apply Quantization</p>
                        <p className="text-xs text-muted-foreground">Convert 32-bit floats → 8-bit integers</p>
                      </div>
                      <Zap className="w-5 h-5 text-warning animate-pulse" />
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-success/10 rounded-lg border border-success/30 animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
                      <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center">
                        <span className="text-sm font-bold">3</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Size Reduction</p>
                        <p className="text-xs text-muted-foreground">Up to 75% smaller model size</p>
                      </div>
                      <Zap className="w-5 h-5 text-success animate-pulse-glow" />
                    </div>
                  </div>
                </Card>

                {/* Quantization Visualization */}
                <Card className="p-6 bg-background/50 border-border">
                  <h4 className="font-bold mb-4 text-center">Compression Benefits</h4>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4 bg-destructive/10 rounded-lg border border-destructive/30">
                      <p className="text-sm text-muted-foreground mb-2">Before Quantization</p>
                      <div className="text-3xl font-bold text-destructive mb-1">100 MB</div>
                      <p className="text-xs text-muted-foreground">32-bit precision</p>
                    </div>
                    <div className="text-center p-4 bg-success/10 rounded-lg border border-success/30 animate-pulse-glow">
                      <p className="text-sm text-muted-foreground mb-2">After Quantization</p>
                      <div className="text-3xl font-bold text-success mb-1">25 MB</div>
                      <p className="text-xs text-muted-foreground">8-bit precision</p>
                    </div>
                  </div>
                </Card>

                <div className="flex items-center justify-center">
                  <ArrowRight className="w-16 h-16 text-success animate-data-flow" />
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Model Encryption */}
          {activeStep === 5 && (
            <div className="space-y-6 animate-fade-in">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Model Encryption</h3>
                <p className="text-muted-foreground">Secure quantized model using shared key</p>
              </div>
              
              <div className="space-y-6">
                <Card className="p-6 bg-success/5 border-success/30">
                  <div className="flex items-center gap-4 mb-4">
                    <Lock className="w-12 h-12 text-success animate-pulse" />
                    <h4 className="text-xl font-bold">Encryption Process</h4>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-lg border border-primary/30 animate-slide-in-left">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-sm font-bold">1</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Use Shared Key</p>
                        <p className="text-xs text-muted-foreground">Use the shared key established from KEM exchange</p>
                      </div>
                      <Key className="w-5 h-5 text-primary animate-pulse" />
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-success/10 rounded-lg border border-success/30 animate-slide-in-left" style={{ animationDelay: "0.1s" }}>
                      <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center">
                        <span className="text-sm font-bold">2</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Encrypt Model Parameters</p>
                        <p className="text-xs text-muted-foreground">Encrypt quantized model params with shared key</p>
                      </div>
                      <Lock className="w-5 h-5 text-success animate-pulse-glow" />
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-warning/10 rounded-lg border border-warning/30 animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
                      <div className="w-8 h-8 rounded-full bg-warning/20 flex items-center justify-center">
                        <span className="text-sm font-bold">3</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Encrypt JS Measurement</p>
                        <p className="text-xs text-muted-foreground">Encrypt JS divergence values with shared key</p>
                      </div>
                      <Database className="w-5 h-5 text-warning animate-pulse" />
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-secondary/10 rounded-lg border border-secondary/30 animate-slide-in-left" style={{ animationDelay: "0.3s" }}>
                      <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                        <span className="text-sm font-bold">4</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Send to Server</p>
                        <p className="text-xs text-muted-foreground">Transmit encrypted model & JS values securely</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-secondary animate-data-flow" />
                    </div>
                  </div>
                </Card>

                <div className="flex items-center justify-center">
                  <ArrowRight className="w-16 h-16 text-success animate-data-flow" />
                </div>
              </div>
            </div>
          )}

          {/* Step 6: Accuracy Validation */}
          {activeStep === 6 && (
            <div className="space-y-6 animate-fade-in">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Accuracy Validation</h3>
                <p className="text-muted-foreground">Cross-client model evaluation</p>
              </div>
              
              <div className="relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Server className="w-20 h-20 text-secondary animate-pulse-glow" />
                </div>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[1, 2, 3].map((client, idx) => (
                    <Card key={client} className="p-4 bg-primary/5 border-primary/30 animate-scale-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                      <Smartphone className="w-8 h-8 text-primary mx-auto mb-2" />
                      <p className="text-xs text-center font-medium">Client {client}</p>
                      <div className="mt-2 p-2 bg-background rounded text-xs text-center">
                        <Badge className="bg-success text-xs">Model Ready</Badge>
                      </div>
                    </Card>
                  ))}
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-4 bg-secondary/10 rounded-lg border border-secondary/30 animate-slide-in-left">
                    <ArrowRight className="w-5 h-5 text-secondary animate-data-flow" />
                    <p className="text-sm">Server sends each client's model to other clients for testing</p>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 bg-success/10 rounded-lg border border-success/30 animate-slide-in-right">
                    <Shield className="w-5 h-5 text-success animate-pulse" />
                    <p className="text-sm">Clients measure accuracy on their local test data</p>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 bg-warning/10 rounded-lg border border-warning/30 animate-slide-in-left">
                    <Database className="w-5 h-5 text-warning" />
                    <p className="text-sm">Server receives weighted accuracy measurements</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 7: Weighted Aggregation */}
          {activeStep === 7 && (
            <div className="space-y-6 animate-fade-in">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Intelligent Aggregation</h3>
                <p className="text-muted-foreground">JS Divergence + Accuracy weighted combination</p>
              </div>
              
              <div className="space-y-6">
                <Card className="p-6 bg-gradient-to-br from-secondary/10 to-primary/10 border-primary/30">
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <Server className="w-16 h-16 text-secondary animate-pulse" />
                    <h4 className="text-xl font-bold">Server Aggregation</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="p-4 bg-background/50 rounded-lg border border-border animate-slide-in-left">
                      <h5 className="font-bold mb-2 flex items-center gap-2">
                        <Database className="w-5 h-5 text-primary" />
                        JS Divergence Weight
                      </h5>
                      <p className="text-xs text-muted-foreground">Lower divergence = Higher weight (more IID data)</p>
                    </div>
                    
                    <div className="p-4 bg-background/50 rounded-lg border border-border animate-slide-in-right">
                      <h5 className="font-bold mb-2 flex items-center gap-2">
                        <Shield className="w-5 h-5 text-success" />
                        Accuracy Weight
                      </h5>
                      <p className="text-xs text-muted-foreground">Higher accuracy = Higher weight (better model)</p>
                    </div>
                  </div>

                  <div className="p-4 bg-success/10 rounded-lg border border-success/30 mb-6 animate-scale-in">
                    <p className="text-center font-mono text-sm">
                      Final Weight = α × (JS Weight) + β × (Accuracy Weight)
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg animate-slide-in-left">
                      <Zap className="w-5 h-5 text-primary animate-pulse" />
                      <p className="text-sm">Calculate aggregation weights for each client</p>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-secondary/10 rounded-lg animate-slide-in-right">
                      <Server className="w-5 h-5 text-secondary" />
                      <p className="text-sm">Aggregate models using computed weights</p>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-warning/10 rounded-lg animate-slide-in-left">
                      <Zap className="w-5 h-5 text-warning" />
                      <p className="text-sm">Quantize aggregated model</p>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-success/10 rounded-lg animate-slide-in-right">
                      <Lock className="w-5 h-5 text-success animate-pulse-glow" />
                      <p className="text-sm">Prepare for final encryption</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          )}

          {/* Step 8: Final Encryption */}
          {activeStep === 8 && (
            <div className="space-y-6 animate-fade-in">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Final Model Encryption</h3>
                <p className="text-muted-foreground">Secure aggregated model for next round distribution</p>
              </div>
              
              <div className="space-y-6">
                <Card className="p-6 bg-success/5 border-success/30">
                  <div className="flex items-center gap-4 mb-4">
                    <Lock className="w-12 h-12 text-success animate-pulse" />
                    <h4 className="text-xl font-bold">Encryption Process</h4>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-warning/10 rounded-lg border border-warning/30 animate-slide-in-left">
                      <div className="w-8 h-8 rounded-full bg-warning/20 flex items-center justify-center">
                        <span className="text-sm font-bold">1</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Quantize Aggregated Model</p>
                        <p className="text-xs text-muted-foreground">Compress the newly aggregated global model</p>
                      </div>
                      <Zap className="w-5 h-5 text-warning animate-pulse" />
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-lg border border-primary/30 animate-slide-in-left" style={{ animationDelay: "0.1s" }}>
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-sm font-bold">2</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Generate New Encryption Key</p>
                        <p className="text-xs text-muted-foreground">Fresh symmetric key for next round</p>
                      </div>
                      <Key className="w-5 h-5 text-primary animate-pulse" />
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-success/10 rounded-lg border border-success/30 animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
                      <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center">
                        <span className="text-sm font-bold">3</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Encrypt Global Model</p>
                        <p className="text-xs text-muted-foreground">Apply encryption to quantized aggregated model</p>
                      </div>
                      <Lock className="w-5 h-5 text-success animate-pulse-glow" />
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-secondary/10 rounded-lg border border-secondary/30 animate-slide-in-left" style={{ animationDelay: "0.3s" }}>
                      <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                        <span className="text-sm font-bold">4</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Encrypt Keys for Each Client</p>
                        <p className="text-xs text-muted-foreground">Using individual shared keys from KEM</p>
                      </div>
                      <Shield className="w-5 h-5 text-secondary animate-pulse" />
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-lg border border-primary/30 animate-slide-in-left" style={{ animationDelay: "0.4s" }}>
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-sm font-bold">5</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Distribute to Clients</p>
                        <p className="text-xs text-muted-foreground">Send encrypted model for next training round</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-primary animate-data-flow" />
                    </div>
                  </div>
                </Card>

                {/* Next Round Indicator */}
                <Card className="p-6 bg-background/50 border-border">
                  <h4 className="font-bold mb-4 text-center">Ready for Next Round</h4>
                  <div className="flex items-center justify-center gap-8">
                    <div className="text-center p-4 bg-success/10 rounded-lg border border-success/30">
                      <Lock className="w-8 h-8 text-success mx-auto mb-2" />
                      <p className="text-sm font-medium">Encrypted Model</p>
                      <p className="text-xs text-muted-foreground">Secure & Quantized</p>
                    </div>
                    <ArrowRight className="w-8 h-8 text-primary animate-data-flow" />
                    <div className="text-center p-4 bg-primary/10 rounded-lg border border-primary/30">
                      <Smartphone className="w-8 h-8 text-primary mx-auto mb-2" />
                      <p className="text-sm font-medium">All Clients</p>
                      <p className="text-xs text-muted-foreground">Ready for Training</p>
                    </div>
                  </div>
                  <p className="text-xs text-center text-muted-foreground mt-4">
                    Cycle continues with improved global model
                  </p>
                </Card>
              </div>
            </div>
          )}
        </div>
      </Card>

      {/* Key Benefits */}
      <Card className="p-8 bg-gradient-to-br from-success/5 to-primary/5">
        <h3 className="text-2xl font-bold mb-6">Key Benefits</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-background/50 rounded-xl border border-border">
            <Shield className="w-12 h-12 text-success mb-4 animate-pulse-glow" />
            <h4 className="font-bold mb-2">End-to-End Security</h4>
            <p className="text-sm text-muted-foreground">
              mTLS + KEM encryption + quantization ensures models are encrypted throughout transmission
            </p>
          </div>
          
          <div className="p-6 bg-background/50 rounded-xl border border-border">
            <Zap className="w-12 h-12 text-warning mb-4 animate-pulse" />
            <h4 className="font-bold mb-2">Optimized Performance</h4>
            <p className="text-sm text-muted-foreground">
              Quantization reduces bandwidth by up to 75% and speeds up encryption/decryption
            </p>
          </div>
          
          <div className="p-6 bg-background/50 rounded-xl border border-border">
            <Database className="w-12 h-12 text-primary mb-4 animate-pulse" />
            <h4 className="font-bold mb-2">Smart Aggregation</h4>
            <p className="text-sm text-muted-foreground">
              JS divergence + accuracy weighting handles non-IID data effectively
            </p>
          </div>
        </div>
      </Card>

      {/* Methodology Diagram */}
      <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5">
        <h3 className="text-2xl font-bold mb-6 text-center">Methodology Overview</h3>
        <div className="flex justify-center">
          <img 
            src="./images/methodology.png" 
            alt="Methodology Overview Diagram" 
            className="max-w-full h-auto rounded-xl border-2 border-primary/30 shadow-lg"
          />
        </div>
      </Card>
    </div>
  );
};

export default Methodology;