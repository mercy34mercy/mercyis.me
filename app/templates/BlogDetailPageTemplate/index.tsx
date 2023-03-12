import type { MicroCMSDate } from "microcms-js-sdk";
import { Fragment } from "react";
import { Link } from "@remix-run/react";
import { ContentViewer } from "./ContentViewer";
import { Bio } from "./Bio";
import { BlogReactions } from "./BlogReactions";
import type { Content } from "~/api/microcms/types";
import { Spacer } from "~/components/Spacer";

type Props = {
  content: Content & MicroCMSDate;
};

export const BlogDetailPageTemplate = ({ content }: Props) => (
  <Fragment>
    <header className="py-4 flex gap-2 text-md">
      <Link to="/">Home 🏠</Link>
      <span className="text-gray-500">{`>`}</span>
      <span>📝</span>
    </header>
    <div className="text-center pb-6 border-b border-gray-600">
      <h1 className="text-2xl pt-10 py-5">{content.title}</h1>
      <div>
        <div className="text-gray-400 text-sm">Published</div>
        <time className="text-sm">{content.publishedAt || ""}</time>
      </div>
    </div>
    <Spacer size={10} />
    <ContentViewer text={content.content || ""} />
    <Spacer size={20} />
    <BlogReactions title={content.title} />
    <Bio />
  </Fragment>
);
