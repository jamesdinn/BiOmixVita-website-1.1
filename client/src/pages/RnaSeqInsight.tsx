import React, { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const refs = [
  'Jolliffe IT, Cadima J. Principal component analysis: A review and recent developments. Philosophical Transactions of the Royal Society A. 2016;374(2065):20150202. https://doi.org/10.1098/rsta.2015.0202',
  'Eisen MB, Spellman PT, Brown PO, Botstein D. Cluster analysis and display of genome-wide expression patterns. PNAS. 1998;95(25):14863–14868. https://doi.org/10.1073/pnas.95.25.14863',
  'Love MI, Huber W, Anders S. Moderated estimation of fold change and dispersion for RNA-seq data with DESeq2. Genome Biology. 2014;15(12):550. https://doi.org/10.1186/s13059-014-0550-8',
  'Subramanian A, et al. Gene set enrichment analysis: A knowledge-based approach for interpreting genome-wide expression profiles. PNAS. 2005;102(43):15545–15550. https://doi.org/10.1073/pnas.0506580102',
  'Kanehisa M, Goto S. KEGG: Kyoto Encyclopedia of Genes and Genomes. Nucleic Acids Research. 2000;28(1):27–30. https://doi.org/10.1093/nar/28.1.27',
  'Shannon P, et al. Cytoscape: A software environment for integrated models of biomolecular interaction networks. Genome Research. 2003;13(11):2498–2504. https://doi.org/10.1101/gr.1239303',
  'Bader GD, Hogue CWV. An automated method for finding molecular complexes in large protein interaction networks. BMC Bioinformatics. 2003;4:2. https://doi.org/10.1186/1471-2105-4-2',
  'Ashburner M, et al. Gene Ontology: Tool for the unification of biology. Nature Genetics. 2000;25:25–29. https://doi.org/10.1038/75556',
  'Barry Usher. Class 15: Pathway analysis. RPubs. 2018. https://rpubs.com/barryus/class15',
  'BiOmixVita Team. From Data to Decision: Scalable Biological Intelligence Powered by BiOmixVita. BiOmixVita Insights. https://biomixvita.com/insights/2',
];

const Figure = ({ src, alt, caption }: { src: string; alt: string; caption: string }) => (
  <div className="my-8 rounded-lg border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
    <div className="rounded-lg bg-white p-4 shadow-inner"><img src={src} alt={alt} className="mx-auto max-h-[520px] w-full rounded-lg object-contain" /></div>
    <p className="mt-4 text-center text-sm font-medium text-blue-700">{caption}</p>
  </div>
);

export default function RnaSeqInsight() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDownloadForm, setShowDownloadForm] = useState(false);
  const [downloadUnlocked, setDownloadUnlocked] = useState(false);
  const [isDownloadSubmitting, setIsDownloadSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); setIsSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/manlgvby', { method: 'POST', body: new FormData(e.currentTarget), headers: { Accept: 'application/json' } });
      if (response.ok) { toast.success('Message sent successfully! We\'ll get back to you soon.'); e.currentTarget.reset(); } else toast.error('Failed to send message. Please try again.');
    } catch { toast.error('Failed to send message. Please try again.'); } finally { setIsSubmitting(false); }
  };

  const handleDownloadRequest = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); setIsDownloadSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/manlgvby', { method: 'POST', body: new FormData(e.currentTarget), headers: { Accept: 'application/json' } });
      if (response.ok) { setDownloadUnlocked(true); toast.success('Thank you. Your collaboration request has been received.'); e.currentTarget.reset(); }
      else toast.error('The request could not be sent. Please try again.');
    } catch { toast.error('The request could not be sent. Please try again.'); } finally { setIsDownloadSubmitting(false); }
  };

  return <div className="bg-white">
    <div className="relative overflow-hidden bg-cover bg-center text-white" style={{ backgroundImage: 'url(https://files.manuscdn.com/user_upload_by_module/session_file/310419663032214796/gtLmWQLWnBdbQvTm.png)' }}>
      <div className="absolute inset-0 bg-black/40" /><div className="relative z-10 mx-auto max-w-4xl px-6 py-16 lg:px-8"><div className="text-center">
        <Link href="/insights"><a className="mb-4 inline-flex text-sm text-blue-200 transition-colors hover:text-white">← Back to Insights</a></Link>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">From RNA-seq Data to Biological Insight: Data-Informed. Biology-Driven.</h1>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm"><span>BiOmixVita Team</span><span>October 2026</span><span>12 min read</span></div>
        <div className="mt-6 flex flex-wrap justify-center gap-2">{['RNA-seq', 'Transcriptomics', 'Bioinformatics', 'Pathway Analysis', 'Reproducibility'].map(x => <span key={x} className="inline-flex rounded-full bg-blue-100 px-3 py-0.5 text-sm font-medium text-blue-800">{x}</span>)}</div>
      </div></div>
    </div>

    <div className="mx-auto max-w-4xl px-6 py-12 lg:px-8"><div className="prose prose-lg prose-blue mx-auto max-w-none">
      <p className="text-2xl font-semibold leading-9 text-gray-700 sm:text-3xl">A complete analysis should answer the biological question, not only produce plots.</p>
      <p>RNA-seq can reveal how expression changes across tissues, treatments, developmental stages, genotypes, or disease states. BiOmixVita connects the statistical result to the biological context needed to decide what to investigate next.</p>
      <p>RNA-seq analysis often produces several familiar visualizations, but each one answers a different question. PCA plots reveal global sample structure. Heatmaps show coordinated expression patterns across genes and samples. Volcano plots bring together the magnitude of change and statistical significance to highlight genes that are both strongly changed and well supported by the data.</p>
      <p>None of these views should be interpreted in isolation. A heatmap pattern does not prove a mechanism, and a highly significant gene is not necessarily biologically important on its own. The strongest interpretation connects global sample structure to gene-level changes, pathway-level patterns, and the experimental context in which the data were generated.</p>

      <h2 className="border-b-2 border-blue-200 pb-2 text-3xl font-bold text-gray-900">Case study: genotype across development</h2>
      <p>A wild-type line and a gene mutant were profiled at embryo and adult stages. Four comparisons separated genotype effects from normal developmental change. The analysis showed that developmental stage was the dominant source of transcriptional variance, while the mutant created a distinct adult signature worth pursuing.</p>

      <h2 className="border-b-2 border-blue-200 pb-2 text-3xl font-bold text-gray-900">The analytical journey</h2>
      <div className="grid gap-3 sm:grid-cols-5">{[['01','Explore','QC, filtering, sample structure'],['02','Normalize','Comparable expression values'],['03','Test','Differential expression, FDR control'],['04','Interpret','GO, KEGG, GSEA, pathways'],['05','Deliver','Interactive report + data package']].map(([n,t,c]) => <div key={n} className="rounded-lg bg-blue-50 p-4 text-center"><div className="text-sm font-bold text-blue-700">{n}</div><div className="mt-1 font-semibold text-gray-900">{t}</div><div className="mt-1 text-xs text-gray-600">{c}</div></div>)}</div>

      <h2 className="border-b-2 border-blue-200 pb-2 text-3xl font-bold text-gray-900">01 · Explore gene expression patterns</h2>
      <p>Before testing individual genes, we establish whether the data reflect the experimental design. PCA, correlation views, and heatmaps reveal replicate consistency, group structure, outliers, and possible sources of unwanted variation.</p>
      <Figure src="/rnaseq/pca.png" alt="PCA showing global sample structure" caption="Stage and genotype are made visible together!" />
      <h3 className="text-2xl font-bold text-gray-900">What the figure answers</h3><p>The principal-component axes are not treated as a fixed template. PC1, PC2, PC3, and subsequent components are reviewed, and the most informative combinations are selected for the clearest group clustering and biologically meaningful visualization. Labels, shapes, and annotations then reveal the factors that define the experiment. The result says why samples separate, not just that they do.</p>
      <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5"><strong>BiOmixVita output</strong><br />BiOmixVita exploratory analysis selects the component views that best expose structure between groups, while preserving the context needed to understand how samples relate globally and how every downstream comparison should be read.</div>
      <p>In this case, the dominant axis separated embryo from adult samples. Replicates clustered tightly, with no obvious outliers. Selecting the clearest PC combination made that structure easier to see and interpret, rather than presenting PC1 and PC2 simply because they are the default axes.</p>

      <h2 className="border-b-2 border-blue-200 pb-2 text-3xl font-bold text-gray-900">02 · Identify differential expression</h2>
      <p>Differential expression quantifies how genes change between defined conditions. We combine effect size, statistical significance, replicate structure, and project-specific contrasts so the result is interpretable rather than a list of isolated hits.</p>
      <h3 className="text-2xl font-bold text-gray-900">What the figure answers</h3><p>BiOmixVita applies documented FDR and effect-size thresholds, then labels top genes by both criteria with adaptive placement for a publication-ready view.</p>
      <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5"><strong>BiOmixVita output</strong><br />The output connects each significant result to the comparison, direction of change, magnitude of effect, and supporting evidence.</div>
      <p>The goal is not to decorate the volcano plot. It is to make the decision boundary visible and to keep the genes a scientist would discuss in the room readable on the page.</p>

      <h2 className="border-b-2 border-blue-200 pb-2 text-3xl font-bold text-gray-900">03 · Resolve coordinated expression programs</h2>
      <p>Genes rarely act alone. Clustering and heatmap analysis identify groups of genes that move together across samples, helping separate shared biological programs from condition-specific responses.</p>
      <Figure src="/rnaseq/heatmap.png" alt="Heatmap showing coordinated expression blocks" caption="Clusters become defined, named, and testable expression programs!" />
      <h3 className="text-2xl font-bold text-gray-900">What the figure answers</h3><p>BiOmixVita tunes clustering to the design, annotates the resulting programs, and labels representative driver genes so the pattern becomes a testable hypothesis.</p>
      <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5"><strong>BiOmixVita output</strong><br />The output turns a high-dimensional expression matrix into interpretable blocks linked to the experimental question.</div>
      <p>In the case study, the variable-gene landscape separated a shared developmental program from an adult-mutant signature. That distinction is more actionable than a long list of significant genes.</p>

      <h2 className="border-b-2 border-blue-200 pb-2 text-3xl font-bold text-gray-900">04 · Compare responses across conditions</h2>
      <p>Multiple contrasts can show what is shared, what is condition-specific, and what changes only in a particular tissue, genotype, or stage. UpSet-style views keep those relationships traceable across the full design.</p>
      <h3 className="text-2xl font-bold text-gray-900">What the figure answers</h3><p>BiOmixVita separates up- and down-regulated sets, scales across comparisons, and provides membership tables so every intersection can be queried.</p>
      <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5"><strong>BiOmixVita output</strong><br />The output helps distinguish core responses from context-dependent biology.</div>
      <p>The output is not only a picture of overlap. It is a route back to the genes that are unique to one contrast, shared by two, or common across the entire experiment.</p>

      <h2 className="border-b-2 border-blue-200 pb-2 text-3xl font-bold text-gray-900">05 · Translate gene changes into pathways</h2>
      <p>Pathway analysis places differential expression into a broader biological context. We use ranked enrichment and direction-specific views to capture coordinated changes, then connect enriched terms to the genes and pathways behind them.</p>
      <h3 className="text-2xl font-bold text-gray-900">What the figure answers</h3><p>GSEA uses the ranked distribution, separates direction, reports broad and specific terms, and can overlay gene-level expression on the pathway map.</p>
      <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5"><strong>BiOmixVita output</strong><br />The result moves from “which genes changed?” to “which biological processes and mechanisms are shifting?”</div>
      <p>This is where “a pathway is enriched” becomes a mechanistic hypothesis: which genes moved, in what direction, and where in the pathway should the next experiment look?</p>

      <h2 className="border-b-2 border-blue-200 pb-2 text-3xl font-bold text-gray-900">06 · Visualize mechanisms and regulatory context</h2>
      <p>When the question moves beyond enrichment, pathway maps and interaction networks show where genes connect, which modules are active, and which regulatory relationships may explain the observed phenotype.</p>
      <Figure src="/rnaseq/kegg1.png" alt="KEGG pathway visualization" caption="Affected pathway views help translate molecular changes into the next biological question!" />
      <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-5 text-yellow-900">Illustrative example: This KEGG pathway image is shown randomly as an example from a published course analysis available on RPubs. It is not derived from, and is not related to, any analysis project performed by the BiOmixVita team.</div>
      <h3 className="text-2xl font-bold text-gray-900">What the figure answers</h3><p>BiOmixVita can adapt KEGG pathway views to the tissue and comparison, overlaying gene-level changes so the biological mechanism becomes easier to inspect and communicate.</p>
      <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5"><strong>BiOmixVita output</strong><br />The output places pathway-level evidence inside the wider report, alongside the QC, differential expression, statistics, and reproducibility information needed to evaluate it.</div>
      <p>The pathway view sits inside the wider report, alongside the evidence behind it: QC, differential expression, enrichment statistics, annotated tables, and reproducibility information.</p>

      <h2 className="border-b-2 border-blue-200 pb-2 text-3xl font-bold text-gray-900">Analysis Deliverables: A complete RNA-seq data output, ready to use.</h2>
      <p>Every engagement is delivered as a self-contained analysis package. The result is organized to move from exploratory structure to differential expression, pathway interpretation, and the next research decision.</p>
      <div className="grid gap-4 md:grid-cols-2">{[['Interactive HTML report','QC, normalization, clustering, differential expression, and enrichment in one navigable document.'],['QC & normalization figures','Library size, normalization factors, dispersion, mean–variance, and before/after expression views.'],['Comparison-ready results','PCA, correlation heatmaps, variable-gene heatmaps, volcano plots, MA plots, and multi-comparison overlap.'],['Functional interpretation','GO and KEGG enrichment, direction-specific views, and pathway overlays for the biology that matters to the project.'],['Processed data','Normalized CPM and log-CPM matrices, full and significant-only tables, and analysis-ready files.'],['Methods & reproducibility','Pinned software and database versions, parameters, thresholds, and a version-controlled R environment.']].map(([title,copy]) => <div key={title} className="rounded-lg border border-gray-200 bg-gray-50 p-5"><h3 className="text-lg font-semibold text-gray-900">{title}</h3><p className="mt-2 text-base">{copy}</p></div>)}</div>

      <h2 className="border-b-2 border-blue-200 pb-2 text-3xl font-bold text-gray-900">Optional extension</h2>
      <p>Add-on analyses and visualization layers are designed on a project-by-project basis.</p><p>For example, miRNA-seq profiling can be performed in parallel with RNA-seq, connecting small-RNA regulators to differentially expressed mRNA targets through an integrated regulatory network.</p><p>We can construct, filter, and visualize gene and pathway networks to identify densely connected modules, highlight hubs and communities, and explore candidate regulatory mechanisms using network-analysis tools. For a broader example of BiOmixVita’s network- and AI-based integration perspective, see <Link href="/insights/2"><a className="font-semibold text-blue-700 underline hover:text-blue-900">From Data to Decision: Scalable Biological Intelligence Powered by BiOmixVita</a></Link>.</p><p>This is only one example of a possible extension. Depending on the scientific question, the integration may also include proteomic, metabolomic, phenotypic, clinical, imaging, or other quantitative measurements that the project requires. These modalities can be jointly analyzed and visualized within a customized network-based framework.</p><p className="rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-5 font-semibold text-yellow-900">Every extension is tailored to the project design, available data, and biological objectives, 100% customized to the customer’s research question.</p>

      <h2 className="border-b-2 border-blue-200 pb-2 text-3xl font-bold text-gray-900">Rigor, Reproducibility & Transparency</h2><p>Established methods, documented thresholds, organism-matched annotations, and version-pinned software keep every result statistically rigorous, auditable, and reproducible.</p>

      <div className="mt-12 rounded-xl bg-[#7fa8b8] p-8 text-white"><h2 className="border-0 pb-0 text-3xl font-bold text-white">Download the complete white paper</h2><p className="mt-4 text-white/90">Request the references-included PDF version of the BiOmixVita RNA-seq white paper. We ask for your details so we can follow up as a potential collaboration request.</p><button type="button" onClick={() => setShowDownloadForm(true)} className="mt-4 inline-flex rounded-lg bg-[#2a5fa0] px-5 py-3 font-semibold text-white hover:bg-blue-800">Request the PDF white paper</button>{showDownloadForm && <div className="mt-6 rounded-xl bg-white p-6 text-left text-gray-900"><h3 className="text-xl font-bold">Request the complete white paper</h3>{downloadUnlocked ? <a href="/rnaseq/BiOmixVita_RNAseq_Insight_Brief.pdf" className="mt-5 inline-flex rounded-lg bg-[#4169E1] px-5 py-3 font-semibold text-white hover:bg-blue-700">Download the PDF white paper</a> : <form onSubmit={handleDownloadRequest} className="mt-5 grid gap-4 sm:grid-cols-2"><input type="hidden" name="_subject" value="RNA-seq white paper download request" /><input type="hidden" name="request_type" value="RNA-seq white paper / collaboration request" /><label className="text-sm font-semibold text-gray-700">First name<input name="first_name" required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 font-normal" /></label><label className="text-sm font-semibold text-gray-700">Family name<input name="family_name" required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 font-normal" /></label><label className="text-sm font-semibold text-gray-700 sm:col-span-2">Organisation<input name="organisation" required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 font-normal" /></label><label className="text-sm font-semibold text-gray-700 sm:col-span-2">Email<input type="email" name="email" required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 font-normal" /></label><button type="submit" disabled={isDownloadSubmitting} className="rounded-lg bg-[#4169E1] px-5 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-60 sm:col-span-2">{isDownloadSubmitting ? 'Sending request…' : 'Download the white paper'}</button></form>}</div>}</div>

      <div className="mt-16 border-t-2 border-gray-200 pt-8"><h2 className="text-3xl font-bold text-gray-900">References</h2><div className="mt-6 space-y-3 text-sm text-gray-600">{refs.map((r,i) => <p key={i} className="border-l-2 border-blue-200 pl-4 leading-relaxed">[{i+1}] {r}</p>)}</div></div>

      <div className="mt-16"><section className="rounded-xl bg-[#7fa8b8] py-16 text-white"><div className="mx-auto max-w-4xl px-6"><div className="mb-12 text-center"><h2 className="text-4xl font-bold tracking-wide">Let's Connect</h2></div><div className="grid items-start gap-12 lg:grid-cols-2"><div><h3 className="text-2xl font-semibold">Ready to Transform Your Research?</h3><p className="mt-6 text-lg opacity-90">Get in touch for a free initial consultation and discover how our OMICS & AI solutions can revolutionize your projects and accelerate your research outcomes.</p></div><div className="rounded-lg border border-white/20 bg-white/10 p-6 backdrop-blur-sm"><h3 className="mb-4 text-lg font-semibold">Quick Contact</h3><form className="space-y-3" onSubmit={handleSubmit}><input type="text" name="name" placeholder="Your Name" required className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900" /><input type="email" name="email" placeholder="Email Address" required className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900" /><textarea rows={3} name="message" placeholder="Tell us about your project..." required className="w-full resize-none rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900" /><Button type="submit" disabled={isSubmitting} className="w-full bg-[#2a5fa0] text-white hover:bg-blue-800">{isSubmitting ? 'Sending...' : 'Send Message'}</Button></form></div></div></div></section></div>
    </div></div>
  </div>;
}
