import type { TimelineItem } from "~/templates/HomePageTemplate/Timeline/TimelineCard";
import { getEnglishDate } from "~/utils/getEnglishDate";

const URL = "https://note.com/api/v2/creators/nanndemokakuyo/contents?kind=note&page=1"

export const fetchNoteFeed =async (): Promise<TimelineItem[]> => {
    const items = (await (await fetch(URL)).json()) as any;
    return Array.from(items.data.contents).map((item: any) => ({
        title: item.name,
        pubDate: getEnglishDate(new Date(item.publishAt)),
        link: item.noteUrl,
        kind: "Note",
      }));
}