import type { PageInfoProps } from '~/components/page';
import engineeringAdmissionBGImg from '../images/EngineeringWeb.jpg';
import managementAdmissionBGImg from '../images/management page.jpg';
import medicalAdmissionBGImg from '../images/MedicalWeb.jpg';
import {
  engineeringPageTestimonials,
  managementPageTestimonials,
  medicalPageTestimonials,
} from './testimonials.data';
import type { EngineeringExam } from '~/types';

const managementScope = [
  {
    designation: 'Marketing Manager',
    averagePackage: 'Rs. 8-14 lakhs per annum',
    roles:
      'Roles in marketing involve developing and implementing marketing strategies, product management, and brand promotion.',
    imageSource:
      ' https://catalysteducations.com/wp-content/uploads/2022/12/marketing.jpg',
  },
  {
    designation: 'Finance Manager',
    averagePackage: 'Rs. 8-16 lakhs per annum',
    roles:
      'MBA graduates specializing in finance may take up roles in financial management, investment banking, or corporate finance.',
    imageSource:
      'https://catalysteducations.com/wp-content/uploads/2022/12/finance.jpg',
  },
  {
    designation: 'Information Technology (IT) Manager',
    averagePackage: 'Rs. 8-16 lakhs per annum',
    roles:
      'MBA graduates with a focus on IT management may work in roles related to technology strategy, project management, and IT consulting.',
    imageSource:
      'https://catalysteducations.com/wp-content/uploads/2022/12/Artboard-1-copy.jpg',
  },
  {
    designation: 'Human Resources Manager',
    averagePackage: 'Rs. 7-14 lakhs per annum',
    roles:
      'MBA graduates in HR often take up roles in recruitment, talent management, and organizational development.',
    imageSource:
      'https://catalysteducations.com/wp-content/uploads/2022/12/hr.jpg',
  },
  {
    designation: 'Operations Manager',
    averagePackage: 'Rs. 8-15 lakhs per annum',
    roles:
      'Responsible for overseeing the efficiency of business operations, supply chain management, and process optimization.',
    imageSource:
      'https://catalysteducations.com/wp-content/uploads/2022/12/Artboard-1-copy.jpg',
  },
  {
    designation: 'Investment Banker',
    averagePackage: 'Rs. 10-20 lakhs per annum',
    roles:
      'MBA graduates entering investment banking may work in roles related to mergers and acquisitions, risk management, and financial analysis.',

    imageSource:
      'https://catalysteducations.com/wp-content/uploads/2022/12/banking.jpg',
  },
  {
    designation: 'Supply Chain Manager',
    averagePackage: 'Rs. 8-15 lakhs per annum',
    roles:
      'Focus on managing the end-to-end supply chain process, including procurement, logistics, and distribution.',

    imageSource:
      'https://catalysteducations.com/wp-content/uploads/2022/12/production.jpg',
  },
  {
    designation: 'Product Manager',
    averagePackage: 'Rs. 8-15 lakhs per annum',
    roles:
      'Responsible for the development and management of a product throughout its lifecycle.',

    imageSource:
      'https://catalysteducations.com/wp-content/uploads/2022/12/Artboard-1.jpg',
  },
  {
    designation: 'Entrepreneur / Business Owner',
    averagePackage:
      'Varies significantly; dependent on the success of the venture',
    roles:
      'Some MBA graduates choose to start their own businesses, and their earnings can be highly variable.',

    imageSource:
      'https://catalysteducations.com/wp-content/uploads/2022/12/personal-1.jpg',
  },
];

