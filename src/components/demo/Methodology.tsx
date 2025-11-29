import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lock, Key, Server, Smartphone, ArrowRight, Shield, Zap, Database } from "lucide-react";

const Methodology = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const steps = [
    { id: 0, title: "mTLS Handshake", icon: Shield, color: "primary" },
    { id: 1, title: "Key Generation", icon: Key, color: "secondary" },
    { id: 2, title: "Key Exchange", icon: ArrowRight, color: "success" },
    { id: 3, title: "Model Encryption", icon: Lock, color: "warning" },
    { id: 4, title: "Client Training", icon: Database, color: "primary" },
    { id: 5, title: "Accuracy Validation", icon: Shield, color: "secondary" },
    { id: 6, title: "Aggregation", icon: Server, color: "success" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-8">
      {/* Process Overview */}
      <Card className="p-8 bg-gradient-to-br from-card via-card/80 to-accent/5">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <Zap className="w-8 h-8 text-primary animate-pulse-glow" />
          Complete Workflow
        </h2>
        
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

          {/* Step 3: Model Encryption & Quantization */}
          {activeStep === 3 && (
            <div className="space-y-6 animate-fade-in">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Model Encryption & Optimization</h3>
                <p className="text-muted-foreground">Secure transmission with quantization</p>
              </div>
              
              <div className="space-y-6">
                <Card className="p-6 bg-secondary/5 border-secondary/30">
                  <div className="flex items-center gap-4 mb-4">
                    <Server className="w-12 h-12 text-secondary animate-pulse" />
                    <h4 className="text-xl font-bold">Server Processing</h4>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-warning/10 rounded-lg border border-warning/30 animate-slide-in-left">
                      <div className="w-8 h-8 rounded-full bg-warning/20 flex items-center justify-center">
                        <span className="text-sm font-bold">1</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Quantize Model</p>
                        <p className="text-xs text-muted-foreground">Compress model size → Reduce bandwidth</p>
                      </div>
                      <Zap className="w-5 h-5 text-warning animate-pulse" />
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-lg border border-primary/30 animate-slide-in-left" style={{ animationDelay: "0.1s" }}>
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-sm font-bold">2</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Generate Encryption Key</p>
                        <p className="text-xs text-muted-foreground">New symmetric key for model encryption</p>
                      </div>
                      <Key className="w-5 h-5 text-primary animate-pulse" />
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-success/10 rounded-lg border border-success/30 animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
                      <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center">
                        <span className="text-sm font-bold">3</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Encrypt Model Parameters</p>
                        <p className="text-xs text-muted-foreground">Using encryption key</p>
                      </div>
                      <Lock className="w-5 h-5 text-success animate-pulse-glow" />
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-secondary/10 rounded-lg border border-secondary/30 animate-slide-in-left" style={{ animationDelay: "0.3s" }}>
                      <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                        <span className="text-sm font-bold">4</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Encrypt Encryption Key</p>
                        <p className="text-xs text-muted-foreground">Using shared key (for each client)</p>
                      </div>
                      <Shield className="w-5 h-5 text-secondary animate-pulse" />
                    </div>
                  </div>
                </Card>

                <div className="flex items-center justify-center">
                  <ArrowRight className="w-16 h-16 text-success animate-data-flow" />
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Client Training & JS Divergence */}
          {activeStep === 4 && (
            <div className="space-y-6 animate-fade-in">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Local Training & Data Distribution</h3>
                <p className="text-muted-foreground">Client-side computation</p>
              </div>
              
              <div className="space-y-4">
                <Card className="p-6 bg-primary/5 border-primary/30">
                  <div className="flex items-center gap-4 mb-4">
                    <Smartphone className="w-12 h-12 text-primary animate-pulse" />
                    <h4 className="text-xl font-bold">Client Processing</h4>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-success/10 rounded-lg border border-success/30 animate-slide-in-right">
                      <Lock className="w-5 h-5 text-success" />
                      <div className="flex-1">
                        <p className="font-medium">Decrypt Encryption Key</p>
                        <p className="text-xs text-muted-foreground">Using shared key</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-lg border border-primary/30 animate-slide-in-right" style={{ animationDelay: "0.1s" }}>
                      <Key className="w-5 h-5 text-primary" />
                      <div className="flex-1">
                        <p className="font-medium">Decrypt Model Parameters</p>
                        <p className="text-xs text-muted-foreground">Using encryption key</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-warning/10 rounded-lg border border-warning/30 animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
                      <Zap className="w-5 h-5 text-warning" />
                      <div className="flex-1">
                        <p className="font-medium">Dequantize Model</p>
                        <p className="text-xs text-muted-foreground">Decompress for training</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-secondary/10 rounded-lg border border-secondary/30 animate-slide-in-right" style={{ animationDelay: "0.3s" }}>
                      <Database className="w-5 h-5 text-secondary animate-pulse-glow" />
                      <div className="flex-1">
                        <p className="font-medium">Local Training</p>
                        <p className="text-xs text-muted-foreground">Train on private local data</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-destructive/10 rounded-lg border border-destructive/30 animate-slide-in-right" style={{ animationDelay: "0.4s" }}>
                      <Shield className="w-5 h-5 text-destructive" />
                      <div className="flex-1">
                        <p className="font-medium">Measure JS Divergence</p>
                        <p className="text-xs text-muted-foreground">Calculate data distribution (IID measure)</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-success/10 rounded-lg border border-success/30 animate-slide-in-right" style={{ animationDelay: "0.5s" }}>
                      <Lock className="w-5 h-5 text-success animate-pulse-glow" />
                      <div className="flex-1">
                        <p className="font-medium">Encrypt Updates & JS Values</p>
                        <p className="text-xs text-muted-foreground">Secure transmission back to server</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          )}

          {/* Step 5: Cross-Validation */}
          {activeStep === 5 && (
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

          {/* Step 6: Weighted Aggregation */}
          {activeStep === 6 && (
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
                      <p className="text-sm">Re-encrypt with new encryption key for next round</p>
                    </div>
                  </div>
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
    </div>
  );
};

export default Methodology;