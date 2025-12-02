import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dna, Microscope, Brain, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 text-center" style={{display: 'inline'}}>
                OMICS & AI Solutions for Healthier & More Sustainable Futures
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                BiOmixVita combines cutting-edge OMICS data analysis with artificial intelligence 
                to deliver actionable biological insights for research, biotech, and pharmaceutical organizations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services">
                  <a>
                    <Button size="lg" className="w-full sm:w-auto" style={{backgroundColor: '#2a5fa0'}}>
                      Explore Our Services
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </Link>
                <Link href="/contact">
                  <a>
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Get in Touch
                    </Button>
                  </a>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="/biomixvitalogov3.png" 
                alt="BiOmixVita - OMICS & AI Solutions" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive bioinformatics solutions spanning genomics, proteomics, 
              and AI-driven multi-omics integration
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Dna className="h-10 w-10 text-[#4169E1]" />
                </div>
                <CardTitle className="text-2xl">Core OMICS Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Comprehensive genomic, transcriptomic, epigenomic, proteomic, and metabolomic analysis 
                  with state-of-the-art bioinformatics pipelines.
                </p>
                <Link href="/services">
                  <a className="text-[#4169E1] font-semibold hover:underline inline-flex items-center">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Microscope className="h-10 w-10 text-[#4169E1]" />
                </div>
                <CardTitle className="text-2xl">Protein & Structure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  3D molecular modeling, molecular docking, and molecular dynamics simulations 
                  for biotechnological innovation.
                </p>
                <Link href="/services">
                  <a className="text-[#4169E1] font-semibold hover:underline inline-flex items-center">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="h-10 w-10 text-[#4169E1]" />
                </div>
                <CardTitle className="text-2xl">OMICS & AI</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  AI-driven multi-omics integration, network analysis, and machine learning 
                  for biomarker discovery and target identification.
                </p>
                <Link href="/services">
                  <a className="text-[#4169E1] font-semibold hover:underline inline-flex items-center">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose BiOmixVita */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose BiOmixVita?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-[#4169E1] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Hybrid Intelligence Approach</h3>
                    <p className="text-gray-600">
                      We combine AI automation with expert biological knowledge for insights 
                      that are both computationally robust and biologically meaningful.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-[#4169E1] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">End-to-End Solutions</h3>
                    <p className="text-gray-600">
                      From raw data processing to final interpretation, we provide comprehensive 
                      analytical workflows tailored to your research needs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-[#4169E1] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Multidisciplinary Expertise</h3>
                    <p className="text-gray-600">
                      Our team brings together experts in bioinformatics, computational biology, 
                      AI, and biological sciences with diverse academic and industry backgrounds.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-[#4169E1] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Quality Assurance</h3>
                    <p className="text-gray-600">
                      Every analysis undergoes rigorous quality control and validation to ensure 
                      the highest standards of accuracy and reliability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Official Language is "Biology"</h3>
              <p className="text-gray-700 mb-6">
                At BiOmixVita, we speak the language of life sciences and translate complex 
                biological questions into computational solutions that drive scientific discovery.
              </p>
              <p className="text-gray-700 mb-6">
                Whether you already have OMICS data, plan to generate raw data, or are simply 
                curious to learn more about our solutions, there is one answer:
              </p>
              <Link href="/contact">
                <a>
                  <Button size="lg" className="w-full" style={{backgroundColor: '#2a5fa0'}}>
                    Let's Connect!
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Insights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Insights
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our latest thoughts on bioinformatics, AI, and the future of biological data analysis
            </p>
          </div>

          <div className="rounded-lg shadow-lg relative overflow-hidden" style={{backgroundImage: 'url(/ai-dna-background.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 p-8 flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">
                  Bioinformatics Careers at a Crossroads: Automation vs. Human Insight
                </h3>
                <p className="text-gray-100 mb-4 drop-shadow-md">
                  Explore how BiOmixVita's hybrid approach combines AI-driven automation with 
                  expert scientific insight to deliver superior bioinformatics solutions.
                </p>
                <Link href="/insights">
                  <a>
                    <Button variant="default" style={{backgroundColor: '#2a5fa0'}}>
                      Read Article <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </Link>
              </div>
              <div className="w-full md:w-64 flex-shrink-0">
                <img 
                  src="/radarchart.png" 
                  alt="AI vs Hybrid Approach" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Connect Section */}
      <section className="py-20 bg-[#7FA8B8] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Connect
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Ready to Transform Your Research?
            </h3>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Get in touch for a free initial consultation and discover how our OMICS & AI solutions can revolutionize your projects and accelerate your research outcomes.
            </p>
          </div>
          
          {/* Quick Contact Form */}
          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <h4 className="text-xl font-semibold mb-6 text-white">Quick Contact</h4>
            <form className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <textarea 
                  rows={4} 
                  placeholder="Tell us about your project..." 
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-3 px-6 bg-[#367cc1] hover:bg-[#2a5fa0] text-white font-semibold rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
