import { FC } from "react";

import TitleSection from "@/components/atoms/TitleSection";
import JobItem from "./JobItem";
interface FeaturedJobsProps {}

const FeaturedJobs: FC<FeaturedJobsProps> = ({}) => {
  return (
    <div className="mt-32 mb-10">
      <TitleSection word1="Featured" word2="jobs" />
      <div className="grid grid-cols-4 gap-8 mt-12">
        {[0, 1, 2].map((item: number) => (
          <JobItem
            key={item}
            image="/images/company.png"
            jobType="Full Time"
            location="Paris, France"
            name="Email Marketing"
            type="Agency"
            desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum deleniti necessitatibus quasi distinctio, beatae corrupti sed aut libero nemo ab voluptate reiciendis? Soluta facilis distinctio voluptatum corporis aliquam quidem sint."
            categories={["Marketing", "Design"]}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