const managementColleges = [
  {
    collegeName: 'Symbiosis Institute of Business Management',
    imageSource:
      'https://raw.githubusercontent.com/shmbajaj/files-hosted/master/educom-management/SymbiosisInstitutesBM.jpg',
  },
  {
    collegeName: 'NMIMS',
    imageSource:
      'https://raw.githubusercontent.com/shmbajaj/files-hosted/master/educom-management/NMIMS.jpg',
  },
  {
    collegeName: 'N. L. Dalmia',
    imageSource:
      'https://raw.githubusercontent.com/shmbajaj/files-hosted/master/educom-management/NLDalmia.jpg',
  },
  {
    collegeName: 'We School',
    imageSource:
      'https://raw.githubusercontent.com/shmbajaj/files-hosted/master/educom-management/WeSchool.jpg',
  },
  {
    collegeName: 'Indira',
    imageSource:
      'https://raw.githubusercontent.com/shmbajaj/files-hosted/master/educom-management/Indira.jpg',
  },
  {
    collegeName: 'PIBM',
    imageSource:
      'https://raw.githubusercontent.com/shmbajaj/files-hosted/master/educom-management/PIBM.jpg',
  },
  {
    collegeName: 'RIIM',
    imageSource:
      'https://raw.githubusercontent.com/shmbajaj/files-hosted/master/educom-management/RIIM.jpg',
  },
  {
    collegeName: 'Lexicon Management Institutes',
    imageSource:
      'https://raw.githubusercontent.com/shmbajaj/files-hosted/master/educom-management/LEXICONMANAGEMENTINSTITUTE.jpg',
  },
  {
    collegeName: 'Mitcon Institu Of Management',
    imageSource:
      'https://raw.githubusercontent.com/shmbajaj/files-hosted/master/educom-management/mitconinstituteofmanagement.jpg',
  },
  {
    collegeName: 'DPU',
    imageSource:
      'https://raw.githubusercontent.com/shmbajaj/files-hosted/master/educom-management/DPU.jpg',
  },
  {
    collegeName: 'ITM',
    imageSource:
      'https://raw.githubusercontent.com/shmbajaj/files-hosted/master/educom-management/ITM.jpg',
  },
  // {
  //   collegeName: 'IIBS',
  //   imageSource:
  //     'https://raw.githubusercontent.com/shmbajaj/files-hosted/master/educom-management/Birla-Institute-Of-Management-Technology-BIMTECH.png',
  // },
  {
    collegeName: 'Pune Business School',
    imageSource:
      'https://raw.githubusercontent.com/shmbajaj/files-hosted/master/educom-management/PuneBusinessSchool.jpg',
  },
  {
    collegeName: 'Atlas Skillset University',
    imageSource:
      'https://raw.githubusercontent.com/shmbajaj/files-hosted/master/educom-management/ATLAS%20SKILLSET%20UNIVERSITY.jpg',
  },
  {
    collegeName: 'Jaipuria Institute of Management',
    imageSource:
      'https://raw.githubusercontent.com/shmbajaj/files-hosted/master/educom-management/JAIPURIA%20INSTITUTE%20OF%20MANAGEMENT.jpg',
  },
  {
    collegeName: 'IMI Bhubaneswar',
    imageSource:
      'https://raw.githubusercontent.com/shmbajaj/files-hosted/master/educom-management/IMI%20BHUBANESWAR.jpg',
  },
  // {
  //   collegeName: 'Parul University',
  //   imageSource:
  //     'https://raw.githubusercontent.com/shmbajaj/files-hosted/master/educom-management/International-Management-InstituteIMI.png',
  // },
  {
    collegeName: 'Alliance University',
    imageSource:
      'https://raw.githubusercontent.com/shmbajaj/files-hosted/master/educom-management/ALLIANCE%20UNIVERSITY.jpg',
  },
];

const managementEntranceExams = [
  'CAT',
  'XAT',
  'GMAT',
  'CMAT',
  'MAH CET',
  'SNAP',
  'NMAT',
];

