import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, Minus, TrendingDown, TrendingUp, XCircle } from "lucide-react";

const ExperimentalResults = () => {
  // CIFAR-10 accuracy data across training rounds
  const cifar10Accuracy = [
    { method: "FedAvg", r0_29: "66.06%", r30_59: "81.00%", r60_99: "82.49%", r100_199: "83.11%", r200_299: "84.11%", highlight: false },
    { method: "CAFA", r0_29: "70.22%", r30_59: "82.81%", r60_99: "83.74%", r100_199: "84.39%", r200_299: "84.85%", highlight: false, best299: true },
    { method: "1-JSD", r0_29: "70.24%", r30_59: "82.30%", r60_99: "83.65%", r100_199: "84.14%", r200_299: "84.35%", highlight: false },
    { method: "SEBW", r0_29: "71.71%", r30_59: "83.00%", r60_99: "83.98%", r100_199: "84.30%", r200_299: "84.40%", highlight: false },
    { method: "AB_SEBW", r0_29: "72.07%", r30_59: "83.36%", r60_99: "84.05%", r100_199: "84.41%", r200_299: "84.62%", highlight: false, best0_29: true },
    { method: "SHEAF", r0_29: "72.01%", r30_59: "83.59%", r60_99: "84.23%", r100_199: "84.50%", r200_299: "84.71%", highlight: true, best30_59: true, best60_99: true, best100_199: true },
  ];

  // 5G-NIDD accuracy data across training rounds
  const fiveGNiddAccuracy = [
    { method: "FedAvg", r0_29: "88.25%", r30_59: "97.29%", highlight: false },
    { method: "CAFA", r0_29: "86.65%", r30_59: "97.28%", highlight: false },
    { method: "1-JSD", r0_29: "90.09%", r30_59: "98.36%", highlight: false },
    { method: "SEBW", r0_29: "92.43%", r30_59: "98.41%", highlight: true, best0_29: true, best30_59: true },
    { method: "AB_SEBW", r0_29: "90.58%", r30_59: "97.93%", highlight: false },
    { method: "SHEAF", r0_29: "88.36%", r30_59: "97.54%", highlight: false },
  ];

  const convergenceData = [
    { method: "FedAvg", rounds: "250", time: "~45 min", trend: "baseline" },
    { method: "FedProx", rounds: "220", time: "~42 min", trend: "up" },
    { method: "FedNova", rounds: "200", time: "~38 min", trend: "up" },
    { method: "Our Solution", rounds: "120", time: "~22 min", trend: "up-high" },
  ];

  const securityComparison = [
    { attack: "Replay Attack", fedavg: false, fedprox: false, cafa: false, ours: true, scytherClaim: "Alive" },
    { attack: "Man-in-the-Middle (MITM)", fedavg: false, fedprox: false, cafa: false, ours: true, scytherClaim: "Nisynch" },
    { attack: "Model Inference Attack", fedavg: false, fedprox: false, cafa: false, ours: true, scytherClaim: "Secret model" },
    { attack: "Key Compromise", fedavg: false, fedprox: false, cafa: false, ours: true, scytherClaim: "SKR sharedKey/encKey" },
    { attack: "Impersonation Attack", fedavg: false, fedprox: false, cafa: false, ours: true, scytherClaim: "Niagree" },
    { attack: "Data Tampering", fedavg: false, fedprox: false, cafa: false, ours: true, scytherClaim: "Commit" },
  ];

  const performanceMetrics = [
    { metric: "Communication Cost", baseline: "78.53MB", ours: "19.64MB", improvement: "75% " },
   {/* { metric: "Bandwidth Usage", baseline: "1.2 GB/round", ours: "0.34 GB/round", improvement: "72% ↓" },*/},
    { metric: "Encryption Time", baseline: "0.0672 s", ours: "0.0097 s", improvement: "85.56% " },
    {/*{ metric: "Decryption Time", baseline: "920 ms", ours: "268 ms", improvement: "71% ↓" },*/},
    { metric: "Avg FL Round Time", baseline: "61.33 s", ours: "54.58 s", improvement: "11% " },
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
          Average accuracy across training rounds for CIFAR-10 and 5G-NIDD datasets
        </p>

        <Tabs defaultValue="accuracy" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 h-auto gap-2">
            <TabsTrigger value="accuracy">Accuracy</TabsTrigger>
            <TabsTrigger value="convergence">Convergence</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
          </TabsList>

          {/* Accuracy Comparison */}
          <TabsContent value="accuracy" className="space-y-6 animate-fade-in">
            {/* Method Abbreviations Legend */}
            <Card className="p-4 bg-muted/30">
              <h4 className="text-sm font-bold mb-3">Method Abbreviations</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
                <div className="flex items-start gap-2">
                  <Badge variant="outline" className="font-mono">SEBW</Badge>
                  <span className="text-muted-foreground">Shannon Entropy Based Weighting Method</span>
                </div>
                <div className="flex items-start gap-2">
                  <Badge variant="outline" className="font-mono">AB_SEBW</Badge>
                  <span className="text-muted-foreground">Accuracy-Based with Shannon Entropy-Based Weighting</span>
                </div>
                <div className="flex items-start gap-2">
                  <Badge variant="outline" className="font-mono bg-success/10 border-success">SHEAF</Badge>
                  <span className="text-muted-foreground">Secure Heterogeneity-Aware Efficient Aggregation for Federated Learning</span>
                </div>
                <div className="flex items-start gap-2">
                  <Badge variant="outline" className="font-mono">CAFA</Badge>
                  <span className="text-muted-foreground">Class-Aware Federated Averaging</span>
                </div>
                <div className="flex items-start gap-2">
                  <Badge variant="outline" className="font-mono">1-JSD</Badge>
                  <span className="text-muted-foreground">1 minus Jensen-Shannon Divergence</span>
                </div>
                <div className="flex items-start gap-2">
                  <Badge variant="outline" className="font-mono">FedAvg</Badge>
                  <span className="text-muted-foreground">Federated Averaging (Baseline)</span>
                </div>
              </div>
            </Card>

            {/* CIFAR-10 Table */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">CIFAR-10 Dataset - Average Accuracy Across Training Rounds</h3>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-bold">Method</TableHead>
                      <TableHead className="text-center font-bold">0–29</TableHead>
                      <TableHead className="text-center font-bold">30–59</TableHead>
                      <TableHead className="text-center font-bold">60–99</TableHead>
                      <TableHead className="text-center font-bold">100–199</TableHead>
                      <TableHead className="text-center font-bold">200–299</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {cifar10Accuracy.map((row, idx) => (
                      <TableRow key={idx} className={row.highlight ? "bg-success/10" : ""}>
                        <TableCell className="font-medium">
                          {row.method}
                          {row.highlight && (
                            <Badge className="ml-2 bg-success">Our Method</Badge>
                          )}
                        </TableCell>
                        <TableCell className={`text-center font-mono ${row.best0_29 ? "font-bold text-success" : ""}`}>
                          {row.r0_29}
                        </TableCell>
                        <TableCell className={`text-center font-mono ${row.best30_59 ? "font-bold text-success" : ""}`}>
                          {row.r30_59}
                        </TableCell>
                        <TableCell className={`text-center font-mono ${row.best60_99 ? "font-bold text-success" : ""}`}>
                          {row.r60_99}
                        </TableCell>
                        <TableCell className={`text-center font-mono ${row.best100_199 ? "font-bold text-success" : ""}`}>
                          {row.r100_199}
                        </TableCell>
                        <TableCell className={`text-center font-mono ${row.best299 ? "font-bold text-success" : ""}`}>
                          {row.r200_299}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>

            {/* 5G-NIDD Table */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">5G-NIDD Dataset - Average Accuracy Across Training Rounds</h3>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-bold">Method</TableHead>
                      <TableHead className="text-center font-bold">0–29</TableHead>
                      <TableHead className="text-center font-bold">30–59</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {fiveGNiddAccuracy.map((row, idx) => (
                      <TableRow key={idx} className={row.highlight ? "bg-success/10" : ""}>
                        <TableCell className="font-medium">
                          {row.method}
                          {row.highlight && (
                            <Badge className="ml-2 bg-success">Best</Badge>
                          )}
                        </TableCell>
                        <TableCell className={`text-center font-mono ${row.best0_29 ? "font-bold text-success" : ""}`}>
                          {row.r0_29}
                        </TableCell>
                        <TableCell className={`text-center font-mono ${row.best30_59 ? "font-bold text-success" : ""}`}>
                          {row.r30_59}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="p-6 bg-gradient-to-br from-success/10 to-success/5 animate-scale-in">
                <div className="text-4xl font-bold text-success mb-2">84.50%</div>
                <p className="text-sm text-muted-foreground">SHEAF best accuracy at rounds 100-199 on CIFAR-10</p>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 animate-scale-in" style={{ animationDelay: "0.1s" }}>
                <div className="text-4xl font-bold text-primary mb-2">98.41%</div>
                <p className="text-sm text-muted-foreground">SEBW best accuracy at rounds 30-59 on 5G-NIDD</p>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 animate-scale-in" style={{ animationDelay: "0.2s" }}>
                <div className="text-4xl font-bold text-secondary mb-2">+6.01%</div>
                <p className="text-sm text-muted-foreground">AB_SEBW improvement over FedAvg (0-29 rounds) on CIFAR-10</p>
              </Card>
            </div>
          </TabsContent>

          {/* Convergence Speed */}
          <TabsContent value="convergence" className="space-y-6 animate-fade-in">
            <Card className="p-4">
              <h3 className="text-xl font-bold mb-2">Convergence Analysis</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Comparison of model accuracy convergence across training rounds for different aggregation methods
              </p>
              <div className="w-full">
                <img 
                  src="./images/Convergence.png" 
                  alt="Convergence Analysis Chart" 
                  className="w-full h-auto rounded-xl border-2 border-primary/30 shadow-lg"
                />
              </div>
            </Card>
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
                      <TableHead className="text-center font-bold">CAFA</TableHead>
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
                          {row.cafa ? (
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
                <h4 className="text-xl font-bold mb-4">Security Layers (Protocol Design)</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold">1</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold">mTLS Channel</span>
                      <p className="text-muted-foreground text-xs">Mutual TLS authentication between client and server</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold">2</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold">KEM Key Generation</span>
                      <p className="text-muted-foreground text-xs">Server generates kem_server_pk and kem_server_sk</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold">3</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold">KEM Encapsulation/Decapsulation</span>
                      <p className="text-muted-foreground text-xs">Client encapsulates with server_pk, server decapsulates to derive shared_key</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold">4</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold">Model Encryption with shared_key</span>
                      <p className="text-muted-foreground text-xs">Model params encrypted: &#123;model_parms, Ns, Nc, ad, T&#125;<sub>shared_key</sub></p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold">5</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold">Nonce & Timestamp Verification</span>
                      <p className="text-muted-foreground text-xs">Ns (server nonce), Nc (client nonce), T (timestamp) prevent replay</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold">6</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold">Associated Data (AD) Tags</span>
                      <p className="text-muted-foreground text-xs">Message tags: key encap, key decap, global model, client update, accuracy test</p>
                    </div>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5">
                <h4 className="text-xl font-bold mb-4">Scyther Verification Results</h4>
                <p className="text-xs text-muted-foreground mb-4">Formal verification using Scyther tool - All claims verified with no attacks found</p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-2 bg-success/10 rounded-lg">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-success" />
                      <span className="text-sm font-medium">Secret sharedKey</span>
                    </div>
                    <Badge className="bg-success text-xs">Verified</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-success/10 rounded-lg">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-success" />
                      <span className="text-sm font-medium">Secret encKey</span>
                    </div>
                    <Badge className="bg-success text-xs">Verified</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-success/10 rounded-lg">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-success" />
                      <span className="text-sm font-medium">Secret model</span>
                    </div>
                    <Badge className="bg-success text-xs">Verified</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-success/10 rounded-lg">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-success" />
                      <span className="text-sm font-medium">Alive (Anti-Replay)</span>
                    </div>
                    <Badge className="bg-success text-xs">Verified</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-success/10 rounded-lg">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-success" />
                      <span className="text-sm font-medium">Nisynch (Anti-MITM)</span>
                    </div>
                    <Badge className="bg-success text-xs">Verified</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-success/10 rounded-lg">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-success" />
                      <span className="text-sm font-medium">Niagree (Authentication)</span>
                    </div>
                    <Badge className="bg-success text-xs">Verified</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-success/10 rounded-lg">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-success" />
                      <span className="text-sm font-medium">Commit (Integrity)</span>
                    </div>
                    <Badge className="bg-success text-xs">Verified</Badge>
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
                <div className="text-4xl font-bold text-primary mb-2">75%</div>
                <p className="text-sm text-muted-foreground">Reduction in communication cost through quantization</p>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-success/10 to-success/5 animate-scale-in" style={{ animationDelay: "0.1s" }}>
                <div className="text-4xl font-bold text-success mb-2">85.56%</div>
                <p className="text-sm text-muted-foreground">Faster encryption/decryption with quantized models</p>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 animate-scale-in" style={{ animationDelay: "0.2s" }}>
                <div className="text-4xl font-bold text-secondary mb-2">11%</div>
                <p className="text-sm text-muted-foreground">Reduction in training time per round</p>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </Card>

      {/* Overall Summary */}
    {/*  <Card className="p-8 bg-gradient-to-br from-success/5 via-primary/5 to-secondary/5">
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
      */}
    </div>
  );
};

export default ExperimentalResults;