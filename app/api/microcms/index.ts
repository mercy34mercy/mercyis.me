import aspida from "@aspida/fetch";
import api from "./$api";
import type { TimelineItem } from "~/components/TimelineCard";
import { getEnglishDate } from "~/utils/getEnglishDate";

export const createMicrocmsApi = (apiKey: string, baseURL: string) =>
  api(
    aspida(fetch, {
      headers: {
        "X-MICROCMS-API-KEY": apiKey,
      },
      baseURL,
    }),
  );

export const fetchMicrocms = async (apiKey: string, baseURL: string): Promise<TimelineItem[]> => {
  const microcmsApi = api(
    aspida(fetch, {
      headers: {
        "X-MICROCMS-API-KEY": apiKey,
      },
      baseURL,
    }),
  );
  const res = await microcmsApi.blogs.$get();

  return res.contents.map((content) => ({
    title: content.title,
    pubDate: getEnglishDate(new Date(content.publishedAt as string)),
    link: `/blog/${content.id}`,
    kind: "MyBlog",
  }));
};
