import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { AlertTriangle, TrendingDown, Shield, Gauge, Lock, HelpCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SecurityAnimation from "./SecurityAnimation";

const TraditionalIssues = () => {
  const [hoveredIssue, setHoveredIssue] = useState<string | null>(null);
  const [percent, setPercent] = useState(0);

  // simulate encryption progress; when percent >= 70 show the warning/question icon
  useEffect(() => {
    const id = setInterval(() => {
      setPercent((p) => {
        const next = p + 6; // speed of simulation
        return next > 100 ? 0 : next;
      });
    }, 200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="space-y-12">
      {/* Header */}
      <Card className="p-8 md:p-12 bg-gradient-to-br from-destructive/10 to-card backdrop-blur border-destructive/20">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/20 border border-destructive/30 mb-6">
            <AlertTriangle className="w-5 h-5 text-destructive" />
            <span className="text-sm font-medium">Critical Challenges</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Problems in Traditional Federated Learning
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Understanding the key challenges that limit performance and security
          </p>
        </div>
      </Card>

      {/* Issue Categories */}
      <Tabs defaultValue="non-iid" className="w-full">
        <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 h-auto bg-card/50 backdrop-blur p-2 rounded-2xl">
          <TabsTrigger value="non-iid" className="rounded-xl py-3 data-[state=active]:bg-destructive data-[state=active]:text-destructive-foreground">
            <TrendingDown className="w-4 h-4 mr-2" />
            Non-IID Data
          </TabsTrigger>
          <TabsTrigger value="security" className="rounded-xl py-3 data-[state=active]:bg-destructive data-[state=active]:text-destructive-foreground">
            <Shield className="w-4 h-4 mr-2" />
            Security
          </TabsTrigger>
          <TabsTrigger value="performance" className="rounded-xl py-3 data-[state=active]:bg-destructive data-[state=active]:text-destructive-foreground">
            <Gauge className="w-4 h-4 mr-2" />
            Performance
          </TabsTrigger>
        </TabsList>

        {/* Non-IID Data Issue */}
        <TabsContent value="non-iid" className="mt-8 space-y-8">
          <Card className="p-6 bg-card/50 backdrop-blur border-destructive/20">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <TrendingDown className="w-7 h-7 text-destructive" />
              Non-IID Data Distribution
            </h3>
            <p className="text-muted-foreground mb-6">
              Visualization of data heterogeneity challenges in federated learning environments
            </p>
            <div className="w-full">
              <img 
                src="./images/nonIID-issue.png" 
                alt="Non-IID Data Distribution Issue" 
                className="w-full h-auto rounded-xl border-2 border-destructive/30 shadow-lg"
              />
            </div>
          </Card>

          {/* IID vs Non-IID Distribution Comparison - Column Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* IID Data Distribution - Bar Chart */}
            <Card className="p-6 bg-card/50 backdrop-blur border-success/20">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2 text-success">
                <span className="w-3 h-3 rounded-full bg-success"></span>
                IID Data Distribution (Ideal)
              </h4>
              <p className="text-sm text-muted-foreground mb-6">
                Each device has balanced samples from all 4 classes
              </p>
              
              {/* Bar Chart for IID */}
              <div className="space-y-6">
                {['Device 1', 'Device 2', 'Device 3'].map((device, idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-success/5 border border-success/20">
                    <p className="text-sm font-medium mb-3">{device}</p>
                    <div className="flex items-end justify-around gap-2 h-32">
                      {/* Class A */}
                      <div className="flex flex-col items-center">
                        <div className="w-10 bg-blue-500 rounded-t" style={{ height: '80px' }}></div>
                        <span className="text-xs mt-1 font-medium">A</span>
                        <span className="text-[10px] text-muted-foreground">25%</span>
                      </div>
                      {/* Class B */}
                      <div className="flex flex-col items-center">
                        <div className="w-10 bg-green-500 rounded-t" style={{ height: '80px' }}></div>
                        <span className="text-xs mt-1 font-medium">B</span>
                        <span className="text-[10px] text-muted-foreground">25%</span>
                      </div>
                      {/* Class C */}
                      <div className="flex flex-col items-center">
                        <div className="w-10 bg-yellow-500 rounded-t" style={{ height: '80px' }}></div>
                        <span className="text-xs mt-1 font-medium">C</span>
                        <span className="text-[10px] text-muted-foreground">25%</span>
                      </div>
                      {/* Class D */}
                      <div className="flex flex-col items-center">
                        <div className="w-10 bg-red-500 rounded-t" style={{ height: '80px' }}></div>
                        <span className="text-xs mt-1 font-medium">D</span>
                        <span className="text-[10px] text-muted-foreground">25%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 rounded-lg bg-success/10 border border-success/30">
                <p className="text-xs text-success font-medium">✓ Uniform distribution across all devices</p>
                <p className="text-xs text-muted-foreground mt-1">Model learns equally from all classes</p>
              </div>
            </Card>

            {/* Non-IID Data Distribution - Bar Chart */}
            <Card className="p-6 bg-card/50 backdrop-blur border-destructive/20">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2 text-destructive">
                <span className="w-3 h-3 rounded-full bg-destructive"></span>
                Non-IID Data Distribution (Problem)
              </h4>
              <p className="text-sm text-muted-foreground mb-6">
                Each device has imbalanced samples across 4 classes
              </p>
              
              {/* Bar Chart for Non-IID */}
              <div className="space-y-6">
                {/* Device 1 - Only Class A and B */}
                <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/20">
                  <p className="text-sm font-medium mb-3">Device 1</p>
                  <div className="flex items-end justify-around gap-2 h-32">
                    <div className="flex flex-col items-center">
                      <div className="w-10 bg-blue-500 rounded-t" style={{ height: '90px' }}></div>
                      <span className="text-xs mt-1 font-medium">A</span>
                      <span className="text-[10px] text-muted-foreground">60%</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-10 bg-green-500 rounded-t" style={{ height: '60px' }}></div>
                      <span className="text-xs mt-1 font-medium">B</span>
                      <span className="text-[10px] text-muted-foreground">40%</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-10 bg-yellow-500/30 rounded-t" style={{ height: '0px' }}></div>
                      <span className="text-xs mt-1 font-medium text-muted-foreground">C</span>
                      <span className="text-[10px] text-muted-foreground">0%</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-10 bg-red-500/30 rounded-t" style={{ height: '0px' }}></div>
                      <span className="text-xs mt-1 font-medium text-muted-foreground">D</span>
                      <span className="text-[10px] text-muted-foreground">0%</span>
                    </div>
                  </div>
                </div>

                {/* Device 2 - Heavy on Class B and C */}
                <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/20">
                  <p className="text-sm font-medium mb-3">Device 2</p>
                  <div className="flex items-end justify-around gap-2 h-32">
                    <div className="flex flex-col items-center">
                      <div className="w-10 bg-blue-500 rounded-t" style={{ height: '8px' }}></div>
                      <span className="text-xs mt-1 font-medium">A</span>
                      <span className="text-[10px] text-muted-foreground">5%</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-10 bg-green-500 rounded-t" style={{ height: '64px' }}></div>
                      <span className="text-xs mt-1 font-medium">B</span>
                      <span className="text-[10px] text-muted-foreground">40%</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-10 bg-yellow-500 rounded-t" style={{ height: '72px' }}></div>
                      <span className="text-xs mt-1 font-medium">C</span>
                      <span className="text-[10px] text-muted-foreground">45%</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-10 bg-red-500 rounded-t" style={{ height: '16px' }}></div>
                      <span className="text-xs mt-1 font-medium">D</span>
                      <span className="text-[10px] text-muted-foreground">10%</span>
                    </div>
                  </div>
                </div>

                {/* Device 3 - Heavy on Class D */}
                <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/20">
                  <p className="text-sm font-medium mb-3">Device 3</p>
                  <div className="flex items-end justify-around gap-2 h-32">
                    <div className="flex flex-col items-center">
                      <div className="w-10 bg-blue-500 rounded-t" style={{ height: '16px' }}></div>
                      <span className="text-xs mt-1 font-medium">A</span>
                      <span className="text-[10px] text-muted-foreground">10%</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-10 bg-green-500 rounded-t" style={{ height: '8px' }}></div>
                      <span className="text-xs mt-1 font-medium">B</span>
                      <span className="text-[10px] text-muted-foreground">5%</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-10 bg-yellow-500 rounded-t" style={{ height: '24px' }}></div>
                      <span className="text-xs mt-1 font-medium">C</span>
                      <span className="text-[10px] text-muted-foreground">15%</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-10 bg-red-500 rounded-t" style={{ height: '100px' }}></div>
                      <span className="text-xs mt-1 font-medium">D</span>
                      <span className="text-[10px] text-muted-foreground">70%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 rounded-lg bg-destructive/10 border border-destructive/30">
                <p className="text-xs text-destructive font-medium">✗ Skewed distribution causes bias</p>
                <p className="text-xs text-muted-foreground mt-1">Model struggles with underrepresented classes</p>
              </div>
            </Card>
          </div>

          {/* Class Legend */}
          <Card className="p-4 bg-card/50 backdrop-blur">
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-500 rounded"></div>
                <span className="text-sm">Class A</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded"></div>
                <span className="text-sm">Class B</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                <span className="text-sm">Class C</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-500 rounded"></div>
                <span className="text-sm">Class D</span>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Security Issues - Now with Animation */}
        <TabsContent value="security" className="mt-8 space-y-8">
          <Card className="p-8 bg-card/50 backdrop-blur border-primary/20">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Shield className="w-7 h-7 text-primary" />
              Security Vulnerabilities - Interactive Story
            </h3>
            <p className="text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
              Watch this animated story to understand common attacks in Federated Learning and how to protect against them!
            </p>
            
            {/* Animated Security Visualization */}
            <SecurityAnimation />

            {/* Attack Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/30 hover:scale-105 transition-transform cursor-pointer">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🥷</span>
                  <h4 className="font-semibold">Eavesdropping</h4>
                </div>
                <p className="text-sm text-muted-foreground">Attackers intercept and read unprotected model updates</p>
                <div className="mt-2 text-xs text-success font-medium">✅ Solution: Encryption</div>
              </div>
              
              <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/30 hover:scale-105 transition-transform cursor-pointer">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🦹</span>
                  <h4 className="font-semibold">Tampering</h4>
                </div>
                <p className="text-sm text-muted-foreground">Man-in-the-middle swaps legitimate updates with malicious ones</p>
                <div className="mt-2 text-xs text-success font-medium">✅ Solution: Digital Signatures</div>
              </div>
              
              <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/30 hover:scale-105 transition-transform cursor-pointer">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🎭</span>
                  <h4 className="font-semibold">Impersonation</h4>
                </div>
                <p className="text-sm text-muted-foreground">Fake clients pretend to be legitimate participants</p>
                <div className="mt-2 text-xs text-success font-medium">✅ Solution: Identity Verification</div>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Performance Issues */}
        <TabsContent value="performance" className="mt-8 space-y-8">
          <Card className="p-8 bg-card/50 backdrop-blur border-destructive/20">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Gauge className="w-7 h-7 text-destructive" />
              Performance Challenges
            </h3>

            <div className="space-y-6">
              {/* Slow Convergence */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-destructive/10 to-transparent border border-destructive/20">
                <h4 className="font-semibold mb-4">High computational cost for encryption</h4>
                <div className="space-y-4">
                  <div className="relative h-32 bg-card/50 rounded-lg p-4 flex items-center justify-center">
                    <div className="w-full max-w-md">
                      <div className="flex items-center justify-center gap-3 mb-3">
                        <Lock className="w-6 h-6 text-destructive" />
                        <p className="font-semibold">Encrypting...</p>
                      </div>

                      <div className="text-xs text-muted-foreground mb-2">Encryption Progress</div>
                      <div className="h-3 bg-destructive/20 rounded relative overflow-visible">
                        <div
                          className="h-full bg-destructive transition-all duration-200"
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                      {percent >= 70 && (
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
                          <HelpCircle className="w-5 h-5 text-destructive animate-pulse" aria-hidden />
                          <div className="text-xs text-destructive mt-1">High</div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Communication Cost */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-destructive/10 to-transparent border border-destructive/20">
                <h4 className="font-semibold mb-4">High Communicational Overhead</h4>
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((round) => (
                    <div key={round} className="text-center">
                      <div className="relative mb-2">
                        <div className="w-full h-20 bg-destructive/20 rounded-lg flex items-end justify-center p-2">
                          <div 
                            className="w-full bg-destructive/60 rounded transition-all duration-1000"
                            style={{ height: `${round * 30}px` }}
                          />
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">Round {round}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  Network bandwidth consumed increases with each round
                </p>
              </div>

             {/* Accuracy Drop */}
              {/*
              <div className="p-6 rounded-xl bg-gradient-to-br from-destructive/10 to-transparent border border-destructive/20">
                <h4 className="font-semibold mb-4">Accuracy Degradation</h4>
                <div className="flex items-center justify-between gap-8">
                  <div className="flex-1 text-center">
                    <div className="text-4xl font-bold text-success mb-2">95%</div>
                    <p className="text-sm text-muted-foreground">Centralized</p>
                  </div>
                  <div className="text-2xl text-muted-foreground">→</div>
                  <div className="flex-1 text-center">
                    <div className="text-4xl font-bold text-destructive mb-2">73%</div>
                    <p className="text-sm text-muted-foreground">Traditional FL</p>
                  </div>
                </div>
                <p className="text-xs text-center text-muted-foreground mt-4">
                  Significant accuracy loss due to non-IID data and attacks
                </p>
              </div>
              */}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TraditionalIssues;
