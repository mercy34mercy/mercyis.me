import { ReactionButton } from "./ReactionButton";
import { TwitterIcon } from "~/components/icons/TwitterIcon";

export const BlogReactions = () => (
  <div className="flex justify-end gap-1 py-2">
    {/* <ReactionButton>👏</ReactionButton>
     */}
    {typeof window !== "undefined" && (
      <ReactionButton
        as="a"
        href={`http://twitter.com/share?url=${location.href}&text=${document.title}`}
        target="_blank"
      >
        <TwitterIcon fill="#1DA1F2" width={30} height={30} />
      </ReactionButton>
    )}
  </div>
);
