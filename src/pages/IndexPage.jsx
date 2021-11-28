import { Viewport } from "components/Viewport";
import { Intro } from "components/content/Intro";
import { Sponsors } from "components/content/Sponsors";
import { MeetPixelmate } from "components/content/MeetPixelmate";

export function IndexPage() {
  return (
    <>
      <Viewport>
        <Intro />
        <Sponsors />
      </Viewport>
      <Viewport>
        <MeetPixelmate />
      </Viewport>
    </>
  );
}
