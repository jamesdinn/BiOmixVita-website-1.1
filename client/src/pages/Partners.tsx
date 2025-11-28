import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Handshake, Users, Target } from 'lucide-react';

export default function Partners() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-[#4169E1] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Partners
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Collaborating with leading organizations to advance bioinformatics and drive scientific innovation
            </p>
          </div>
        </div>
      </section>

      {/* Partners Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Building Collaborative Relationships
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We work with academic institutions, biotech companies, pharmaceutical organizations, 
              and research centers worldwide to deliver cutting-edge bioinformatics solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-[#4169E1]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Academic Institutions</h3>
              <p className="text-gray-600">
                Supporting universities and research centers with advanced bioinformatics analysis 
                and collaborative research projects.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-[#4169E1]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Biotech Companies</h3>
              <p className="text-gray-600">
                Partnering with biotech firms to accelerate drug discovery, biomarker identification, 
                and product development.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="h-8 w-8 text-[#4169E1]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Industry Partners</h3>
              <p className="text-gray-600">
                Collaborating with pharmaceutical and agricultural companies to translate research 
                into real-world applications.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-12 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Interested in Partnering with Us?
            </h3>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              We're always looking for new collaboration opportunities. Let's discuss how we can 
              work together to advance bioinformatics and drive scientific discovery.
            </p>
            <Link href="/contact">
              <a>
                <Button size="lg">
                  Get in Touch
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
