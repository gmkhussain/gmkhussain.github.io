import React from "react";
import { Briefcase } from "lucide-react";


const jobsExp = [
  {
    id: 1,
    company: "Tech Solutions Inc.",
    logoUrl: "https://via.placeholder.com/64",
    role: "Senior Software Engineer",
    startDate: "2020-01-01",
    endDate: "2023-06-30",
    description: "Developed React & NodeJS applications for enterprise clients.",
  },
  {
    id: 2,
    company: "Creative Agency",
    logoUrl: "https://via.placeholder.com/64",
    role: "Frontend Developer",
    startDate: "2017-12-01",
    endDate: "2019-12-31",
    description: "Worked on multiple UI/UX projects using React and TailwindCSS.",
  },
];


type Job = {
  id: number;
  company: string;
  logoUrl?: string;
  role: string;
  startDate: string; // YYYY-MM-DD
  endDate?: string; // YYYY-MM-DD
  description?: string;
};

type JobExperienceProps = {
  jobs: Job[];
};

const JobExperience: React.FC<JobExperienceProps> = ({ jobs = jobsExp }) => {
  const getDuration = (start: string, end?: string) => {
    const startDate = new Date(start);
    const endDate = end ? new Date(end) : new Date();

    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    return `${years ? years + " yr" : ""}${years && months ? " " : ""}${
      months ? months + " mo" : ""
    }`;
  };

  const formatDate = (dateStr: string | undefined) => {
    if (!dateStr) return "Present";
    const date = new Date(dateStr);
    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
  };

  return (
    <section className="relative w-full py-24 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl mb-16 text-center text-white">
          <span className="font-bold">Job </span>
          <span className="text-gradient italic font2">Experiences</span>
        </h2>

        {/* Job cards */}
        <div className="relative flex flex-col">
          {jobs.map((job, idx) => (
            <div
              key={job.id}
              className="group relative flex gap-6 items-start backdrop-blur-lg rounded-3xl p-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
            >
              {/* Timeline connector */}
              {/* <div className="absolute left-10 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 to-purple-500 rounded" /> */}

              {/* Logo */}
              {job.logoUrl && (
                <div className="relative flex-shrink-0 w-20 h-20 rounded-full p-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
                  <img
                    src={job.logoUrl}
                    alt={job.company}
                    className="w-full h-full rounded-full object-contain bg-white p-1"
                  />
                </div>
              )}

              {/* Job Info */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="w-5 h-5 text-white/80" />
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {job.role}
                  </h3>
                </div>

               
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-sm text-white/70 font-semibold">{job.company}</span>
                  <span className="text-xs text-white/60 italic">
                    {formatDate(job.startDate)} - {formatDate(job.endDate)}
                  </span>
                  <span className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white">
                    {getDuration(job.startDate, job.endDate)}
                  </span>
                </div>

                {job.description && (
                  <p className="text-white/70 text-sm">{job.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobExperience;
