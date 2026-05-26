import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Link } from "wouter";

export function CostumeForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, watch } = useForm({
    defaultValues: {
      preferredContact: "Email",
      routineType: "",
      baseStyle: "",
      coverageLevel: "",
      rhinestonePreference: "",
      rushOrder: "No",
      noBudget: false
    }
  });

  const danceStyleOther = watch("danceStyleOtherCheck");
  const designElementsOther = watch("designElementsOtherCheck");
  const noBudget = watch("noBudget");
  const readyDate = watch("readyDate");

  const isRushOrder = React.useMemo(() => {
    if (!readyDate) return false;
    const diff = new Date(readyDate).getTime() - Date.now();
    return diff > 0 && diff < 14 * 24 * 60 * 60 * 1000;
  }, [readyDate]);

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/COSTUME_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        toast({
          title: "Application Submitted",
          description: "Thank you for your couture application. We will contact you soon.",
        });
      } else {
        throw new Error("Failed to submit");
      }
    } catch (e) {
      toast({
        title: "Submission Error",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl italic tracking-wide text-foreground mb-4">Couture Costume Application</h1>
        <p className="text-zinc-400 font-light">Please complete this form to begin the custom design process.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-12 bg-card p-8 md:p-12 border border-border rounded-sm">
        
        {/* Client Information */}
        <div className="space-y-6">
          <h3 className="text-2xl text-primary italic border-b border-white/10 pb-2">Client Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Parent / Guardian Name <span className="text-primary">*</span></Label>
              <Input {...register("parentName", { required: true })} className="bg-input border-border" />
            </div>
            <div className="space-y-2">
              <Label>Dancer's Full Name <span className="text-primary">*</span></Label>
              <Input {...register("dancerName", { required: true })} className="bg-input border-border" />
            </div>
            <div className="space-y-2">
              <Label>Dancer Age <span className="text-primary">*</span></Label>
              <Input type="number" {...register("dancerAge", { required: true })} className="bg-input border-border" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Email Address <span className="text-primary">*</span></Label>
              <Input type="email" {...register("email", { required: true })} className="bg-input border-border" />
            </div>
            <div className="space-y-2">
              <Label>Phone Number <span className="text-primary">*</span></Label>
              <Input type="tel" {...register("phone", { required: true })} className="bg-input border-border" />
            </div>
          </div>

          <div className="space-y-3">
            <Label>Preferred Contact Method <span className="text-primary">*</span></Label>
            <div className="flex gap-6">
              {['Text', 'Email', 'Phone'].map(method => (
                <label key={method} className="flex items-center gap-2 cursor-pointer text-sm">
                  <input type="radio" value={method} {...register("preferredContact")} className="accent-primary" />
                  <span>{method}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Dance Studio Name <span className="text-primary">*</span></Label>
              <Input {...register("studioName", { required: true })} className="bg-input border-border" />
            </div>
            <div className="space-y-2">
              <Label>Instructor / Choreographer <span className="text-primary">*</span></Label>
              <Input {...register("instructor", { required: true })} className="bg-input border-border" />
            </div>
          </div>
        </div>

        {/* Performance Details */}
        <div className="space-y-6">
          <h3 className="text-2xl text-primary italic border-b border-white/10 pb-2">Performance Details</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Competition / Event Name <span className="text-primary">*</span></Label>
              <Input {...register("eventName", { required: true })} className="bg-input border-border" />
            </div>
            <div className="space-y-2">
              <Label>Performance Date <span className="text-primary">*</span></Label>
              <Input type="date" {...register("performanceDate", { required: true })} className="bg-input border-border" />
            </div>
          </div>

          <div className="space-y-3">
            <Label>Routine Type <span className="text-primary">*</span></Label>
            <div className="flex gap-6">
              {['Solo', 'Duo/Trio', 'Group'].map(type => (
                <label key={type} className="flex items-center gap-2 cursor-pointer text-sm">
                  <input type="radio" value={type} {...register("routineType", { required: true })} className="accent-primary" />
                  <span>{type}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <Label>Dance Style (select all that apply) <span className="text-primary">*</span></Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {['Jazz', 'Lyrical', 'Contemporary', 'Ballet', 'Musical Theatre', 'Tap', 'Hip Hop', 'Acro'].map(style => (
                <label key={style} className="flex items-center gap-2 cursor-pointer text-sm">
                  <input type="checkbox" value={style} {...register("danceStyle")} className="accent-primary" />
                  <span className="text-zinc-300">{style}</span>
                </label>
              ))}
              <label className="flex items-center gap-2 cursor-pointer text-sm">
                <input type="checkbox" {...register("danceStyleOtherCheck")} className="accent-primary" />
                <span className="text-zinc-300">Other</span>
              </label>
            </div>
            {danceStyleOther && (
              <Input {...register("danceStyleOtherText")} placeholder="Please specify" className="bg-input border-border mt-2" />
            )}
          </div>

          <div className="space-y-2">
            <Label>Song Title & Artist <span className="text-primary">*</span></Label>
            <Input {...register("songInfo", { required: true })} className="bg-input border-border" />
          </div>

          <div className="space-y-2">
            <Label>Describe the dance theme or emotional story <span className="text-primary">*</span></Label>
            <Textarea {...register("danceTheme", { required: true })} rows={3} className="bg-input border-border resize-none" />
          </div>
        </div>

        {/* Design Vision */}
        <div className="space-y-6">
          <h3 className="text-2xl text-primary italic border-b border-white/10 pb-2">Design Vision</h3>
          
          <div className="space-y-3">
            <Label>How should this costume feel on stage? <span className="text-primary">*</span></Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {['Elegant', 'Romantic/Flowing', 'Glam/Sparkly', 'Modern/Edgy', 'Dramatic/Theatrical', 'Minimalist Luxe', 'Character Inspired'].map(feel => (
                <label key={feel} className="flex items-center gap-2 cursor-pointer text-sm">
                  <input type="checkbox" value={feel} {...register("costumeFeel")} className="accent-primary" />
                  <span className="text-zinc-300">{feel}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Primary Colors <span className="text-primary">*</span></Label>
              <Input {...register("primaryColors", { required: true })} className="bg-input border-border" />
            </div>
            <div className="space-y-2">
              <Label>Colors to Avoid</Label>
              <Input {...register("colorsToAvoid")} className="bg-input border-border" />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Upload Inspiration Photos</Label>
            <Input type="file" multiple accept="image/*" {...register("inspirationPhotos")} className="bg-input border-border file:text-primary file:bg-transparent file:border-0 cursor-pointer" />
          </div>

          <div className="space-y-2">
            <Label>Must-have details or requests</Label>
            <Textarea {...register("mustHaves")} rows={3} className="bg-input border-border resize-none" />
          </div>
        </div>

        {/* Costume Features */}
        <div className="space-y-6">
          <h3 className="text-2xl text-primary italic border-b border-white/10 pb-2">Costume Features</h3>
          
          <div className="space-y-3">
            <Label>Base Style <span className="text-primary">*</span></Label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {['Leotard', 'Dress Style', 'Two Piece', 'Unitard', 'Not Sure (Designer\'s Choice)'].map(style => (
                <label key={style} className="flex items-center gap-2 cursor-pointer text-sm">
                  <input type="radio" value={style} {...register("baseStyle", { required: true })} className="accent-primary" />
                  <span>{style}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <Label>Design Elements Needed <span className="text-primary">*</span></Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {['Illusion Mesh', 'Lace/Appliqué', 'Rhinestones', 'Fringe', 'Sleeves', 'Open Back', 'Cutouts', 'Skirt/Overlay', 'Gloves'].map(elem => (
                <label key={elem} className="flex items-center gap-2 cursor-pointer text-sm">
                  <input type="checkbox" value={elem} {...register("designElements")} className="accent-primary" />
                  <span className="text-zinc-300">{elem}</span>
                </label>
              ))}
              <label className="flex items-center gap-2 cursor-pointer text-sm">
                <input type="checkbox" {...register("designElementsOtherCheck")} className="accent-primary" />
                <span className="text-zinc-300">Other</span>
              </label>
            </div>
            {designElementsOther && (
              <Input {...register("designElementsOtherText")} placeholder="Please specify" className="bg-input border-border mt-2" />
            )}
          </div>
        </div>

        {/* Measurements */}
        <div className="space-y-6">
          <h3 className="text-2xl text-primary italic border-b border-white/10 pb-2">Measurements</h3>
          
          <p className="text-sm text-zinc-400 leading-relaxed italic border-l-2 border-primary/50 pl-4">
            A meeting will be scheduled for measurements to be taken by your design professional.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Current Leotard Size <span className="text-primary">*</span></Label>
              <Input {...register("leotardSize", { required: true })} className="bg-input border-border" />
            </div>
          </div>

          <div className="space-y-3">
            <Label>Preferred Coverage Level <span className="text-primary">*</span></Label>
            <div className="flex flex-col gap-3">
              {['More Coverage', 'Standard Competition Fit', 'High Cut Line'].map(cov => (
                <label key={cov} className="flex items-center gap-2 cursor-pointer text-sm">
                  <input type="radio" value={cov} {...register("coverageLevel", { required: true })} className="accent-primary" />
                  <span>{cov}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Sparkle & Performance */}
        <div className="space-y-6">
          <h3 className="text-2xl text-primary italic border-b border-white/10 pb-2">Sparkle & Performance</h3>
          
          <div className="space-y-3">
            <Label>Rhinestone Coverage Preference <span className="text-primary">*</span></Label>
            <div className="flex flex-col md:flex-row gap-6">
              {['Full Couture Sparkle', 'Medium Sparkle', 'Minimal Sparkle'].map(pref => (
                <label key={pref} className="flex items-center gap-2 cursor-pointer text-sm">
                  <input type="radio" value={pref} {...register("rhinestonePreference", { required: true })} className="accent-primary" />
                  <span>{pref}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <Label>Movement Requirements (select all that apply) <span className="text-primary">*</span></Label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {['Turns', 'Acro', 'Floor Work', 'Fast Movement', 'Lifts'].map(req => (
                <label key={req} className="flex items-center gap-2 cursor-pointer text-sm">
                  <input type="checkbox" value={req} {...register("movementReqs")} className="accent-primary" />
                  <span className="text-zinc-300">{req}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline & Budget */}
        <div className="space-y-6">
          <h3 className="text-2xl text-primary italic border-b border-white/10 pb-2">Timeline & Budget</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Date Costume Must Be Competition Ready <span className="text-primary">*</span></Label>
              <Input type="date" {...register("readyDate", { required: true })} className="bg-input border-border" />
              {isRushOrder && (
                <p className="text-xs tracking-wide text-amber-400 flex items-center gap-1.5 mt-1">
                  <span>⚠</span> Rush order fees apply.
                </p>
              )}
            </div>
            <div className="space-y-3">
              <Label>Is this a Rush Order? <span className="text-primary">*</span></Label>
              <div className="flex gap-6 mt-2">
                {['Yes', 'No'].map(ans => (
                  <label key={ans} className="flex items-center gap-2 cursor-pointer text-sm">
                    <input type="radio" value={ans} {...register("rushOrder", { required: true })} className="accent-primary" />
                    <span>{ans}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Investment</Label>
              <Input {...register("investment")} disabled={noBudget} className="bg-input border-border disabled:opacity-50" placeholder="$" />
            </div>
            <div className="flex items-center pt-8">
              <label className="flex items-center gap-2 cursor-pointer text-sm">
                <input type="checkbox" {...register("noBudget")} className="accent-primary" />
                <span className="text-zinc-300">I don't have a budget</span>
              </label>
            </div>
          </div>
        </div>

        {/* Final */}
        <div className="space-y-6">
          <div className="space-y-2">
            <Label>Anything else you want the designer to know?</Label>
            <Textarea {...register("additionalNotes")} rows={4} className="bg-input border-border resize-none" />
          </div>

          <div className="pt-6 border-t border-white/10">
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" {...register("terms", { required: true })} className="mt-1 accent-primary" />
              <span className="text-sm text-zinc-300">
                I have read the <Link href="/terms" className="text-primary hover:underline">terms & conditions</Link> and understand this form is a request for custom couture design services and that project acceptance is based on availability and design consultation. <span className="text-primary">*</span>
              </span>
            </label>
          </div>
        </div>

        <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium tracking-widest uppercase h-12 rounded-sm">
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </Button>
      </form>
    </div>
  );
}