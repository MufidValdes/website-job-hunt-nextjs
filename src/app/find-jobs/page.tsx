"use client";

import { CATEGORIES_OPTIONS } from "@/constants";
import ExploreDataContainer from "@/containers/ExploreDataContainer";
import { formFilterSchema } from "@/lib/form-schema";
import { filterFormType, JobType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";


const FILTER_FORMS: filterFormType[] = [
	{
		name:"categories",
		label:"categories",
		items : CATEGORIES_OPTIONS
	},
];

const dummyData: JobType[] = [
	{
		image: "/images/company2.png",
		jobType: "Full-Time",
		name: "Social Media",
		type: "Agency",
		location: "Paris, France",
		desc: "lorem",
		needs: 10,
		applicants: 5,
		id: "",
		category: {
			id: "",
			name: "",
			totalJobs: 0
		},
		skills: []
	}
]




export default function FindJobsPage() {
	const formFilter = useForm<z.infer<typeof formFilterSchema>>({
		resolver: zodResolver(formFilterSchema),
		defaultValues: {
			categories: [],
		},
	});

	const onSubmitFormFilter = async (
		val: z.infer<typeof formFilterSchema>
	) => {
		console.log(val);
	};
	return (
		<ExploreDataContainer
			formFilter={formFilter}
			onSubmitFilter={onSubmitFormFilter}
			filterForms={FILTER_FORMS}
			title="dream job"
			subtitle="Find your next career at companies like HubSpot, Nike,
			and Dropbox"
			loading={false}
			type="job"
			data={dummyData}
		/>
	);
}
