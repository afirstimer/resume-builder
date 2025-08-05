import { Search, BookOpen, MessageCircleQuestion, User, Users, Building } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Header from "@/components/Header";

const Help = () => {
    const helpCategories = [
        {
            icon: BookOpen,
            title: "Getting started with your resume",
            description: "Real advice from the BetterCV Customer Success team on editing your resume for success",
            authors: [
                { name: "John D", avatar: "JD" },
                { name: "Sarah M", avatar: "SM" },
                { name: "Mike R", avatar: "MR" }
            ],
            articleCount: 20,
            color: "text-blue-600"
        },
        {
            icon: MessageCircleQuestion,
            title: "FAQ",
            description: "Answers to common questions",
            authors: [
                { name: "John D", avatar: "JD" },
                { name: "Sarah M", avatar: "SM" },
                { name: "Alex K", avatar: "AK" },
                { name: "Lisa P", avatar: "LP" }
            ],
            articleCount: 32,
            color: "text-blue-600"
        },
        {
            icon: User,
            title: "Managing your account",
            description: "How to manage billing, payment & the details of your account",
            authors: [
                { name: "Sarah M", avatar: "SM" }
            ],
            articleCount: 5,
            color: "text-blue-600"
        },
        {
            icon: Users,
            title: "BetterCV for Bootcamps",
            description: "FAQs about using BetterCV for Bootcamps",
            authors: [
                { name: "John D", avatar: "JD" }
            ],
            articleCount: 5,
            color: "text-blue-600"
        },
        {
            icon: Building,
            title: "BetterCV for Business",
            description: "How to get the most out of your BetterCV Business plan in order to speed up your resume creation",
            authors: [
                { name: "Alex K", avatar: "AK" }
            ],
            articleCount: 3,
            color: "text-blue-600"
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Advice and answers from the BetterCV Team
                    </h1>

                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                            placeholder="Search for articles..."
                            className="pl-12 py-4 text-lg bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder-white/70 focus:bg-white/20"
                        />
                    </div>
                </div>
            </div>

            {/* Help Categories */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {helpCategories.map((category, index) => {
                        const IconComponent = category.icon;
                        return (
                            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer border-border">
                                <CardHeader className="pb-4">
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                                                <IconComponent className={`w-6 h-6 ${category.color}`} />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <CardTitle className="text-xl mb-2 text-foreground">
                                                {category.title}
                                            </CardTitle>
                                            <CardDescription className="text-muted-foreground">
                                                {category.description}
                                            </CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>

                                <CardContent>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <div className="flex -space-x-2">
                                                {category.authors.slice(0, 3).map((author, authorIndex) => (
                                                    <Avatar key={authorIndex} className="w-6 h-6 border-2 border-background">
                                                        <AvatarImage src="" alt={author.name} />
                                                        <AvatarFallback className="text-xs bg-primary text-primary-foreground">
                                                            {author.avatar}
                                                        </AvatarFallback>
                                                    </Avatar>
                                                ))}
                                            </div>
                                            <span className="text-sm text-muted-foreground">
                                                By {category.authors[0].name}
                                                {category.authors.length > 1 && ` and ${category.authors.length - 1} others`}
                                            </span>
                                        </div>
                                        <span className="text-sm text-muted-foreground">
                                            {category.articleCount} articles
                                        </span>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Help;