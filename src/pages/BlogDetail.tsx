import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Calendar, User, Share2, Bookmark } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const BlogDetail = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <div className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 pt-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <Link to="/blog" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Blog
                    </Link>

                    <Badge variant="secondary" className="mb-4">
                        RESUME ADVICE
                    </Badge>

                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                        Can AI Write a Resume? The Complete Guide to AI-Powered Resume Building
                    </h1>

                    <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                        Discover how artificial intelligence is revolutionizing resume writing, what AI can and can't do,
                        and how to leverage AI tools effectively for your job search.
                    </p>

                    <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
                        <div className="flex items-center gap-2">
                            <User className="h-4 w-4" />
                            <span>Sarah Johnson</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>Published: Jan 15, 2025</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>12 min read</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <Button variant="outline" size="sm">
                            <Share2 className="h-4 w-4 mr-2" />
                            Share
                        </Button>
                        <Button variant="outline" size="sm">
                            <Bookmark className="h-4 w-4 mr-2" />
                            Save
                        </Button>
                    </div>
                </div>
            </div>

            {/* Featured Image */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 h-96 flex items-center justify-center">
                    <div className="text-center">
                        <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <User className="h-12 w-12 text-primary" />
                        </div>
                        <p className="text-muted-foreground">Featured Article Image</p>
                    </div>
                </div>
            </div>

            {/* Article Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <div className="prose prose-lg max-w-none">
                    <h2 className="text-3xl font-bold mb-6">What Can AI Do for Your Resume?</h2>

                    <p className="text-lg leading-relaxed mb-6">
                        Artificial Intelligence has transformed numerous industries, and resume writing is no exception.
                        Modern AI tools can analyze job descriptions, suggest relevant keywords, and even generate
                        content tailored to specific roles. But understanding the capabilities and limitations of AI
                        is crucial for effective resume building.
                    </p>

                    <h3 className="text-2xl font-semibold mb-4">The Benefits of AI-Powered Resume Writing</h3>

                    <ul className="space-y-3 mb-8">
                        <li className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                            <div>
                                <strong>Keyword Optimization:</strong> AI can analyze job postings and suggest relevant keywords to improve ATS compatibility.
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                            <div>
                                <strong>Content Suggestions:</strong> Generate compelling bullet points and descriptions based on your experience.
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                            <div>
                                <strong>Format Optimization:</strong> Ensure your resume follows best practices for readability and ATS scanning.
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                            <div>
                                <strong>Industry-Specific Customization:</strong> Tailor content to specific industries and roles automatically.
                            </div>
                        </li>
                    </ul>

                    <h3 className="text-2xl font-semibold mb-4">Limitations to Consider</h3>

                    <p className="text-lg leading-relaxed mb-6">
                        While AI is powerful, it's important to understand what it cannot do. AI cannot replace
                        human insight into your unique experiences, personal brand, or career narrative. The most
                        effective approach combines AI efficiency with human creativity and personal touch.
                    </p>

                    <div className="bg-muted/50 rounded-lg p-6 mb-8">
                        <h4 className="text-xl font-semibold mb-3">💡 Pro Tip</h4>
                        <p className="text-muted-foreground">
                            Use AI as a starting point and foundation, but always review and personalize the content
                            to reflect your unique voice and experiences. The best resumes combine AI efficiency
                            with human authenticity.
                        </p>
                    </div>

                    <h3 className="text-2xl font-semibold mb-4">How to Get Started with AI Resume Building</h3>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="border rounded-lg p-6">
                            <h4 className="text-lg font-semibold mb-3">1. Choose the Right Tool</h4>
                            <p className="text-muted-foreground">
                                Select an AI resume builder that offers customization options and industry-specific templates.
                            </p>
                        </div>
                        <div className="border rounded-lg p-6">
                            <h4 className="text-lg font-semibold mb-3">2. Input Quality Data</h4>
                            <p className="text-muted-foreground">
                                Provide detailed information about your experience, skills, and career goals for better results.
                            </p>
                        </div>
                        <div className="border rounded-lg p-6">
                            <h4 className="text-lg font-semibold mb-3">3. Review and Refine</h4>
                            <p className="text-muted-foreground">
                                Always review AI-generated content and make adjustments to match your personal brand.
                            </p>
                        </div>
                        <div className="border rounded-lg p-6">
                            <h4 className="text-lg font-semibold mb-3">4. Test and Iterate</h4>
                            <p className="text-muted-foreground">
                                Track your resume's performance and continuously refine based on feedback and results.
                            </p>
                        </div>
                    </div>

                    <h3 className="text-2xl font-semibold mb-4">The Future of AI in Resume Writing</h3>

                    <p className="text-lg leading-relaxed mb-6">
                        As AI technology continues to advance, we can expect even more sophisticated features like
                        real-time job market analysis, predictive career path suggestions, and integration with
                        professional networking platforms. The key is to stay informed about these developments
                        while maintaining the human element that makes your resume unique.
                    </p>
                </div>

                {/* Call to Action */}
                <div className="bg-primary/5 rounded-lg p-8 mt-12 text-center">
                    <h3 className="text-2xl font-bold mb-4">Ready to Build Your AI-Powered Resume?</h3>
                    <p className="text-muted-foreground mb-6">
                        Start creating a professional resume with our AI-powered tools and expert-designed templates.
                    </p>
                    <Button size="lg" className="mr-4">
                        Get Started Free
                    </Button>
                    <Button variant="outline" size="lg">
                        View Templates
                    </Button>
                </div>

                {/* Related Articles */}
                <div className="mt-16">
                    <h3 className="text-2xl font-bold mb-8">Related Articles</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Resume Summary Examples & How-to Guide",
                                category: "RESUME ADVICE",
                                readTime: "16 min read",
                                date: "Jan 10, 2025"
                            },
                            {
                                title: "How to Choose the Right Resume Format",
                                category: "RESUME ADVICE",
                                readTime: "24 min read",
                                date: "Jan 8, 2025"
                            },
                            {
                                title: "Resume Keywords That Get You Hired",
                                category: "RESUME ADVICE",
                                readTime: "18 min read",
                                date: "Jan 5, 2025"
                            }
                        ].map((article, index) => (
                            <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                                <Badge variant="secondary" className="mb-3 text-xs">
                                    {article.category}
                                </Badge>
                                <h4 className="font-semibold mb-3 leading-tight">
                                    {article.title}
                                </h4>
                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                    <span>{article.date}</span>
                                    <span>•</span>
                                    <span>{article.readTime}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;