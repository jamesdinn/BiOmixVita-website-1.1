import React, { useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle2, Network, BarChart3, FileText } from 'lucide-react';
import { toast } from 'sonner';

const figureClass = 'w-full rounded-lg border-2 border-blue-200 bg-white p-3 shadow-sm';

export default function RnaSeqService() {
  const [showDownloadForm, setShowDownloadForm] = useState(false);
  const [downloadUnlocked, setDownloadUnlocked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleDownloadRequest = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/manlgvby', {
        method: 'POST',
        body: new FormData(e.currentTarget),
        headers: { Accept: 'application/json' },
      });
      if (response.ok) {
        setDownloadUnlocked(true);
        toast.success('Thank you. Your collaboration request has been received.');
        e.currentTarget.reset();
      } else {
        toast.error('The request could not be sent. Please try again.');
      }
    } catch {
      toast.error('The request could not be sent. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Transcriptomics · RNA-seq analysis</p>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">From RNA-seq data to biological insight</h1>
              <p className="mt-6 text-2xl font-semibold leading-9 text-gray-700 sm:text-3xl">A complete analysis should answer the biological question, not only produce plots.</p>
              <p className="mt-4 leading-7 text-gray-600">RNA-seq can reveal how expression changes across tissues, treatments, developmental stages, genotypes, or disease states. BiOmixVita connects the statistical result to the biological context needed to decide what to investigate next.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#outputs" className="inline-flex items-center rounded-lg bg-[#4169E1] px-5 py-3 font-semibold text-white shadow-sm hover:bg-blue-700">Explore the outputs <ArrowRight className="ml-2 h-4 w-4" /></a>
                <Link href="/insights/3"><a className="inline-flex items-center rounded-lg border border-[#4169E1] bg-white px-5 py-3 font-semibold text-[#4169E1] hover:bg-blue-50">Read the white paper</a></Link>
              </div>
              <p className="mt-6 font-semibold text-[#4169E1]">Data-Informed. Biology-Driven.</p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-lg ring-1 ring-blue-100">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">A question-led workflow</p>
              <div className="space-y-3">
                {[
                  ['01', 'Explore', 'QC, filtering, sample structure'],
                  ['02', 'Normalize', 'Comparable expression values'],
                  ['03', 'Test', 'Differential expression, FDR control'],
                  ['04', 'Interpret', 'GO, KEGG, GSEA, pathways'],
                  ['05', 'Deliver', 'Interactive report + data package'],
                ].map(([n, title, copy]) => (
                  <div key={n} className="flex items-start gap-4 rounded-lg bg-gray-50 p-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4169E1] text-sm font-bold text-white">{n}</span>
                    <div><p className="font-semibold text-gray-900">{title}</p><p className="text-sm text-gray-600">{copy}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="outputs" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Three views from the white paper</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Each visualization answers a different question.</h2>
            <p className="mt-5 text-lg leading-8 text-gray-600">The strongest interpretation connects global sample structure to gene-level changes, pathway-level patterns, and the experimental context in which the data were generated.</p>
          </div>

          <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
            <div><img src="/rnaseq/pca.png" alt="PCA showing global sample structure" className={figureClass} /><p className="mt-3 text-center text-sm italic text-gray-500">Stage and genotype are made visible together!</p></div>
            <div><p className="text-sm font-semibold uppercase tracking-wide text-blue-700">01 · Explore gene expression patterns</p><h3 className="mt-2 text-2xl font-bold text-gray-900">How do the samples relate globally?</h3><p className="mt-4 leading-7 text-gray-600">Before testing individual genes, we establish whether the data reflect the experimental design. PCA, correlation views, and heatmaps reveal replicate consistency, group structure, outliers, and possible sources of unwanted variation.</p><p className="mt-4 leading-7 text-gray-600">PC1, PC2, PC3, and subsequent components are reviewed, and the most informative combinations are selected for the clearest group clustering and biologically meaningful visualization.</p><div className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-gray-700">BiOmixVita exploratory analysis selects the component views that best expose structure between groups.</div></div>
          </div>

          <div className="mt-20 grid items-center gap-10 lg:grid-cols-2">
            <div className="lg:order-2"><img src="/rnaseq/heatmap.png" alt="Heatmap showing coordinated expression blocks" className={figureClass} /><p className="mt-3 text-center text-sm italic text-gray-500">Clusters become defined, named, and testable expression programs!</p></div>
            <div className="lg:order-1"><p className="text-sm font-semibold uppercase tracking-wide text-blue-700">02 · Resolve coordinated expression programs</p><h3 className="mt-2 text-2xl font-bold text-gray-900">Which genes move together?</h3><p className="mt-4 leading-7 text-gray-600">Genes rarely act alone. Clustering and heatmap analysis identify groups of genes that move together across samples, helping separate shared biological programs from condition-specific responses.</p><p className="mt-4 leading-7 text-gray-600">BiOmixVita tunes clustering to the design, annotates the resulting programs, and labels representative driver genes so the pattern becomes a testable hypothesis.</p><div className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-gray-700">The output turns a high-dimensional expression matrix into interpretable blocks linked to the experimental question.</div></div>
          </div>

          <div className="mt-20 grid items-center gap-10 lg:grid-cols-2">
            <div><img src="/rnaseq/kegg1.png" alt="KEGG pathway visualization" className={figureClass} /><p className="mt-3 text-center text-sm italic text-gray-500">Affected pathway views help translate molecular changes into the next biological question!</p></div>
            <div><p className="text-sm font-semibold uppercase tracking-wide text-blue-700">03 · Visualize mechanisms and regulatory context</p><h3 className="mt-2 text-2xl font-bold text-gray-900">Which pathways may explain the observed phenotype?</h3><p className="mt-4 leading-7 text-gray-600">When the question moves beyond enrichment, pathway maps and interaction networks show where genes connect, which modules are active, and which regulatory relationships may explain the observed phenotype.</p><p className="mt-4 leading-7 text-gray-600">BiOmixVita can adapt KEGG pathway views to the tissue and comparison, overlaying gene-level changes so the biological mechanism becomes easier to inspect and communicate.</p><p className="mt-5 rounded-lg border border-yellow-200 bg-yellow-50 p-4 text-sm leading-6 text-yellow-900">Illustrative example from a published course analysis. It is not derived from, and is not related to, any analysis project performed by the BiOmixVita team.</p></div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Analysis deliverables</p><h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">A complete RNA-seq data output, ready to use.</h2><p className="mt-5 text-lg leading-8 text-gray-600">Every engagement is delivered as a self-contained analysis package. The result is organized to move from exploratory structure to differential expression, pathway interpretation, and the next research decision.</p></div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[['Interactive HTML report', 'QC, normalization, clustering, differential expression, and enrichment in one navigable document.', FileText], ['QC & normalization figures', 'Library size, normalization factors, dispersion, mean–variance, and before/after expression views.', BarChart3], ['Comparison-ready results', 'PCA, correlation heatmaps, variable-gene heatmaps, volcano plots, MA plots, and multi-comparison overlap.', CheckCircle2], ['Functional interpretation', 'GO and KEGG enrichment, direction-specific views, and pathway overlays for the biology that matters to the project.', Network], ['Processed data', 'Normalized CPM and log-CPM matrices, full and significant-only tables, and analysis-ready files.', FileText], ['Methods & reproducibility', 'Pinned software and database versions, parameters, thresholds, and a version-controlled R environment.', CheckCircle2]].map(([title, copy, Icon]) => <div key={title as string} className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200"><Icon className="h-8 w-8 text-[#4169E1]" /><h3 className="mt-4 text-lg font-semibold text-gray-900">{title as string}</h3><p className="mt-2 text-sm leading-6 text-gray-600">{copy as string}</p></div>)}
          </div>
        </div>
      </section>

      <section className="py-20"><div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"><h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Read the complete RNA-seq white paper</h2><p className="mt-5 text-lg leading-8 text-gray-600">Explore the analytical journey, figures, interpretation, analysis deliverables, quality standards, and project-based extensions.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><Link href="/insights/3"><a className="inline-flex items-center rounded-lg bg-[#4169E1] px-6 py-3 font-semibold text-white hover:bg-blue-700">Read the Insights article <ArrowRight className="ml-2 h-4 w-4" /></a></Link><button type="button" onClick={() => setShowDownloadForm(true)} className="inline-flex items-center rounded-lg border border-[#4169E1] bg-white px-6 py-3 font-semibold text-[#4169E1] hover:bg-blue-50">Download the PDF white paper</button></div>{showDownloadForm && <div className="mx-auto mt-10 max-w-2xl rounded-xl border border-blue-100 bg-blue-50 p-6 text-left shadow-sm"><h3 className="text-xl font-bold text-gray-900">Request the complete white paper</h3><p className="mt-2 text-sm leading-6 text-gray-600">Please share your details so we can follow up as a potential collaboration request. After submission, the PDF download will become available.</p>{downloadUnlocked ? <a href="/rnaseq/BiOmixVita_RNAseq_Insight_Brief.pdf" className="mt-5 inline-flex rounded-lg bg-[#4169E1] px-5 py-3 font-semibold text-white hover:bg-blue-700">Download the PDF white paper</a> : <form onSubmit={handleDownloadRequest} className="mt-5 grid gap-4 sm:grid-cols-2"><input type="hidden" name="_subject" value="RNA-seq white paper download request" /><input type="hidden" name="request_type" value="RNA-seq white paper / collaboration request" /><label className="text-sm font-semibold text-gray-700">First name<input name="first_name" required className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 font-normal" /></label><label className="text-sm font-semibold text-gray-700">Family name<input name="family_name" required className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 font-normal" /></label><label className="text-sm font-semibold text-gray-700 sm:col-span-2">Organisation<input name="organisation" required className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 font-normal" /></label><label className="text-sm font-semibold text-gray-700 sm:col-span-2">Email<input type="email" name="email" required className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 font-normal" /></label><button type="submit" disabled={isSubmitting} className="rounded-lg bg-[#4169E1] px-5 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-60 sm:col-span-2">{isSubmitting ? 'Sending request…' : 'Download the white paper'}</button></form>}</div>}</div></section>
    </div>
  );
}
