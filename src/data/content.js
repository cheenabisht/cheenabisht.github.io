/*
 * ── Centralized Content Configuration ──────────────────
 *
 * All portfolio content in one place.
 * Content integrity: only verified information is included.
 * Placeholders are clearly marked.
 */

export const siteConfig = {
  name: 'Cheena Bisht',
  monogram: 'CB',
  title: 'AI/ML Engineer & Developer',
  github: 'https://github.com/cheenabisht',
  email: 'your.email@example.com', // ← Placeholder: replace with real email
  linkedin: 'https://linkedin.com/in/cheenabisht', // ← Placeholder: replace with real URL
  siteUrl: 'https://cheenabisht.github.io',
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  greeting: 'AI/ML Student & Aspiring Engineer',
  headline: 'Cheena\nBisht',
  intro:
    'Second-year B.Tech CSE student specializing in Artificial Intelligence & Machine Learning. Exploring the intersection of data science, deep learning, and intelligent systems to build technology that matters.',
  cta: {
    label: 'View GitHub',
    href: 'https://github.com/cheenabisht',
  },
}

export const about = {
  heading: 'About',
  paragraphs: [
    `I'm Cheena Bisht — a Computer Science & Engineering student at Shri Ramswaroop Memorial University, Lucknow, with a specialization in Artificial Intelligence and Machine Learning.`,
    `Currently in my second year, I'm building a strong foundation in machine learning algorithms, data analysis, and applied AI. My academic focus is complemented by genuine curiosity about how intelligent systems can solve real-world problems.`,
    `I'm drawn to projects that combine rigorous technical thinking with practical impact — from understanding neural architectures to working with real datasets. My goal is to grow into an AI/ML engineer who bridges research and production.`,
  ],
  details: [
    { label: 'Location', value: 'Lucknow, India' },
    { label: 'Education', value: 'B.Tech CSE (AI/ML)' },
    { label: 'University', value: 'Shri Ramswaroop Memorial University' },
    { label: 'Year', value: 'Second Year' },
  ],
}

/*
 * ── Projects ──────────────────────────────────────────
 *
 * CONTENT INTEGRITY NOTE:
 * Cheena's GitHub profile (github.com/cheenabisht) currently
 * has 0 public repositories. No completed projects are listed
 * below because none can be verified.
 *
 * The roadmap section shows planned/upcoming projects instead.
 * Update this array as real projects are published.
 */

export const projects = []

export const projectRoadmap = [
  {
    title: 'Sentiment Analysis Engine',
    description:
      'NLP-powered sentiment classifier trained on real-world social media data. Will explore transformer-based approaches and compare with traditional ML methods.',
    stack: ['Python', 'scikit-learn', 'NLTK', 'Transformers'],
    status: 'Planned',
  },
  {
    title: 'Image Classification with CNNs',
    description:
      'Deep learning project to classify images using convolutional neural networks. Focused on understanding architectures like ResNet and transfer learning.',
    stack: ['Python', 'TensorFlow', 'Keras', 'NumPy'],
    status: 'Planned',
  },
  {
    title: 'Data Science Dashboard',
    description:
      'Interactive dashboard for exploratory data analysis, featuring automated visualizations, statistical summaries, and dataset insights.',
    stack: ['Python', 'Pandas', 'Streamlit', 'Plotly'],
    status: 'Planned',
  },
  {
    title: 'ML Model Comparison Toolkit',
    description:
      'A framework for systematically benchmarking ML models on standard datasets, with automated metrics, cross-validation, and result visualization.',
    stack: ['Python', 'scikit-learn', 'Matplotlib', 'Jupyter'],
    status: 'Planned',
  },
]

export const skills = {
  heading: 'Technical Toolkit',
  /*
   * Skills categorized by confidence level.
   * Based on AI/ML specialization coursework
   * in a B.Tech CSE program (2nd year).
   */
  current: [
    { name: 'Python', category: 'Language' },
    { name: 'C/C++', category: 'Language' },
    { name: 'HTML & CSS', category: 'Web' },
    { name: 'JavaScript', category: 'Web' },
    { name: 'Git & GitHub', category: 'Tools' },
    { name: 'VS Code', category: 'Tools' },
    { name: 'Data Structures', category: 'Fundamentals' },
    { name: 'Algorithms', category: 'Fundamentals' },
  ],
  learning: [
    { name: 'Machine Learning', category: 'AI/ML' },
    { name: 'Deep Learning', category: 'AI/ML' },
    { name: 'TensorFlow', category: 'AI/ML' },
    { name: 'scikit-learn', category: 'AI/ML' },
    { name: 'Pandas', category: 'Data' },
    { name: 'NumPy', category: 'Data' },
    { name: 'Data Visualization', category: 'Data' },
    { name: 'SQL', category: 'Data' },
  ],
}

export const education = {
  degree: 'Bachelor of Technology',
  field: 'Computer Science & Engineering',
  specialization: 'Artificial Intelligence & Machine Learning',
  university: 'Shri Ramswaroop Memorial University',
  location: 'Lucknow, Uttar Pradesh',
  duration: '2025 – 2029',
  year: 'Second Year',
}

export const contact = {
  heading: 'Let\'s Connect',
  message:
    'I\'m always open to conversations about AI/ML, interesting project ideas, research opportunities, and internships. If you\'d like to collaborate or just say hello — reach out.',
}

export const footer = {
  copyright: `© ${new Date().getFullYear()} Cheena Bisht. All rights reserved.`,
}
