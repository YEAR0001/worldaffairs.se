// eslint-disable-next-line import/no-anonymous-default-export
export default {
	name: "home",
	title: "Home",
	type: "document",
	fields: [
		{
			name: "metadata",
			title: "Metadata",
			type: "object",
			fields: [
				{
					name: "title",
					title: "Title",
					type: "string",
				},
				{
					name: "description",
					title: "Description",
					type: "string",
				},
				{
					name: "ogImage",
					title: "OG Image",
					type: "image",
				},
			],
		},
		{
			name: "contact",
			title: "Contact",
			type: "object",
			fields: [
				{
					name: "contactLable",
					title: "Contact Lable",
					type: "string",
				},
				{
					name: "contactEmail",
					title: "Contact Email",
					type: "string",
				},
				{
					name: "contactPhone",
					title: "Contact Phone",
					type: "string",
				},
				{
					name: "ceoLable",
					title: "CEO Lable",
					type: "string",
				},
				{
					name: "ceoName",
					title: "CEO Name",
					type: "string",
				},
			],
		},
	],
};
