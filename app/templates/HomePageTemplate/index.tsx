import { Fragment } from "react";
import type { TimelineItem } from "~/templates/HomePageTemplate/Timeline/TimelineCard";
import { Profile } from "~/components/Profile";
import { SocialLinks } from "~/components/SocialLinks";
import { Spacer } from "~/components/Spacer";
import { Timeline } from "~/templates/HomePageTemplate/Timeline";

type Props = {
  timeline: TimelineItem[];
};

export const HomePageTemplate = ({ timeline }: Props) => (
  <Fragment>
    <Spacer size={16} />
    <Profile />
    <Spacer size={16} />
    <SocialLinks />
    <Spacer size={24} />
    <Timeline timeline={timeline} />
  </Fragment>
);
