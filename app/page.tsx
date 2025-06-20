"use client"

import { useState } from "react"
import { Shield, CheckCircle, AlertTriangle, Zap, Globe, Lock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PhishGuardApp() {
  const [url, setUrl] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [result, setResult] = useState<{
    isPhishing: boolean
    confidence: number
    message: string
  } | null>(null)

  const analyzeUrl = async () => {
    if (!url) return

    setIsAnalyzing(true)
    setResult(null)

    // Simulate ML analysis
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Simple heuristic for demo (in real app, this would call your ML model)
    const suspiciousPatterns = [
      "bit.ly",
      "tinyurl",
      "secure-bank",
      "paypal-verify",
      "amazon-security",
      "microsoft-login",
      "google-verify",
      "apple-id-locked",
    ]

    const isPhishing = suspiciousPatterns.some((pattern) => url.toLowerCase().includes(pattern)) || Math.random() < 0.3 // 30% chance for demo

    const confidence = Math.floor(Math.random() * 15) + 85 // 85-99%

    setResult({
      isPhishing,
      confidence,
      message: isPhishing
        ? "This URL appears to be a phishing attempt. Do not enter personal information."
        : "This URL appears to be legitimate and safe to visit.",
    })

    setIsAnalyzing(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                PhishGuard
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
                How It Works
              </a>
              <a href="#about" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
                About
              </a>
              <Button variant="outline" className="hover:bg-teal-50 border-green-600 text-white bg-emerald-600">
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-4 py-2 text-sm font-medium">
                  <Zap className="h-4 w-4 mr-2" />
                  96.97% Accuracy Rate
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Stop{" "}
                  <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                    Phishing Attacks
                  </span>{" "}
                  Before They Start
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Our AI-powered detection system identifies malicious websites instantly. Protect yourself and others
                  with cutting-edge machine learning technology.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                  onClick={() => document.getElementById("url-scanner")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <Shield className="h-5 w-5 mr-2" />
                  Check URL Now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-teal-500 text-teal-600 hover:bg-teal-50 px-8 py-3 rounded-xl font-semibold"
                  onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* URL Scanner Card */}
            <div id="url-scanner" className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full mb-4">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">URL Security Scanner</h3>
                  <p className="text-gray-600">Enter any URL to check for phishing threats</p>
                </div>

                <div className="space-y-4">
                  <Input
                    type="url"
                    placeholder="Enter URL (e.g., https://example.com)"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="h-12 text-lg border-2 border-gray-200 focus:border-teal-500 rounded-xl"
                  />
                  <Button
                    onClick={analyzeUrl}
                    disabled={!url || isAnalyzing}
                    className="w-full h-12 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-semibold rounded-xl text-lg"
                  >
                    {isAnalyzing ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Shield className="h-5 w-5 mr-2" />
                        Check URL
                      </>
                    )}
                  </Button>
                </div>

                {result && (
                  <div
                    className={`p-6 rounded-xl border-2 ${
                      result.isPhishing ? "bg-red-50 border-red-200" : "bg-green-50 border-green-200"
                    }`}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      {result.isPhishing ? (
                        <AlertTriangle className="h-6 w-6 text-red-500" />
                      ) : (
                        <CheckCircle className="h-6 w-6 text-green-500" />
                      )}
                      <span className={`text-xl font-bold ${result.isPhishing ? "text-red-700" : "text-green-700"}`}>
                        {result.isPhishing ? "FRAUD DETECTED" : "LEGITIMATE"}
                      </span>
                    </div>
                    <p className={`text-sm mb-3 ${result.isPhishing ? "text-red-600" : "text-green-600"}`}>
                      {result.message}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-600">Confidence:</span>
                      <Badge
                        className={`${result.isPhishing ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}
                      >
                        {result.confidence}% Accuracy
                      </Badge>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for{" "}
              <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                Maximum Protection
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced AI technology combined with real-time analysis to keep you safe from phishing attacks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Real-Time Detection",
                description: "Instant analysis of URLs with immediate results and threat assessment.",
              },
              {
                icon: Globe,
                title: "Browser Integration",
                description: "Seamless integration with popular browsers for automatic protection.",
              },
              {
                icon: Lock,
                title: "High Accuracy",
                description: "96.97% accuracy rate powered by advanced machine learning algorithms.",
              },
              {
                icon: Users,
                title: "Easy to Use",
                description: "Simple interface that anyone can use without technical expertise.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="border-2 border-gray-100 hover:border-teal-200 transition-all hover:shadow-lg"
              >
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Our{" "}
              <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                AI Detection
              </span>{" "}
              Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced machine learning algorithms analyze multiple factors to determine if a website is legitimate or
              malicious
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "URL Analysis",
                description: "Our system examines the URL structure, domain reputation, and suspicious patterns.",
              },
              {
                step: "02",
                title: "Content Scanning",
                description: "Advanced algorithms analyze website content, forms, and behavioral indicators.",
              },
              {
                step: "03",
                title: "Risk Assessment",
                description: "Machine learning models provide instant classification with confidence scores.",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full text-white font-bold text-xl mb-6">
                  {step.step}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="p-2 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-lg">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">PhishGuard</span>
              </div>
              <p className="text-gray-400 mb-4">
                Protecting users from phishing attacks with advanced AI-powered detection technology.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="border-gray-600 hover:bg-gray-800 text-white bg-emerald-600">
                  GitHub
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#features" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-white transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>meenuparamesp@gmail.com</li>
                <li>+91-8304050727</li>
                <li>LinkedIn: linkedin.com/in/meenu-parames</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PhishGuard. Built with AI and Machine Learning for cybersecurity.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
