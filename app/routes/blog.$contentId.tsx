import type { MetaFunction, HeadersFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import type { MicroCMSDate } from "microcms-js-sdk";
import styles from "~/styles/content.css";
import type { Content } from "~/api/microcms/types";
import { getEnglishDate } from "~/utils/getEnglishDate";
import { createMicrocmsApi } from "~/api/microcms";
import type { LoaderFunction } from "~/types/remix";
import { BlogDetailPageTemplate } from "~/templates/BlogDetailPageTemplate";

export const headers: HeadersFunction = () => ({
  "Cache-Control": "max-age=0, s-maxage=300, stale-while-revalidate=300",
});

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const meta: MetaFunction<typeof loader> = ({ data }) => ({
  title: data.title,
  description: data.content.replace(/(<([^>]+)>)/gi, "").slice(0, 120),
  "og:url": `https://mercy.mercy34.workers.dev/blog/${data.id}`,
  "og:title": `${data.title}`,
  "og:description": data.content.replace(/(<([^>]+)>)/gi, "").slice(0, 120),
  "og:image": data.eyecatch.url,
  "og:site_name": "mercy",
  "twitter:card": data.eyecatch.url ? "summary_large_image" : "summary",
  "twitter:creator": "@mercy34mercy",
  "twitter:site": "@mercy34mercy",
});

export const loader: LoaderFunction = async ({ params, context: { env } }) => {
  const content = await createMicrocmsApi(env.X_MICROCMS_API_KEY, env.MICROCMS_BASE_URL)
    .blogs._id(params.contentId as string)
    .$get();
  content.publishedAt = getEnglishDate(new Date(content.publishedAt || ""));
  return json(content);
};

export default function $ContentId() {
  return <BlogDetailPageTemplate content={useLoaderData<Content & MicroCMSDate>()} />;
}
