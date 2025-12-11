import { useState } from "react";
import { Card } from "@/components/ui/card";
import { AlertTriangle, TrendingDown, Shield, Gauge } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SecurityAnimation from "./SecurityAnimation";

const TraditionalIssues = () => {
  const [hoveredIssue, setHoveredIssue] = useState<string | null>(null);

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
          <Card className="p-8 bg-card/50 backdrop-blur border-destructive/20">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <TrendingDown className="w-7 h-7 text-destructive" />
              Non-IID Data Distribution
            </h3>
            
            {/* Visual Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* IID Data */}
              <div className="space-y-4">
                <div className="text-center mb-4">
                  <span className="px-4 py-2 bg-success/20 text-success rounded-full text-sm font-medium">
                    IID (Ideal)
                  </span>
                </div>
                <div className="space-y-2">
                  {[1, 2, 3].map((device) => (
                    <div key={device} className="p-4 rounded-xl bg-success/10 border border-success/30">
                      <p className="text-xs font-medium mb-2">Device {device}</p>
                      <div className="flex gap-1">
                        {['bg-destructive', 'bg-primary', 'bg-success', 'bg-warning'].map((color) => (
                          <div
                            key={color}
                            className={`h-8 flex-1 rounded ${color}`}
                          />
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground mt-2 text-center">Balanced Data</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Non-IID Data */}
              <div className="space-y-4">
                <div className="text-center mb-4">
                  <span className="px-4 py-2 bg-destructive/20 text-destructive rounded-full text-sm font-medium">
                    Non-IID (Problem)
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/30">
                    <p className="text-xs font-medium mb-2">Device 1</p>
                    <div className="flex gap-1">
                      <div className="h-8 flex-[3] bg-destructive rounded" />
                      <div className="h-8 flex-[1] bg-primary rounded" />
                    </div>
                    <p className="text-xs text-muted-foreground mt-2 text-center">Skewed Distribution</p>
                  </div>
                  <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/30">
                    <p className="text-xs font-medium mb-2">Device 2</p>
                    <div className="flex gap-1">
                      <div className="h-8 flex-[1] bg-success rounded" />
                      <div className="h-8 flex-[3] bg-warning rounded" />
                    </div>
                    <p className="text-xs text-muted-foreground mt-2 text-center">Unbalanced Classes</p>
                  </div>
                  <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/30">
                    <p className="text-xs font-medium mb-2">Device 3</p>
                    <div className="flex gap-1">
                      <div className="h-8 flex-[2] bg-primary rounded" />
                      <div className="h-8 flex-[2] bg-success rounded" />
                    </div>
                    <p className="text-xs text-muted-foreground mt-2 text-center">Different Patterns</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact */}
            <div className="p-6 rounded-xl bg-destructive/5 border border-destructive/20">
              <h4 className="font-semibold mb-3 text-destructive">Impact on Model:</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>Model bias towards data-rich devices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>Poor performance on underrepresented classes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>Slow convergence and unstable training</span>
                </li>
              </ul>
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
                <h4 className="font-semibold mb-4">Slow Convergence Rate</h4>
                <div className="space-y-4">
                  <div className="relative h-32 bg-card/50 rounded-lg p-4">
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-border" />
                    {/* Traditional FL - slow convergence */}
                    <svg className="w-full h-full" viewBox="0 0 400 100">
                      <path
                        d="M 10 90 Q 50 80, 100 70 T 200 60 T 300 55 T 390 52"
                        fill="none"
                        stroke="hsl(var(--destructive))"
                        strokeWidth="3"
                        className="animate-pulse"
                      />
                    </svg>
                    <p className="text-xs text-destructive font-medium mt-2">Traditional FL: Many rounds needed</p>
                  </div>
                </div>
              </div>

              {/* Communication Cost */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-destructive/10 to-transparent border border-destructive/20">
                <h4 className="font-semibold mb-4">High Communication Overhead</h4>
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
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TraditionalIssues;
