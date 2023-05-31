import { client } from "../../../sanity/lib/client";
import { groq } from "next-sanity";
import slugify from "slugify";
import Head from "next/head";
import Image from "next/image";
import { ImageAsset, DateInputProps } from "sanity";
import styles from "@/styles/Release.module.css";
import Link from "next/link";
import { useNextSanityImage } from "next-sanity-image";

export default function Release({
	data: {
		contact = {
			contactPhone: "",
			contactEmail: "",
			contactLable: "",
			ceoName: "",
			ceoLable: "",
		},
		metadata,
	},
	release,
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
	release: {
		title: string;
		coverArt: ImageAsset;
		releaseDate: DateInputProps;
	};
}) {
	const imgProps = useNextSanityImage(client, release.coverArt);
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
			<header>
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
				<h1>{release.title}</h1>
				<div className={styles.image}>
					<Image
						priority
						src={imgProps.src}
						fill
						alt={release.title}
					/>
				</div>
			</main>
			<footer className={styles.footer}>
				{/* <div className={"contact-info"}>
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
				</div> */}
			</footer>
		</>
	);
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
	const { slug } = params;
	const release = await client.fetch(
		groq`*[_type == "release" && slug.current == $slug][0]{...,
        }`,
		{ slug }
	);
	const data = await client.fetch(groq`*[_type == "home"][0]{
		...,
	}`);
	console.log(release, data);
	return {
		props: {
			data: data,
			release: release,
		},
	};
}

export async function getStaticPaths() {
	const paths = await client.fetch(
		groq`*[_type == "release" && defined(slug.current)][].slug.current        `
	);
	return {
		paths: paths.map((slug: string) => ({
			params: { slug: slug },
		})),
		fallback: false,
	};
}
