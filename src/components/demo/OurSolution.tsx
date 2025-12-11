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
{/* Security Solution */}
        <TabsContent value="security" className="mt-8 space-y-8">
          <Card className="p-8 bg-card/50 backdrop-blur border-primary/20">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Shield className="w-7 h-7 text-primary" />
              Post-Quantum Hybrid Security Protocol
            </h3>

            {/* Protocol Overview */}
            <div className="mb-8 p-6 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/30">
              <p className="text-sm text-muted-foreground mb-4">
                Our protocol defends against <span className="font-semibold text-foreground">Eavesdroppers</span> (stealing data) and <span className="font-semibold text-foreground">Active Attackers</span> (tampering with models) using post-quantum secure cryptography.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/30">
                  <div className="text-2xl mb-2">👀</div>
                  <h5 className="font-semibold text-sm mb-1">Threat 1: Eavesdropper</h5>
                  <p className="text-xs text-muted-foreground">Intercepts and steals model data</p>
                </div>
                <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/30">
                  <div className="text-2xl mb-2">🎭</div>
                  <h5 className="font-semibold text-sm mb-1">Threat 2: Active Attacker</h5>
                  <p className="text-xs text-muted-foreground">Modifies or poisons updates</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {/* Step 1: Key Exchange */}
              <div className="relative">
                <div className="flex items-start gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary">
                      <span className="font-bold text-primary">1</span>
                    </div>
                    <div className="w-0.5 h-full bg-primary/30 mt-2" />
                  </div>
                  <div className="flex-1 pb-8">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <span className="text-2xl">🔑</span>
                      Secure Key Exchange (Post-Quantum)
                    </h4>
                    <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/30 min-h-[280px]">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-center w-32">
                          <div className="text-3xl mb-2">📱</div>
                          <p className="text-xs font-medium mb-2">Client</p>
                          <div className="inline-block px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/40 text-xs">
                            Public Key A
                          </div>
                        </div>
                        
                        <div className="flex-1 px-4 max-w-md">
                          <div className="relative h-8">
                            <div className="h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 absolute top-4 w-full" />
                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 text-xs text-blue-500 whitespace-nowrap">
                              ← → ← →
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-center w-32">
                          <div className="text-3xl mb-2">🖥️</div>
                          <p className="text-xs font-medium mb-2">Server</p>
                          <div className="inline-block px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/40 text-xs">
                            Public Key B
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 p-4 rounded-lg bg-success/10 border border-success/30 text-center">
                        <div className="text-2xl mb-2">🤝</div>
                        <p className="text-xs font-semibold text-success">Shared Secret Created!</p>
                        <p className="text-xs text-muted-foreground mt-1">Both sides now have the same encryption key</p>
                      </div>
                      
                      <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                        <Shield className="w-4 h-4 text-blue-500" />
                        <span>Protected against quantum computers</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2: Authentication */}
              <div className="relative">
                <div className="flex items-start gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary">
                      <span className="font-bold text-primary">2</span>
                    </div>
                    <div className="w-0.5 h-full bg-primary/30 mt-2" />
                  </div>
                  <div className="flex-1 pb-8">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <span className="text-2xl">✍️</span>
                      Digital Signature (Lightweight & Secure)
                    </h4>
                    <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/30 min-h-[280px]">
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="text-center p-4 rounded-lg bg-card/50 border border-purple-500/20">
                          <div className="text-3xl mb-2">📝</div>
                          <p className="text-xs font-medium mb-1">1. Sign Update</p>
                          <p className="text-xs text-muted-foreground">Client creates signature</p>
                        </div>
                        <div className="text-center p-4 rounded-lg bg-card/50 border border-purple-500/20">
                          <div className="text-3xl mb-2">📤</div>
                          <p className="text-xs font-medium mb-1">2. Send Together</p>
                          <p className="text-xs text-muted-foreground">Update + Signature</p>
                        </div>
                        <div className="text-center p-4 rounded-lg bg-card/50 border border-purple-500/20">
                          <div className="text-3xl mb-2">✅</div>
                          <p className="text-xs font-medium mb-1">3. Verify</p>
                          <p className="text-xs text-muted-foreground">Server checks identity</p>
                        </div>
                      </div>
                      
                      <div className="p-4 rounded-lg bg-card/50 border border-purple-500/30">
                        <div className="flex items-center justify-between">
                          <div className="text-center flex-1">
                            <div className="text-2xl mb-1">📱</div>
                            <p className="text-xs text-muted-foreground">Real Client</p>
                            <div className="mt-2 px-3 py-1 rounded bg-success/20 text-xs text-success">✓ Valid</div>
                          </div>
                          <div className="w-px h-12 bg-border mx-4" />
                          <div className="text-center flex-1">
                            <div className="text-2xl mb-1">🎭</div>
                            <p className="text-xs text-muted-foreground">Fake Attacker</p>
                            <div className="mt-2 px-3 py-1 rounded bg-destructive/20 text-xs text-destructive">✗ Rejected</div>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-xs text-center text-muted-foreground mt-4">
                        Stops attackers from pretending to be legitimate clients
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Encryption */}
              <div className="relative">
                <div className="flex items-start gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary">
                      <span className="font-bold text-primary">3</span>
                    </div>
                    <div className="w-0.5 h-full bg-primary/30 mt-2" />
                  </div>
                  <div className="flex-1 pb-8">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <span className="text-2xl">🔐</span>
                      Model Encryption (Fast & Lightweight)
                    </h4>
                    <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/30 min-h-[420px]">
                      <div className="space-y-4">
                        {/* Before Encryption */}
                        <div className="p-4 rounded-lg bg-card/50 border border-destructive/30">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-medium">Model Update (Unprotected)</span>
                            <span className="text-xs text-destructive">⚠️ Visible</span>
                          </div>
                          <div className="grid grid-cols-8 gap-1">
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                              <div key={i} className="h-10 rounded bg-red-500/40 flex items-center justify-center text-xs">
                                {String.fromCharCode(65 + i)}
                              </div>
                            ))}
                          </div>
                          <p className="text-xs text-muted-foreground mt-2">
                            👀 Eavesdropper can read sensitive data
                          </p>
                        </div>
                        
                        {/* Encryption Process */}
                        <div className="flex items-center justify-center py-2">
                          <div className="text-center">
                            <Lock className={`w-10 h-10 mx-auto text-green-500 ${animateFlow ? 'animate-pulse' : ''}`} />
                            <p className="text-xs text-green-500 font-medium mt-2">Encrypting...</p>
                          </div>
                        </div>
                        
                        {/* After Encryption */}
                        <div className="p-4 rounded-lg bg-card/50 border border-success/30">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-medium">Encrypted Model</span>
                            <span className="text-xs text-success">✓ Protected</span>
                          </div>
                          <div className="grid grid-cols-8 gap-1">
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                              <div key={i} className="h-10 rounded bg-green-500/60 flex items-center justify-center text-xs font-mono">
                                {animateFlow ? '🔒' : '##'}
                              </div>
                            ))}
                          </div>
                          <p className="text-xs text-muted-foreground mt-2">
                            ✅ Eavesdropper sees only scrambled data
                          </p>
                        </div>
                      </div>
                      
                      <div className="mt-4 flex items-center justify-center gap-4 text-xs">
                        <div className="flex items-center gap-1">
                          <Zap className="w-3 h-3 text-yellow-500" />
                          <span className="text-muted-foreground">Lightweight Algorithm</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Shield className="w-3 h-3 text-green-500" />
                          <span className="text-muted-foreground">Post-Quantum Secure</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4: Secure Communication */}
              <div className="relative">
                <div className="flex items-start gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center border-2 border-success">
                      <CheckCircle className="w-6 h-6 text-success" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <span className="text-2xl">🛡️</span>
                      Complete Protection in Action
                    </h4>
                    <div className="p-6 rounded-xl bg-gradient-to-br from-success/10 to-transparent border border-success/30">
                      <div className="max-w-5xl mx-auto">
                        {/* Simple 3-Step Flow */}
                        <div className="flex items-center justify-between gap-8">
                          
                          {/* STEP 1: CLIENT */}
                          <div className="flex-1">
                            <div className="text-center mb-4">
                              <div className="w-20 h-20 rounded-full bg-blue-500/20 border-4 border-blue-500 flex items-center justify-center mx-auto mb-2">
                                <span className="text-4xl">📱</span>
                              </div>
                              <p className="font-bold text-lg">CLIENT</p>
                            </div>
                            
                            <div className="space-y-3">
                              {/* Original Data */}
                              <div className="p-4 rounded-lg bg-blue-50 border-2 border-blue-300">
                                <p className="text-sm font-semibold mb-2 text-center">📦 Model Update</p>
                                <div className="flex justify-center gap-2 mb-2">
                                  <div className="w-10 h-10 bg-blue-400 rounded"></div>
                                  <div className="w-10 h-10 bg-blue-400 rounded"></div>
                                  <div className="w-10 h-10 bg-blue-400 rounded"></div>
                                </div>
                                <p className="text-xs text-center text-blue-700">Unprotected</p>
                              </div>
                              
                              {/* Arrow Down */}
                              <div className="text-center text-2xl">↓</div>
                              
                              {/* Add Signature */}
                              <div className="p-3 rounded-lg bg-purple-50 border-2 border-purple-400">
                                <p className="text-sm font-semibold text-center">
                                  <span className="text-xl mr-1">✍️</span>
                                  Add Signature
                                </p>
                                <p className="text-xs text-center text-purple-700 mt-1">Proves identity</p>
                              </div>
                              
                              {/* Arrow Down */}
                              <div className="text-center text-2xl">↓</div>
                              
                              {/* Encrypt */}
                              <div className="p-3 rounded-lg bg-green-50 border-2 border-green-400">
                                <p className="text-sm font-semibold text-center">
                                  <span className="text-xl mr-1">🔐</span>
                                  Encrypt Data
                                </p>
                                <p className="text-xs text-center text-green-700 mt-1">Hides content</p>
                              </div>
                            </div>
                          </div>
                          
                          {/* ARROW */}
                          <div className="flex flex-col items-center justify-center px-4">
                            <div className="text-6xl">→</div>
                          </div>
                          
                          {/* STEP 2: SECURE CHANNEL */}
                          <div className="flex-1">
                            <div className="text-center mb-4">
                              <p className="font-bold text-lg mb-2">TRANSMISSION</p>
                            </div>
                            
                            <div className="relative h-80 flex items-center justify-center">
                              {/* The Secure Pipe */}
                              <div className="w-full h-24 bg-gradient-to-r from-green-400 to-green-600 rounded-full border-4 border-green-700 flex items-center justify-center relative">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-green-800">
                                  <Lock className="w-8 h-8 text-green-700" />
                                </div>
                                <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm font-bold text-green-700 whitespace-nowrap">
                                  SECURE CHANNEL
                                </p>
                              </div>
                              
                              {/* Eavesdropper - Top */}
                              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                <div className="text-center">
                                  <div className="w-14 h-14 rounded-full bg-red-500 flex items-center justify-center border-3 border-red-700 mb-1">
                                    <span className="text-2xl">👀</span>
                                  </div>
                                  <p className="text-xs font-bold text-red-600">Eavesdropper</p>
                                  <p className="text-xs font-bold text-red-700">❌ BLOCKED</p>
                                </div>
                              </div>
                              
                              {/* Attacker - Bottom */}
                              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
                                <div className="text-center">
                                  <div className="w-14 h-14 rounded-full bg-red-500 flex items-center justify-center border-3 border-red-700 mb-1">
                                    <span className="text-2xl">🎭</span>
                                  </div>
                                  <p className="text-xs font-bold text-red-600">Attacker</p>
                                  <p className="text-xs font-bold text-red-700">❌ BLOCKED</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* ARROW */}
                          <div className="flex flex-col items-center justify-center px-4">
                            <div className="text-6xl">→</div>
                          </div>
                          
                          {/* STEP 3: SERVER */}
                          <div className="flex-1">
                            <div className="text-center mb-4">
                              <div className="w-20 h-20 rounded-full bg-purple-500/20 border-4 border-purple-500 flex items-center justify-center mx-auto mb-2">
                                <span className="text-4xl">🖥️</span>
                              </div>
                              <p className="font-bold text-lg">SERVER</p>
                            </div>
                            
                            <div className="space-y-3">
                              {/* Receive Encrypted */}
                              <div className="p-4 rounded-lg bg-green-50 border-2 border-green-300">
                                <p className="text-sm font-semibold mb-2 text-center">🔒 Encrypted Data</p>
                                <div className="flex justify-center gap-2 mb-2">
                                  <div className="w-10 h-10 bg-green-600 rounded flex items-center justify-center text-white text-xl">🔒</div>
                                  <div className="w-10 h-10 bg-green-600 rounded flex items-center justify-center text-white text-xl">🔒</div>
                                  <div className="w-10 h-10 bg-green-600 rounded flex items-center justify-center text-white text-xl">🔒</div>
                                </div>
                                <p className="text-xs text-center text-green-700">Protected</p>
                              </div>
                              
                              {/* Arrow Down */}
                              <div className="text-center text-2xl">↓</div>
                              
                              {/* Verify */}
                              <div className="p-3 rounded-lg bg-purple-50 border-2 border-purple-400">
                                <p className="text-sm font-semibold text-center">
                                  <span className="text-xl mr-1">✅</span>
                                  Verify Signature
                                </p>
                                <p className="text-xs text-center text-purple-700 mt-1">Check identity</p>
                              </div>
                              
                              {/* Arrow Down */}
                              <div className="text-center text-2xl">↓</div>
                              
                              {/* Safe Data */}
                              <div className="p-3 rounded-lg bg-blue-50 border-2 border-blue-400">
                                <p className="text-sm font-semibold text-center">
                                  <span className="text-xl mr-1">✓</span>
                                  Safe Data
                                </p>
                                <p className="text-xs text-center text-blue-700 mt-1">Ready to use</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Bottom Summary */}
                        <div className="mt-8 pt-6 border-t-2 border-border">
                          <p className="text-center font-bold mb-4">THREE LAYERS OF PROTECTION</p>
                          <div className="grid grid-cols-3 gap-4">
                            <div className="text-center p-4 rounded-lg bg-purple-50 border-2 border-purple-300">
                              <div className="text-3xl mb-2">✍️</div>
                              <p className="text-sm font-bold mb-1">Digital Signature</p>
                              <p className="text-xs text-muted-foreground">Verifies sender identity</p>
                            </div>
                            <div className="text-center p-4 rounded-lg bg-green-50 border-2 border-green-300">
                              <div className="text-3xl mb-2">🔐</div>
                              <p className="text-sm font-bold mb-1">Encryption</p>
                              <p className="text-xs text-muted-foreground">Protects data privacy</p>
                            </div>
                            <div className="text-center p-4 rounded-lg bg-blue-50 border-2 border-blue-300">
                              <div className="text-3xl mb-2">🛡️</div>
                              <p className="text-sm font-bold mb-1">Secure Channel</p>
                              <p className="text-xs text-muted-foreground">Blocks all attacks</p>
                            </div>
                          </div>
                        </div>

                        {/* Security Protocol Image */}
                        <div className="mt-8 pt-6 border-t-2 border-border">
                          <p className="text-center font-bold mb-4">Security Protocol Architecture</p>
                          <div className="flex justify-center">
                            <img 
                              src="./images/sec_protocol.png" 
                              alt="Security Protocol Architecture" 
                              className="max-w-full h-auto rounded-xl border-2 border-primary/30 shadow-lg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits Summary */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/30">
                <h4 className="font-semibold mb-4 text-center">Protocol Advantages</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 rounded-lg bg-card/50">
                    <div className="text-2xl mb-2">⚡</div>
                    <p className="text-xs font-medium mb-1">Low Overhead</p>
                    <p className="text-xs text-muted-foreground">Minimal extra cost</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-card/50">
                    <div className="text-2xl mb-2">🔮</div>
                    <p className="text-xs font-medium mb-1">Future-Proof</p>
                    <p className="text-xs text-muted-foreground">Quantum-resistant</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-card/50">
                    <div className="text-2xl mb-2">🎯</div>
                    <p className="text-xs font-medium mb-1">Simple Design</p>
                    <p className="text-xs text-muted-foreground">Client-server only</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-card/50">
                    <div className="text-2xl mb-2">✅</div>
                    <p className="text-xs font-medium mb-1">Verified</p>
                    <p className="text-xs text-muted-foreground">Formally proven</p>
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
              <Gauge className="w-7 h-7 text-secondary" />
              Model Quantization: 32-bit → 8-bit
            </h3>

            <div className="space-y-8">
              {/* Simple Explanation */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/30 text-center">
                <div className="text-4xl mb-4">💡</div>
                <h4 className="text-lg font-bold mb-3">What is Quantization?</h4>
                <p className="text-base max-w-2xl mx-auto">
                  Converting decimal numbers (32-bit) to simple integers (8-bit) to make models <span className="font-bold text-primary">75% smaller</span>
                </p>
              </div>

              {/* Interactive Conversion Demo */}
              <div className="p-8 rounded-xl bg-gradient-to-br from-secondary/10 to-transparent border border-secondary/30">
                <h4 className="text-xl font-bold mb-6 text-center">See The Conversion In Action</h4>
                
                <div className="max-w-4xl mx-auto space-y-8">
                  {/* Single Parameter Conversion */}
                  <div className="grid grid-cols-3 gap-8 items-center">
                    {/* BEFORE */}
                    <div className="text-center">
                      <div className="mb-4">
                        <div className="inline-block px-4 py-2 rounded-lg bg-red-500/20 border-2 border-red-500 mb-2">
                          <span className="text-sm font-bold">32-bit Float</span>
                        </div>
                      </div>
                      <div className="p-6 rounded-xl bg-red-500/10 border-2 border-red-500/30 min-h-[140px] flex flex-col justify-center">
                        <div className={`text-3xl font-bold text-red-600 mb-2 ${animateFlow ? 'animate-pulse' : ''}`}>
                          3.14159265
                        </div>
                        <div className="text-xs text-muted-foreground">Decimal number</div>
                        <div className="mt-3 pt-3 border-t border-red-500/30">
                          <div className="text-sm font-bold text-red-600">4 bytes</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* ARROW */}
                    <div className="text-center">
                      <div className={`text-6xl ${animateFlow ? 'scale-125 transition-transform' : ''}`}>
                        →
                      </div>
                      <div className="mt-2 text-xs font-medium text-muted-foreground">Quantize</div>
                    </div>
                    
                    {/* AFTER */}
                    <div className="text-center">
                      <div className="mb-4">
                        <div className="inline-block px-4 py-2 rounded-lg bg-green-500/20 border-2 border-green-500 mb-2">
                          <span className="text-sm font-bold">8-bit Integer</span>
                        </div>
                      </div>
                      <div className="p-6 rounded-xl bg-green-500/10 border-2 border-green-500/30 min-h-[140px] flex flex-col justify-center">
                        <div className={`text-3xl font-bold text-green-600 mb-2 ${animateFlow ? 'animate-pulse' : ''}`}>
                          127
                        </div>
                        <div className="text-xs text-muted-foreground">Simple integer</div>
                        <div className="mt-3 pt-3 border-t border-green-500/30">
                          <div className="text-sm font-bold text-green-600">1 byte</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* More Examples */}
                  <div className="grid grid-cols-3 gap-6">
                    <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/20 text-center">
                      <div className="text-lg font-bold text-red-600 mb-1">-0.87654</div>
                      <div className="text-xs text-muted-foreground mb-2">32-bit</div>
                      <div className="text-2xl">→</div>
                      <div className="text-lg font-bold text-green-600 mt-2">-35</div>
                      <div className="text-xs text-muted-foreground">8-bit</div>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/20 text-center">
                      <div className="text-lg font-bold text-red-600 mb-1">2.71828</div>
                      <div className="text-xs text-muted-foreground mb-2">32-bit</div>
                      <div className="text-2xl">→</div>
                      <div className="text-lg font-bold text-green-600 mt-2">110</div>
                      <div className="text-xs text-muted-foreground">8-bit</div>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/20 text-center">
                      <div className="text-lg font-bold text-red-600 mb-1">1.41421</div>
                      <div className="text-xs text-muted-foreground mb-2">32-bit</div>
                      <div className="text-2xl">→</div>
                      <div className="text-lg font-bold text-green-600 mt-2">57</div>
                      <div className="text-xs text-muted-foreground">8-bit</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Model Size Comparison */}
              <div className="p-8 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/30">
                <h4 className="text-xl font-bold mb-6 text-center">Model Size Reduction</h4>
                
                <div className="max-w-3xl mx-auto">
                  {/* Before */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium">Without Quantization</span>
                      <span className="text-2xl font-bold text-red-600">80 MB</span>
                    </div>
                    <div className="h-16 bg-red-500/20 rounded-xl relative overflow-hidden border-2 border-red-500/30">
                      <div className="absolute inset-0 bg-red-500/60"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="grid grid-cols-8 gap-2">
                          {[1,2,3,4,5,6,7,8].map(i => (
                            <div key={i} className="w-8 h-8 bg-red-700 rounded"></div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-center text-muted-foreground mt-2">32-bit floating point numbers</p>
                  </div>

                  {/* Arrow Down */}
                  <div className="flex flex-col items-center my-6">
                    <div className={`text-5xl ${animateFlow ? 'animate-bounce' : ''}`}>↓</div>
                    <div className="mt-2 px-4 py-2 rounded-lg bg-primary/20 border border-primary/30">
                      <span className="font-bold text-primary">Apply Quantization</span>
                    </div>
                  </div>

                  {/* After */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium">With Quantization</span>
                      <span className="text-2xl font-bold text-green-600">20 MB</span>
                    </div>
                    <div className="h-16 bg-green-500/20 rounded-xl relative overflow-hidden border-2 border-green-500/30">
                      <div className={`absolute inset-0 bg-green-500/60 transition-all duration-1000 ${animateFlow ? 'w-1/4' : 'w-1/4'}`}></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="grid grid-cols-8 gap-2">
                          {[1,2].map(i => (
                            <div key={i} className={`w-8 h-8 bg-green-700 rounded ${animateFlow ? 'animate-pulse' : ''}`}></div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-center text-muted-foreground mt-2">8-bit integer numbers</p>
                  </div>

                  {/* Result */}
                  <div className="mt-8 p-6 rounded-xl bg-success/10 border-2 border-success/30 text-center">
                    <div className="text-4xl mb-2">🎉</div>
                    <div className="text-3xl font-bold text-success mb-2">75% Smaller!</div>
                    <p className="text-sm text-muted-foreground">Same model, 4x less data to send</p>
                  </div>
                </div>
              </div>

              {/* Communication Speed */}
              <div className="p-8 rounded-xl bg-gradient-to-br from-success/10 to-transparent border border-success/30">
                <h4 className="text-xl font-bold mb-6 text-center">Communication Speed Improvement</h4>
                
                <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {/* Slow */}
                  <div className="text-center">
                    <div className="mb-4">
                      <div className="text-4xl mb-2">🐌</div>
                      <div className="text-lg font-bold">Without Quantization</div>
                    </div>
                    <div className="p-6 rounded-xl bg-red-500/10 border-2 border-red-500/30">
                      <div className="text-5xl font-bold text-red-600 mb-2">32s</div>
                      <div className="text-sm text-muted-foreground">Upload time</div>
                      <div className="mt-4 text-xs text-muted-foreground">(80 MB on 20 Mbps)</div>
                    </div>
                  </div>
                  
                  {/* Fast */}
                  <div className="text-center">
                    <div className="mb-4">
                      <div className="text-4xl mb-2">⚡</div>
                      <div className="text-lg font-bold">With Quantization</div>
                    </div>
                    <div className="p-6 rounded-xl bg-green-500/10 border-2 border-green-500/30">
                      <div className={`text-5xl font-bold text-green-600 mb-2 ${animateFlow ? 'animate-pulse' : ''}`}>8s</div>
                      <div className="text-sm text-muted-foreground">Upload time</div>
                      <div className="mt-4 text-xs text-muted-foreground">(20 MB on 20 Mbps)</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <div className="inline-block px-6 py-3 rounded-xl bg-primary/20 border-2 border-primary/30">
                    <span className="text-2xl font-bold text-primary">4x Faster Training! 🚀</span>
                  </div>
                </div>
              </div>

              {/* Simple Benefits */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/30">
                <h4 className="text-lg font-bold mb-6 text-center">Why This Matters</h4>
                <div className="grid grid-cols-4 gap-4 max-w-4xl mx-auto">
                  <div className="text-center p-4 rounded-lg bg-card/50 border">
                    <div className="text-3xl mb-2">📦</div>
                    <div className="text-2xl font-bold text-success mb-1">75%</div>
                    <p className="text-xs text-muted-foreground">Less Data</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-card/50 border">
                    <div className="text-3xl mb-2">⚡</div>
                    <div className="text-2xl font-bold text-success mb-1">4x</div>
                    <p className="text-xs text-muted-foreground">Faster Upload</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-card/50 border">
                    <div className="text-3xl mb-2">💰</div>
                    <div className="text-2xl font-bold text-success mb-1">60%</div>
                    <p className="text-xs text-muted-foreground">Cost Savings</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-card/50 border">
                    <div className="text-3xl mb-2">📱</div>
                    <div className="text-2xl font-bold text-success mb-1">✓</div>
                    <p className="text-xs text-muted-foreground">Mobile Friendly</p>
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
