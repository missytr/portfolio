export const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      cv: "Resume",
      contact: "Contact"
    },

    // Header
    header: {
      role: "Software Engineer"
    },

    // Home Page
    home: {
      statusBadge: "Software Engineer • Ho Chi Minh City, Vietnam",
      name: "Tran Khanh Linh",
      subheading: "Software Engineer focusing on modern web applications and enterprise management systems.",
      bio: "Formally educated in Information Technology at Ho Chi Minh City University of Technology (HUTECH) with a cumulative GPA of 3.39/4.0. Over 7 months of hands-on experience in the IT Department at C.P. Group Vietnam, directly designing, building, and deploying (Go-Live) inventory management systems, production tracking portals, and Zalo Mini Apps. Dedicated to delivering clean, scalable architecture, reliable performance, and impactful business solutions.",
      btnProjects: "View All Projects",
      btnAbout: "About Me",
      skillsLabel: "Core Tech Stack:",
      portraitCaption: "Software Engineer @ HUTECH & C.P. Vietnam",

      // Metrics
      metrics: [
        { value: "07+ Months", label: "Practical Experience", detail: "Internal business systems at C.P. Vietnam" },
        { value: "3.39 / 4.0", label: "Cumulative GPA", detail: "IT Major - HUTECH University" },
        { value: "03 Systems", label: "Production Go-Live", detail: "Premix Stock Monitor, IR Tracking, Zalo Mini App" },
        { value: "Semi-Finalist", label: "IT Got Talent 2025", detail: "Skill Coder E-Learning Platform" }
      ],

      // Core Capabilities
      capabilitiesKicker: "Core Competencies",
      capabilitiesTitle: "Focus Areas",
      capabilitiesSubtitle: "Engineering principles and solution design approach",
      capabilitiesLink: "Explore Production Work →",
      capabilities: [
        {
          step: "01",
          title: "Enterprise Solutions",
          role: "Enterprise Systems",
          desc: "Developing mission-critical internal web systems for warehouse inventory control, production monitoring, and business process automation with robust data integrity.",
          highlightsLabel: "Core focus:",
          highlights: ["Data pipeline standardization", "RBAC & operational controls", "End-user workflow optimization"]
        },
        {
          step: "02",
          title: "Modern Frontend Architecture",
          role: "Frontend Architecture",
          desc: "Designing modular, component-driven interfaces with ReactJS and TypeScript, optimizing page load performance, cross-device responsiveness, and mobile Zalo Mini Apps.",
          highlightsLabel: "Core focus:",
          highlights: ["Clean code & reusable UI components", "Efficient state management", "Sub-second UI response time"]
        },
        {
          step: "03",
          title: "API Integration & Databases",
          role: "Integration & Database",
          desc: "Securely connecting complex enterprise data sources from Oracle Database via internal API gateways, designing relational schemas, and optimizing queries in SQL Server.",
          highlightsLabel: "Core focus:",
          highlights: ["Real-time data synchronization", "Strict RESTful API contracts", "System security & service stability"]
        }
      ]
    },

    // Projects Page
    projects: {
      kicker: "Hands-on Experience & Portfolio",
      heading: "Featured Projects",
      lead: "Enterprise software solutions at C.P. Vietnam, award-winning EdTech platforms, and production-grade web applications.",
      categories: {
        all: "All Projects",
        enterprise: "C.P. Vietnam (Enterprise & App)",
        frontend: "Frontend Web",
        mobile: "Mobile & Mini App",
        fullstack: "Full Stack"
      },
      keyFeaturesLabel: "Key Features:",
      viewDemo: "View Live Demo →",
      items: [
        {
          id: 1,
          title: "Premix Stock Monitor",
          company: "C.P. Group Vietnam (IT Department)",
          desc: "Enterprise web application for monitoring and tracking premix inventory for corporate manufacturing operations. Directly integrated enterprise Oracle Database records via internal API Center for real-time synchronization.",
          tech: ["ReactJS", "Oracle Database", "Internal API Center", "Data Tables", "CSS Modules"],
          categories: ["enterprise", "frontend"],
          status: "Production Go-Live",
          year: "2026",
          role: "Frontend Developer",
          features: [
            "Real-time inventory tracking and dynamic status dashboards",
            "Secure enterprise synchronization via internal API Gateway",
            "Intuitive safety-threshold alerts to prevent stockouts and audit errors"
          ]
        },
        {
          id: 2,
          title: "Web IR Daily Tracking",
          company: "C.P. Group Vietnam (IT Department)",
          desc: "Internal operational web application streamlining daily production tracking and cross-departmental data management, built on ReactJS, Node.js, and SQL Server.",
          tech: ["ReactJS", "Node.js", "Express", "SQL Server", "RESTful API"],
          categories: ["enterprise", "fullstack"],
          status: "Production Go-Live",
          year: "2026",
          role: "Fullstack Developer",
          features: [
            "Production schedule tracking and daily operational data flows",
            "REST API architecture integrated with relational SQL Server schema",
            "Collaborated directly with end-users to implement and troubleshoot requirements"
          ]
        },
        {
          id: 3,
          title: "Loyalty - Zalo Mini App",
          company: "C.P. Group Vietnam (IT Department)",
          desc: "Customer loyalty and engagement application running natively on the Zalo Mini App platform, engineered for smooth interaction across diverse mobile devices.",
          tech: ["React", "Zalo Mini App SDK", "Mobile UI Components", "REST API"],
          categories: ["enterprise", "mobile", "frontend"],
          status: "Production Go-Live",
          year: "2026",
          role: "Frontend Developer",
          features: [
            "Seamless integration with Zalo's mobile user ecosystem",
            "Modern, touch-optimized mobile interface and UI components",
            "Optimized component render speed and high operational reliability"
          ]
        },
        {
          id: 4,
          title: "Skill Coder Platform",
          company: "Semi-Finalist IT Got Talent 2025",
          desc: "Personalized online coding platform with interactive pathways and responsive UX, reaching the Semi-Finals of the IT Got Talent 2025 competition.",
          tech: ["ReactJS", "HTML5/CSS3", "REST APIs", "Vercel Deployment"],
          categories: ["frontend"],
          status: "Semi-Finalist",
          year: "2024 - 2025",
          role: "Frontend Developer",
          link: "https://skillcoder-three.vercel.app/",
          features: [
            "Visualized learning roadmaps combined with hands-on practice quizzes",
            "Improved page load performance by ~20% through asset optimization",
            "Presented and pitched technical solutions at IT Got Talent Semi-Finals"
          ]
        },
        {
          id: 5,
          title: "Forum Web Application",
          company: "Personal Project",
          desc: "Online discussion and technical forum developed with React and modern state management, supporting secure authentication and fast search capabilities.",
          tech: ["React", "JavaScript", "State Management", "Git"],
          categories: ["frontend"],
          status: "Completed",
          year: "2025",
          role: "Frontend Developer",
          features: [
            "User authentication and secure session management",
            "Post creation, threading comments, and content discovery",
            "5-member agile team collaboration via Git and GitHub"
          ]
        },
        {
          id: 6,
          title: "English 6 Mobile App",
          company: "EdTech Mobile Project",
          desc: "Cross-platform mobile application built with Flutter to help 6th-grade students practice English grammar, vocabulary, and interactive exercises.",
          tech: ["Flutter", "Dart", "Mobile UI/UX"],
          categories: ["mobile"],
          status: "Completed",
          year: "2025",
          role: "Mobile Developer",
          features: [
            "Kid-friendly, accessible interface optimized for young learners",
            "Multiple-choice quizzes and fill-in-the-blank interactive modules",
            "Offline-friendly study session support"
          ]
        },
        {
          id: 7,
          title: "Sales Management System",
          company: "Academic Project",
          desc: "Comprehensive sales and inventory management web app featuring product catalogs, shopping cart, order tracking, and query optimization.",
          tech: ["C#", "ASP.NET", "SQL Server"],
          categories: ["fullstack"],
          status: "Completed",
          year: "2023 - 2024",
          role: "Fullstack Developer",
          features: [
            "Standard MVC architectural pattern",
            "Cart management, checkout logic, and order state transitions",
            "Optimized relational SQL Server database schema and queries"
          ]
        }
      ]
    },

    // About Page
    about: {
      kicker: "Professional Profile & Education",
      heading: "About Me",
      lead: "Software Engineer committed to high reliability, solving real-world operational challenges, and delivering delightful user experiences.",
      tabs: {
        overview: "Overview & Education",
        experience: "Work Experience",
        skills: "Technical Skills",
        achievements: "Certificates & Awards"
      },
      profile: {
        role: "Software Engineer",
        location: "Ho Chi Minh City, Vietnam",
        bio1: "I am a Software Engineer with over 7 months of hands-on experience building enterprise-grade applications in the IT Department at C.P. Group Vietnam.",
        bio2: "Formally educated in Information Technology at Ho Chi Minh City University of Technology (HUTECH) with a cumulative GPA of 3.39/4.0. My core technical strengths include ReactJS, TypeScript, RESTful API integration, SQL Server and Oracle relational databases, and mobile Zalo Mini App engineering.",
        interestsLabel: "Personal Interests:",
        interests: ["Technical Reading", "Distance Running", "Travel & Exploration"]
      },
      education: {
        header: "Formal Education",
        school: "Ho Chi Minh City University of Technology (HUTECH)",
        field: "Bachelor of Information Technology",
        period: "2022 - 2026",
        gpaNum: "3.39 / 4.0",
        gpaLabel: "Cumulative Grade Point Average (GPA)",
        timelineHeading: "Academic & Career Milestones:",
        timeline: [
          {
            period: "2022 - 2026",
            title: "HUTECH University",
            desc: "Majored in Information Technology, graduating with a high GPA of 3.39 / 4.0."
          },
          {
            period: "2024 - 2025",
            title: "Skill Coder & Semi-Finalist IT Got Talent",
            desc: "Built a responsive online learning platform with React and REST APIs, improving page speed by 20% and reaching the Semi-Finals."
          },
          {
            period: "10/2025",
            title: "Google Gemini Certified Educator",
            desc: "Certified by Google for Education in applying modern artificial intelligence (AI) tools to professional workflows."
          },
          {
            period: "2026 - Present",
            title: "Software Engineer @ C.P. Vietnam (IT Department)",
            desc: "Developed and successfully put into production (Go-Live) 3 corporate systems: Premix Stock Monitor, Web IR Daily Tracking, and Zalo Mini App."
          }
        ]
      },
      workExperience: [
        {
          company: "C.P. Group Vietnam (IT Department)",
          role: "Frontend Developer",
          project: "Premix Stock Monitor",
          period: "07/2026 - Present",
          status: "Production Go-Live",
          highlights: [
            "Developed a stock monitoring web interface using ReactJS to track premix inventory efficiently for production operations.",
            "Integrated enterprise data from Oracle databases through the company's internal API Center for real-time synchronization.",
            "Built user-friendly data tables and status indicators to help operations teams monitor stock levels accurately."
          ]
        },
        {
          company: "C.P. Group Vietnam (IT Department)",
          role: "Fullstack Developer",
          project: "Web IR Daily Tracking",
          period: "05/2026 - 06/2026",
          status: "Production Go-Live",
          highlights: [
            "Developed an internal web application using ReactJS, Node.js, and SQL Server to streamline operational tracking and data management.",
            "Built responsive frontend interfaces, connected backend APIs, and managed database schemas for reliable data storage and retrieval.",
            "Collaborated directly with end-users and cross-functional teams to analyze requirements, implement core features, and resolve production issues."
          ]
        },
        {
          company: "C.P. Group Vietnam (IT Department)",
          role: "Frontend Developer",
          project: "Loyalty - Zalo Mini App",
          period: "04/2026 - 05/2026",
          status: "Production Go-Live",
          highlights: [
            "Designed and developed a Zalo Mini App frontend using React and modern UI components to enhance customer engagement.",
            "Integrated backend APIs and coordinated with design and BA teams to deliver smooth interactive user experiences.",
            "Optimized component performance and ensured responsiveness across mobile platforms."
          ]
        }
      ],
      skillsCategories: [
        {
          category: "Frontend & Mobile",
          items: ["ReactJS", "TypeScript", "JavaScript (ES6+)", "HTML5 & CSS3", "Zalo Mini App", "Flutter", "Responsive Web Design"]
        },
        {
          category: "Backend & Systems",
          items: ["Node.js", "Express", "RESTful API Integration", "C#", "Java", "Oracle API Center Integration"]
        },
        {
          category: "Databases & Storage",
          items: ["SQL Server", "PostgreSQL", "Oracle Database", "Database Schema Design"]
        },
        {
          category: "Tools & Development Workflow",
          items: ["Git & GitHub", "WordPress", "VS Code", "Postman", "CI/CD & Deployment"]
        }
      ],
      softSkillsTitle: "Soft Skills & Work Ethic",
      softSkills: [
        "Analytical & Technical Problem-Solving",
        "Cross-functional Teamwork & Collaboration",
        "Stakeholder Communication & Requirement Gathering",
        "Fast Learning Agility & Continuous Adaptation",
        "Time Management & On-Schedule Delivery"
      ],
      achievements: [
        {
          type: "Google for Education",
          title: "Gemini Certified Educator",
          issuer: "Google for Education",
          period: "10/2025 - 10/2028",
          desc: "Certified by Google for Education in applying advanced AI tools to technical workflows and educational practices."
        },
        {
          type: "Tech Competition",
          title: "Semi-Finalist IT Got Talent 2025",
          issuer: "IT Got Talent Competition",
          period: "09/2025 - 11/2025",
          desc: "Reached the Semi-Finals with Skill Coder E-Learning Platform, highly praised for user accessibility and performance."
        },
        {
          type: "Computer Networking",
          title: "Networking Basics",
          issuer: "Cisco Networking Academy",
          period: "2025",
          desc: "Completed foundational coursework in computer networking, protocols, and network architectures."
        },
        {
          type: "Programming Certificate",
          title: "JavaScript Essentials",
          issuer: "Cisco Networking Academy",
          period: "2025",
          desc: "Comprehensive certification covering modern JavaScript algorithms, data structures, and asynchronous programming."
        }
      ]
    },

    // CV Page
    cv: {
      kicker: "Curriculum Vitae",
      heading: "Curriculum Vitae",
      lead: "Tran Khanh Linh • Software Engineer • HUTECH (GPA 3.39/4.0)",
      modeInteractive: "Interactive View",
      modePdf: "PDF View",
      downloadPdf: "Download CV (PDF)",
      mobileFallbackNotice: "Mobile Tip: For the best viewing experience, open or download the PDF file directly.",
      openPdfFullscreen: "Open Fullscreen PDF ↗",
      sections: {
        summary: "Professional Summary",
        education: "Education",
        experience: "Work Experience",
        projects: "Selected Projects",
        skills: "Skills",
        certifications: "Certifications & Honors"
      },
      summaryText: "Software Engineer with over 7 months of hands-on experience developing internal business applications at C.P. Vietnam. Experienced in building responsive web applications and enterprise systems using ReactJS, TypeScript, Node.js, and SQL Server. Contributed to projects involving inventory monitoring, production tracking, and Zalo Mini Apps, gaining practical experience in frontend development, backend API integration, and database design. Eager to apply technical knowledge, solve real-world problems, and contribute to building reliable and efficient software solutions.",
      educationDetails: {
        school: "Ho Chi Minh City University of Technology (HUTECH)",
        period: "2022 - 2026",
        major: "Information Technology",
        gpa: "3.39 / 4.0"
      },
      skillsLabels: {
        technical: "Technical Skills:",
        soft: "Soft Skills:"
      }
    },

    // Contact Page
    contact: {
      kicker: "Get In Touch",
      heading: "Let's Connect",
      lead: "Open to new full-time software engineering roles, project collaborations, or technical discussions.",
      channelsHeading: "Direct Channels",
      channelsSub: "Fastest ways to reach me",
      methods: [
        {
          title: "Direct Email",
          value: "trankhanhlinh.lt@gmail.com",
          link: "mailto:trankhanhlinh.lt@gmail.com",
          note: "Priority response within 24 business hours"
        },
        {
          title: "Phone Call",
          value: "(+84) 907 253 408",
          link: "tel:+84907253408",
          note: "Available during standard business hours"
        },
        {
          title: "Location",
          value: "Ho Chi Minh City, Vietnam",
          link: "https://maps.google.com/?q=Ho+Chi+Minh+City",
          note: "Working Timezone: GMT+7"
        },
        {
          title: "Zalo / Mobile",
          value: "(+84) 907 253 408",
          link: "https://zalo.me/84907253408",
          note: "Direct instant messaging"
        }
      ],
      socialHeading: "Online Profiles",
      policyTitle: "Work & Communication Commitment",
      policies: [
        "Available: Monday – Saturday (08:00 – 18:00 GMT+7).",
        "Email inquiries answered within 24 working hours.",
        "Available for Full-time, Hybrid, or On-site roles in Ho Chi Minh City."
      ],
      formHeading: "Send a Message",
      formSub: "Fill in the details below to email me directly",
      nameLabel: "Your Name *",
      namePlaceholder: "e.g. John Doe",
      emailLabel: "Email Address *",
      emailPlaceholder: "your.email@example.com",
      subjectLabel: "Purpose of Inquiry",
      subjectDefault: "Select inquiry subject",
      subjectJob: "Job Opportunity / Recruitment",
      subjectProject: "Software Development Collaboration",
      subjectConsult: "Technical Consultation",
      subjectOther: "Other Discussion",
      messageLabel: "Message Content *",
      messagePlaceholder: "Write your message or inquiry details here...",
      btnSubmit: "Send Message",
      btnSubmitting: "Sending...",
      successAlert: "Thank you! Your message has been sent successfully. I will respond to your email as soon as possible.",
      errorAlert: "An error occurred while sending your message. Please contact me directly via email: trankhanhlinh.lt@gmail.com",
      errors: {
        name: "Please enter your name",
        email: "Please enter your email",
        emailInvalid: "Please enter a valid email address",
        message: "Please enter a message",
        messageMin: "Message must be at least 10 characters"
      }
    },

    // Footer
    footer: {
      bio: "Information Technology graduate from Ho Chi Minh City University of Technology (HUTECH) with hands-on enterprise software development experience at C.P. Vietnam.",
      navHeading: "Navigation",
      contactHeading: "Contact Details",
      connectHeading: "Platforms",
      rights: "All rights reserved.",
      techNote: "Built with ReactJS & pure CSS."
    }
  },

  vi: {
    // Navigation
    nav: {
      home: "Trang chủ",
      about: "Giới thiệu",
      projects: "Dự án",
      cv: "Hồ sơ CV",
      contact: "Liên hệ"
    },

    // Header
    header: {
      role: "Software Engineer"
    },

    // Home Page
    home: {
      statusBadge: "Software Engineer • TP. Hồ Chí Minh",
      name: "Trần Khánh Linh",
      subheading: "Kỹ sư phần mềm tập trung vào phát triển ứng dụng web và hệ thống quản lý doanh nghiệp.",
      bio: "Được đào tạo bài bản chuyên ngành Công nghệ Thông tin tại Đại học Công nghệ TP.HCM (HUTECH) với GPA 3.39/4. Hơn 7 tháng kinh nghiệm thực tế tại phòng IT C.P. Group Vietnam, trực tiếp xây dựng và đưa vào vận hành (Go-Live) các hệ thống quản trị kho, giám sát tiến độ và ứng dụng Zalo Mini App. Định hướng phát triển các giải pháp phần mềm ổn định, kiến trúc sạch và mang lại giá trị vận hành thực tiễn.",
      btnProjects: "Xem toàn bộ dự án",
      btnAbout: "Tìm hiểu về tôi",
      skillsLabel: "Công nghệ sử dụng:",
      portraitCaption: "Software Engineer @ HUTECH & C.P. Vietnam",

      // Metrics
      metrics: [
        { value: "07+ Tháng", label: "Kinh nghiệm thực chiến", detail: "Phát triển ứng dụng nội bộ tại C.P. Vietnam" },
        { value: "3.39 / 4.0", label: "Điểm tích lũy GPA", detail: "Ngành CNTT - ĐH Công nghệ TP.HCM (HUTECH)" },
        { value: "03 Dự án", label: "Hệ thống Go-Live", detail: "Premix Stock Monitor, IR Tracking, Zalo Mini App" },
        { value: "Bán kết", label: "IT Got Talent 2025", detail: "Dự án Nền tảng học trực tuyến Skill Coder" }
      ],

      // Core Capabilities
      capabilitiesKicker: "Năng lực chuyên môn",
      capabilitiesTitle: "Lĩnh vực trọng tâm",
      capabilitiesSubtitle: "Phương pháp tiếp cận và định hướng giải pháp kỹ thuật",
      capabilitiesLink: "Xem sản phẩm thực tế →",
      capabilities: [
        {
          step: "01",
          title: "Ứng dụng Doanh nghiệp",
          role: "Enterprise Systems",
          desc: "Xây dựng các hệ thống web nội bộ phục vụ quy trình quản lý tồn kho, giám sát tiến độ sản xuất và nghiệp vụ chuyên sâu với tính toàn vẹn dữ liệu cao.",
          highlightsLabel: "Định hướng cốt lõi:",
          highlights: ["Chuẩn hóa luồng dữ liệu", "Phân quyền & Kiểm soát nghiệp vụ", "Tối ưu hóa thao tác người dùng"]
        },
        {
          step: "02",
          title: "Kiến trúc Frontend Hiện đại",
          role: "Frontend Architecture",
          desc: "Thiết kế component hóa trên nền tảng ReactJS và TypeScript, tối ưu hóa tốc độ tải trang, tương thích responsive đa thiết bị và tích hợp Zalo Mini App.",
          highlightsLabel: "Định hướng cốt lõi:",
          highlights: ["Clean code & Reusable UI", "State Management hiệu quả", "Tối ưu thời gian phản hồi UI"]
        },
        {
          step: "03",
          title: "Tích hợp API & Dữ liệu",
          role: "Integration & Database",
          desc: "Kết nối an toàn các nguồn dữ liệu phức tạp từ Oracle Database qua cổng API Center nội bộ, thiết kế schema và tối ưu truy vấn trên SQL Server.",
          highlightsLabel: "Định hướng cốt lõi:",
          highlights: ["Đồng bộ dữ liệu thời gian thực", "RESTful API chuẩn mực", "Bảo mật & Ổn định dịch vụ"]
        }
      ]
    },

    // Projects Page
    projects: {
      kicker: "Kinh nghiệm thực tiễn & Sản phẩm",
      heading: "Danh mục dự án",
      lead: "Các giải pháp phần mềm doanh nghiệp tại C.P. Vietnam, sản phẩm EdTech đạt giải thưởng và các ứng dụng web chuyên nghiệp.",
      categories: {
        all: "Tất cả dự án",
        enterprise: "C.P. Vietnam (Enterprise & App)",
        frontend: "Frontend Web",
        mobile: "Mobile & Mini App",
        fullstack: "Full Stack"
      },
      keyFeaturesLabel: "Đặc điểm chính:",
      viewDemo: "Xem trực tiếp Demo →",
      items: [
        {
          id: 1,
          title: "Premix Stock Monitor",
          company: "C.P. Group Vietnam (IT Department)",
          desc: "Hệ thống web giám sát và quản lý tồn kho nguyên liệu premix cho bộ phận vận hành doanh nghiệp. Tích hợp trực tiếp dữ liệu Oracle Database qua API Center nội bộ để đồng bộ hóa số liệu tức thời.",
          tech: ["ReactJS", "Oracle Database", "Internal API Center", "Data Tables", "CSS Modules"],
          categories: ["enterprise", "frontend"],
          status: "Production Go-Live",
          year: "2026",
          role: "Frontend Developer",
          features: [
            "Theo dõi tồn kho theo thời gian thực (Real-time monitoring)",
            "Đồng bộ hóa an toàn từ Oracle Database qua API Gateway",
            "Giao diện phân tích và cảnh báo ngưỡng tồn kho an toàn"
          ]
        },
        {
          id: 2,
          title: "Web IR Daily Tracking",
          company: "C.P. Group Vietnam (IT Department)",
          desc: "Ứng dụng web nội bộ chuẩn hóa quy trình theo dõi vận hành hàng ngày và quản lý dữ liệu cho các phòng ban, xây dựng trên nền tảng ReactJS kết hợp backend Node.js và SQL Server.",
          tech: ["ReactJS", "Node.js", "Express", "SQL Server", "RESTful API"],
          categories: ["enterprise", "fullstack"],
          status: "Production Go-Live",
          year: "2026",
          role: "Fullstack Developer",
          features: [
            "Quản lý lịch trình và tiến độ vận hành sản xuất",
            "Kiến trúc REST API kết hợp cơ sở dữ liệu quan hệ SQL Server",
            "Làm việc trực tiếp với người dùng cuối để xử lý yêu cầu thực tế"
          ]
        },
        {
          id: 3,
          title: "Loyalty - Zalo Mini App",
          company: "C.P. Group Vietnam (IT Department)",
          desc: "Ứng dụng chăm sóc khách hàng thân thiết chạy trực tiếp trên nền tảng Zalo Mini App, tối ưu hiển thị mượt mà trên đa dạng thiết bị di động của người dùng.",
          tech: ["React", "Zalo Mini App SDK", "Mobile UI Components", "REST API"],
          categories: ["enterprise", "mobile", "frontend"],
          status: "Production Go-Live",
          year: "2026",
          role: "Frontend Developer",
          features: [
            "Tích hợp sâu với hệ sinh thái người dùng Zalo",
            "Thiết kế giao diện hiện đại, tối ưu trải nghiệm chạm trên mobile",
            "Đảm bảo tốc độ tải trang nhanh và vận hành ổn định"
          ]
        },
        {
          id: 4,
          title: "Skill Coder Platform",
          company: "Semi-Finalist IT Got Talent 2025",
          desc: "Nền tảng học lập trình trực tuyến cá nhân hóa lộ trình, tối ưu trải nghiệm người dùng và đạt thành tích Bán kết toàn cuộc thi IT Got Talent 2025.",
          tech: ["ReactJS", "HTML5/CSS3", "REST APIs", "Vercel Deployment"],
          categories: ["frontend"],
          status: "Semi-Finalist",
          year: "2024 - 2025",
          role: "Frontend Developer",
          link: "https://skillcoder-three.vercel.app/",
          features: [
            "Lộ trình học trực quan hóa kết hợp bài tập thực hành",
            "Tối ưu 20% tốc độ tải trang thông qua tối ưu hóa assets",
            "Báo cáo và thuyết trình giải pháp tại vòng bán kết IT Got Talent"
          ]
        },
        {
          id: 5,
          title: "Forum Web Application",
          company: "Dự án cá nhân",
          desc: "Diễn đàn trao đổi thảo luận trực tuyến phát triển bằng React với kiến trúc component phân lớp, xác thực người dùng và tìm kiếm thông minh.",
          tech: ["React", "JavaScript", "State Management", "Git"],
          categories: ["frontend"],
          status: "Completed",
          year: "2025",
          role: "Frontend Developer",
          features: [
            "Xác thực tài khoản và quản trị phiên đăng nhập an toàn",
            "Đăng bài, bình luận, tương tác người dùng",
            "Làm việc nhóm 5 thành viên thông qua Git và GitHub"
          ]
        },
        {
          id: 6,
          title: "English 6 Mobile App",
          company: "EdTech Mobile Project",
          desc: "Ứng dụng di động xây dựng bằng Flutter giúp học sinh lớp 6 ôn tập ngữ pháp, từ vựng và làm bài tập tương tác tiếng Anh sinh động.",
          tech: ["Flutter", "Dart", "Mobile UI/UX"],
          categories: ["mobile"],
          status: "Completed",
          year: "2025",
          role: "Mobile Developer",
          features: [
            "Giao diện thân thiện và dễ sử dụng cho học sinh",
            "Hệ thống bài tập trắc nghiệm và điền từ tương tác",
            "Hỗ trợ học tập độc lập linh hoạt"
          ]
        },
        {
          id: 7,
          title: "Sales Management System",
          company: "Academic Project",
          desc: "Hệ thống quản lý bán hàng toàn diện với danh mục sản phẩm, giỏ hàng, đặt hàng và theo dõi đơn hàng được tối ưu hóa truy vấn.",
          tech: ["C#", "ASP.NET", "SQL Server"],
          categories: ["fullstack"],
          status: "Completed",
          year: "2023 - 2024",
          role: "Fullstack Developer",
          features: [
            "Mô hình kiến trúc MVC tiêu chuẩn",
            "Quản lý giỏ hàng và xử lý đơn hàng",
            "Tối ưu hóa các truy vấn cơ sở dữ liệu SQL Server"
          ]
        }
      ]
    },

    // About Page
    about: {
      kicker: "Hồ sơ năng lực & Quá trình đào tạo",
      heading: "Giới thiệu bản thân",
      lead: "Kỹ sư phần mềm tập trung vào tính tin cậy, giải quyết bài toán vận hành thực tế và chất lượng trải nghiệm người dùng.",
      tabs: {
        overview: "Tổng quan & Học vấn",
        experience: "Kinh nghiệm làm việc",
        skills: "Kỹ năng chuyên môn",
        achievements: "Chứng chỉ & Giải thưởng"
      },
      profile: {
        role: "Software Engineer",
        location: "TP. Hồ Chí Minh, Việt Nam",
        bio1: "Tôi là Software Engineer với hơn 7 tháng kinh nghiệm thực chiến phát triển các giải pháp phần mềm doanh nghiệp tại C.P. Group Vietnam.",
        bio2: "Được đào tạo chính quy ngành Công nghệ Thông tin tại Đại học Công nghệ TP.HCM (HUTECH) với GPA 3.39/4. Thế mạnh chính của tôi bao gồm phát triển web ứng dụng với ReactJS, TypeScript, tích hợp RESTful API, hệ thống cơ sở dữ liệu SQL Server/Oracle, và xây dựng ứng dụng di động Zalo Mini App.",
        interestsLabel: "Sở thích cá nhân:",
        interests: ["Đọc sách chuyên môn", "Chạy bộ rèn luyện", "Du lịch khám phá"]
      },
      education: {
        header: "Học vấn chính quy",
        school: "Đại học Công nghệ TP.HCM (HUTECH)",
        field: "Ngành Công nghệ Thông tin (Information Technology)",
        period: "Niên khóa: 2022 - 2026",
        gpaNum: "3.39 / 4.0",
        gpaLabel: "Điểm Trung Bình Tích Lũy Toàn Khóa",
        timelineHeading: "Lộ trình học tập & Nghề nghiệp:",
        timeline: [
          {
            period: "2022 - 2026",
            title: "Đại học Công nghệ TP.HCM (HUTECH)",
            desc: "Theo học chuyên ngành Công nghệ Thông tin, tốt nghiệp với điểm trung bình tích lũy GPA 3.39 / 4.0."
          },
          {
            period: "2024 - 2025",
            title: "Nền tảng Skill Coder & Bán kết IT Got Talent",
            desc: "Xây dựng nền tảng học trực tuyến bằng React và REST API, tối ưu 20% tốc độ tải trang và đạt giải Bán kết toàn cuộc thi."
          },
          {
            period: "10/2025",
            title: "Chứng chỉ Google Gemini Certified Educator",
            desc: "Được Google chứng nhận năng lực ứng dụng công cụ trí tuệ nhân tạo (AI) trong thực hành chuyên môn."
          },
          {
            period: "2026 - Hiện tại",
            title: "Kỹ sư phần mềm tại C.P. Vietnam (IT Department)",
            desc: "Phát triển và triển khai thành công 3 hệ thống thực tế: Premix Stock Monitor, Web IR Daily Tracking và Zalo Mini App."
          }
        ]
      },
      workExperience: [
        {
          company: "C.P. Group Vietnam (IT Department)",
          role: "Frontend Developer",
          project: "Premix Stock Monitor",
          period: "07/2026 - Hiện tại",
          status: "Production Go-Live",
          highlights: [
            "Phát triển giao diện web theo dõi và giám sát tồn kho nguyên liệu premix bằng ReactJS phục vụ nghiệp vụ vận hành sản xuất.",
            "Tích hợp luồng dữ liệu thời gian thực từ Oracle Database thông qua cổng API Center nội bộ doanh nghiệp.",
            "Xây dựng bảng dữ liệu trực quan và các chỉ số cảnh báo ngưỡng an toàn giúp giảm thiểu sai sót đối soát thủ công."
          ]
        },
        {
          company: "C.P. Group Vietnam (IT Department)",
          role: "Fullstack Developer",
          project: "Web IR Daily Tracking",
          period: "05/2026 - 06/2026",
          status: "Production Go-Live",
          highlights: [
            "Xây dựng web application nội bộ sử dụng ReactJS, Node.js và SQL Server để chuẩn hóa quy trình theo dõi vận hành hàng ngày.",
            "Thiết kế giao diện responsive, kết nối REST API backend và quản lý cấu trúc schema cơ sở dữ liệu tin cậy.",
            "Làm việc trực tiếp với người dùng cuối và các nhóm liên quan để phân tích nghiệp vụ và xử lý sự cố môi trường production."
          ]
        },
        {
          company: "C.P. Group Vietnam (IT Department)",
          role: "Frontend Developer",
          project: "Loyalty - Zalo Mini App",
          period: "04/2026 - 05/2026",
          status: "Production Go-Live",
          highlights: [
            "Thiết kế và phát triển giao diện Zalo Mini App bằng React và thư viện UI hiện đại nhằm tăng tương tác người dùng thân thiết.",
            "Tích hợp API backend, phối hợp cùng đội ngũ thiết kế và BA để mang lại trải nghiệm tương tác mượt mà trên mobile.",
            "Tối ưu hóa hiệu năng render component và kiểm thử tương thích đa thiết bị di động."
          ]
        }
      ],
      skillsCategories: [
        {
          category: "Frontend & Mobile",
          items: ["ReactJS", "TypeScript", "JavaScript (ES6+)", "HTML5 & CSS3", "Zalo Mini App", "Flutter", "Responsive Web Design"]
        },
        {
          category: "Backend & Systems",
          items: ["Node.js", "Express", "RESTful API Integration", "C#", "Java", "Oracle API Center Integration"]
        },
        {
          category: "Databases & Storage",
          items: ["SQL Server", "PostgreSQL", "Oracle Database", "Database Schema Design"]
        },
        {
          category: "Tools & Development Workflow",
          items: ["Git & GitHub", "WordPress", "VS Code", "Postman", "CI/CD & Deployment"]
        }
      ],
      softSkillsTitle: "Kỹ năng mềm & Tác phong làm việc",
      softSkills: [
        "Giải quyết vấn đề kỹ thuật (Problem-Solving)",
        "Làm việc nhóm & Phối hợp liên chức năng (Cross-functional Collaboration)",
        "Giao tiếp & Trao đổi yêu cầu người dùng (Stakeholder Communication)",
        "Khả năng thích ứng & Tự học công nghệ mới (Fast Learning Agility)",
        "Quản lý thời gian & Bàn giao đúng tiến độ (Time Management)"
      ],
      achievements: [
        {
          type: "Google for Education",
          title: "Gemini Certified Educator",
          issuer: "Google for Education",
          period: "10/2025 - 10/2028",
          desc: "Chứng nhận năng lực từ Google for Education trong việc ứng dụng công cụ AI tiên tiến vào các hoạt động phát triển và đào tạo."
        },
        {
          type: "Cuộc thi Công nghệ",
          title: "Semi-Finalist IT Got Talent 2025",
          issuer: "IT Got Talent Competition",
          period: "09/2025 - 11/2025",
          desc: "Lọt vào vòng Bán kết cuộc thi với dự án Nền tảng học lập trình trực tuyến Skill Coder, được đánh giá cao về trải nghiệm người dùng."
        },
        {
          type: "Chứng chỉ Mạng máy tính",
          title: "Networking Basics",
          issuer: "Cisco Networking Academy",
          period: "2025",
          desc: "Hoàn thành chương trình đào tạo về nền tảng mạng máy tính, giao thức truyền thông và kiến trúc mạng."
        },
        {
          type: "Chứng chỉ Lập trình",
          title: "JavaScript Essentials",
          issuer: "Cisco Networking Academy",
          period: "2025",
          desc: "Chứng chỉ hoàn thành chuyên sâu về ngôn ngữ lập trình JavaScript hiện đại, cấu trúc dữ liệu và giải thuật."
        }
      ]
    },

    // CV Page
    cv: {
      kicker: "Hồ sơ chuyên môn",
      heading: "Curriculum Vitae",
      lead: "Trần Khánh Linh • Software Engineer • HUTECH (GPA 3.39/4.0)",
      modeInteractive: "Bản xem trực quan",
      modePdf: "Bản xem PDF",
      downloadPdf: "Tải CV (PDF)",
      mobileFallbackNotice: "Khuyên dùng trên điện thoại: Xem hoặc tải file PDF trực tiếp để có trải nghiệm tốt nhất.",
      openPdfFullscreen: "Mở PDF toàn màn hình ↗",
      sections: {
        summary: "Tóm tắt chuyên môn",
        education: "Học vấn",
        experience: "Kinh nghiệm làm việc",
        projects: "Dự án tiêu biểu",
        skills: "Kỹ năng",
        certifications: "Chứng chỉ & Giải thưởng"
      },
      summaryText: "Kỹ sư phần mềm với hơn 7 tháng kinh nghiệm thực tế phát triển các ứng dụng nội bộ tại C.P. Vietnam. Thành thạo xây dựng ứng dụng web responsive và hệ thống doanh nghiệp sử dụng ReactJS, TypeScript, Node.js và SQL Server. Đã trực tiếp tham gia các dự án quản lý tồn kho, theo dõi sản xuất và Zalo Mini App, tích lũy kinh nghiệm vững chắc về phát triển frontend, tích hợp backend API và thiết kế cơ sở dữ liệu. Sẵn sàng áp dụng kiến thức chuyên môn, giải quyết các vấn đề thực tiễn và xây dựng các giải pháp phần mềm ổn định, hiệu năng cao.",
      educationDetails: {
        school: "Đại học Công nghệ TP.HCM (HUTECH)",
        period: "2022 - 2026",
        major: "Công nghệ Thông tin (Information Technology)",
        gpa: "3.39 / 4.0"
      },
      skillsLabels: {
        technical: "Kỹ năng kỹ thuật:",
        soft: "Kỹ năng mềm:"
      }
    },

    // Contact Page
    contact: {
      kicker: "Liên hệ & Trao đổi",
      heading: "Kết nối làm việc",
      lead: "Sẵn sàng đón nhận các cơ hội việc làm, thảo luận dự án phần mềm mới hoặc trao đổi giải pháp kỹ thuật chuyên môn.",
      channelsHeading: "Kênh trao đổi trực tiếp",
      channelsSub: "Phương thức thuận tiện nhất để kết nối",
      methods: [
        {
          title: "Email trực tiếp",
          value: "trankhanhlinh.lt@gmail.com",
          link: "mailto:trankhanhlinh.lt@gmail.com",
          note: "Kênh liên lạc ưu tiên phản hồi nhanh"
        },
        {
          title: "Điện thoại liên hệ",
          value: "(+84) 907 253 408",
          link: "tel:+84907253408",
          note: "Hỗ trợ cuộc gọi giờ hành chính"
        },
        {
          title: "Địa chỉ làm việc",
          value: "TP. Hồ Chí Minh, Việt Nam",
          link: "https://maps.google.com/?q=Ho+Chi+Minh+City",
          note: "Múi giờ làm việc GMT+7"
        },
        {
          title: "Zalo / Mobile",
          value: "(+84) 907 253 408",
          link: "https://zalo.me/84907253408",
          note: "Trao đổi tin nhắn trực tiếp"
        }
      ],
      socialHeading: "Nền tảng trực tuyến",
      policyTitle: "Cam kết phản hồi & Làm việc",
      policies: [
        "Thời gian tiếp nhận: Thứ 2 – Thứ 7 (08:00 – 18:00).",
        "Phản hồi thư điện tử trong vòng 24 giờ làm việc.",
        "Sẵn sàng làm việc Full-time, Hybrid hoặc On-site tại TP. Hồ Chí Minh."
      ],
      formHeading: "Gửi tin nhắn liên hệ",
      formSub: "Vui lòng điền thông tin để gửi tin nhắn trực tiếp đến hộp thư của tôi",
      nameLabel: "Họ và tên *",
      namePlaceholder: "Ví dụ: Nguyễn Văn A",
      emailLabel: "Địa chỉ Email *",
      emailPlaceholder: "your.email@example.com",
      subjectLabel: "Mục đích trao đổi",
      subjectDefault: "Chọn chủ đề trao đổi",
      subjectJob: "Cơ hội việc làm / Tuyển dụng",
      subjectProject: "Hợp tác phát triển phần mềm",
      subjectConsult: "Trao đổi giải pháp kỹ thuật",
      subjectOther: "Trao đổi khác",
      messageLabel: "Nội dung tin nhắn *",
      messagePlaceholder: "Nhập nội dung bạn muốn trao đổi chi tiết...",
      btnSubmit: "Gửi tin nhắn liên hệ",
      btnSubmitting: "Đang gửi thư...",
      successAlert: "Tin nhắn của bạn đã được gửi thành công. Tôi sẽ liên hệ lại qua email trong thời gian sớm nhất.",
      errorAlert: "Có lỗi xảy ra khi gửi tin nhắn. Vui lòng liên hệ trực tiếp qua email: trankhanhlinh.lt@gmail.com",
      errors: {
        name: "Vui lòng nhập họ và tên",
        email: "Vui lòng nhập địa chỉ email",
        emailInvalid: "Định dạng email không hợp lệ",
        message: "Vui lòng nhập nội dung tin nhắn",
        messageMin: "Nội dung tin nhắn tối thiểu 10 ký tự"
      }
    },

    // Footer
    footer: {
      bio: "Chuyên ngành Công nghệ Thông tin tại Đại học Công nghệ TP.HCM (HUTECH) với kinh nghiệm thực tế phát triển phần mềm doanh nghiệp tại C.P. Vietnam.",
      navHeading: "Điều hướng",
      contactHeading: "Thông tin liên hệ",
      connectHeading: "Nền tảng",
      rights: "All rights reserved.",
      techNote: "Được xây dựng với ReactJS & CSS thuần."
    }
  }
};
