import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const Insights = () => {
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Bioinformatics Careers at a Crossroads: Automation vs. Human Insight",
      keywords: ["Bioinformatics", "AI", "Automation", "Expert Analysis", "No-Code Platforms"],
      date: "December 1, 2025",
      author: "BiOmixVita Team",
      readTime: "6 min read",
      content: {
        sections: [
          {
            title: "Emergence of \"No-Code\" & \"AI-Driven Platforms\": Freedom or Limitation?",
            content: "The bioinformatics landscape is undergoing a profound transformation driven by the growing presence of artificial intelligence (AI) and no-code platforms. These technologies aim to democratize biological data analysis by providing intuitive interfaces and automated workflows that reduce the need for programming expertise. Platforms such as BiomiX, BIOMEX, Pluto Bio, and ROSALIND® exemplify this trend by enabling users to conduct multi-omics analyses, differential expression studies, and pathway exploration without requiring any coding skills (Iperi C et al., 2024; Federico T et al., 2020; Pluto Bio, 2024; ROSALIND, 2024).\n\nThese platforms streamline routine tasks, accelerate exploratory analyses, and reduce dependence on skilled bioinformaticians for coding and translating biological questions into machine-readable workflows. For example, a researcher may perform a transcriptome analysis and identify differentially expressed genes within minutes using a no-code tool. In contrast, relying on a skilled bioinformatician typically requires several days and comes at a significantly higher cost. A manual workflow involves environment setup, scripting, quality control, and iterative debugging, which makes the process slower and more expensive, though often far more customizable and biologically nuanced."
          },
          {
            title: "Are Automated Platforms Enough?",
            content: "Despite their clear benefits, automated platforms introduce a number of constraints widely recognized in the literature. These can be grouped into four principal categories:\n\n**Biological Context and Interpretation**\n\nWhile automated pipelines efficiently process raw data, they often lack the deeper biological context required for nuanced interpretation. Sensitive biological signals, batch effects, and unexpected experimental behaviors typically require expert human review (Liu Y et al., 2025).\n\n**Customization and Non-Standard Workflows**\n\nStandardized pipelines may fail to support novel data types or unconventional experimental designs. Custom methodological development often lies beyond the capabilities of generic platforms (Taverna F et al., 2020).\n\n**Data Quality, Bias, and Explainability**\n\nAI models, particularly deep learning systems, is able to propagate biases and produce \"black-box\" outputs. The growing field of explainable artificial intelligence (XAI) highlights the need for interpretability and human oversight in biomedical applications (Budhkar A et al., 2025).\n\n**Ethical and Regulatory Considerations**\n\nOversight remains essential in areas involving patient data, clinical interpretation, or high-stakes decisions subject to regulatory requirements such as GDPR. Human experts ensure transparency, fairness, and ethical compliance (Qiagen, 2024).\n\nOverall, the consensus is that AI enhances, rather than replaces, human expertise. What keeps bioinformaticians irreplaceable is their capacity to carry out high-value activities (quality control, integrative interpretation, model validation, and ethical judgment) that no automated system can fully replicate."
          },
          {
            title: "BiOmixVita: Where Automation Meets Expert Scientific Insight – A Hybrid Strategy Emerges",
            content: "BiOmixVita is an OMICS data analysis and interpretation company. It combines cutting-edge omics data analysis (including genomics, transcriptomics, proteomics, metabolomics, and more) with the latest advancements in artificial intelligence to identify biomarkers and uncover biological insights through integrated OMICS workflows.\n\nBiOmixVita exemplifies a hybrid approach that blends scalable automation with deep scientific expertise. This model recognizes that the most impactful bioinformatics solutions emerge from the synergy between AI-driven processing and human interpretation.\n\nTo learn more about our services and solutions, please visit the Services page on our website: https://biomixvita.com\n\n**The Hybrid Approach Advantage**\n\nA hybrid strategy offers several key benefits:\n\n• **Custom, adaptable workflows** suited to unique research questions and emerging data modalities\n• **Rigorous validation and QC**, ensuring analytical reliability\n• **Biologically meaningful insights** derived from complex multi-omics integration\n• **Flexibility to incorporate** new technologies and methodologies as they evolve\n\nThis model aligns with the emerging concept of the bioinformatics copilot, a role where human experts guide, validate, and contextualize AI-generated results (Yang L et al., 2024).\n\nThe following radar chart illustrates the perceived strengths of fully automated (AI/No-Code) approaches versus a hybrid (AI + Expert) approach:"
          },
          {
            title: "Conclusion",
            content: "The future of bioinformatics lies in a balanced, hybrid model that merges AI-based automation with the irreplaceable human ability to interpret, contextualize, and ethically evaluate biological data. While no-code and AI-driven platforms expand access and accelerate workflows, they cannot, and should not, replace expert judgment.\n\nAt BiOmixVita, our official language is **\"Biology.\"** Through our hybrid approach, we combine the power of automation with expert scientific insight to deliver customized, reliable, and actionable bioinformatics solutions.\n\nBeyond offering solutions for OMICS technologies, we have established an efficient and exciting proof of concept for OMICS integration using Network- & AI-based strategies.\n\nWhether you already have OMICS data, plan to generate raw data, or are simply curious to learn more about our solutions, there is one answer: **Let's connect!**"
          }
        ],
        references: [
          "Budhkar A, Song Q, Su J, Zhang X. Demystifying the black box: A survey on explainable artificial intelligence (XAI) in bioinformatics. Comput Struct Biotechnol J. 2025 Jan 10;27:346-359.",
          "Taverna F, Goveia J, Karakach TK, Khan S, Rohlenova K, Treps L, Subramanian A, Schoonjans L, Dewerchin M, Eelen G, Carmeliet P. BIOMEX: an interactive workflow for (single cell) omics data interpretation and visualization. Nucleic Acids Res. 2020 Jul 2;48(W1):W385-W394.",
          "Iperi, C., Fernández-Ochoa, Á., Barturen, G. et al. BiomiX, a user-friendly bioinformatic tool for democratized analysis and integration of multiomics data. BMC Bioinformatics 26, 8 (2025).",
          "Yang Liu, Rongbo Shen, Lu Zhou, Qingyu Xiao, Jiao Yuan, Yixue Li, A data-intelligence-intensive bioinformatics copilot system for large-scale omics research and scientific insights, Briefings in Bioinformatics, Volume 26, Issue 4, July 2025.",
          "Pluto Bio (2024). Multi-omics platform for translational discovery.",
          "Qiagen Digital Insights (2024). Where AI meets human experts: The secret behind QDI's genomic insight leadership (https://digitalinsights.qiagen.com/ai-meets-expert-curation/#uses).",
          "Federico Taverna, Jermaine Goveia, Tobias K Karakach, Shawez Khan, Katerina Rohlenova, Lucas Treps, Abhishek Subramanian, Luc Schoonjans, Mieke Dewerchin, Guy Eelen, Peter Carmeliet, BIOMEX: an interactive workflow for (single cell) omics data interpretation and visualization, Nucleic Acids Research, Volume 48, Issue W1, 02 July 2020, Pages W385–W394.",
          "ROSALIND® (2024). Discovery Platform & Data Hub for Scientists (https://www.rosalind.bio/).",
          "Liu Y, Shen R, Zhou L, Xiao Q, Yuan J, Li Y. A data-intelligence-intensive bioinformatics copilot system for large-scale omics research and scientific insights. Brief Bioinform. 2025 Jul 2;26(4)."
        ]
      }
    }
  ];

  const shareOnLinkedIn = (title: string) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`Check out this insightful article: "${title}" by BiOmixVita Team`);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}&text=${text}`, '_blank');
  };

  if (selectedArticle) {
    const article = blogPosts.find(post => post.id === selectedArticle);
    if (!article) return null;
    return (
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden text-white" style={{backgroundImage: 'url(/ai-dna-background.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 mx-auto max-w-4xl px-6 py-16 lg:px-8">
            <div className="text-center">
              <button 
                onClick={() => setSelectedArticle(null)}
                className="mb-4 text-blue-200 hover:text-white text-sm flex items-center mx-auto transition-colors"
              >
                ← Back to Insights
              </button>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {article.title}
              </h1>
              <div className="mt-8 flex items-center justify-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span>{article.readTime}</span>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {article.keywords.map((keyword, index) => (
                  <span key={index} className="inline-flex items-center rounded-full bg-blue-100 px-3 py-0.5 text-sm font-medium text-blue-800">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
          <div className="prose prose-lg prose-blue mx-auto max-w-none">
            {article.content.sections.map((section, index) => (
              <div key={index} className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-blue-200 pb-2">
                  {section.title}
                </h2>
                <div 
                  className="text-gray-700 leading-relaxed text-lg space-y-4"
                  dangerouslySetInnerHTML={{
                    __html: section.content
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-gray-900">$1</strong>')
                      .replace(/\n\n/g, '</p><p class="mb-4">')
                      .replace(/^(.*)$/gm, '<p class="mb-4">$1</p>')
                      .replace(/• /g, '• ')
                      .replace(/Figure 1:/g, '<strong class="font-bold text-blue-800">Figure 1:</strong>')
                  }}
                />
                {/* Show Figure 1 after the BiOmixVita section */}
                {section.title.includes('BiOmixVita') && (
                  <div className="my-12 p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border-2 border-blue-200">
                    <div className="text-center">
                      <div className="w-full bg-white rounded-lg shadow-inner p-6 mb-4">
                        <img 
                          src="/radarchart.png" 
                          alt="Radar Chart comparing AI/No-Code vs Hybrid Approach" 
                          className="mx-auto max-w-full h-auto rounded-lg"
                          style={{maxHeight: '500px'}}
                        />
                      </div>
                      <p className="text-sm text-blue-600 font-medium">
                        <strong>Figure 1:</strong> Perceived strengths of fully automated (AI/No-Code) approaches versus a hybrid (AI + Expert) approach across key bioinformatics dimensions
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* References Section */}
            {article.content.references && (
              <div className="mt-16 border-t-2 border-gray-200 pt-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">References</h2>
                <div className="text-sm text-gray-600 space-y-3">
                  {article.content.references.map((reference, index) => (
                    <p key={index} className="leading-relaxed pl-4 border-l-2 border-blue-200">
                      {reference}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Let's Connect Section */}
            <div className="mt-16">
              <section className="py-20 bg-primary text-white rounded-xl" style={{backgroundColor: '#7fa8b8'}}>
                <div className="max-w-4xl mx-auto px-6">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide">
                      Let's Connect
                    </h2>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left side - Contact Information */}
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-2xl font-semibold mb-6">Ready to Transform Your Research?</h3>
                        <p className="text-lg opacity-90 mb-8">
                          Get in touch for a free initial consultation and discover how our OMICS & AI solutions 
                          can revolutionize your projects and accelerate your research outcomes.
                        </p>
                      </div>
                    </div>
                    
                    {/* Right side - Quick Contact Form */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                      <h3 className="text-lg font-semibold mb-4">Quick Contact</h3>
                      <form className="space-y-3" action="https://formspree.io/f/manlgvby" method="POST">
                        <div>
                          <input 
                            type="text" 
                            name="name"
                            placeholder="Your Name" 
                            required
                            className="w-full px-3 py-2 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent text-sm"
                          />
                        </div>
                        <div>
                          <input 
                            type="email" 
                            name="email"
                            placeholder="Email Address" 
                            required
                            className="w-full px-3 py-2 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent text-sm"
                          />
                        </div>
                        <div>
                          <input 
                            type="tel" 
                            name="phone"
                            placeholder="Phone Number" 
                            className="w-full px-3 py-2 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent text-sm"
                          />
                        </div>
                        <div>
                          <textarea 
                            rows={3} 
                            name="message"
                            placeholder="Tell us about your project..." 
                            required
                            className="w-full px-3 py-2 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent resize-none text-sm"
                          ></textarea>
                        </div>
                        <Button 
                          type="submit" 
                          variant="secondary"
                          className="w-full py-2 text-sm font-semibold" style={{backgroundColor: '#2a5fa0'}}
                        >
                          Send Message
                        </Button>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Blog overview page (Bridge Informatics style)
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center text-white" style={{backgroundImage: 'url(/insights-hero-bg.jpg)'}}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl drop-shadow-lg">
              
            </h1>
            <p className="mt-6 text-xl leading-8 text-white drop-shadow-lg" style={{fontSize: '50px', fontWeight: '800'}}>
              Turning biological complexity into insights
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
              {/* Keywords as tags */}
              <div className="p-4 pb-2">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.keywords.map((keyword, index) => (
                    <span key={index} className="text-xs font-medium text-black bg-white/10 backdrop-blur-sm px-2 py-1 rounded border border-white/20">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              {/* Title - Clickable */}
              <div className="px-4 pb-4">
                <h3 
                  className="text-xl font-bold text-gray-900 cursor-pointer hover:text-blue-600 transition-colors"
                  onClick={() => setSelectedArticle(post.id)}
                >
                  {post.title}
                </h3>
              </div>

              {/* Footer with LinkedIn share */}
              <div className="px-4 pb-4 flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <button
                  onClick={() => shareOnLinkedIn(post.title)}
                  className="flex items-center justify-center w-8 h-8 bg-white/10 backdrop-blur-sm text-white rounded hover:bg-white/20 transition-colors border border-white/20"
                  aria-label="Share on LinkedIn"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Message */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-600">
            <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            More insights coming soon...
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
