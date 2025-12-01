import React from 'react';
import { Users, Target, Award, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About BiOmixVita
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Pioneering the future of bioinformatics through innovative OMICS data analysis and AI-driven solutions
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* BiOmixVita Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">BiOmixVita Team</h2>
          
          {/* Team Overview */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="prose prose-lg mx-auto max-w-4xl text-gray-700">
              <p className="text-lg leading-relaxed mb-6">
                BiOmixVita brings together experienced consultants specializing in genomics, transcriptomics, 
                epigenomics, proteomics, metabolomics, and AI-driven data analysis. Our multidisciplinary 
                background in biology, bioinformatics, and machine learning allows us to deliver clear, 
                actionable insights from complex OMICS datasets.
              </p>
              <p className="text-lg leading-relaxed">
                Whatever your project needs, from data processing to advanced interpretation, we have the 
                expertise to support you with reliable, high-quality results.
              </p>
            </div>
          </div>

          {/* Team Lead Profile */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">BiOmixVita Lead</h3>
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="w-64 h-64 mx-auto mb-4 overflow-hidden rounded-full">
                  <img 
                    src="/photoprso2.png" 
                    alt="Chamseddine KIFAGI" 
                    className="w-full h-full object-cover object-top scale-110"
                  />
                </div>
                <div className="flex justify-center space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/chamseddine-kifagi-30b20a48/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://orcid.org/my-orcid?orcid=0000-0002-3" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
                    aria-label="ORCID Profile"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947 0 .525-.422.947-.947.947-.525 0-.946-.422-.946-.947 0-.516.421-.947.946-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c2.359 0 3.588-1.444 3.588-3.722 0-2.016-1.247-3.722-3.588-3.722h-2.297z"/>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="md:col-span-2">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Chamseddine KIFAGI</h4>
                <p className="text-gray-700 leading-relaxed">
                  Chamseddine KIFAGI is a scientist and consultant with deep expertise in genomics, epigenomics, 
                  and bioinformatics. He completed his PhD and held postdoctoral positions at the Universities 
                  of Montpellier (France), Lund (Sweden), and DTU Copenhagen (Denmark).
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Before founding BiOmixVita, he worked as a Field Application Scientist at a leading biotech 
                  company, supporting academic and industry partners in bulk and single-cell gene regulation 
                  research.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
          <div className="prose prose-lg mx-auto max-w-4xl text-gray-700">
            <p className="text-lg leading-relaxed mb-6">
              BiOmixVita was founded with a clear vision: to bridge the gap between complex biological data and meaningful scientific insights. 
              In an era where biological research generates unprecedented amounts of data, we recognized the critical need for sophisticated 
              yet accessible analytical solutions.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Our team combines deep expertise in bioinformatics, artificial intelligence, and biological sciences to deliver 
              comprehensive OMICS data analysis services. We believe that the future of biological research lies in the intelligent 
              integration of automated tools with expert human insight.
            </p>
            <p className="text-lg leading-relaxed">
              Today, BiOmixVita serves researchers, biotech companies, pharmaceutical organizations, and academic institutions 
              worldwide, helping them unlock the potential of their biological data to drive innovation and discovery.
            </p>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Precision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We deliver accurate, reliable results through rigorous analytical methods and quality control processes.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We work closely with our clients as partners, understanding their unique needs and research goals.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We strive for the highest standards in everything we do, from data analysis to client service.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We're committed to advancing scientific knowledge for healthier, more sustainable futures.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Our Approach Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Approach</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Hybrid Intelligence</h3>
                <p className="text-gray-700 mb-4">
                  We combine the power of artificial intelligence with expert biological knowledge to deliver 
                  insights that are both computationally robust and biologically meaningful.
                </p>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">End-to-End Solutions</h3>
                <p className="text-gray-700 mb-4">
                  From raw data processing to final interpretation, we provide comprehensive analytical 
                  workflows tailored to your specific research needs.
                </p>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Quality Assurance</h3>
                <p className="text-gray-700">
                  Every analysis undergoes rigorous quality control and validation to ensure the highest 
                  standards of accuracy and reliability.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Our Expertise Covers:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Genomics & Transcriptomics
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Proteomics & Metabolomics
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Multi-omics Integration
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    AI & Machine Learning
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Biomarker Discovery
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Pathway Analysis
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Team</h2>
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <p className="text-lg text-gray-700 mb-6">
              Our multidisciplinary team brings together experts in bioinformatics, computational biology, 
              artificial intelligence, and biological sciences. With diverse backgrounds spanning academia 
              and industry, we combine theoretical knowledge with practical experience to deliver innovative solutions.
            </p>
            <p className="text-lg text-gray-700">
              At BiOmixVita, our official language is <strong>"Biology."</strong> We speak the language of life sciences 
              and translate complex biological questions into computational solutions that drive scientific discovery.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-primary text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Collaborate?</h2>
          <p className="text-xl text-blue-100 mb-6">
            Let's discuss how BiOmixVita can help accelerate your research and unlock new insights from your biological data.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