const engineeringColleges = [
  {
    collegeName: 'Symbiosis International University',
    imageSource:
      'https://raw.githubusercontent.com/shmbajaj/files-hosted/master/educom-eng/SYMBIOSIS%20INTERNATIONAL%20UNIVERSITY.jpg',
  },
  {
    collegeName: 'D.Y. Patil',
    imageSource:
      'https://raw.githubusercontent.com/shmbajaj/files-hosted/master/educom-eng/D.Y.%20PATIL%20Engineering%20College.jpg',
  },
  {
    collegeName: 'Cummins',
    imageSource:
      'https://raw.githubusercontent.com/shmbajaj/files-hosted/master/educom-eng/CUMMINS%20engineering%20College.jpg',
  },
  {
    collegeName: 'INDRA',
    imageSource:
      'https://raw.githubusercontent.com/shmbajaj/files-hosted/master/educom-eng/INDRA%20ingineering%20Colleges.jpg',
  },
  {
    collegeName: 'VIT',
    imageSource:
      'https://raw.githubusercontent.com/shmbajaj/files-hosted/master/educom-eng/VIT%20Engineering%20College.jpg',
  },
  {
    collegeName: 'JSPM',
    imageSource:
      'https://raw.githubusercontent.com/shmbajaj/files-hosted/master/educom-eng/JSPM%20Engineering%20College.jpg',
  },
  {
    collegeName: 'NMIMS',
    imageSource:
      'https://raw.githubusercontent.com/shmbajaj/files-hosted/master/educom-eng/NMIMS%20engineering%20College.jpg',
  },
  {
    collegeName: 'MIT World Peace University',
    imageSource:
      'https://raw.githubusercontent.com/shmbajaj/files-hosted/master/educom-eng/MIT%20WORLD%20PEACE%20UNIVERSITY.jpg',
  },
  {
    collegeName: 'Amity University',
    imageSource:
      'https://raw.githubusercontent.com/shmbajaj/files-hosted/master/educom-eng/AMITY%20UNIVERSITY%20eng%20college.jpg',
  },
  {
    collegeName: 'Bhartiya Vidya Peeth',
    imageSource:
      'https://raw.githubusercontent.com/shmbajaj/files-hosted/master/educom-eng/BHARTIYA%20VIDYA%20PEETH%20eng%20Clge.jpg',
  },
  {
    collegeName: 'Manipal University',
    imageSource:
      'https://raw.githubusercontent.com/shmbajaj/files-hosted/master/educom-eng/MANIPAL%20UNIVERSITY%20Engineering%20College.jpg',
  },
  {
    collegeName: 'Ajinkya DY Patil University',
    imageSource:
      'https://raw.githubusercontent.com/shmbajaj/files-hosted/master/educom-eng/AJINKYA%20DY%20PATIL%20UNIVERSITY.jpg',
  },
  {
    collegeName: 'Teerthanker Mahaveer College',
    imageSource:
      'https://raw.githubusercontent.com/shmbajaj/files-hosted/master/educom-eng/TEERTHANKER%20MAHAVEER%20COLLEGE%20eng%20clg.jpg',
  },
  {
    collegeName: 'Wadia',
    imageSource:
      'https://raw.githubusercontent.com/shmbajaj/files-hosted/master/educom-eng/WADIA.jpg',
  },
  {
    collegeName: 'Modern College',
    imageSource:
      'https://raw.githubusercontent.com/shmbajaj/files-hosted/master/educom-eng/MODERN%20COLLEGE%20Engineering%20College.jpg',
  },
  {
    collegeName: 'Vidyalankar Institute',
    imageSource:
      'https://raw.githubusercontent.com/shmbajaj/files-hosted/master/educom-eng/VIDYALANKAR%20INSTITUTE.jpg',
  },
  {
    collegeName: 'AISSMS',
    imageSource:
      'https://raw.githubusercontent.com/shmbajaj/files-hosted/master/educom-eng/AISSMS%20Engineering%20College.jpg',
  },
  {
    collegeName: 'Vishwakarma Institute',
    imageSource:
      'https://raw.githubusercontent.com/shmbajaj/files-hosted/master/educom-eng/VISHWAKARMA%20INSTITUTE%20Engineering%20College.jpg',
  },
];

