import { TwitterShareButton } from "./TwitterShareButton";

type Props = {
  title: string;
};

export const BlogReactions = ({ title }: Props) => (
  <div className="flex items-center justify-end gap-1 py-2">
    {/* <ReactionButton>👏</ReactionButton>

     */}

    {typeof window !== "undefined" && <TwitterShareButton title={title} />}
  </div>
);
