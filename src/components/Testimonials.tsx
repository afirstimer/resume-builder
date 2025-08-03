import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Testimonials = () => {
    const testimonials = [
        {
            name: "Ricardo Gomez",
            time: "about 1 day ago",
            title: "ProFile is a lifesaver",
            content: "As someone switching careers, I had no idea how to shape my resume, the experience section in particular. This tool helped a lot!"
        },
        {
            name: "Ellie Simmons",
            time: "about 2 days ago",
            title: "I'm finally getting noticed!",
            content: "My resume kept getting rejected, and I didn't know why. ProFile fixed the formatting and keyword issues right away!"
        },
        {
            name: "Alysha Reed",
            time: "about 2 days ago",
            title: "I wish I found it sooner!",
            content: "My old resume was pretty, but I guess \"invisible\" to hiring systems. The one I built with ProFile is ATS-friendly, so I'm always seen!"
        },
        {
            name: "Anna Peterson",
            time: "about 14 hours ago",
            title: "Finally I'm getting feedback",
            content: "I applied to 20+ job postings with no luck. But! Once I made an ATS-friendly resume, I've started getting a lot more responses from recruiters."
        },
        {
            name: "Mark Heighter",
            time: "about 14 hours ago",
            title: "Fastest resume builder, like ever",
            content: "ProFile's AI saved me tons of time, I'm sure of that. Now I have a professional resume, and it was so easy to make. Thanks!"
        }
    ];

    return (
        <section className="py-16 bg-muted/20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                        What our customers are{" "}
                        <span className="text-primary">saying about us</span>
                    </h2>

                    <div className="flex items-center justify-center gap-2 mb-8">
                        <div className="flex items-center">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <svg
                                    key={star}
                                    className="w-5 h-5 text-warning fill-current"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <span className="text-lg font-semibold text-foreground ml-2">4.5 out of 5</span>
                    </div>

                    <p className="text-muted-foreground">based on 3,112 reviews</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="hover:shadow-medium transition-shadow duration-300">
                            <CardContent className="p-6">
                                <h4 className="font-semibold text-foreground mb-2">
                                    {testimonial.title}
                                </h4>
                                <p className="text-muted-foreground mb-4 leading-relaxed">
                                    {testimonial.content}
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="font-medium text-foreground">
                                        {testimonial.name}
                                    </span>
                                    <Badge variant="secondary" className="text-xs">
                                        {testimonial.time}
                                    </Badge>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;