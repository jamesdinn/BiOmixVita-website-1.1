import React, { useState } from 'react';
import { Dna, Microscope, Brain, ArrowRight, Server, BarChart3, Workflow, ChevronDown, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Link } from 'wouter';

const Services = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [showOmicsModal, setShowOmicsModal] = useState(false);

  const omicsCategories = {
    genomics: {
      title: "Genomics",
      services: [
        "Whole-Genome Sequencing (WGS)",
        "Whole-Exome Sequencing (WES)",
        "Variant Calling, Annotation & Interpretation (VCF)"
      ]
    },
    metagenomics: {
      title: "Metagenomics",
      services: [
        "Bacterial & Microbial Genome Analysis"
      ]
    },
    transcriptomics: {
      title: "Transcriptomics",
      services: [
        "Bulk RNA-seq",
        "Single-cell RNA-seq (scRNA-seq)"
      ]
    },
    epigenomics: {
      title: "Epigenomics",
      services: [
        "DNA Methylation Profiling (e.g., WGBS, RRBS)",
        "ATAC-seq",
        "Single-cell ATAC-seq (scATAC-seq)",
        "ChIP-seq"
      ]
    },
    proteomics: {
      title: "Proteomics",
      services: [
        "Quantitative Proteomics (LC-MS/MS, label-free or labeled)"
      ]
    },
    metabolomics: {
      title: "Metabolomics",
      services: [
        "Untargeted & Targeted Metabolomics"
      ]
    }
  };

  const serviceCategories = [
    {
      id: "dna-rna",
      icon: <Dna className="h-16 w-16 text-primary" />,
      title: "DNA, RNA & Chromatin",
      subtitle: "Analyse Génomique et Transcriptomique de Pointe",
      description: "Explorez le génome et le transcriptome avec nos technologies de séquençage et d'analyse les plus avancées.",
      services: [
        {
          name: "WGS (Whole Genome Sequencing)",
          description: "Séquençage complet du génome pour identifier les variants génétiques d'intérêt agronomique"
        },
        {
          name: "Exome Sequencing",
          description: "Analyse ciblée des régions codantes pour une approche plus économique"
        },
        {
          name: "Bulk RNA-seq",
          description: "Analyse de l'expression génique globale dans différentes conditions"
        },
        {
          name: "scRNA-seq (Single Cell RNA-seq)",
          description: "Étude de l'expression génique au niveau cellulaire individuel"
        },
        {
          name: "ATAC-seq",
          description: "Cartographie de l'accessibilité chromatinienne"
        },
        {
          name: "ChIP-seq",
          description: "Analyse des interactions protéine-ADN"
        },
        {
          name: "Methylome",
          description: "Étude des modifications épigénétiques"
        },
        {
          name: "Microbiomics",
          description: "Analyse du microbiome associé aux plantes et sols"
        }
      ],
      applications: [
        "Sélection variétale assistée par marqueurs",
        "Identification de gènes de résistance",
        "Optimisation des conditions de culture",
        "Amélioration de la qualité nutritionnelle"
      ]
    },
    {
      id: "protein",
      icon: <Microscope className="h-16 w-16 text-primary" />,
      title: "Protein & Structure",
      subtitle: "Modélisation Moléculaire et Analyse Structurale",
      description: "Comprenez et optimisez les structures protéiques pour développer des solutions biotechnologiques innovantes.",
      services: [
        {
          name: "Modélisation moléculaire 3D",
          description: "Prédiction de la structure tridimensionnelle des protéines d'intérêt"
        },
        {
          name: "Docking moléculaire",
          description: "Étude des interactions entre molécules"
        },
        {
          name: "Dynamique moléculaire",
          description: "Simulation du comportement des systèmes biologiques"
        }
      ],
      applications: [
        "Développement de biopesticides",
        "Optimisation d'enzymes industrielles",
        "Conception de nouvelles molécules bioactives",
        "Amélioration de la stabilité des protéines"
      ]
    },
    {
      id: "omics-ai",
      icon: <Brain className="h-16 w-16 text-primary" />,
      title: "OMICS & AI",
      subtitle: "Intelligence Artificielle et Intégration Multi-OMICS",
      description: "Exploitez la puissance de l'IA pour intégrer et analyser des données biologiques complexes.",
      services: [
        {
          name: "Analyse de données multi-OMICS",
          description: "Intégration et analyse de données génomiques, transcriptomiques, protéomiques et métabolomiques"
        },
        {
          name: "Intégration OMICS basée sur les réseaux",
          description: "Construction de réseaux biologiques complexes"
        },
        {
          name: "Découverte de cibles par ML",
          description: "Identification de nouvelles cibles thérapeutiques ou agronomiques par apprentissage automatique"
        },
        {
          name: "Développement d'algorithmes personnalisés",
          description: "Création d'outils d'analyse sur mesure"
        }
      ],
      applications: [
        "Prédiction de phénotypes complexes",
        "Identification de biomarqueurs",
        "Optimisation des stratégies de sélection",
        "Développement de modèles prédictifs"
      ]
    }
  ];

  // Expertise areas from Home page
  const expertiseAreas = [
    {
      icon: <Dna className="h-12 w-12 text-primary" />,
      title: "DNA, RNA & Chromatin",
      description: "Comprehensive genomic analysis: WGS, Exome, RNA-seq, scRNA-seq, ATAC-seq, ChIP-seq, Methylome, Microbiomics",
      link: "#dna-rna"
    },
    {
      icon: <Microscope className="h-12 w-12 text-primary" />,
      title: "Protein & Structure",
      description: "3D molecular modeling, molecular docking, molecular dynamics for biotechnological innovation",
      link: "#protein"
    },
    {
      icon: <Brain className="h-12 w-12 text-primary" />,
      title: "OMICS & AI",
      description: "Applied artificial intelligence, multi-OMICS integration, target discovery through machine learning",
      link: "#omics-ai"
    }
  ];

  const toggleCategory = (categoryKey: string) => {
    setExpandedCategory(expandedCategory === categoryKey ? null : categoryKey);
  };

  return (
    <div className="min-h-screen">
      {/* Services Header */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              BIOmixVita offers a comprehensive range of scientific and technological services, structured around six complementary areas of expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Service Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Core OMICS Analysis */}
            <div 
              className="group relative h-64 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl"
              onClick={() => setShowOmicsModal(true)}
            >
              <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                <div className="text-center">
                  <Dna className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Core OMICS Analysis</h3>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
                <div className="text-center">
                  <p className="text-gray-700 leading-relaxed text-base font-bold mb-3">Click to view all OMICS categories:</p>
                  <ul className="text-gray-700 leading-relaxed text-sm text-left space-y-1">
                    <li>• Genomics</li>
                    <li>• Metagenomics</li>
                    <li>• Transcriptomics</li>
                    <li>• Epigenomics</li>
                    <li>• Proteomics</li>
                    <li>• Metabolomics</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* OMIC & AI */}
            <div className="group relative h-64 bg-gradient-to-br from-green-50 to-green-100 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                <div className="text-center">
                  <Brain className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900">OMIC & AI</h3>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
                <div className="text-center">
                  <ul className="text-gray-700 leading-relaxed text-base font-bold text-left space-y-1 font-century-gothic">
                    <li>• Data-driven analysis</li>
                    <li>• Network & AI-driven OMICS integration</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Protein & Structure */}
            <div className="group relative h-64 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                <div className="text-center">
                  <Microscope className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Protein & Structure</h3>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
                <div className="text-center">
                  <ul className="text-gray-700 leading-relaxed text-base font-bold text-left space-y-1 font-century-gothic">
                    <li>• Molecular Modelling 3D</li>
                    <li>• Docking</li>
                    <li>• Molecular dynamics</li>
                    </ul>
                </div>
              </div>
            </div>

            {/* DevOps & Deployment Solutions */}
            <div className="group relative h-64 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                <div className="text-center">
                  <Server className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900">DevOps & Deployment Solutions</h3>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
                <div className="text-center">
                  <ul className="text-gray-700 leading-relaxed text-base font-bold text-left space-y-1 font-century-gothic">
                    <li>• DevOps</li>
                    <li>• Package development</li>
                    <li>• Cloud & HPC deployment</li>
                    <li>• R, Python, Conda</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Statistics and Quantitative Modeling */}
            <div className="group relative h-64 bg-gradient-to-br from-red-50 to-red-100 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                <div className="text-center">
                  <BarChart3 className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Statistics & Quantitative Modeling</h3>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
                <div className="text-center">
                  <ul className="text-gray-700 leading-relaxed text-base font-bold text-left space-y-1 font-century-gothic">
                    <li>• Advanced statistical methods</li>
                    <li>• quantitative and mathematical modelling</li>
                    <li>• Experimental design</li>
                    <li>• Predictive analytics</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pipeline / workflow Development */}
            <div className="group relative h-64 bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                <div className="text-center">
                  <Workflow className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Pipeline / workflow Development</h3>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
                <div className="text-center">
                  <ul className="text-gray-700 leading-relaxed text-base font-bold text-left space-y-1 font-century-gothic">
                    <li>• Nextflow</li>
                    <li>• Snakemake</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core OMICS Modal */}
      <Dialog open={showOmicsModal} onOpenChange={setShowOmicsModal}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
              <Dna className="h-10 w-10 text-primary mr-3" />
              Core OMICS Analysis
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            {Object.entries(omicsCategories).map(([key, category]) => (
              <div key={key} className="border border-gray-200 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100">
                <button
                  onClick={() => toggleCategory(key)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-blue-100 transition-colors rounded-lg"
                >
                  <span className="font-bold text-gray-900 text-lg">{category.title}</span>
                  {expandedCategory === key ? (
                    <ChevronDown className="h-5 w-5 text-gray-700" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-gray-700" />
                  )}
                </button>
                
                {expandedCategory === key && (
                  <div className="px-6 pb-4 space-y-2 bg-white rounded-b-lg">
                    {category.services.map((service, index) => (
                      <div key={index} className="text-base text-gray-700 pl-4 py-1">
                        • {service}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

    </div>
  );
};

export default Services;
