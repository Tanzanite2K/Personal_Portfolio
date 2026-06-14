// Centralized content for the portfolio. Edit this file to update copy
// across the site without touching component markup.

export const profile = {
  name: 'Karri Pavan Prabhas',
  role: 'AI/ML Developer & Full-Stack Engineer',
  location: 'Andhra Pradesh, India',
  tagline1: 'Building systems that',
  taglineAccent: 'Learn & Scale',
  summary:
    'I work across the stack — from training deep learning models on spatiotemporal and video data to shipping full-stack web apps with clean, accessible UI. Currently exploring graph neural networks, weakly-supervised learning, and the tooling that connects research to real products.',
  email: 'pavanprabhask2004@gmail.com',
  phone: '+91 7671083140',
  github: 'github.com/Tanzanite2K',
  linkedin: 'linkedin.com/in/pavan-prabhas',
}

export const aboutMe = {
  eyebrow: 'About',
  tag: 'Profile',
  heading1: 'Researcher at heart,',
  heading2: 'builder by habit.',
  paragraphs: [
    "I'm a final-year Computer Science student at SRM University AP, working as an AI/ML Developer where I build deep learning systems — CNNs, 3D CNNs (I3D), and Spatial-Temporal Graph Attention Networks — for image, video, and spatiotemporal prediction tasks. I enjoy taking a model from a research idea to a working pipeline: data preprocessing, training, evaluation, and visualization, end to end.",
    "On the other side, I build full-stack web applications — from ride-sharing platforms with live tracking to playlist migration tools with OAuth and resilient API integration. I've solved 250+ LeetCode problems, won Hack SRM 4.0 with an IoT-based EV battery safety system, and care about clean diffs, accessible UI, and pipelines that don't break at 3am.",
  ],
  facts: [
    { label: 'Based in', value: 'Andhra Pradesh, IN' },
    { label: 'Education', value: 'B.Tech CSE, SRM AP' },
    { label: 'Focus', value: 'ML Systems, Full-Stack' },
    { label: 'Open to', value: 'Internships, Full-time' },
  ],
  stats: [
    { value: '8.66', label: 'CGPA in B.Tech CSE (2022–2026)' },
    { value: '6', label: 'Major projects shipped' },
    { value: '10', label: 'Certifications completed' },
    { value: '250+', label: 'LeetCode problems solved' },
  ],
}

export const experience = [
  {
    company: 'SRM University AP — Academic Role',
    role: 'AI/ML Developer',
    period: '2025 — Present',
    location: 'Andhra Pradesh, IN',
    summary:
      'Working on deep learning models for image, video, and spatiotemporal prediction tasks — building end-to-end pipelines from data preprocessing through training, evaluation, and visualization.',
    highlights: [
      'Implemented deep learning models including CNNs, 3D CNNs (I3D), and ST-GAT for image, video, and spatiotemporal prediction tasks.',
      'Built end-to-end pipelines for data preprocessing, model training, evaluation, and visualization using PyTorch and TensorFlow.',
      'Applied attention mechanisms, weakly supervised learning, and quantitative metrics (MAE, RMSE, accuracy) to analyze model performance.',
    ],
    tags: ['PyTorch', 'TensorFlow', 'CNNs', 'Graph Neural Networks'],
  },
  {
    company: 'Edunet Foundations',
    role: 'Frontend Developer',
    period: 'Jun 2024 — Aug 2024',
    location: 'Vijayawada, AP',
    summary:
      'Designed and deployed a responsive personal portfolio website, focusing on load performance, navigation flow, and cross-browser reliability.',
    highlights: [
      'Architected a responsive portfolio website to showcase projects and achievements, improving load speed by 60%.',
      'Built clean UI components using HTML5, CSS3, and JavaScript with attention to accessibility and cross-browser reliability.',
      'Leveraged and optimized HTML5, CSS3, and JavaScript to engineer a cross-browser compatible interface with seamless, engaging UI/UX.',
    ],
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Accessibility'],
  },
]

