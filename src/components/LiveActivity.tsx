import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const LiveActivity = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-card rounded-3xl shadow-medium p-8 lg:p-12 border border-border">
                        <div className="flex items-center justify-center gap-2 mb-6">
                            <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                            <Badge variant="secondary" className="text-lg px-4 py-2">
                                <span className="font-bold text-2xl text-primary mr-2">1209</span>
                                people are creating their resumes with ProFile right now!
                            </Badge>
                        </div>

                        <Button variant="hero" size="xl" className="min-w-[250px]" asChild>
                            <a href="/templates">Create My Resume</a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LiveActivity;