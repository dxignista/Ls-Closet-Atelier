import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Link } from "wouter";

export function AlterationForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, watch } = useForm({
    defaultValues: {
      preferredContact: "Email",
      typeOfGarment: "",
      alterationType: [],
      howHear: "",
      terms: false
    }
  });

  const howHearValue = watch("howHear");

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/ALTERATION_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        toast({
          title: "Request Submitted",
          description: "Thank you. We will be in touch shortly.",
        });
      } else {
        throw new Error("Failed to submit");
      }
    } catch (e) {
      toast({
        title: "Submission Error",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-3xl mx-auto">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl italic tracking-wide text-foreground mb-4">Alteration Request Form</h1>
        <p className="text-zinc-400 font-light">Please complete this form to request alterations.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10 bg-card p-8 md:p-12 border border-border rounded-sm">
        
        {/* Personal Details */}
        <div className="space-y-6">
          <h3 className="text-xl text-primary italic border-b border-white/10 pb-2">Client Details</h3>
          
          <div className="space-y-2">
            <Label>Full Name <span className="text-primary">*</span></Label>
            <Input {...register("fullName", { required: true })} className="bg-input border-border focus-visible:ring-primary" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Email Address <span className="text-primary">*</span></Label>
              <Input type="email" {...register("email", { required: true })} className="bg-input border-border focus-visible:ring-primary" />
            </div>
            <div className="space-y-2">
              <Label>Phone Number <span className="text-primary">*</span></Label>
              <Input type="tel" {...register("phone", { required: true })} className="bg-input border-border focus-visible:ring-primary" />
            </div>
          </div>

          <div className="space-y-3">
            <Label>Preferred Contact Method <span className="text-primary">*</span></Label>
            <div className="flex gap-6">
              {['Email', 'Phone', 'Text'].map(method => (
                <label key={method} className="flex items-center gap-2 cursor-pointer text-sm">
                  <input type="radio" value={method} {...register("preferredContact")} className="accent-primary" />
                  <span>{method}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="space-y-6">
          <h3 className="text-xl text-primary italic border-b border-white/10 pb-2">Alteration Requirements</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Type of Garment <span className="text-primary">*</span></Label>
              <select {...register("typeOfGarment", { required: true })} className="w-full h-10 px-3 py-2 bg-input border border-border rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                <option value="">Select an option</option>
                <option value="Wedding Dress">Wedding Dress</option>
                <option value="Suit">Suit</option>
                <option value="Pants">Pants</option>
                <option value="Dress">Dress</option>
                <option value="Skirt">Skirt</option>
                <option value="Blouse">Blouse</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label>Quantity of Items <span className="text-primary">*</span></Label>
              <Input type="number" min="1" {...register("quantity", { required: true })} className="bg-input border-border focus-visible:ring-primary" />
            </div>
          </div>

          <div className="space-y-3">
            <Label>Alteration Type (select all that apply) <span className="text-primary">*</span></Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
              {['Hemming', 'Taking in/Letting out', 'Sleeve adjustments', 'Waist/Hip adjustments', 'Shoulder adjustments', 'Bust adjustments', 'Repairs', 'Other'].map(type => (
                <label key={type} className="flex items-center gap-2 cursor-pointer text-sm">
                  <input type="checkbox" value={type} {...register("alterationType")} className="accent-primary" />
                  <span className="text-zinc-300">{type}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Do you need the items by a certain date?</Label>
              <Input type="date" {...register("neededByDate")} className="bg-input border-border focus-visible:ring-primary" />
            </div>
            <div className="space-y-2">
              <Label>Event Date (Wedding/Special Event)</Label>
              <Input type="date" {...register("eventDate")} className="bg-input border-border focus-visible:ring-primary" />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Alteration Details / Additional Information <span className="text-primary">*</span></Label>
            <Textarea {...register("details", { required: true })} rows={4} className="bg-input border-border focus-visible:ring-primary resize-none" placeholder="Please describe what needs to be done..." />
          </div>

          <div className="space-y-2">
            <Label>Upload Photo of Garment <span className="text-primary">*</span></Label>
            <Input type="file" accept="image/*" {...register("photo", { required: true })} className="bg-input border-border cursor-pointer file:text-primary file:bg-transparent file:border-0" />
          </div>
        </div>

        {/* Other */}
        <div className="space-y-6">
          <div className="space-y-2">
            <Label>How did you hear about us?</Label>
            <select {...register("howHear")} className="w-full h-10 px-3 py-2 bg-input border border-border rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
              <option value="">Select an option</option>
              <option value="Social Media">Social Media</option>
              <option value="Personal Referral">Personal Referral</option>
              <option value="Advertisement">Advertisement</option>
              <option value="Search Engine">Search Engine</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {(howHearValue === "Other" || howHearValue === "Personal Referral") && (
            <div className="space-y-2">
              <Label>Referral & Other details</Label>
              <Input {...register("referralDetails")} className="bg-input border-border focus-visible:ring-primary" />
            </div>
          )}

          <div className="pt-6 border-t border-white/10">
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" {...register("terms", { required: true })} className="mt-1 accent-primary" />
              <span className="text-sm text-zinc-300">
                I have read the <Link href="/terms" className="text-primary hover:underline">terms and conditions</Link>. <span className="text-primary">*</span>
              </span>
            </label>
          </div>
        </div>

        <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium tracking-widest uppercase h-12 rounded-sm">
          {isSubmitting ? "Submitting..." : "Submit Request"}
        </Button>
      </form>
    </div>
  );
}