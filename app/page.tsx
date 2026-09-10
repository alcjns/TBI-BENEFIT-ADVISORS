"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

const Check = () => <span aria-hidden="true">✓</span>;

export default function Home() {
  const [sent, setSent] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true); }

  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="wordmark header-wordmark" href="#top" aria-label="TBI Benefit Advisors home"><span>TBI</span><span>Benefit</span><span>Advisors</span></a>
        <div className="nav-links"><a href="#about">About</a><a href="#plans">Plans</a><a className="nav-phone" href="tel:+14073103300" aria-label="Call TBI Benefit Advisors at (407) 310-3300">(407) 310-3300</a><a className="nav-cta" href="#contact">Get guidance</a></div>
      </nav>
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Florida health insurance guidance</p>
          <h1>Health coverage, handled with <em>confidence.</em></h1>
          <p className="lede">We help Floridians understand ACA health plan options and choose coverage that fits their needs.</p>
          <div className="hero-actions"><a className="button button-dark" href="#contact">Talk with an advisor <span>→</span></a><a className="text-link" href="#plans">Explore our approach</a></div>
          <div className="trust-row" aria-label="Company highlights"><div><strong>Since 1999</strong><span>Serving individuals &amp; families</span></div><div><strong>Florida focused</strong><span>Local plan guidance</span></div></div>
        </div>
        <div className="hero-art"><div className="image-frame"><Image src="/tbi-tiger.jpg" alt="Illustrated white tiger, the TBI Benefit Advisors brand symbol" fill priority sizes="(max-width: 800px) 90vw, 42vw" /></div><p className="art-caption"><b>Fiercely protecting</b><br />your financial health.</p></div>
      </section>
      <section className="intro" id="about"><p className="section-index">01 — Who we are</p><div><h2>Experience you can lean on.</h2><p>For more than 25 years, TBI Benefit Advisors has helped clients navigate health insurance with clarity and personal attention. We make a complicated decision feel more manageable.</p></div></section>
      <section className="plans" id="plans">
        <div className="plans-heading"><p className="eyebrow">What we do</p><h2>Clear guidance.<br />Thoughtful choices.</h2></div>
        <div className="service-grid">
          <article><span className="service-number">01</span><h3>ACA plan options</h3><p>We explain available Affordable Care Act plan choices from participating Florida insurance carriers.</p></article>
          <article><span className="service-number">02</span><h3>Personal support</h3><p>We listen first, then help you compare key features such as networks, premiums, and out-of-pocket costs.</p></article>
          <article><span className="service-number">03</span><h3>Enrollment guidance</h3><p>From application through enrollment, we help you understand the process and what comes next.</p></article>
        </div>
      </section>
      <section className="process"><p className="section-index">02 — Our approach</p><div className="process-copy"><p className="quote">“Good coverage starts with a conversation.”</p><div className="steps"><p><Check /> Tell us what matters to you</p><p><Check /> Review available plan options</p><p><Check /> Get help with the next step</p></div></div></section>
      <section className="contact" id="contact">
        <div className="contact-copy"><p className="eyebrow">Let’s talk</p><h2>Ready to explore your options?</h2><a className="contact-phone" href="tel:+14073103300">(407) 310-3300</a><p>Call us directly or share a few details and an advisor will follow up. Please do not include medical or other sensitive personal information.</p><div className="privacy-note"><span aria-hidden="true">✦</span><p>Your information should only be used to respond to your request.</p></div></div>
        <form onSubmit={handleSubmit}>
          <div className="field-row"><label>First name<input required name="firstName" autoComplete="given-name" /></label><label>Last name<input required name="lastName" autoComplete="family-name" /></label></div>
          <label>Email address<input required type="email" name="email" autoComplete="email" /></label><label>Phone number <span>(optional)</span><input type="tel" name="phone" autoComplete="tel" /></label>
          <label>How can we help?<textarea required name="message" rows={4} placeholder="Tell us what you’re looking for—no sensitive health information, please." /></label>
          <label className="consent"><input required type="checkbox" /> <span>I agree that TBI Benefit Advisors may contact me about my request. Consent is not a condition of enrollment.</span></label>
          <button className="button button-orange" type="submit">Send my request <span>→</span></button>{sent && <p className="form-status" role="status">Thanks—your request has been received.</p>}
        </form>
      </section>
      <footer><div className="wordmark footer-brand" aria-label="TBI Benefit Advisors"><span>TBI</span><span>Benefit</span><span>Advisors</span></div><p>Florida health insurance guidance since 1999.<br /><a className="footer-phone" href="tel:+14073103300">(407) 310-3300</a></p><p className="fine-print">TBI Benefit Advisors is a health insurance agency. Plan availability, eligibility, benefits, costs, and subsidies vary. This website is for general informational purposes and is not a guarantee of coverage or benefits. TBI Benefit Advisors is not affiliated with or endorsed by the U.S. government or the federal Medicare program.</p><p className="copyright">© {new Date().getFullYear()} TBI Benefit Advisors. All rights reserved.</p></footer>
    </main>
  );
}
