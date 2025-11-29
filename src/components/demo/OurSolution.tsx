import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { CheckCircle, Shield, Zap, TrendingUp, Filter, Lock, Gauge } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const OurSolution = () => {
  const [animateFlow, setAnimateFlow] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateFlow(true);
      setTimeout(() => setAnimateFlow(false), 2000);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-12">
      {/* Header */}
      <Card className="p-8 md:p-12 bg-gradient-to-br from-success/10 to-card backdrop-blur border-success/20">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/20 border border-success/30 mb-6">
            <CheckCircle className="w-5 h-5 text-success" />
            <span className="text-sm font-medium">Our Innovation</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-success to-primary bg-clip-text text-transparent">
            Advanced Federated Learning Solution
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive approach addressing Non-IID data, security threats, and performance bottlenecks
          </p>
        </div>
      </Card>

      {/* Solution Categories */}
      <Tabs defaultValue="non-iid" className="w-full">
        <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 h-auto bg-card/50 backdrop-blur p-2 rounded-2xl">
          <TabsTrigger value="non-iid" className="rounded-xl py-3 data-[state=active]:bg-success data-[state=active]:text-success-foreground">
            <Filter className="w-4 h-4 mr-2" />
            Non-IID Solution
          </TabsTrigger>
          <TabsTrigger value="security" className="rounded-xl py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            <Lock className="w-4 h-4 mr-2" />
            Security Defense
          </TabsTrigger>
          <TabsTrigger value="performance" className="rounded-xl py-3 data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground">
            <Gauge className="w-4 h-4 mr-2" />
            Performance Boost
          </TabsTrigger>
        </TabsList>

        {/* Non-IID Solution */}
        <TabsContent value="non-iid" className="mt-8 space-y-8">
          <Card className="p-8 bg-card/50 backdrop-blur border-success/20">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Filter className="w-7 h-7 text-success" />
              Adaptive Data Balancing
            </h3>

            {/* Solution Architecture */}
            <div className="space-y-8">
              {/* Step 1: Data Analysis */}
              <div className="relative">
                <div className="flex items-start gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center border-2 border-success">
                      <span className="font-bold text-success">1</span>
                    </div>
                    <div className="w-0.5 h-full bg-success/30 mt-2" />
                  </div>
                  <div className="flex-1 pb-8">
                    <h4 className="font-semibold mb-3">Data Distribution Analysis</h4>
                    <div className="grid grid-cols-3 gap-4">
                      {[1, 2, 3].map((device) => (
                        <div key={device} className="p-4 rounded-xl bg-gradient-to-br from-success/10 to-transparent border border-success/30">
                          <p className="text-xs font-medium mb-2">Device {device}</p>
                          <div className="space-y-1">
                            {['A', 'B', 'C', 'D'].map((cls) => (
                              <div key={cls} className="flex items-center gap-2">
                                <span className="text-xs w-4">{cls}:</span>
                                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                                  <div 
                                    className="h-full bg-success transition-all duration-500"
                                    style={{ width: `${Math.random() * 100}%` }}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                          {animateFlow && (
                            <div className="mt-2 text-xs text-success animate-fade-in">
                              ✓ Analyzed
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2: Weighted Aggregation */}
              <div className="relative">
                <div className="flex items-start gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center border-2 border-success">
                      <span className="font-bold text-success">2</span>
                    </div>
                    <div className="w-0.5 h-full bg-success/30 mt-2" />
                  </div>
                  <div className="flex-1 pb-8">
                    <h4 className="font-semibold mb-3">Intelligent Weight Assignment</h4>
                    <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/30">
                      <div className="flex items-center justify-center gap-8">
                        <div className="text-center">
                          <div className="text-2xl mb-2">📱</div>
                          <p className="text-xs mb-1">Device 1</p>
                          <div className="text-lg font-bold text-primary">0.2</div>
                        </div>
                        <div className="text-2xl text-muted-foreground">+</div>
                        <div className="text-center">
                          <div className="text-2xl mb-2">📱</div>
                          <p className="text-xs mb-1">Device 2</p>
                          <div className="text-lg font-bold text-primary">0.5</div>
                        </div>
                        <div className="text-2xl text-muted-foreground">+</div>
                        <div className="text-center">
                          <div className="text-2xl mb-2">📱</div>
                          <p className="text-xs mb-1">Device 3</p>
                          <div className="text-lg font-bold text-primary">0.3</div>
                        </div>
                        <div className="text-2xl text-muted-foreground">=</div>
                        <div className="text-center">
                          <div className="text-2xl mb-2">🎯</div>
                          <p className="text-xs mb-1">Balanced</p>
                          <div className="text-lg font-bold text-success">Model</div>
                        </div>
                      </div>
                      <p className="text-xs text-center text-muted-foreground mt-4">
                        Weights adjusted based on data quality and distribution
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Results */}
              <div className="relative">
                <div className="flex items-start gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center border-2 border-success">
                      <CheckCircle className="w-6 h-6 text-success" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-3">Improved Accuracy</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-6 rounded-xl bg-destructive/10 border border-destructive/30 text-center">
                        <p className="text-sm text-muted-foreground mb-2">Before</p>
                        <div className="text-4xl font-bold text-destructive mb-2">73%</div>
                        <p className="text-xs text-muted-foreground">Traditional FL</p>
                      </div>
                      <div className="p-6 rounded-xl bg-success/10 border border-success/30 text-center animate-pulse-glow">
                        <p className="text-sm text-muted-foreground mb-2">After</p>
                        <div className="text-4xl font-bold text-success mb-2">92%</div>
                        <p className="text-xs text-muted-foreground">Our Solution</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Security Solution */}
        <TabsContent value="security" className="mt-8 space-y-8">
          <Card className="p-8 bg-card/50 backdrop-blur border-primary/20">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Shield className="w-7 h-7 text-primary" />
              Multi-Layer Security Defense
            </h3>

            <div className="space-y-6">
              {/* Layer 1: Detection */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/30">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-3">Anomaly Detection</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-4">
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs">Update Validation</span>
                            <span className="text-xs font-medium text-success">Active</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-success w-full animate-pulse" />
                          </div>
                        </div>
                      </div>
                      
                      {animateFlow && (
                        <div className="p-4 rounded-lg bg-card/50 border border-primary/30 animate-fade-in">
                          <div className="grid grid-cols-5 gap-2">
                            {[1, 2, 3, 4, 5].map((i) => (
                              <div key={i} className={`p-2 rounded text-center text-xs ${
                                i === 2 ? 'bg-destructive/20 text-destructive' : 'bg-success/20 text-success'
                              }`}>
                                {i === 2 ? '⚠️ Malicious' : '✓ Valid'}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Layer 2: Filtering */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-secondary/10 to-transparent border border-secondary/30">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Filter className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-3">Byzantine-Robust Aggregation</h4>
                    <div className="relative p-6 rounded-lg bg-card/50">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-center">
                          <p className="text-xs mb-2">All Updates</p>
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((i) => (
                              <div key={i} className={`w-8 h-12 rounded ${
                                i <= 2 ? 'bg-destructive/40' : 'bg-primary/40'
                              }`} />
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex-1 flex items-center justify-center">
                          <Filter className="w-8 h-8 text-secondary animate-pulse" />
                        </div>
                        
                        <div className="text-center">
                          <p className="text-xs mb-2">Filtered</p>
                          <div className="flex gap-1">
                            {[1, 2, 3].map((i) => (
                              <div key={i} className="w-8 h-12 rounded bg-success/40" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-center text-muted-foreground">
                        Removes outlier updates using statistical methods
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Layer 3: Encryption */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-success/10 to-transparent border border-success/30">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-success/20 flex items-center justify-center flex-shrink-0">
                    <Lock className="w-6 h-6 text-success" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-3">Secure Aggregation Protocol</h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-4 rounded-lg bg-card/50">
                        <div className="text-3xl mb-2">🔐</div>
                        <p className="text-xs font-medium mb-1">Encryption</p>
                        <p className="text-xs text-muted-foreground">Before sending</p>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-card/50">
                        <div className="text-3xl mb-2">🔒</div>
                        <p className="text-xs font-medium mb-1">Aggregation</p>
                        <p className="text-xs text-muted-foreground">Encrypted space</p>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-card/50">
                        <div className="text-3xl mb-2">✅</div>
                        <p className="text-xs font-medium mb-1">Decryption</p>
                        <p className="text-xs text-muted-foreground">Final model only</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Performance Solution */}
        <TabsContent value="performance" className="mt-8 space-y-8">
          <Card className="p-8 bg-card/50 backdrop-blur border-secondary/20">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Zap className="w-7 h-7 text-secondary" />
              Performance Optimization
            </h3>

            <div className="space-y-8">
              {/* Fast Convergence */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-secondary/10 to-transparent border border-secondary/30">
                <h4 className="font-semibold mb-4">Accelerated Convergence</h4>
                <div className="relative h-40 bg-card/50 rounded-lg p-4">
                  <div className="absolute bottom-8 left-0 right-0 h-0.5 bg-border" />
                  <div className="absolute left-4 bottom-0 top-0 w-0.5 bg-border" />
                  
                  {/* Traditional FL curve */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 140">
                    <path
                      d="M 20 120 Q 60 110, 120 90 T 240 70 T 360 60"
                      fill="none"
                      stroke="hsl(var(--destructive))"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                    <text x="370" y="65" fill="hsl(var(--destructive))" fontSize="10">Traditional</text>
                  </svg>
                  
                  {/* Our solution curve */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 140">
                    <path
                      d="M 20 120 Q 40 80, 80 50 T 160 35 T 240 30 T 360 28"
                      fill="none"
                      stroke="hsl(var(--success))"
                      strokeWidth="3"
                      className="animate-pulse"
                    />
                    <text x="370" y="33" fill="hsl(var(--success))" fontSize="10" fontWeight="bold">Our Solution</text>
                  </svg>
                  
                  <div className="absolute bottom-0 left-12 text-xs text-muted-foreground">Rounds</div>
                  <div className="absolute left-0 top-4 text-xs text-muted-foreground -rotate-90 origin-left">Accuracy</div>
                </div>
                <p className="text-xs text-center text-muted-foreground mt-4">
                  50% fewer rounds needed to reach target accuracy
                </p>
              </div>

              {/* Communication Efficiency */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/30">
                <h4 className="font-semibold mb-4">Reduced Communication Cost</h4>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-3 text-center">Traditional FL</p>
                    <div className="space-y-2">
                      {[100, 100, 100].map((val, i) => (
                        <div key={i} className="relative">
                          <div className="h-8 bg-destructive/20 rounded-lg flex items-center px-3">
                            <div className="text-xs font-medium">Round {i + 1}</div>
                          </div>
                          <div 
                            className="absolute top-0 left-0 h-full bg-destructive/60 rounded-lg transition-all duration-500"
                            style={{ width: `${val}%` }}
                          />
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-center text-destructive font-medium mt-2">300 MB total</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground mb-3 text-center">Our Solution</p>
                    <div className="space-y-2">
                      {[60, 40, 30].map((val, i) => (
                        <div key={i} className="relative">
                          <div className="h-8 bg-success/20 rounded-lg flex items-center px-3">
                            <div className="text-xs font-medium">Round {i + 1}</div>
                          </div>
                          <div 
                            className="absolute top-0 left-0 h-full bg-success/60 rounded-lg transition-all duration-500 animate-pulse"
                            style={{ width: `${val}%` }}
                          />
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-center text-success font-medium mt-2">130 MB total (-57%)</p>
                  </div>
                </div>
              </div>

              {/* Overall Improvement */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-success/10 to-transparent border border-success/30">
                <h4 className="font-semibold mb-4 text-center">Overall Performance Gains</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-6 rounded-xl bg-card/50 border border-success/30">
                    <TrendingUp className="w-8 h-8 text-success mx-auto mb-2" />
                    <div className="text-3xl font-bold text-success mb-1">+19%</div>
                    <p className="text-xs text-muted-foreground">Accuracy</p>
                  </div>
                  <div className="text-center p-6 rounded-xl bg-card/50 border border-success/30">
                    <Zap className="w-8 h-8 text-success mx-auto mb-2" />
                    <div className="text-3xl font-bold text-success mb-1">2.5x</div>
                    <p className="text-xs text-muted-foreground">Faster</p>
                  </div>
                  <div className="text-center p-6 rounded-xl bg-card/50 border border-success/30">
                    <Shield className="w-8 h-8 text-success mx-auto mb-2" />
                    <div className="text-3xl font-bold text-success mb-1">95%</div>
                    <p className="text-xs text-muted-foreground">Attack Defense</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default OurSolution;
