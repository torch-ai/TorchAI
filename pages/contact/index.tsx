// noinspection JSUnusedGlobalSymbols

import React, { useContext } from "react";
import Grid from "../../styles/modules/grid.module.scss";
import Style from "./styles.module.scss";
import Footer from "../../components/Footer/Footer";
import Head from "next/head";
import { InView } from "react-intersection-observer";
import LayoutContext from "../../components/layout/LayoutContext";
import PageTitle from "../../components/PageTitle/PageTitle";
import PageSubtitle from "../../components/PageSubtitle/PageSubtitle";
import { getHeadPageTitle } from "../../utils/meta";
import { PageSettings } from "../../types/next";
import clsx from "clsx";

export const pageSettings: PageSettings = {
  path: "/contact",
  linkContent: <>Contact</>,
};

const Index: React.FunctionComponent = () => {
  const { setNavColor } = useContext(LayoutContext);

  return (
    <>
      <Head>
        <title>
          {getHeadPageTitle([
            "Contact us",
            "Unlock your potential",
            "Talk to us",
          ])}
        </title>
      </Head>
      <section className={clsx(Style.contactContainer)}>
        <InView
          as="div"
          onChange={(inView) => setNavColor(inView ? "black" : "white")}
        >
          <div className={clsx(Grid.container, Grid.marginCenter)}>
            <div className={clsx(Grid.row)}>
              <div className={clsx(Grid.colXs12, Style.contactTitle)}>
                <PageTitle>Contact Us.</PageTitle>
                <PageSubtitle>
                  Find out how Nexus can unlock your productivity.
                </PageSubtitle>
              </div>
            </div>
            <div className={clsx(Grid.row)}>
              <div className={clsx(Grid.colXs12)}>
                <form
                  className={clsx(Style.contactForm)}
                  action="https://formspree.io/f/mvolablv"
                  method="POST"
                >
                  <div>
                    <label className={clsx(Style.contactNames)}>
                      <input
                        type="text"
                        name="name"
                        placeholder="Full name"
                        required
                        autoComplete="name"
                        autoFocus
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type="text"
                        name="company"
                        placeholder="Index"
                        autoComplete="organization"
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        autoComplete="email"
                      />
                    </label>
                  </div>

                  <div>
                    <label>
                      <textarea name="message" placeholder="Message" required />
                    </label>
                  </div>
                  <div>
                    <button type="submit">Send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </InView>
      </section>
      <Footer />
    </>
  );
};

export default Index;
