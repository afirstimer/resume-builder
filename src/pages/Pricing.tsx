import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import Header from "@/components/Header";

const Pricing = () => {
    const features = [
        {
            title: "Professional Templates",
            description: "Access to 50+ professionally designed resume templates"
        },
        {
            title: "Real-time Content Suggestions",
            description: "AI-powered suggestions to improve your resume content"
        },
        {
            title: "ATS Optimization",
            description: "Ensure your resume passes Applicant Tracking Systems"
        },
        {
            title: "Multiple Export Formats",
            description: "Download as PDF, Word, or print-ready formats"
        },
        {
            title: "Cover Letter Builder",
            description: "Create matching cover letters with ease"
        },
        {
            title: "Analytics & Tracking",
            description: "Track your resume performance and views"
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="bg-gradient-hero py-20 px-4">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                        Build a strikingly powerful resume approved by recruiters
                    </h1>
                    <Button size="lg" className="mt-8">
                        Build My Resume Now
                    </Button>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row gap-8 max-w-4xl mx-auto">

                        {/* Free Plan */}
                        <Card className="flex-1 relative">
                            <CardHeader className="text-center">
                                <h3 className="text-lg font-semibold text-muted-foreground mb-2">FREE PLAN</h3>
                                <div className="mb-4">
                                    <span className="text-5xl font-bold text-foreground">$0</span>
                                </div>
                                <p className="text-muted-foreground">Valid for 7 days</p>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <Check className="h-4 w-4 text-success" />
                                        <span>All resume templates</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Check className="h-4 w-4 text-success" />
                                        <span><strong>Basic</strong> resume sections</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Check className="h-4 w-4 text-success" />
                                        <span>BetterCV branding</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Check className="h-4 w-4 text-success" />
                                        <span>Maximum 15 section items</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Check className="h-4 w-4 text-success" />
                                        <span>Access to <strong>all</strong> design tools</span>
                                    </div>
                                </div>
                                <Button variant="outline" className="w-full mt-6">
                                    Build My Resume
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Pro Plan */}
                        <Card className="flex-1 relative border-primary shadow-strong">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                <Badge className="bg-warning text-warning-foreground px-4 py-1">
                                    SAVE 33.35%
                                </Badge>
                            </div>
                            <CardHeader className="text-center pt-8">
                                <div className="flex items-center justify-center gap-2 mb-2">
                                    <div className="w-6 h-6 bg-warning rounded-full flex items-center justify-center">
                                        <span className="text-xs text-warning-foreground font-bold">👑</span>
                                    </div>
                                    <h3 className="text-lg font-semibold">PRO QUARTERLY PLAN</h3>
                                </div>
                                <div className="mb-4">
                                    <span className="text-5xl font-bold text-foreground">$16</span>
                                    <span className="text-lg text-muted-foreground">.66/mo</span>
                                </div>
                                <p className="text-muted-foreground">$49.97 billed every 3 months</p>
                                <div className="flex justify-center gap-2 mt-4">
                                    <Badge variant="outline">Pro Monthly</Badge>
                                    <Badge variant="default">Pro Quarterly</Badge>
                                    <Badge variant="outline">Pro Semi-Annual</Badge>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <Check className="h-4 w-4 text-success" />
                                        <span><strong>150</strong> resumes and cover letters</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Check className="h-4 w-4 text-success" />
                                        <span><strong>All</strong> resume templates</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Check className="h-4 w-4 text-success" />
                                        <span>Real-time content suggestions</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Check className="h-4 w-4 text-success" />
                                        <span><strong>ATS check</strong> (Applicant Tracking System)</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Check className="h-4 w-4 text-success" />
                                        <span>Pro resume sections</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Check className="h-4 w-4 text-success" />
                                        <span>No branding</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Check className="h-4 w-4 text-success" />
                                        <span>Unlimited section items</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Check className="h-4 w-4 text-success" />
                                        <span>Thousands of design options</span>
                                    </div>
                                </div>
                                <Button className="w-full mt-6">
                                    Build My Resume
                                </Button>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Payment Methods */}
                    <div className="text-center mt-12">
                        <p className="text-muted-foreground mb-4">We accept:</p>
                        <div className="flex justify-center items-center gap-4 text-sm text-muted-foreground">
                            <span>💳 Master Card</span>
                            <span>💳 Maestro</span>
                            <span>💳 Visa</span>
                            <span>💳 American Express</span>
                            <span>💰 PayPal</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 bg-muted/30">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                            A feature-packed resume builder that makes resume creation a breeze
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                            Create a visually stunning resume with ease. Our resume builder will guide you through the process.
                            We help with content suggestions and choosing the right design and layout, while you focus on presenting yourself.
                        </p>
                        <Button size="lg">
                            Build My Resume Now
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                        {features.map((feature, index) => (
                            <Card key={index} className="text-center">
                                <CardContent className="pt-6">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                                        <Check className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pricing;