export const projects = [
  {
    name: 'ST-GAT Traffic Predictor',
    description:
      'A Spatial-Temporal Graph Attention Network that forecasts traffic speed across Bengaluru road segments by modelling spatial node interactions and temporal patterns.',
    longDescription:
      'Models the road network as a graph and applies attention over both spatial neighbors and temporal sequences to predict traffic speed. Evaluated across multiple epochs using MAE and RMSE, achieving stable learning curves and improved prediction accuracy over LSTM and CNN baselines.',
    tags: ['Python', 'PyTorch', 'NetworkX', 'NumPy', 'Matplotlib'],
    stats: { label: 'Outperforms', value: 'LSTM/CNN baselines' },
    link: 'github.com/Tanzanite2K',
    color: '#00d2ff',
  },
  {
    name: 'Video Anomaly Detection',
    description:
      'A deep learning system that detects abnormal events in large-scale surveillance videos using weakly supervised Multiple Instance Learning with a 3D CNN (I3D) backbone.',
    longDescription:
      'Performs binary anomaly detection and multi-class classification across 13 anomaly types. Built an end-to-end pipeline covering video ingestion, frame extraction, temporal segmentation, anomaly scoring, and timestamp-based localization, with a Flask front end for review.',
    tags: ['Python', 'PyTorch', 'TensorFlow', 'OpenCV', 'Flask'],
    stats: { label: 'Anomaly classes', value: '13' },
    link: 'github.com/Tanzanite2K',
    color: '#A4F4FD',
  },
  {
    name: 'Carpooling Management System',
    description:
      'A full-stack real-time ride-sharing platform with secure authentication, live tracking, route optimization, and an admin dashboard.',
    longDescription:
      'Lets users sign up, share and search available rides, and manage ride requests, with an interactive map for route visualization built on Leaflet and OpenStreetMap. Built with Agile methodology and deployed using Docker.',
    tags: ['React.js', 'Node.js', 'PostgreSQL', 'Docker', 'Leaflet API'],
    stats: { label: 'Built with', value: 'Agile' },
    link: 'github.com/Tanzanite2K',
    color: '#f59e0b',
  },
  {
    name: 'BeatBridge',
    description:
      'A music playlist migration tool with dynamic cross-platform track mapping, enabling seamless playlist transfer across Spotify, YouTube Music, and other platforms.',
    longDescription:
      'Built a true one-click transfer workflow for power users, with secure OAuth authentication, automated token refresh, and resilient API integration — reducing manual transfer effort by 90% with zero data loss.',
    tags: ['TypeScript', 'Next.js', 'NextAuth.js', 'Prisma', 'SQLite'],
    stats: { label: 'Manual effort cut', value: '90%' },
    link: 'github.com/Tanzanite2K',
    color: '#10b981',
  },
  {
    name: 'Glaucoma Detection',
    description:
      'A CNN-based system that classifies glaucoma from retinal fundus images, with preprocessing, augmentation, and regularization for robust performance.',
    longDescription:
      'Built a custom CNN architecture with convolution, pooling, dropout, and dense layers, achieving 96% accuracy on curated image datasets — validated using confusion matrices and error distribution analysis.',
    tags: ['Python', 'TensorFlow', 'OpenCV'],
    stats: { label: 'Accuracy', value: '96%' },
    link: 'github.com/Tanzanite2K',
    color: '#3D81E3',
  },
]

export const skills = {
  categories: [
    {
      title: 'Languages',
      items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'SQL', 'HTML5', 'CSS3'],
    },
    {
      title: 'ML / DL',
      items: ['CNNs', '3D CNNs (I3D)', 'Graph Neural Networks', 'ST-GAT', 'Attention Mechanisms', 'MIL'],
    },
    {
      title: 'Frameworks & Libraries',
      items: ['PyTorch', 'TensorFlow', 'React.js', 'Node.js', 'Next.js', 'Scikit-learn', 'OpenCV', 'Tailwind CSS'],
    },
    {
      title: 'Cloud, DevOps & Data',
      items: ['AWS (EC2, S3, Lambda)', 'Docker', 'GitHub Actions', 'CI/CD', 'PostgreSQL', 'MongoDB', 'MySQL', 'SQLite'],
    },
  ],
}

