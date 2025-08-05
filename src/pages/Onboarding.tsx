import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Sparkles, Users, Clock, Trophy } from "lucide-react";
import Header from "@/components/Header";

const Onboarding = () => {
    const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

    const templates = [
        {
            id: "modern",
            name: "Modern",
            description: "Clean, contemporary design perfect for tech and creative roles",
            image: "/src/assets/template-modern.jpg",
            popular: true
        },
        {
            id: "professional",
            name: "Professional",
            description: "Traditional format ideal for corporate and business positions",
            image: "/src/assets/template-professional.jpg",
            popular: false
        },
        {
            id: "simple",
            name: "Simple",
            description: "Minimalist design that focuses on content and readability",
            image: "/src/assets/template-simple.jpg",
            popular: false
        }
    ];

    const features = [
        {
            icon: CheckCircle,
            title: "ATS-Friendly",
            description: "Optimized to pass through applicant tracking systems"
        },
        {
            icon: Sparkles,
            title: "AI-Powered",
            description: "Smart suggestions to improve your resume content"
        },
        {
            icon: Users,
            title: "Expert Reviewed",
            description: "Templates designed by recruitment professionals"
        },
        {
            icon: Clock,
            title: "Quick Setup",
            description: "Build your resume in under 15 minutes"
        }
    ];

    const handleStartBuilding = () => {
        if (selectedTemplate) {
            // In a real app, this would navigate to the resume builder
            console.log(`Starting with template: ${selectedTemplate}`);
        }
    };

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <div className="container mx-auto px-4 py-12">
                {/* Hero Section */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center mb-4">
                        <Trophy className="w-8 h-8 text-emerald-500 mr-2" />
                        <Badge variant="secondary" className="px-4 py-1">
                            Get hired at top companies
                        </Badge>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Let's build your <span className="text-emerald-500">perfect resume</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Choose a template that matches your style and start creating a resume that gets results
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                            <Card key={index} className="text-center border-border">
                                <CardContent className="pt-6">
                                    <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mx-auto mb-3">
                                        <IconComponent className="w-6 h-6 text-emerald-500" />
                                    </div>
                                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                {/* Template Selection */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-foreground text-center mb-8">
                        Choose your resume template
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {templates.map((template) => (
                            <Card
                                key={template.id}
                                className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${selectedTemplate === template.id
                                        ? 'ring-2 ring-emerald-500 border-emerald-500'
                                        : 'border-border hover:border-emerald-200'
                                    }`}
                                onClick={() => setSelectedTemplate(template.id)}
                            >
                                <CardHeader className="pb-3">
                                    <div className="relative">
                                        <img
                                            src={template.image}
                                            alt={template.name}
                                            className="w-full h-48 object-cover rounded-lg bg-gray-100"
                                        />
                                        {template.popular && (
                                            <Badge className="absolute top-2 right-2 bg-emerald-500 hover:bg-emerald-600">
                                                Popular
                                            </Badge>
                                        )}
                                        {selectedTemplate === template.id && (
                                            <div className="absolute inset-0 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                                                <CheckCircle className="w-8 h-8 text-emerald-500" />
                                            </div>
                                        )}
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <CardTitle className="text-lg mb-2">{template.name}</CardTitle>
                                    <p className="text-sm text-muted-foreground">{template.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <Button
                        size="lg"
                        className={`px-8 py-4 text-lg ${selectedTemplate
                                ? 'bg-emerald-500 hover:bg-emerald-600'
                                : 'bg-gray-300 cursor-not-allowed'
                            }`}
                        disabled={!selectedTemplate}
                        onClick={handleStartBuilding}
                    >
                        {selectedTemplate ? (
                            <>
                                Start Building Your Resume
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </>
                        ) : (
                            'Select a template to continue'
                        )}
                    </Button>

                    {selectedTemplate && (
                        <p className="text-sm text-muted-foreground mt-3">
                            You can change your template anytime during the building process
                        </p>
                    )}
                </div>

                {/* Stats Section */}
                <div className="bg-emerald-50 rounded-xl p-8 mt-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-3xl font-bold text-emerald-600 mb-2">500K+</div>
                            <p className="text-muted-foreground">Resumes created</p>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-emerald-600 mb-2">95%</div>
                            <p className="text-muted-foreground">Success rate</p>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-emerald-600 mb-2">4.8★</div>
                            <p className="text-muted-foreground">User rating</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Onboarding;