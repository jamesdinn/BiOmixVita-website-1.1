import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-[#4169E1] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Flexible Pricing for Your Research Needs
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Transparent, customized pricing based on your project requirements and data complexity
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Customized Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every research project is unique. We provide tailored quotes based on your specific 
              data types, analysis requirements, and project timeline.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Project-Based</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Fixed-price quotes for defined projects with clear deliverables and timelines.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#4169E1] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Clear scope and deliverables</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#4169E1] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Fixed timeline</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#4169E1] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Comprehensive reporting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#4169E1]">
              <CardHeader>
                <div className="inline-block bg-[#4169E1] text-white px-3 py-1 rounded-full text-sm font-semibold mb-2">
                  Most Popular
                </div>
                <CardTitle className="text-2xl">Retainer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Ongoing support with dedicated bioinformatics expertise for your team.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#4169E1] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Priority support</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#4169E1] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Flexible monthly hours</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#4169E1] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Reduced hourly rates</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Consulting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Expert guidance and strategic advice for your bioinformatics initiatives.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#4169E1] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Strategic planning</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#4169E1] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Technology assessment</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#4169E1] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Workflow optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-12 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Contact us to discuss your project requirements and receive a customized quote 
              tailored to your specific needs.
            </p>
            <Link href="/contact">
              <a>
                <Button size="lg">
                  Request a Quote
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