export const hackathons = [
  {
    name: 'Hack SRM 4.0',
    project: 'Bolt - The Salvation — IoT-driven EV battery safety system',
    placement: 'Winner',
    year: '2025',
    description:
      'Designed an IoT-driven early-warning system for EV battery safety using real-time sensor analysis to predict and prevent battery explosions. Built a companion mobile app delivering instant alerts, safety recommendations, and cloud-backed data visualization using Firebase and NodeMCU.',
    tags: ['IoT', 'NodeMCU', 'Firebase', 'Sensors'],
  },
]

export const certifications = [
  {
    name: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI',
    year: '2024',
  },
  {
    name: 'Convolutional Neural Networks',
    issuer: 'DeepLearning.AI',
    year: '2024',
  },
  {
    name: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services',
    year: '2024',
  },
  {
    name: 'Comprehensive Java Programming Course',
    issuer: 'Udemy',
    year: '2023',
  },
  {
    name: 'MongoDB Associate Developer Course',
    issuer: 'MongoDB University',
    year: '2023',
  },
  {
    name: 'Data Structures & Algorithms Course',
    issuer: 'Simplilearn',
    year: '2023',
  },
]

export const others = {
  writing: [] as { title: string; outlet: string; year: string }[],
  speaking: [] as { title: string; event: string; year: string }[],
  openSource: [
    {
      name: 'github.com/Tanzanite2K',
      contribution: 'ST-GAT, Video Anomaly Detection, BeatBridge, and more — public repos',
    },
  ],
  education: [
    {
      title: 'B.Tech, Computer Science and Engineering',
      place: 'SRM University, Andhra Pradesh, India',
      detail: 'CGPA — 8.56',
      year: '2022 — 2026',
    },
    {
      title: 'Intermediate (Class XII)',
      place: 'Resonance Junior College, Andhra Pradesh, India',
      detail: 'Marks — 864/1000',
      year: '2020 — 2022',
    },
  ],
  practice: [
    '250+ LeetCode problems solved (DSA)',
    'Prompt Engineering',
    'Model Evaluation & Quantitative Analysis (MAE, RMSE, Accuracy)',
    'Analytical Thinking, Team Collaboration, Adaptability',
  ],
}

export const engagements = {
  toggleLabel: 'Remote / On-site',
  plans: [
    {
      tier: 'Internship',
      availability: { remote: 'Remote — flexible hours', onsite: 'On-site — Andhra Pradesh / Bengaluru' },
      description: 'For teams looking for a focused AI/ML or full-stack intern who ships fast and learns faster.',
      features: [
        'ML model development & evaluation (PyTorch / TensorFlow)',
        'Full-stack feature work (React, Node.js, Next.js)',
        'Available for 3–6 month internships',
        'Comfortable in fast-moving, research-adjacent teams',
      ],
      featured: false,
    },
    {
      tier: 'Project Collaboration',
      availability: { remote: 'Remote — async friendly', onsite: 'Hybrid — open to occasional travel' },
      description: 'For a defined project, hackathon, or open-source collaboration with a clear scope.',
      features: [
        'Deep learning pipelines: data → training → evaluation',
        'Full-stack apps: auth, dashboards, real-time features',
        'Weekly progress updates & clean documentation',
        'Strong in PyTorch, TensorFlow, React, and Node.js',
      ],
      featured: true,
    },
    {
      tier: 'Full-time (2026)',
      availability: { remote: 'Remote — anywhere in India', onsite: 'On-site / Hybrid — open to relocation' },
      description: 'Graduating in 2026 — open to full-time AI/ML or software engineering roles.',
      features: [
        'AI/ML, Backend, or Full-Stack roles',
        'B.Tech CSE, SRM University — graduating 2026',
        'Available from graduation onward',
        'Open to internships-to-full-time conversion',
      ],
      featured: false,
    },
  ],
}
