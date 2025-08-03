import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";
import templateModern from "@/assets/template-modern.jpg";
import templateSimple from "@/assets/template-simple.jpg";
import templateProfessional from "@/assets/template-professional.jpg";

interface TemplateCardProps {
    id: string;
    name: string;
    description: string;
    image: string;
    colors: string[];
    isSelected?: boolean;
    onSelect: (id: string) => void;
}

const TemplateCard = ({ id, name, description, image, colors, isSelected, onSelect }: TemplateCardProps) => {
    return (
        <Card
            className={cn(
                "cursor-pointer transition-all duration-300 hover:shadow-medium border-2",
                isSelected ? "border-primary ring-2 ring-primary/20" : "border-border hover:border-primary/50"
            )}
            onClick={() => onSelect(id)}
        >
            <CardContent className="p-0">
                <div className="relative">
                    <img
                        src={image}
                        alt={`${name} template`}
                        className="w-full h-64 object-cover rounded-t-lg"
                    />
                    {isSelected && (
                        <div className="absolute top-3 right-3 bg-primary rounded-full p-1">
                            <CheckCircle className="w-5 h-5 text-primary-foreground" />
                        </div>
                    )}
                </div>

                <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold text-foreground">{name}</h3>
                        <div className="flex space-x-1">
                            {colors.map((color, index) => (
                                <div
                                    key={index}
                                    className="w-4 h-4 rounded-full border border-border"
                                    style={{ backgroundColor: color }}
                                />
                            ))}
                        </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4">{description}</p>

                    <div className="flex gap-2">
                        <Badge variant="secondary" className="text-xs">PDF</Badge>
                        <Badge variant="secondary" className="text-xs">DOCX</Badge>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

const TemplatesPage = () => {
    const [selectedTemplate, setSelectedTemplate] = React.useState<string>("");
    const [activeCategory, setActiveCategory] = React.useState("all");

    const categories = [
        { id: "all", label: "All Templates", icon: "📄" },
        { id: "simple", label: "Simple", icon: "📋" },
        { id: "modern", label: "Modern", icon: "🎨" },
        { id: "professional", label: "Professional", icon: "💼" },
        { id: "ats", label: "ATS", icon: "🤖" },
        { id: "creative", label: "Creative", icon: "✨" }
    ];

    const templates = [
        {
            id: "celestial",
            name: "Celestial",
            description: "Soft neutral tones with refined typography for a sophisticated and professional feel.",
            image: templateModern,
            colors: ["#2D3748", "#4A5568", "#68D391", "#81E6D9"],
            category: "modern"
        },
        {
            id: "galaxy",
            name: "Galaxy",
            description: "A visually striking resume template, perfect for illustrating the breadth and depth of your expertise.",
            image: templateSimple,
            colors: ["#E2E8F0", "#CBD5E0", "#A0AEC0", "#718096"],
            category: "simple"
        },
        {
            id: "astral",
            name: "Astral",
            description: "Includes a prominent profile image for a personal touch while maintaining professionalism.",
            image: templateProfessional,
            colors: ["#744C4E", "#A67B5B", "#C4A381", "#E2D5C7"],
            category: "professional"
        }
    ];

    const filteredTemplates = activeCategory === "all"
        ? templates
        : templates.filter(template => template.category === activeCategory);

    return (
        <div className="min-h-screen bg-background">
            {/* Header with breadcrumb */}
            <div className="border-b border-border bg-background/95 backdrop-blur sticky top-0 z-10">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                                <span className="text-primary-foreground font-bold text-lg">PF</span>
                            </div>
                            <span className="text-xl font-bold text-foreground">ProFile</span>
                        </div>

                        {/* Progress indicator */}
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                                    1
                                </div>
                                <span className="text-primary font-medium">Choose template</span>
                            </div>
                            <div className="w-8 h-px bg-border"></div>
                            <div className="flex items-center space-x-2 opacity-50">
                                <div className="w-8 h-8 bg-muted text-muted-foreground rounded-full flex items-center justify-center text-sm">
                                    2
                                </div>
                                <span className="text-muted-foreground">Enter your details</span>
                            </div>
                            <div className="w-8 h-px bg-border"></div>
                            <div className="flex items-center space-x-2 opacity-50">
                                <div className="w-8 h-8 bg-muted text-muted-foreground rounded-full flex items-center justify-center text-sm">
                                    3
                                </div>
                                <span className="text-muted-foreground">Download resume</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                {/* Header section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                        Resume templates
                    </h1>
                    <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                        Simple to use and ready in minutes resume templates — give it a try for free now!
                    </p>
                    <Button variant="link" className="text-primary">
                        Choose later
                    </Button>
                </div>

                {/* Category filters */}
                <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <Button
                            key={category.id}
                            variant={activeCategory === category.id ? "default" : "outline"}
                            size="sm"
                            onClick={() => setActiveCategory(category.id)}
                            className="flex items-center gap-2"
                        >
                            <span>{category.icon}</span>
                            {category.label}
                        </Button>
                    ))}
                </div>

                {/* Templates grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {filteredTemplates.map((template) => (
                        <TemplateCard
                            key={template.id}
                            {...template}
                            isSelected={selectedTemplate === template.id}
                            onSelect={setSelectedTemplate}
                        />
                    ))}
                </div>

                {/* CTA section */}
                {selectedTemplate && (
                    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 shadow-strong">
                        <div className="container mx-auto flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <CheckCircle className="w-5 h-5 text-success" />
                                <span className="font-medium text-foreground">
                                    Template selected: {templates.find(t => t.id === selectedTemplate)?.name}
                                </span>
                            </div>
                            <Button variant="hero" size="lg">
                                Continue with this template
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TemplatesPage;