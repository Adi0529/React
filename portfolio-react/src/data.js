export const getPortfolioData={
  personal: {
    name: "Aditya Kamble",
    role: "Full Stack Developer | ML Engineer",
    tagline: "Turning data into intelligent solutions",
    email: "aditya@example.com",
    phone: "+91-XXXXXXXXXX",
    location: "Pune, India",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourprofile",
    portfolio: "https://yourportfolio.com",
    img:"./assets/adi.jpg"
  },

  about: {
    description: `Passionate Computer Science student with strong foundation 
    in Java, Web Development, and Machine Learning. Experienced in building 
    real-world applications like crop recommendation systems, disease detection, 
    and prediction models.`,
    experience: "Fresher",
    interests: ["AI", "Web Development", "Problem Solving"]
  },

  skills: {
    programming: ["Java", "Python", "JavaScript"],
    frontend: ["HTML", "CSS", "React.js", "Bootstrap"],
    backend: ["Flask", "Node.js", "PHP"],
    database: ["MySQL", "MongoDB"],
    tools: ["Git", "GitHub", "VS Code"],
    ml: ["Random Forest", "CNN", "Feature Extraction", "Data Analysis"]
  },

  stats: {
    projectsCompleted: 20,
    internships: 3,
    certifications: 7,
    githubRepos: 25
  },

  projects : [
  {
    id: 1,
    title: "EcoYield Optimizer",
    category: "Machine Learning / Full Stack",
    description:
      "EcoYield Optimizer is an AI-powered smart agriculture platform developed to help farmers improve crop productivity and make data-driven farming decisions. The system provides crop recommendation, plant disease detection, and fertilizer suggestions based on environmental and soil conditions.",
    detailedDescription:
      "The project uses machine learning algorithms to analyze agricultural data such as temperature, humidity, soil nutrients, rainfall, and crop history. Farmers can upload images of infected leaves to detect diseases instantly. The platform also recommends suitable fertilizers and crops for better yield optimization.",
    tech: [
      "Python",
      "Flask",
      "Machine Learning",
      "HTML",
      "CSS",
      "JavaScript",
      "Scikit-learn",
      "OpenCV"
    ],
    features: [
      "Crop recommendation system",
      "Leaf disease detection",
      "Fertilizer recommendation",
      "Farmer-friendly dashboard",
      "Real-time prediction results",
      "Responsive web interface"
    ],
    modules: [
      "Crop Prediction Module",
      "Disease Detection Module",
      "Fertilizer Suggestion Module",
      "User Authentication"
    ],
    challenges:
      "Collecting accurate agricultural datasets and improving model prediction accuracy for different environmental conditions.",
    futureScope:
      "Integration with IoT sensors and weather forecasting APIs for real-time smart farming.",
    status: "Completed",
    image: "https://static.vecteezy.com/system/resources/thumbnails/018/790/830/small/farmer-in-corn-field-using-digital-tablet-for-smart-farming-innovation-technology-for-smart-farm-system-agriculture-management-concept-of-smart-farming-modern-agricultural-business-photo.jpg"
  },

  {
    id: 2,
    title: "Leaf Disease Detection",
    category: "Machine Learning / Computer Vision",
    description:
      "A computer vision-based application that detects plant leaf diseases using image processing and machine learning techniques.",
    detailedDescription:
      "This system allows users to upload leaf images and identify diseases at an early stage. The project uses OpenCV for image preprocessing and machine learning algorithms for classification. It helps farmers reduce crop damage and improve productivity.",
    tech: [
      "Python",
      "OpenCV",
      "NumPy",
      "TensorFlow",
      "CNN"
    ],
    features: [
      "Leaf image upload",
      "Disease classification",
      "Image preprocessing",
      "Prediction confidence score",
      "Fast detection results"
    ],
    modules: [
      "Image Processing",
      "Feature Extraction",
      "Disease Classification"
    ],
    challenges:
      "Handling variations in image lighting, background noise, and dataset balancing.",
    futureScope:
      "Mobile application support and real-time disease detection using camera feed.",
    status: "Completed",
    image: "https://miro.medium.com/0*pV0y5hTawkvEGNzb"
  },

  {
    id: 3,
    title: "Student Performance Predictor",
    category: "Machine Learning",
    description:
      "A predictive analytics system designed to predict student academic performance using internal and external assessment data.",
    detailedDescription:
      "The system analyzes attendance, assignments, internal exams, lab scores, viva marks, and prelim scores to predict final academic performance. The project helps teachers identify weak students early and provide necessary guidance.",
    tech: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Flask",
      "Machine Learning"
    ],
    features: [
      "Performance prediction",
      "Student analytics dashboard",
      "Data visualization",
      "Risk analysis",
      "Result forecasting"
    ],
    modules: [
      "Data Collection",
      "Prediction Model",
      "Performance Analytics"
    ],
    challenges:
      "Handling missing student data and selecting the best regression algorithm.",
    futureScope:
      "Adding AI-based personalized learning recommendations.",
    status: "In Progress",
    image: "https://readyproj.com/wp-content/uploads/2025/10/11-1.png"
  },

  {
    id: 4,
    title: "Hand Gesture Recognition",
    category: "Artificial Intelligence / Computer Vision",
    description:
      "A real-time hand gesture recognition system that detects and classifies gestures using webcam input.",
    detailedDescription:
      "The project uses MediaPipe for hand landmark detection and TensorFlow for gesture classification. It can identify multiple gestures in real time and can be integrated with virtual control systems.",
    tech: [
      "Python",
      "TensorFlow",
      "MediaPipe",
      "OpenCV"
    ],
    features: [
      "Real-time gesture detection",
      "Hand landmark tracking",
      "Custom gesture training",
      "Webcam integration"
    ],
    modules: [
      "Gesture Detection",
      "Feature Extraction",
      "Classification Module"
    ],
    futureScope:
      "Integration with smart home and virtual mouse applications.",
    status: "Completed",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ20JLzpzpWywfhQXmktxgjM_Zj2I5yanH7w&s"
  },

  {
    id: 5,
    title: "Face Recognition System",
    category: "Computer Vision",
    description:
      "A face detection and recognition system for identity verification and attendance management.",
    detailedDescription:
      "The project uses OpenCV and facial encoding techniques to detect and recognize human faces in real time. It can be used in security systems and automated attendance applications.",
    tech: [
      "Python",
      "OpenCV",
      "Face Recognition Library"
    ],
    features: [
      "Real-time face detection",
      "Face recognition",
      "Attendance tracking",
      "Image dataset training"
    ],
    status: "Completed",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgPonW2bQ39JaThAg8Ikc8nmn0Esd_pM4MXA&s"
  },

  {
    id: 6,
    title: "Resume Parser",
    category: "Artificial Intelligence / NLP",
    description:
      "An AI-based resume parser that extracts useful information from resumes automatically.",
    detailedDescription:
      "The system uses Natural Language Processing techniques to extract candidate details such as skills, education, experience, and contact information from PDF and DOCX resumes.",
    tech: [
      "Python",
      "NLP",
      "spaCy",
      "Flask"
    ],
    features: [
      "Resume upload",
      "Automatic information extraction",
      "Skill identification",
      "Structured data output"
    ],
    status: "Completed",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYDUCtM7P2ms9zk8MfbDnYK0Nr3jklxCnPPw&s"
  },

  {
    id: 7,
    title: "Chatbot System",
    category: "Artificial Intelligence",
    description:
      "A chatbot application capable of answering user queries using NLP techniques.",
    detailedDescription:
      "The chatbot processes user input, identifies intent, and provides relevant responses. It can be used for customer support and educational assistance.",
    tech: [
      "Python",
      "NLTK",
      "Flask"
    ],
    features: [
      "Interactive chat interface",
      "Intent recognition",
      "Automated responses",
      "Custom dataset training"
    ],
    status: "Completed",
    image: "https://media.geeksforgeeks.org/wp-content/uploads/20240229133826/Chatbot-Theory.webp"
  },

  {
    id: 8,
    title: "Stock Price Predictor",
    category: "Machine Learning",
    description:
      "A predictive system that forecasts stock market trends using historical data.",
    detailedDescription:
      "The project uses machine learning algorithms and historical stock datasets to predict future price movements and trends.",
    tech: [
      "Python",
      "Pandas",
      "Matplotlib",
      "Machine Learning"
    ],
    features: [
      "Stock trend analysis",
      "Price forecasting",
      "Graph visualization",
      "Historical data analysis"
    ],
    status: "Completed",
    image: "https://cdn.sanity.io/images/khais28p/production/f75da601a32074ec2e3489d19c16fb539d52b6ac-1600x900.png?rect=0,50,1600,800&w=1200&h=600&fm=webp&q=80&fit=crop"
  },

  {
    id: 9,
    title: "Weather App",
    category: "Web Development",
    description:
      "A real-time weather application that displays weather information using APIs.",
    detailedDescription:
      "The application fetches real-time weather data including temperature, humidity, wind speed, and weather conditions using third-party APIs.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Weather API"
    ],
    features: [
      "Live weather updates",
      "City search",
      "Temperature details",
      "Responsive UI"
    ],
    status: "Completed",
    image: "https://m.media-amazon.com/images/I/51IfiEqitAL.png"
  },

  {
    id: 10,
    title: "To-Do App",
    category: "Web Development",
    description:
      "A simple task management application to organize daily activities.",
    detailedDescription:
      "The application allows users to add, edit, delete, and manage tasks efficiently with a clean and responsive interface.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    features: [
      "Add and remove tasks",
      "Task completion tracking",
      "Responsive design",
      "Local storage support"
    ],
    status: "Completed",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSGsF4YHIvQyou0IldLPWzDVihV03k0i-Pag&s"
  },

  {
    id: 11,
    title: "Quiz App",
    category: "Web Development",
    description:
      "An interactive quiz application with timer and score tracking.",
    detailedDescription:
      "The quiz app presents multiple-choice questions with a timer and calculates scores dynamically. It improves user engagement through interactive UI elements.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    features: [
      "Multiple-choice questions",
      "Timer functionality",
      "Score calculation",
      "Result summary"
    ],
    status: "Completed",
    image: "https://wwwcdn.cstmapp.com/real/9/scratch-win_1.jpg"
  },

  {
    id: 12,
    title: "E-commerce Website",
    category: "Full Stack Development",
    description:
      "A complete online shopping platform with product management and user authentication.",
    detailedDescription:
      "The platform includes product listings, cart functionality, authentication, and order management using modern web technologies.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB"
    ],
    features: [
      "User authentication",
      "Shopping cart",
      "Product management",
      "Order processing"
    ],
    status: "Completed",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRKkYC-Ny2E0GJ3fc8UbLDPhk-_HQse0R5Ow&s"
  },

  {
    id: 13,
    title: "Blog Website",
    category: "Full Stack Development",
    description:
      "A blogging platform where users can create and manage articles.",
    detailedDescription:
      "The application provides authentication, blog creation, editing, commenting, and category management functionalities.",
    tech: [
      "React",
      "MongoDB",
      "Node.js"
    ],
    features: [
      "Blog creation",
      "User login system",
      "Comment section",
      "Responsive UI"
    ],
    status: "Completed",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR9gc3TNBDxW8-eA4CQhOYRi2o3Y7uSdxEDg&s"
  },

  {
    id: 14,
    title: "Portfolio Website",
    category: "Frontend Development",
    description:
      "A personal portfolio website showcasing skills, projects, and achievements.",
    detailedDescription:
      "The portfolio website is built using React and modern UI techniques to create a professional online presence.",
    tech: [
      "React",
      "Tailwind CSS",
      "JavaScript"
    ],
    features: [
      "Project showcase",
      "Responsive design",
      "Contact form",
      "Modern animations"
    ],
    status: "Completed",
    image: "https://repository-images.githubusercontent.com/279903174/e6d970ed-8a4d-42fa-9f16-0b7efc34fb95"
  },

  {
    id: 15,
    title: "Hospital Management System",
    category: "Full Stack Development",
    description:
      "A web application for managing hospital operations and patient records.",
    detailedDescription:
      "The project manages patient details, doctor information, appointments, and billing operations using PHP and MySQL.",
    tech: [
      "PHP",
      "MySQL",
      "HTML",
      "CSS"
    ],
    features: [
      "Patient management",
      "Appointment booking",
      "Billing system",
      "Doctor records"
    ],
    status: "Completed",
    image: "https://www.karexpert.com/wp-content/uploads/2024/06/HIMS7.webp"
  },

  {
    id: 16,
    title: "Library M",
    category: "Java Development",
    description:
      "A Java-based system for managing library books and records.",
    detailedDescription:
      "The application allows librarians to manage books, student records, issue/return functionality, and due date tracking.",
    tech: [
      "Java",
      "OOP"
    ],
    features: [
      "Book issue and return",
      "Student record management",
      "Search functionality",
      "Fine calculation"
    ],
    status: "Completed",
    image: "https://media.geeksforgeeks.org/wp-content/uploads/20240711120751/Library-Management-System-Design.webp"
  },

  {
    id:17,
    title: "Bank Management System",
    category: "Java Development",
    description:
      "A banking application for managing customer accounts and transactions.",
    detailedDescription:
      "The project handles account creation, deposits, withdrawals, balance checking, and transaction history using Java.",
    tech: [
      "Java",
      "File Handling",
      "OOP"
    ],
    features: [
      "Account management",
      "Deposit and withdrawal",
      "Transaction history",
      "Balance inquiry"
    ],
    status: "Completed",
    image: "https://cdn.slidesharecdn.com/ss_thumbnails/cpe20ppt1-230215145948-25b1fd17-thumbnail.jpg?width=640&height=640&fit=bounds"
  },

  {
    id:18,
    title: "URL Shortener",
    category: "Backend Development",
    description:
      "A backend application that converts long URLs into short and shareable links.",
    detailedDescription:
      "The system generates unique short URLs and redirects users to the original links while tracking usage statistics.",
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB"
    ],
    features: [
      "Short URL generation",
      "Redirection support",
      "Analytics tracking",
      "Database integration"
    ],
    status: "Completed",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR13tKqx4jTwKwhzP90OeWiNVJA9u4ahlZLvg&s"
  },

  {
    id:19,
    title: "Chat Application",
    category: "Full Stack Development",
    description:
      "A real-time chat application with instant messaging support.",
    detailedDescription:
      "The application uses Socket.io for real-time communication between users and supports multiple chat rooms.",
    tech: [
      "Node.js",
      "Socket.io",
      "Express.js"
    ],
    features: [
      "Real-time messaging",
      "Multiple chat rooms",
      "Online user tracking",
      "Instant updates"
    ],
    status: "Completed",
    image: "https://media.geeksforgeeks.org/wp-content/uploads/20240223113231/Online-Chat-Application.webp"
  },

  {
    id:20,
    title: "File Upload System",
    category: "Backend Development",
    description:
      "A backend-based file management system for uploading and storing files securely.",
    detailedDescription:
      "The project allows users to upload, manage, and download files with server-side validation and storage handling.",
    tech: [
      "Node.js",
      "Express.js",
      "Multer"
    ],
    features: [
      "File upload",
      "File validation",
      "Secure storage",
      "Download functionality"
    ],
    status: "Completed",
    image: "https://blog.pixelfreestudio.com/wp-content/uploads/2024/08/6-1-1-1024x576.jpg"
  }
],

  certifications: [
    { title: "Java - NPTEL", year: "2024" },
    { title: "Full Stack Internship - CodeAlpha", year: "2024" },
    { title: "Python Internship - CODSOFT", year: "2024" },
    { title: "Machine Learning - Coursera", year: "2025" },
    { title: "React - Udemy", year: "2025" },
    { title: "DSA in Java", year: "2025" },
    { title: "Web Development Bootcamp", year: "2025" }
  ],

  experience: [
    {
      company: "CodeAlpha",
      role: "Full Stack Intern",
      duration: "2024"
    },
    {
      company: "CODSOFT",
      role: "Python Intern",
      duration: "2024"
    }
  ],

  achievements: [
    "Built 20+ projects",
    "Completed 3 internships",
    "Strong in Java & ML"
  ],

  blogs: [
    {
      title: "How ML Works",
      date: "2025"
    },
    {
      title: "React Basics",
      date: "2025"
    }
  ],

  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourprofile"
  }
};
