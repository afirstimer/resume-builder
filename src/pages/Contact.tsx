import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const { toast } = useToast();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            toast({
                title: "Missing Information",
                description: "Please fill in all required fields.",
                variant: "destructive",
            });
            return;
        }

        // Simulate form submission
        toast({
            title: "Message Sent!",
            description: "Thank you for contacting us. We'll get back to you soon.",
        });

        // Reset form
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
    };

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <div className="container mx-auto px-4 py-16">
                <div className="max-w-6xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                            Get in Touch
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Have questions about our CV builder? Need support? We're here to help you create the perfect resume.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <Card className="shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                                <CardDescription>
                                    Fill out the form below and we'll get back to you as soon as possible.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Full Name *</Label>
                                            <Input
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                placeholder="Your full name"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email Address *</Label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="your.email@example.com"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="subject">Subject</Label>
                                        <Input
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            placeholder="What's this about?"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message *</Label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            placeholder="Tell us how we can help you..."
                                            rows={6}
                                            required
                                        />
                                    </div>

                                    <Button type="submit" className="w-full" size="lg">
                                        Send Message
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-2xl">Contact Information</CardTitle>
                                    <CardDescription>
                                        Reach out to us through any of these channels.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0">
                                            <Mail className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground">Email</h3>
                                            <p className="text-muted-foreground">support@bettercv.com</p>
                                            <p className="text-muted-foreground">hello@bettercv.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0">
                                            <Phone className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground">Phone</h3>
                                            <p className="text-muted-foreground">+1 (555) 123-4567</p>
                                            <p className="text-muted-foreground">Monday - Friday, 9AM - 6PM EST</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0">
                                            <MapPin className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground">Office</h3>
                                            <p className="text-muted-foreground">
                                                123 Business Street<br />
                                                Suite 456<br />
                                                New York, NY 10001
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0">
                                            <Clock className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground">Business Hours</h3>
                                            <p className="text-muted-foreground">
                                                Monday - Friday: 9:00 AM - 6:00 PM<br />
                                                Saturday: 10:00 AM - 4:00 PM<br />
                                                Sunday: Closed
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* FAQ Section */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Quick Help</CardTitle>
                                    <CardDescription>
                                        Common questions and quick answers.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold text-foreground mb-2">Need technical support?</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Check our <a href="/help" className="text-primary hover:underline">Help Center</a> for tutorials and troubleshooting guides.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground mb-2">Questions about pricing?</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Visit our <a href="/pricing" className="text-primary hover:underline">Pricing page</a> for detailed plan information.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground mb-2">Want to see templates?</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Browse our <a href="/templates" className="text-primary hover:underline">Template gallery</a> to find the perfect design.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;