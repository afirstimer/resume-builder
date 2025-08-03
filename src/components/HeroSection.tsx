import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import resumePreview from "@/assets/resume-preview.jpg";

const HeroSection = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-hero">
            <div className="container mx-auto px-4 py-16 lg:py-24">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Left Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <Badge variant="secondary" className="mb-6 text-sm font-medium">
                            48,797 resumes created today
                        </Badge>

                        <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                            Create your{" "}
                            <span className="text-primary bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                                job-winning resume
                            </span>{" "}
                            in minutes
                        </h1>

                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                            The first step to a better job? A better resume. Get yours in just a few clicks.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <Button variant="hero" size="xl" className="min-w-[200px]" asChild>
                                <a href="/templates">Create New Resume</a>
                            </Button>
                            <Button variant="outline-hero" size="xl" className="min-w-[200px]">
                                Improve My Resume
                            </Button>
                        </div>

                        {/* Statistics */}
                        <div className="flex flex-col sm:flex-row gap-8 items-center justify-center lg:justify-start">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-success mb-1">48%</div>
                                <div className="text-sm text-muted-foreground">more likely to get hired</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-warning mb-1">12%</div>
                                <div className="text-sm text-muted-foreground">better pay with your next job</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Resume Preview */}
                    <div className="flex-1 relative">
                        <div className="relative max-w-lg mx-auto">
                            <div className="absolute inset-0 bg-gradient-primary rounded-2xl transform rotate-3 scale-105 opacity-20"></div>
                            <div className="relative bg-background rounded-2xl shadow-strong overflow-hidden">
                                <img
                                    src={resumePreview}
                                    alt="Resume template preview"
                                    className="w-full h-auto"
                                />
                                <div className="absolute top-4 right-4">
                                    <Badge className="bg-success text-success-foreground">
                                        ✓ ATS Perfect
                                    </Badge>
                                </div>

                                {/* AI-powered suggestions overlay */}
                                <div className="absolute bottom-4 left-4 right-4 bg-background/95 backdrop-blur-sm rounded-lg p-4 border border-border">
                                    <div className="text-sm font-medium text-foreground mb-2">
                                        AI-powered ideas:
                                    </div>
                                    <div className="space-y-1 text-xs text-muted-foreground">
                                        <div>• Analyzed market trends to identify new growth opportunities.</div>
                                        <div>• Reduced operational costs by 15% through process optimization.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;