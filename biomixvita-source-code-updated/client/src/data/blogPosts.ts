export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "bioinformatics-careers-at-a-crossroads",
    title: "Bioinformatics Careers at a Crossroads: Automation vs. Human Expertise",
    excerpt: "The field of bioinformatics is rapidly evolving with the rise of AI and automation. What does this mean for the future of human experts?",
    content: `
      <p>The field of bioinformatics is rapidly evolving with the rise of AI and automation. What does this mean for the future of human experts?</p>
      
      <h3>The Rise of Automation</h3>
      <p>Automated pipelines and AI-driven analysis tools are becoming increasingly sophisticated, capable of handling tasks that once required hours of manual work. From sequence alignment to variant calling, algorithms are taking over routine processes.</p>

      <h3>The Human Element</h3>
      <p>However, the interpretation of complex biological data still requires human intuition and domain knowledge. While AI can identify patterns, understanding the biological context and implications of those patterns remains a uniquely human skill.</p>

      <h3>The Future Landscape</h3>
      <p>The most successful bioinformaticians of the future will be those who can leverage these automated tools to enhance their own capabilities, moving from data processors to high-level data architects and strategists.</p>
    `,
    date: "Jan 28, 2026",
    author: "Dr. Chamseddine Kifagi",
    category: "Career",
    readTime: "5 min read",
    image: "/images/bioinformatics-career.jpg"
  },
  {
    id: "2",
    slug: "turning-biological-complexity-into-insights",
    title: "Turning Biological Complexity into Insights",
    excerpt: "How modern omics technologies are helping us decipher the complex language of life and translate it into actionable solutions.",
    content: `
      <p>Biological systems are inherently complex, with layers of regulation and interaction that have long baffled scientists. Today, multi-omics approaches are peeling back these layers.</p>

      <h3>The Power of Multi-Omics</h3>
      <p>By integrating genomics, transcriptomics, proteomics, and metabolomics, we can now see the full picture of cellular function. This holistic view allows us to identify key regulatory nodes and potential therapeutic targets that would be invisible to single-omics studies.</p>

      <h3>From Data to Action</h3>
      <p>The challenge has shifted from data generation to data integration. Advanced computational models are now essential for making sense of these vast datasets, turning raw numbers into biological insights that can drive drug discovery and precision medicine.</p>
    `,
    date: "Jan 15, 2026",
    author: "BiOmixVita Team",
    category: "Technology",
    readTime: "4 min read",
    image: "/images/biological-complexity.jpg"
  },
  {
    id: "3",
    slug: "sustainable-agriculture-through-genomics",
    title: "Sustainable Agriculture Through Genomics",
    excerpt: "Exploring how genomic tools are paving the way for more resilient and environmentally friendly farming practices.",
    content: `
      <p>As the global population grows, the pressure on our agricultural systems increases. Genomics offers a path to sustainable food security.</p>

      <h3>Crop Resilience</h3>
      <p>Through genomic selection and precision breeding, we can develop crop varieties that are more resistant to drought, pests, and disease, reducing the need for chemical inputs.</p>

      <h3>Soil Health</h3>
      <p>Metagenomics is also revealing the secrets of the soil microbiome, allowing us to optimize soil health and nutrient cycling, further enhancing crop yields while protecting the environment.</p>
    `,
    date: "Jan 10, 2026",
    author: "BiOmixVita Team",
    category: "Agriculture",
    readTime: "6 min read",
    image: "/images/sustainable-agri.jpg"
  }
];
