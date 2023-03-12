import { TwitterIcon } from "~/components/icons/TwitterIcon";

type Props = {
  title: string;
};

export const TwitterShareButton = ({ title }: Props) => (
  <a
    className="flex justify-center items-center gap-1 px-4 h-9 bg-twitter rounded-full"
    href={`http://twitter.com/share?url=${location.href}&text=${title}`}
    target="_blank"
    rel="noreferrer"
  >
    <TwitterIcon fill="#fff" width={20} height={20} />
    <span className="text-white text-sm">Tweet</span>
  </a>
);
