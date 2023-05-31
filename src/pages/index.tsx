import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { groq } from "next-sanity";
import { client } from "../../sanity/lib/client";
import Link from "next/link";
import { ImageAsset } from "sanity";

export default function Home({
	data: { contact, metadata },
	releases,
}: {
	data: {
		contact: {
			contactPhone: string;
			contactEmail: string;
			contactLable: string;
			ceoName: string;
			ceoLable: string;
		};
		metadata: {
			title: string;
			description: string;
			ogImage: ImageAsset;
		};
	};
	releases: {
		title: string;
		slug: {
			current: string;
		};
	}[];
}) {
	return (
		<>
			<Head>
				<title>World Affairs AB</title>
				<meta name="description" content="" />
				<meta property="og:title" content="World Affairs AB" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://worldaffairs.se/" />
				<meta property="og:image" content={"/og.jpg"} />
				<meta name="theme-color" content="#fff"></meta>
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="World Affairs AB" />
				<meta name="twitter:description" content="" />
				<meta
					name="twitter:image:src"
					content={`https://worldaffairs.se/og.jpg`}
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header className={styles.header}>
				<Link href="/">
					<Image
						priority
						className="logo"
						src="/WA_LOGO.svg"
						alt="World Affairs AB"
						width={0}
						height={0}
					/>
				</Link>
			</header>
			<main className={styles.main}>
				<h2>WA Records</h2>
				<div className={styles.releases}>
					{releases.map((release) => (
						<Link
							key={release.title}
							href={`/releases/${release.slug.current}`}
						>
							{release.title}
						</Link>
					))}
				</div>
			</main>
			<footer className={styles.footer}>
				<div className={"contact-info"}>
					<div className={"contact-label"}>{contact.ceoLable}: </div>
					<div>
						<span>{contact.ceoName}</span>
					</div>
				</div>
				<div className={"contact-info"}>
					<div className={"contact-label"}>
						{contact.contactLable}:{" "}
					</div>
					<div>
						<a href={`mailto:${contact.contactEmail}`}>
							{contact.contactEmail}
						</a>
					</div>
					<div>
						<a href={`tel:${contact.contactPhone}`}>
							{contact.contactPhone}
						</a>
					</div>
				</div>
			</footer>
		</>
	);
}

export async function getStaticProps({ prewiew = false, params = {} }) {
	const data = await client.fetch(groq`*[_type == "home"][0]{
		...,
	}`);
	const releases = await client.fetch(
		groq`*[_type == "release"][]{
			..., 
		}`
	);

	return {
		props: {
			data: data,
			releases: releases,
		},
	};
}
