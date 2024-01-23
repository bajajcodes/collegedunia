import type { Album } from '~/components/album-card';
import extensiveExpirence from '~/images/why-choose-us-extensive-expirence.jpeg';
import successDriven from '~/images/why-choose-us-success-driven-strategies.jpeg';
import successStories from '~/images/why-choose-us-success-stories.jpeg';
import vastNetwork from '~/images/why-choose-us-vast-network.jpeg';
import expertGuidance from '~/images/what-setus-apart-expert-guidance.jpeg';
import holisticSupport from '~/images/what-setus-apart-holistic-support.jpeg';
import industryKnowledge from '~/images/what-setus-apart-industry-knowledge.jpeg';
import personalizedApproach from '~/images/what-setus-apart-personalized-approach.jpeg';
import managementStudents from '~/images/management-students.jpeg';
import engineeringStudents from '~/images/engineering-students.jpeg';
import medicalStudents from '~/images/medical-students.jpeg';

const whyChooseUsAlbums: Album[] = [
  {
    title: 'Extensive Experience',
    description: `With 14 years of experience, we have honed our expertise in education
    consulting. Our team stays abreast of industry trends and admission
    requirements, providing the most accurate and relevant advice.`,
    cover: extensiveExpirence,
  },
  {
    title: 'Vast Network',
    description: `We boast a vast network, connected with 100+ top colleges across
    India. This network enables us to provide our clients with a diverse
    range of options and opportunities.`,
    cover: vastNetwork,
  },
  {
    title: 'Success-driven Strategies',
    description: `We employ success-driven strategies to ensure our clients stand out in
    the highly competitive admissions landscape. Our consultants work
    collaboratively with you to enhance your application and interview
    skills, increasing your likelihood of admission to your preferred
    program.`,
    cover: successDriven,
  },
  {
    title: 'Success Stories',
    description: `Join the ranks of our successful clients who have achieved admission
    to prestigious programs and institutions. Your success story begins
    with Educom Guidance.`,
    cover: successStories,
  },
];

const aboutUsWhatSetusApart: Album[] = [
  {
    title: 'Expert Guidance',
    description: `Our consultants are experts in
    their respective fields, offering insights and advice rooted in a
    deep understanding of the evolving educational landscape.`,
    cover: expertGuidance,
  },
  {
    title: 'Personalized Approach',
    description: `Recognizing the uniqueness
    of each student, we tailor our guidance to individual strengths,
    aspirations, and academic goals, ensuring a personalized and
    effective strategy.`,
    cover: personalizedApproach,
  },
  {
    title: 'Holistic Support',
    description: `We go beyond the conventional
    by providing holistic support throughout the educational journey.
    From academic planning to career counseling, we are committed to
    nurturing every aspect of a student's growth.`,
    cover: holisticSupport,
  },
  {
    title: 'Industry Knowledge',
    description: `With our finger on the pulse
    of educational trends, we offer up-to-date information and
    strategies, keeping students ahead of the curve in a competitive
    academic environment. Success Stories: Our track record of success
    speaks for itself. Many students have realized their academic
    dreams under our guidance, securing admissions to prestigious
    institutions and excelling in their chosen fields.`,
    cover: industryKnowledge,
  },
];

const aboutUsStudentsPlaced: Album[] = [
  {
    title: 'MANAGEMENT STUDENTS',
    description: `1234`,
    cover: managementStudents,
  },
  {
    title: 'MEDICAL STUDENTS',
    description: `1203`,
    cover: engineeringStudents,
  },
  {
    title: 'ENGINEERING STUDENTS',
    description: `1203`,
    cover: medicalStudents,
  },
];

const aboutUsPageWhyChooseUsAlbums: Album[] = [
  {
    title: '14+ Experience',
    cover: expertGuidance,
  },
  {
    title: 'Connected With 100+ Top Colleges',
    cover: holisticSupport,
  },
  {
    title: '5000+ Success Stories',
    cover: successStories,
  },
  {
    title: 'Various Courses',
    cover: personalizedApproach,
  },
];

const engineeringPageAlbums = {
  whatSetUsApart: [
    {
      title: '14+ Experience',
      cover: expertGuidance,
    },
    {
      title: 'Connected With 100+ Top Colleges',
      cover: holisticSupport,
    },
    {
      title: '5000+ Successful Stories',
      cover: successStories,
    },
    {
      title: 'Various Courses',
      cover: personalizedApproach,
    },
  ],
  exams: [
    {
      title: 'JEE Advance',
      cover:
        'https://catalysteducations.com/wp-content/uploads/2022/12/JEE_Advanced__Custom_-removebg-preview.png',
    },
    {
      title: 'UPSEE',
      cover:
        'https://catalysteducations.com/wp-content/uploads/2022/12/Dr._A.P.J._Abdul_Kalam_Technical_University_logo.png',
    },
    {
      title: 'VITEEE',
      cover:
        'https://catalysteducations.com/wp-content/uploads/2022/12/14_09_16_015439_VITEEE-1.png',
    },
    {
      title: 'JEE Main',
      cover:
        'https://catalysteducations.com/wp-content/uploads/2022/12/JEE_Advanced__Custom_-removebg-preview.png',
    },
    {
      title: 'MET',
      cover:
        'https://catalysteducations.com/wp-content/uploads/2022/12/mcv16179_MAHE-LOGO-300x300-1.png',
    },
    {
      title: 'MH CET',
      cover:
        'https://catalysteducations.com/wp-content/uploads/2022/12/mht-cet-exam-removebg-preview-1.png',
    },
  ],
};

const managementPageAlbums = {
  whatSetUsApart: [
    {
      title: '14+ Experience',
      cover: expertGuidance,
    },
    {
      title: 'Connected With 100+ Top Colleges',
      cover: holisticSupport,
    },
    {
      title: '5000+ Successful Stories',
      cover: successStories,
    },
    {
      title: 'Various Courses',
      cover: personalizedApproach,
    },
  ],
};

const medicalPageAlbums = {
  whatSetUsApart: [
    {
      title: '14+ Experience',
      cover: expertGuidance,
    },
    {
      title: 'Connected With 100+ Top Colleges',
      cover: holisticSupport,
    },
    {
      title: '5000+ Successful Stories',
      cover: successStories,
    },
    {
      title: 'Various Courses',
      cover: personalizedApproach,
    },
  ],
};

export {
  whyChooseUsAlbums,
  aboutUsPageWhyChooseUsAlbums,
  aboutUsWhatSetusApart,
  aboutUsStudentsPlaced,
  engineeringPageAlbums,
  managementPageAlbums,
  medicalPageAlbums,
};
