import React from "react";

export function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto space-y-8 font-light leading-relaxed text-zinc-300">
      <h1 className="text-4xl md:text-5xl italic tracking-wide text-foreground mb-12">Privacy Policy</h1>
      <p className="text-sm tracking-widest uppercase text-muted-foreground">Effective Date: May 26, 2026</p>
      
      <div className="space-y-6">
        <h2 className="text-2xl text-primary font-medium mt-12 mb-4">1. Information We Collect</h2>
        <p>
          When you use our website to submit an Alteration Request or Couture Costume Application, we collect personal information that you voluntarily provide to us. This may include, but is not limited to:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Client and dancer names</li>
          <li>Contact information (email addresses, phone numbers)</li>
          <li>Garment details and physical measurements</li>
          <li>Photos of garments, inspiration, and relevant project files</li>
        </ul>

        <h2 className="text-2xl text-primary font-medium mt-12 mb-4">2. How We Use Your Information</h2>
        <p>
          The information we collect is used exclusively to evaluate, process, and fulfill your custom design and alteration requests. Specifically, we use your data to:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Communicate with you regarding your inquiry and project status</li>
          <li>Provide accurate quotes and timelines</li>
          <li>Design and tailor garments to your precise specifications</li>
        </ul>

        <h2 className="text-2xl text-primary font-medium mt-12 mb-4">3. Data Sharing and Third-Party Processors</h2>
        <p>
          We do not sell, rent, or lease your personal data to third parties. We use a trusted third-party service, Formspree, to securely process our web forms. When you submit a form, your data is securely transmitted via Formspree and delivered directly to our official email inbox. Formspree processes this data in accordance with their own strict privacy standards and does not use your information for their own marketing.
        </p>

        <h2 className="text-2xl text-primary font-medium mt-12 mb-4">4. Data Storage and Security</h2>
        <p>
          Your information is stored securely in our designated business email accounts and internal project management systems. We implement reasonable administrative, technical, and physical security measures to protect your personal information from unauthorized access, use, or disclosure.
        </p>

        <h2 className="text-2xl text-primary font-medium mt-12 mb-4">5. Your Rights</h2>
        <p>
          You have the right to request access to the personal data we hold about you, to request corrections to any inaccurate information, or to request the deletion of your data once your project is complete and all accounts are settled. To exercise these rights, please contact us.
        </p>

        <h2 className="text-2xl text-primary font-medium mt-12 mb-4">6. Contact Us</h2>
        <p>
          If you have any questions or concerns regarding this Privacy Policy or our data practices, please reach out to us at:
        </p>
        <p>
          <strong>L's Closet Atelier</strong> <br/>
          Email: <a href="mailto:lsclosetatelier@gmail.com" className="text-primary hover:underline">lsclosetatelier@gmail.com</a>
        </p>
      </div>
    </div>
  );
}