const managementSpecialization = [
  {
    title: 'Product Manager',
    subtitle:
      'A product manager, also known as a PM, oversees the development and growth of an organization’s products. This involves planning, leading and executing tasks related to creating and delivering products that meet business goals and customer needs.',
    imageSource:
      'https://catalysteducations.com/wp-content/uploads/2022/12/two-asian-young-woman-working-together-sme-project-young-owner-people-startup-business-online-sme-delivery-project-online-business-small-business-concept-scaled.jpg',
  },
  {
    title: 'Operations Manager',
    subtitle:
      'An operations manager is responsible for managing, planning and implementing production processes. They oversee the production process to ensure that goods and services are produced efficiently and in accordance with the specified quality standards. They also work to reduce costs, improve quality, analyze production losses, and optimize resources.',
    imageSource:
      'https://catalysteducations.com/wp-content/uploads/2022/12/teamwork-brainstorming-meeting-new-startup-project-workplace-scaled.jpg',
  },
  {
    title: 'IT Manager',
    subtitle:
      "An IT Manager is responsible for the implementation and maintenance of a company's technological structure. This role involves overseeing technical processes, troubleshooting any computer issues that may arise, and ensuring the smooth running of digital operations.",
    imageSource:
      'https://catalysteducations.com/wp-content/uploads/2022/12/business-man-examines-data-financial-documents-company-financial-reports-graphics-showing-financial-numerical-growth-data-concept-financial-management-grow-be-profitable-scaled.jpg',
  },
  {
    title: 'Investment Banker',
    subtitle:
      'An investment banker is a finance specialist who helps organizations and companies raise capital. Investment bankers usually collaborate with financial institutions such as banks, insurance companies, and credit unions in order to achieve their goals.',
    imageSource:
      'https://catalysteducations.com/wp-content/uploads/2022/12/house-bills-elements-arrangement-scaled.jpg',
  },
  {
    title: 'Business Analyst',
    subtitle:
      'Business analysts are responsible for understanding the needs of an organization and coming up with technical solutions to meet those needs in an efficient and cost-effective way. They work with computer processes to deliver these solutions.',
    imageSource:
      'https://catalysteducations.com/wp-content/uploads/2022/12/businesspeople-working-finance-accounting-analyze-financi-scaled.jpg',
  },
  {
    title: 'Marketing Manager',
    subtitle:
      "The role of a marketing manager is to manage the operations and strategies of a company's marketing department. This includes planning, developing, and carrying out promotional activities to raise awareness of the company and its products or services amongst their target audience.",
    imageSource:
      'https://catalysteducations.com/wp-content/uploads/2022/12/businesspeople-meeting-plan-analysis-graph-company-finance-strat-scaled.jpg',
  },
  {
    title: 'Management Consultant',
    subtitle:
      'Management consultants are professionals who help companies and organizations with their efficiency and performance. Through detailed analyses of the issues that the business is facing, management consultants devise creative solutions to improve the effectiveness of a company.',
    imageSource:
      'https://catalysteducations.com/wp-content/uploads/2022/12/two-content-business-partners-discussing-issue-scaled.jpg',
  },
  {
    title: 'Financial Advisor',
    subtitle:
      'Financial advisors are experts who provide their clients with guidance, support, and education when it comes to managing and investing money. They act as partners in helping their clients to organize and prioritize their financial goals and ensure that the decisions made will bring beneficial results for them.',
    imageSource:
      'https://catalysteducations.com/wp-content/uploads/2022/12/investment-manager-with-credit-card-document-finance-with-client-investing-trading-stock-market-office-professional-finance-advisor-consulting-profit-amount-bank-with-customer-scaled.jpg',
  },
  {
    title: 'Administrative Manager',
    subtitle:
      'Administrative managers are responsible for the smooth running of a business or organization. They supervise staff and oversee the planning, organizing, and implementation of various administrative systems and procedures.',
    imageSource:
      'https://catalysteducations.com/wp-content/uploads/2022/12/businessmen-reviewing-business-performance-target-planning-new-budget-year-scaled.jpg',
  },
];

const engineeringBranches = [
  {
    branch: 'Computer Science and Engineering (CSE)',
    overview:
      'Focuses on computer systems, programming, and software development. Around INR 6-10 lakhs per annum.',
    imageSource:
      'https://catalysteducations.com/wp-content/uploads/2022/12/18-1.jpg',
  },
  {
    branch: 'Mechanical Engineering',
    overview:
      'Deals with design, manufacturing, and maintenance of mechanical systems. Approximately INR 5-8 lakhs per annum.',
    imageSource:
      'https://catalysteducations.com/wp-content/uploads/2022/12/9-1.jpg',
  },
  {
    branch: 'Electrical Engineering',
    overview:
      'Encompasses electrical systems, electronics, and power generation. Ranges from INR 4-7 lakhs per annum.',
    imageSource:
      'https://catalysteducations.com/wp-content/uploads/2022/12/7-1.jpg',
  },
  {
    branch: 'Civil Engineering',
    overview:
      'Involves the design and construction of infrastructure and buildings. Typically around INR 4-6 lakhs per annum.',
    imageSource:
      'https://catalysteducations.com/wp-content/uploads/2022/12/10-1.jpg',
  },
  {
    branch: 'Electronics and Communication Engineering (ECE)',
    overview:
      'Focuses on electronic circuits, communication systems, and signal processing. Averages between INR 5-9 lakhs per annum.',
    imageSource:
      'https://catalysteducations.com/wp-content/uploads/2022/12/1-1.jpg',
  },
  {
    branch: 'Chemical Engineering',
    overview:
      'Deals with the design and optimization of chemical processes. Ranges from INR 4-7 lakhs per annum.',
    imageSource:
      'https://catalysteducations.com/wp-content/uploads/2022/12/10-1.jpg',
  },
  {
    branch: 'Aerospace Engineering',
    overview:
      'Involves the design and development of aircraft and spacecraft. Typically around INR 6-12 lakhs per annum.',
    imageSource:
      'https://catalysteducations.com/wp-content/uploads/2022/12/17-1.jpg',
  },
  {
    branch: 'Biotechnology Engineering',
    overview:
      'Applies biological principles to develop technology and products. Averages between INR 5-9 lakhs per annum.',
    imageSource:
      'https://catalysteducations.com/wp-content/uploads/2022/12/3-1.jpg',
  },
  {
    branch: 'Environmental Engineering',
    overview:
      'Addresses environmental issues by applying engineering principles to develop sustainable solutions. With several years of experience, mid-level environmental engineers can earn between INR 6 to 10 lakhs per annum.',
    imageSource:
      'https://catalysteducations.com/wp-content/uploads/2022/12/2-1.jpg',
  },
  {
    branch: 'Industrial Engineering',
    overview:
      'Optimizes complex processes and systems to improve efficiency and productivity. Entry-level industrial engineers can expect an average starting salary ranging from INR 4 to 7 lakhs per annum.',
    imageSource:
      'https://catalysteducations.com/wp-content/uploads/2022/12/4-1.jpg',
  },
  {
    branch: 'Materials Engineering',
    overview:
      'Focuses on the development and study of materials with specific properties for various applications. Entry-level materials engineers may receive a starting salary ranging from INR 3.5 to 6 lakhs per annum.',
    imageSource:
      'https://catalysteducations.com/wp-content/uploads/2022/12/13-1.jpg',
  },
];

const engineeringAllExam: Array<EngineeringExam> = [
  {
    name: 'JEE Advance',
    imageSource:
      'https://catalysteducations.com/wp-content/uploads/2022/12/JEE_Advanced__Custom_-removebg-preview.png',
    description:
      'The Joint Entrance Examination Advanced (JEE-Advanced) is an entrance exam which is conducted by the Indian Institute of Technology (IITs) on all-India level',
    learnMore: {
      content:
        'The exam qualifies candidates for admission in various prestigious engineering colleges across India. Previously known as IIT-JEE, it was renamed in 2013 and since then, it has been administered and regulated by the seven branches of IITs (Roorkee, Kharagpur, Delhi, Bombay, Kanpur, Madras and Guwahati). It consists of two papers with questions drawn from Physics, Chemistry, Mathematics and an Architecture Aptitude Test (AAT) for candidates aspiring to enroll in an architecture course.',
      age: 'Should’ve appeared in Higher Secondary in 2019, 2020, and 2021',
      qualification: 'At least 75% marks in 10+2',
      compulsorySubjects:
        'Physics and Chemistry, along with English, Mathematics, and an optional subject',
      numberOfAttempts: 2,
      subjectsInPaper:
        'Physics, Chemistry, Maths, and AAT (Architecture Aptitude Test)',
    },
  },
  {
    name: 'UPSEE',
    imageSource:
      'https://catalysteducations.com/wp-content/uploads/2022/12/Dr._A.P.J._Abdul_Kalam_Technical_University_logo.png',
    description:
      'The Uttar Pradesh State Entrance Examination is a state-level entrance examination for enrolling into UG and PG courses in the engineering colleges of Uttar Pradesh.',
    learnMore: {
      content:
        'UPSEE, short for Uttar Pradesh State Entrance Examination, is a state-level entrance exam held in Uttar Pradesh for students seeking admission into undergraduate and postgraduate courses in engineering colleges affiliated with the AKTU (Abdul Kalam Technical University). This exam can be taken in both online and offline formats.',
      age: 'No Age Limit',
      qualification:
        'Should’ve completed 10+2 from the UP board or any other equally recognized board, with 45% marks (General) and 40% marks (Reserved)',
      lateralEntryAvailableFor: [
        'B.Sc Graduates in Engineering',
        '2nd year MCA students',
        'Pharmacy and Engineering Diploma Holders',
      ],
      numberOfAttempts: 2,
      subjectsInPaper:
        'Physics, Chemistry, Maths, Architecture and Design, General Awareness',
    },
  },
  {
    name: 'VITEEE',
    imageSource:
      'https://catalysteducations.com/wp-content/uploads/2022/12/14_09_16_015439_VITEEE-1.png',
    description:
      'This exam goes by the name of VIT University, Vellore Institute of Technology Engineering Entrance Examination. This is a 2.5-hour long exam that students need to appear for',
    learnMore: {
      content:
        'To get enrolled into the VIT universities across India. This institution is said to provide some of the most affordable UG engineering courses.',
      eligibility: {
        age: 'Born on or after 1st July 1999',
        nationality: 'The candidate should be Indian',
        qualification: {
          GeneralCandidates: 'Minimum 60% score in PCM',
          'SC/STCandidates': 'Minimum 50% score in PCM',
        },
      },
      collegesCovered: [
        'Vellore University, Vellore',
        'Vellore Institute of Technology, Chennai',
        'VIT University, Andhra Pradesh',
        'VIT University, Bhopal & Woxsen University',
      ],
      subjectsInPaper:
        'Physics, Chemistry, Mathematics/Biology, English, Aptitude',
    },
  },
  {
    name: 'JEE Main',
    imageSource:
      'https://catalysteducations.com/wp-content/uploads/2022/12/JEE_Advanced__Custom_-removebg-preview.png',
    description:
      'The Joint Entrance Examination-Main a.k.a. JEE-Main is the common entrance exam primarily for B.Tech admissions in both government and private colleges.',
    learnMore: {
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mi nunc, facilisis sed erat sed, interdum suscipit nisl. Donec ut ligula sed dolor accumsan placerat. Ut sed felis vitae augue condimentum viverra.',
      additionalDetails:
        'Sed at lacus vitae augue egestas pulvinar ultricies nec nisi. In aliquet velit sed eros facilisis, in tempus eros imperdiet. Aenean mollis urna aliquet orci placerat porttitor. Aenean tincidunt urna sed faucibus sodales. Donec sit amet eros eros. Duis volutpat arcu at efficitur molestie. Pellentesque gravida dolor risus, a sollicitudin arcu euismod sit amet.',
    },
  },
  {
    name: 'MET',
    imageSource:
      'https://catalysteducations.com/wp-content/uploads/2022/12/mcv16179_MAHE-LOGO-300x300-1.png',
    description:
      'Known earlier as the Manipal University Online Entrance Test, Manipal University Entrance Test (MET) is an online examination for admission into undergraduate and postgraduate courses.',
    learnMore: {
      content:
        'The test consists of two and a half hours of questions in English, containing topics such as Mathematics and General Aptitude that are common among the different papers. To qualify for these examinations, applicants must meet certain criteria which are outlined by the university.',
      qualifications: {
        bTech: {
          compulsorySubjects:
            'Physics, Mathematics, English, (Optional) Chemistry/Biology/Biotechnology',
          qualification: 'Should’ve passed 10+2 with a minimum score of 50%',
        },
        mTech: {
          compulsoryMarks: 'A score of at least 50% in the Qualifying Exam',
          qualification: 'Should have a B.E or B.tech Degree',
        },
        mbbs: {
          compulsorySubjects: 'Physics, Chemistry, Biology/Biotechnology',
          qualification: 'Should’ve passed 10+2 with a minimum score of 50%',
        },
        bba: {
          compulsoryMarks: 'A score of at least 50% in the Qualifying Exam',
          qualification: '10+2 from a recognized board',
        },
      },
    },
  },
  {
    name: 'MH CET',
    imageSource:
      'https://catalysteducations.com/wp-content/uploads/2022/12/mht-cet-exam-removebg-preview-1.png',
    description:
      'The Maharashtra Common Entrance Test (MHT-CET) is an online exam organized by the State Common Entrance Test Cell. It is primarily used as an entrance exam to select candidates for Engineering and Pharmacy programs in the state of Maharashtra.',
    learnMore: {
      content:
        'The syllabus mainly comprises of 11th and 12th standard subjects divided across 3 papers. The paper is MCQ-style with 100 questions that need to be answered within 90 minutes. In order to be eligible to give the exam, candidates must meet certain criteria.',
      eligibility: {
        age: 'No maximum age limit. The minimum age shall be not below 16 years',
        qualification: 'Students need decent qualifying scores in 10+2',
      },
      compulsorySubjects: 'Physics, Chemistry, Maths, Biology',
      numberOfAttempts: 3,
      subjectsInPaper:
        'Physics, Chemistry, Biology (Botany), Biology (Zoology), Maths',
      fees: '600-800 INR',
    },
  },
];

