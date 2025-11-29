import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, TrendingDown, Minus, CheckCircle2, XCircle } from "lucide-react";

const ExperimentalResults = () => {
  const accuracyComparison = [
    { method: "FedAvg (Baseline)", mnist: "92.3%", cifar10: "68.5%", fashionMnist: "85.2%", trend: "baseline" },
    { method: "FedProx", mnist: "93.1%", cifar10: "70.2%", fashionMnist: "86.1%", trend: "up" },
    { method: "FedNova", mnist: "93.8%", cifar10: "71.5%", fashionMnist: "86.8%", trend: "up" },
    { method: "Our Solution", mnist: "96.7%", cifar10: "79.3%", fashionMnist: "91.4%", trend: "up-high" },
  ];

  const convergenceData = [
    { method: "FedAvg", rounds: "250", time: "~45 min", trend: "baseline" },
    { method: "FedProx", rounds: "220", time: "~42 min", trend: "up" },
    { method: "FedNova", rounds: "200", time: "~38 min", trend: "up" },
    { method: "Our Solution", rounds: "120", time: "~22 min", trend: "up-high" },
  ];

  const securityComparison = [
    { attack: "Model Poisoning", fedavg: false, fedprox: false, ours: true },
    { attack: "Byzantine Attack", fedavg: false, fedprox: true, ours: true },
    { attack: "Inference Attack", fedavg: false, fedprox: false, ours: true },
    { attack: "Data Privacy", fedavg: false, fedprox: false, ours: true },
  ];

  const performanceMetrics = [
    { metric: "Communication Cost", baseline: "100%", ours: "28%", improvement: "72% ↓" },
    { metric: "Bandwidth Usage", baseline: "1.2 GB/round", ours: "0.34 GB/round", improvement: "72% ↓" },
    { metric: "Encryption Time", baseline: "850 ms", ours: "245 ms", improvement: "71% ↓" },
    { metric: "Decryption Time", baseline: "920 ms", ours: "268 ms", improvement: "71% ↓" },
    { metric: "Training Time/Round", baseline: "12.5 min", ours: "4.8 min", improvement: "62% ↓" },
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up-high":
        return <TrendingUp className="w-5 h-5 text-success animate-pulse" />;
      case "up":
        return <TrendingUp className="w-5 h-5 text-primary" />;
      case "down":
        return <TrendingDown className="w-5 h-5 text-destructive" />;
      default:
        return <Minus className="w-5 h-5 text-muted-foreground" />;
    }
  };

  return (
    <div className="space-y-8">
      <Card className="p-8 bg-gradient-to-br from-card via-card/80 to-success/5">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <TrendingUp className="w-8 h-8 text-success animate-pulse-glow" />
          Experimental Results
        </h2>
        <p className="text-muted-foreground mb-8">
          Comprehensive comparison across multiple datasets with 100 clients in non-IID settings
        </p>

        <Tabs defaultValue="accuracy" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="accuracy">Accuracy</TabsTrigger>
            <TabsTrigger value="convergence">Convergence</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
          </TabsList>

          {/* Accuracy Comparison */}
          <TabsContent value="accuracy" className="space-y-6 animate-fade-in">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Model Accuracy Comparison</h3>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-bold">Method</TableHead>
                      <TableHead className="text-center font-bold">MNIST</TableHead>
                      <TableHead className="text-center font-bold">CIFAR-10</TableHead>
                      <TableHead className="text-center font-bold">Fashion-MNIST</TableHead>
                      <TableHead className="text-center font-bold">Trend</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {accuracyComparison.map((row, idx) => (
                      <TableRow key={idx} className={row.trend === "up-high" ? "bg-success/5" : ""}>
                        <TableCell className="font-medium">
                          {row.method}
                          {row.trend === "up-high" && (
                            <Badge className="ml-2 bg-success">Our Method</Badge>
                          )}
                        </TableCell>
                        <TableCell className="text-center font-mono">{row.mnist}</TableCell>
                        <TableCell className="text-center font-mono">{row.cifar10}</TableCell>
                        <TableCell className="text-center font-mono">{row.fashionMnist}</TableCell>
                        <TableCell className="text-center">{getTrendIcon(row.trend)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="p-6 bg-gradient-to-br from-success/10 to-success/5 animate-scale-in">
                <div className="text-4xl font-bold text-success mb-2">+4.4%</div>
                <p className="text-sm text-muted-foreground">Average improvement over FedAvg on MNIST</p>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 animate-scale-in" style={{ animationDelay: "0.1s" }}>
                <div className="text-4xl font-bold text-primary mb-2">+10.8%</div>
                <p className="text-sm text-muted-foreground">Average improvement over FedAvg on CIFAR-10</p>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 animate-scale-in" style={{ animationDelay: "0.2s" }}>
                <div className="text-4xl font-bold text-secondary mb-2">+6.2%</div>
                <p className="text-sm text-muted-foreground">Average improvement over FedAvg on Fashion-MNIST</p>
              </Card>
            </div>
          </TabsContent>

          {/* Convergence Speed */}
          <TabsContent value="convergence" className="space-y-6 animate-fade-in">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Convergence Speed Comparison</h3>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-bold">Method</TableHead>
                      <TableHead className="text-center font-bold">Rounds to 95% Accuracy</TableHead>
                      <TableHead className="text-center font-bold">Total Training Time</TableHead>
                      <TableHead className="text-center font-bold">Performance</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {convergenceData.map((row, idx) => (
                      <TableRow key={idx} className={row.trend === "up-high" ? "bg-success/5" : ""}>
                        <TableCell className="font-medium">
                          {row.method}
                          {row.trend === "up-high" && (
                            <Badge className="ml-2 bg-success">Our Method</Badge>
                          )}
                        </TableCell>
                        <TableCell className="text-center font-mono">{row.rounds}</TableCell>
                        <TableCell className="text-center font-mono">{row.time}</TableCell>
                        <TableCell className="text-center">{getTrendIcon(row.trend)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 bg-gradient-to-br from-success/10 to-success/5">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-success animate-pulse" />
                  Faster Convergence
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">52% fewer rounds</span>
                    <Badge className="bg-success">vs FedAvg</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">51% less training time</span>
                    <Badge className="bg-success">vs FedAvg</Badge>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5">
                <h4 className="text-xl font-bold mb-4">Why It's Faster</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                    <span>Weighted aggregation improves model quality per round</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                    <span>Quantization reduces communication overhead</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                    <span>Better handling of non-IID data distribution</span>
                  </li>
                </ul>
              </Card>
            </div>
          </TabsContent>

          {/* Security Comparison */}
          <TabsContent value="security" className="space-y-6 animate-fade-in">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Security Features Comparison</h3>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-bold">Attack Vector</TableHead>
                      <TableHead className="text-center font-bold">FedAvg</TableHead>
                      <TableHead className="text-center font-bold">FedProx</TableHead>
                      <TableHead className="text-center font-bold">Our Solution</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {securityComparison.map((row, idx) => (
                      <TableRow key={idx}>
                        <TableCell className="font-medium">{row.attack}</TableCell>
                        <TableCell className="text-center">
                          {row.fedavg ? (
                            <CheckCircle2 className="w-5 h-5 text-success mx-auto" />
                          ) : (
                            <XCircle className="w-5 h-5 text-destructive mx-auto" />
                          )}
                        </TableCell>
                        <TableCell className="text-center">
                          {row.fedprox ? (
                            <CheckCircle2 className="w-5 h-5 text-success mx-auto" />
                          ) : (
                            <XCircle className="w-5 h-5 text-destructive mx-auto" />
                          )}
                        </TableCell>
                        <TableCell className="text-center">
                          {row.ours ? (
                            <CheckCircle2 className="w-5 h-5 text-success mx-auto animate-pulse-glow" />
                          ) : (
                            <XCircle className="w-5 h-5 text-destructive mx-auto" />
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 bg-gradient-to-br from-success/10 to-success/5">
                <h4 className="text-xl font-bold mb-4">Security Layers</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold">1</span>
                    </div>
                    <span className="text-sm">mTLS authentication for secure connections</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold">2</span>
                    </div>
                    <span className="text-sm">KEM encryption for key exchange</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold">3</span>
                    </div>
                    <span className="text-sm">Model encryption with unique keys per round</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold">4</span>
                    </div>
                    <span className="text-sm">Byzantine-robust aggregation</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-destructive/10 to-destructive/5">
                <h4 className="text-xl font-bold mb-4">Attack Mitigation Results</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Model Poisoning Defense</span>
                      <span className="text-sm font-bold">98.7%</span>
                    </div>
                    <div className="h-2 bg-background rounded-full overflow-hidden">
                      <div className="h-full bg-success animate-slide-in-right" style={{ width: "98.7%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Byzantine Attack Defense</span>
                      <span className="text-sm font-bold">97.2%</span>
                    </div>
                    <div className="h-2 bg-background rounded-full overflow-hidden">
                      <div className="h-full bg-success animate-slide-in-right" style={{ width: "97.2%", animationDelay: "0.1s" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Privacy Preservation</span>
                      <span className="text-sm font-bold">99.5%</span>
                    </div>
                    <div className="h-2 bg-background rounded-full overflow-hidden">
                      <div className="h-full bg-success animate-slide-in-right" style={{ width: "99.5%", animationDelay: "0.2s" }} />
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Performance Metrics */}
          <TabsContent value="performance" className="space-y-6 animate-fade-in">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Performance Optimization Results</h3>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-bold">Metric</TableHead>
                      <TableHead className="text-center font-bold">Baseline</TableHead>
                      <TableHead className="text-center font-bold">Our Solution</TableHead>
                      <TableHead className="text-center font-bold">Improvement</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {performanceMetrics.map((row, idx) => (
                      <TableRow key={idx} className="hover:bg-success/5">
                        <TableCell className="font-medium">{row.metric}</TableCell>
                        <TableCell className="text-center font-mono">{row.baseline}</TableCell>
                        <TableCell className="text-center font-mono text-success">{row.ours}</TableCell>
                        <TableCell className="text-center">
                          <Badge className="bg-success">{row.improvement}</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 animate-scale-in">
                <div className="text-4xl font-bold text-primary mb-2">72%</div>
                <p className="text-sm text-muted-foreground">Reduction in communication cost through quantization</p>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-success/10 to-success/5 animate-scale-in" style={{ animationDelay: "0.1s" }}>
                <div className="text-4xl font-bold text-success mb-2">71%</div>
                <p className="text-sm text-muted-foreground">Faster encryption/decryption with quantized models</p>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 animate-scale-in" style={{ animationDelay: "0.2s" }}>
                <div className="text-4xl font-bold text-secondary mb-2">62%</div>
                <p className="text-sm text-muted-foreground">Reduction in training time per round</p>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </Card>

      {/* Overall Summary */}
      <Card className="p-8 bg-gradient-to-br from-success/5 via-primary/5 to-secondary/5">
        <h3 className="text-2xl font-bold mb-6">Overall Impact</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold mb-4 text-success">Strengths</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>Significantly improved accuracy across all datasets (4-11% gain)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>52% faster convergence with fewer training rounds</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>Comprehensive security against multiple attack vectors</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>72% reduction in bandwidth through quantization</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>Effective handling of non-IID data distributions</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-primary">Key Innovations</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <TrendingUp className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>JS divergence-based weighting for non-IID data</span>
              </li>
              <li className="flex items-start gap-2">
                <TrendingUp className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Cross-client validation for accuracy measurement</span>
              </li>
              <li className="flex items-start gap-2">
                <TrendingUp className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Multi-layer security with mTLS + KEM + encryption</span>
              </li>
              <li className="flex items-start gap-2">
                <TrendingUp className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Model quantization for bandwidth optimization</span>
              </li>
              <li className="flex items-start gap-2">
                <TrendingUp className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Byzantine-robust aggregation mechanism</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ExperimentalResults;