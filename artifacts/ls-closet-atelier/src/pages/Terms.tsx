import React from "react";
import { Link } from "wouter";

export function Terms() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto space-y-8 font-light leading-relaxed text-zinc-300">
      <h1 className="text-4xl md:text-5xl italic tracking-wide text-foreground mb-12">Terms & Conditions</h1>
      <p className="text-sm tracking-widest uppercase text-muted-foreground">Effective Date: May 26, 2026</p>
      
      <div className="space-y-6">
        <h2 className="text-2xl text-primary font-medium mt-12 mb-4">1. Form Submissions & Project Acceptance</h2>
        <p>
          Submission of an Alteration Request or Couture Costume Application via this website is a request for services, not a binding contract. L's Closet Atelier accepts projects based on current availability, scope of work, and design consultation outcomes. We reserve the right to decline any project.
        </p>

        <h2 className="text-2xl text-primary font-medium mt-12 mb-4">2. Non-Refundable Custom Work</h2>
        <p>
          Due to the bespoke nature of our services, all custom couture items and major structural alterations are strictly non-refundable once design work or fabric cutting has commenced. Deposits required to secure your place on our calendar are non-refundable.
        </p>

        <h2 className="text-2xl text-primary font-medium mt-12 mb-4">3. Rush Orders</h2>
        <p>
          Projects requiring a turnaround time shorter than our standard quoted timeline may be accepted at our discretion as Rush Orders. Rush Orders are subject to additional fees, which will be detailed in your individual quote.
        </p>

        <h2 className="text-2xl text-primary font-medium mt-12 mb-4">4. Measurements & Sizing</h2>
        <p>
          For clients providing their own measurements (rather than scheduling an in-person fitting), the client assumes full responsibility for the accuracy of those measurements. Alterations required due to incorrectly supplied measurements will incur additional charges.
        </p>

        <h2 className="text-2xl text-primary font-medium mt-12 mb-4">5. Pricing & Payment</h2>
        <p>
          All pricing for alterations and custom couture is quoted individually after a thorough design consultation and assessment of the garment or project requirements. Payment terms, including deposit requirements and final payment schedules, will be discussed and agreed upon during consultation.
        </p>

        <h2 className="text-2xl text-primary font-medium mt-12 mb-4">6. Portfolio & Marketing Use</h2>
        <p>
          L's Closet Atelier takes pride in our work and reserves the right to photograph completed garments, sketches, and fitting processes. We may use these images for our portfolio, website, and social media marketing purposes. We will always seek client consent before posting identifying photos of the client or dancer wearing the garment.
        </p>

        <h2 className="text-2xl text-primary font-medium mt-12 mb-4">7. Contact Information</h2>
        <p>
          For any questions regarding these Terms & Conditions, please contact us at: <br/>
          <strong>L's Closet Atelier</strong> <br/>
          Email: <a href="mailto:lsclosetatelier@gmail.com" className="text-primary hover:underline">lsclosetatelier@gmail.com</a>
        </p>
      </div>
    </div>
  );
}