const medicalColleges = [
  {
    collegeName: 'MIT WPU',
    imageSource:
      'https://raw.githubusercontent.com/shmbajaj/files-hosted/master//educom-medical/mit-wpuMedical.jpg',
  },
  {
    collegeName: 'DY Patil',
    imageSource:
      'https://raw.githubusercontent.com/shmbajaj/files-hosted/master//educom-medical/DY%20PATIL%20medCollege.jpg',
  },
  {
    collegeName: 'Symbiosis Pune',
    imageSource:
      'https://raw.githubusercontent.com/shmbajaj/files-hosted/master//educom-medical/SYMBIOSIS%20PUNE%20medical%20college.jpg',
  },
  {
    collegeName: 'SRM Chennai',
    imageSource:
      'https://raw.githubusercontent.com/shmbajaj/files-hosted/master//educom-medical/SRM%20CHENNAI%20medical%20college.jpg',
  },
  {
    collegeName: 'NIMS Jaipur',
    imageSource:
      'https://raw.githubusercontent.com/shmbajaj/files-hosted/master//educom-medical/NIMS%20JAIPUR%20medical%20clge.jpg',
  },
  {
    collegeName: 'RIMS Raipur',
    imageSource:
      'https://raw.githubusercontent.com/shmbajaj/files-hosted/master//educom-medical/RIMS%20RAIPUR%20medical%20college.jpg',
  },
  {
    collegeName: 'BVP',
    imageSource:
      'https://raw.githubusercontent.com/shmbajaj/files-hosted/master//educom-medical/BVP%20medical%20college.jpg',
  },
  {
    collegeName: 'MIMER',
    imageSource:
      'https://raw.githubusercontent.com/shmbajaj/files-hosted/master//educom-medical/MIMER%20medical%20college.jpg',
  },
  {
    collegeName: 'Vedanta',
    imageSource:
      'https://raw.githubusercontent.com/shmbajaj/files-hosted/master//educom-medical/VEDANTA%20medical%20College.jpg',
  },
  {
    collegeName: 'Akash Medical',
    imageSource:
      'https://raw.githubusercontent.com/shmbajaj/files-hosted/master//educom-medical/AKASH%20MEDICAL%20College.jpg',
  },
  {
    collegeName: 'M S Ramiah',
    imageSource:
      'https://raw.githubusercontent.com/shmbajaj/files-hosted/master//educom-medical/M%20S%20RAMIAH%20medical%20college.jpg',
  },
  {
    collegeName: 'Sri Lakshmi Narayana Institute',
    imageSource:
      'https://raw.githubusercontent.com/shmbajaj/files-hosted/master//educom-medical/SRI%20LAKSHMI%20NARAYANA%20INSTITUTE%20medical%20college.jpg',
  },
  {
    collegeName: 'Geetanjali Medical College',
    imageSource:
      'https://raw.githubusercontent.com/shmbajaj/files-hosted/master//educom-medical/GEETANJALI%20MEDICAL%20COLLEGE.jpg',
  },
  {
    collegeName: 'Teerthanker Mahaveer University',
    imageSource:
      'https://raw.githubusercontent.com/shmbajaj/files-hosted/master//educom-medical/TEERTHANKER%20MAHAVEER%20UNIVERSITY%20Medical%20college.jpg',
  },
  {
    collegeName: 'Mahatma Gandhi Medical College, Mumbai',
    imageSource:
      'https://raw.githubusercontent.com/shmbajaj/files-hosted/master//educom-medical/MAHATMA%20GANDHI%20MEDICAL%20COLLEGE,%20MUMBAI.jpg',
  },
  {
    collegeName: 'Oxford Medical College Bangalore',
    imageSource:
      'https://raw.githubusercontent.com/shmbajaj/files-hosted/master//educom-medical/OXFORD%20MEDICAL%20COLLEGE%20BANGALORE.jpg',
  },
  {
    collegeName: 'East Point College of Medical',
    imageSource:
      'https://raw.githubusercontent.com/shmbajaj/files-hosted/master//educom-medical/EAST%20POINT%20COLLEGE%20OF%20MEDICAL.jpg',
  },
  {
    collegeName: 'Vydehi Medical College',
    imageSource:
      'https://raw.githubusercontent.com/shmbajaj/files-hosted/master//educom-medical/VYDEHI%20MEDICAL%20COLLEGE.jpg',
  },
];

const medicalEntrances = [
  {
    examName: 'NEET',
    imageSource:
      'https://catalysteducations.com/wp-content/uploads/2022/12/first-aid-kit.png',
  },
  {
    examName: 'AIIMS-MBBS',
    imageSource:
      'https://catalysteducations.com/wp-content/uploads/2022/12/stethoscope-2.png',
  },
  {
    examName: 'JIPMER',
    imageSource:
      'https://catalysteducations.com/wp-content/uploads/2022/12/surgery.png',
  },
  {
    examName: 'AFMC MBBS',
    imageSource:
      'https://catalysteducations.com/wp-content/uploads/2022/12/doctor-1.png',
  },
];

const engineeringAdmission: PageInfoProps & {
  engineeringBranches: Array<
    Record<'branch' | 'overview' | 'imageSource', string>
  >;
  engineeringAllExam?: Array<EngineeringExam>;
  engineeringColleges: Array<Record<'imageSource' | 'collegeName', string>>;
} = {
  pageHeaderCaption: 'PROFESSIONAL EDUCATION CONSULTING',
  pageHeaderTitle:
    ' Get Free Consultation For Engineering Admission in dream College!  ',
  pageHeaderDescription: `Ensure Engineering Admission success with expert consultation. Unlock doors to your dream college and future in engineering!
  `,
  pageHeaderTo: '#get-in-touch-form',
  pageHeaderBackgroundImageURL: engineeringAdmissionBGImg,
  pageHeaderBackgroundFallbackColor: '#fff',
  testimonials: engineeringPageTestimonials,
  isDarkBg: true,
  engineeringBranches,
  engineeringColleges,
};

const medicalAdmission: PageInfoProps & {
  medicalColleges: Array<Record<'collegeName' | 'imageSource', string>>;
  medicalEntrances: Array<Record<'examName' | 'imageSource', string>>;
} = {
  pageHeaderCaption: 'OUR SERVICES',
  pageHeaderTitle:
    ' Expert Medical Admission Consultants Elevate Your MBBS Admission Experience!',
  pageHeaderDescription: `Unlock success in MBBS admissions with expert guidance from top medical consultants. Your pathway to triumph begins here!
  `,
  pageHeaderTo: '#get-in-touch-form',
  pageHeaderBackgroundImageURL: medicalAdmissionBGImg,
  pageHeaderBackgroundFallbackColor: '#0C71C3',
  testimonials: medicalPageTestimonials,
  medicalColleges,
  medicalEntrances,
};

const managementAdmission: PageInfoProps & {
  scope: Array<Record<string, string>>;
  managementColleges: Array<Record<'collegeName' | 'imageSource', string>>;
  managementSpecialization: Array<
    Record<'title' | 'imageSource' | 'subtitle', string>
  >;
  managementEntranceExams: Array<string>;
} = {
  pageHeaderCaption: 'OUR SERVICES',
  pageHeaderTitle:
    'Claim Your Free MBA Admission Consultation for Top-Tier Institutes Instantly!',
  pageHeaderDescription: `Unlock your potential with India's premier MBA consultants. Secure dream college admissions and ace your MBA admission journey with expert guidance.
  `,
  pageHeaderTo: '#get-in-touch-form',
  pageHeaderBackgroundImageURL: managementAdmissionBGImg,
  pageHeaderBackgroundFallbackColor: '#0C71C3',
  testimonials: managementPageTestimonials,
  scope: managementScope,
  managementColleges,
  managementSpecialization,
  managementEntranceExams,
};

export { engineeringAdmission, medicalAdmission, managementAdmission };
