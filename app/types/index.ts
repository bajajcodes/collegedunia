export type $TSFixME = any;

export type EngineeringExam = {
  name: string;
  imageSource: string;
  description: string;
  learnMore: {
    content: string;
    age?: string;
    qualification?: string;
    compulsorySubjects?: string;
    numberOfAttempts?: number;
    subjectsInPaper?: string;
    additionalDetails?: string;
    eligibility?: {
      age?: string;
      nationality?: string;
      qualification?: string | { [key: string]: string };
    };
    lateralEntryAvailableFor?: string[];
    collegesCovered?: string[];
    qualifications?: {
      bTech?: {
        compulsorySubjects?: string;
        qualification?: string;
      };
      mTech?: {
        compulsoryMarks?: string;
        qualification?: string;
      };
      mbbs?: {
        compulsorySubjects?: string;
        qualification?: string;
      };
      bba?: {
        compulsoryMarks?: string;
        qualification?: string;
      };
    };
    compulsoryMarks?: string;
    fees?: string;
  };
};
