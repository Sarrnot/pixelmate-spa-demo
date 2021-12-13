import { AppHeader } from "components/AppHeader";
import { AppFooter } from "components/AppFooter";
import { Viewport } from "components/Viewport";
import { Intro } from "components/content/Intro";
import { Sponsors } from "components/content/Sponsors";
import { MeetPixelmate } from "components/content/MeetPixelmate";

export function IndexPage() {
  return (
    <>
      <AppHeader theme={"light"} />
      <Viewport>
        <Intro />
        <Sponsors />
      </Viewport>
      <Viewport>
        <MeetPixelmate />
      </Viewport>
      <AppFooter />
    </>
  );
}
