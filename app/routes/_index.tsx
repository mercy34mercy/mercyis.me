import type { HeadersFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import type { TimelineItem } from "~/templates/HomePageTemplate/Timeline/TimelineCard";
import { fetchZeenFeed } from "~/api/zenn";
import { API_FETCH_KV_KEY } from "~/consts/kv";
import { fetchQiitaFeed } from "~/api/qiita";
import { fetchMicrocms } from "~/api/microcms";
import type { LoaderFunction } from "~/types/remix";
import { HomePageTemplate } from "~/templates/HomePageTemplate";
import { fetchNoteFeed } from "~/api/note";

export const headers: HeadersFunction = () => ({
  "Cache-Control": "max-age=0, s-maxage=300, stale-while-revalidate=300",
});

export const loader: LoaderFunction = async ({ context: { env } }) => {
  const { API_FETCH_KV } = env;
  const cacheData = (await API_FETCH_KV.get(API_FETCH_KV_KEY.timeline, "json")) as TimelineItem[];

  if (cacheData) {
    return json(cacheData);
  }

  const promiseList = await Promise.all([
    fetchZeenFeed(),
    fetchQiitaFeed(),
    fetchNoteFeed(),
    fetchMicrocms(env.X_MICROCMS_API_KEY, env.MICROCMS_BASE_URL),
  ]);

  const timeline = promiseList
    .flat()
    .sort((a, b) => (new Date(a.pubDate).getTime() > new Date(b.pubDate).getTime() ? -1 : 1));

  await API_FETCH_KV.put(API_FETCH_KV_KEY.timeline, JSON.stringify(timeline), {
    expirationTtl: 3600,
  });

  return json(timeline);
};

export default function Index() {
  return <HomePageTemplate timeline={useLoaderData<TimelineItem[]>()} />;
}
